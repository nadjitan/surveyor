import Debug from "./debug"

import Hashids from "hashids"
import { FC, PropsWithChildren, useEffect, useState } from "react"

interface Telemetry {
  id?: string
  data: {
    url: string
    class: string
  }[]
  startTime: string
  endTime: string
}

const Surveyor: FC<
  PropsWithChildren<{
    /**
     * Whether to send data or not. Defaults to ```true```
     */
    logClicks?: boolean
    /**
     * The page/element to locate.
     * Only shown if ```logClicks``` is enabled
     */
    locateMsg?: string
    /**
     * Enable showing of class and
     * tag name of an element.
     */
    debug?: boolean
    /**
     * The url of your REST api that will be used
     * to store the telemetry.
     *
     * Example of a Prisma model:
     * ```js
     * model Telemetry {
     *   id   String @id @default(uuid())
     *   data String
     * }
     * ```
     */
    apiUrl: string
    /**
     * The last element to find e.g.
     * ```url: http://localhost:3000/user```
     * ```class: srvyr-YnXm23N7```
     */
    lastData: { url: string; class: string }
  }>
> = ({
  children,
  logClicks = true,
  locateMsg = "message",
  debug,
  apiUrl,
  lastData,
}) => {
  const hashids = new Hashids("srvyr", 8)

  const [sendData, setSendData] = useState(false)
  const [dataFound, setDataFound] = useState(false)

  const putTemplate = (tel: Telemetry) =>
    fetch(apiUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        telemetry: {
          data: JSON.stringify(tel.data),
          startTime: tel.startTime,
          endTime: new Date().toISOString(),
        },
      }),
      // keepalive: true,
    })

  useEffect(() => {
    let elems: HTMLElement[]
    const url = window.location.href

    // Make hashed classes for every element
    elems = Array.from(
      document.body.querySelectorAll("*:not(script):not(style):not(.srvyr-app)")
    )
    elems.forEach((elem, index) => {
      const newClass = `srvyr-${hashids.encode(index)}`
      if (index === 0) {
        // Avoid repetition of class name
        if (!document.body.classList.contains(newClass))
          document.body.classList.add(newClass)
      } else {
        if (!elem.classList.contains(newClass)) elem.classList.add(newClass)
      }
    })

    if (logClicks) {
      let telemetry: Telemetry = {
        data: [],
        startTime: new Date().toISOString(),
        endTime: "",
      }

      // When page load always check if there is a telemetry in sessionStorage
      if (sessionStorage.getItem("srvyr") === null) {
        sessionStorage.setItem("srvyr", JSON.stringify(telemetry))
      } else {
        telemetry = JSON.parse(sessionStorage.getItem("srvyr")!)
      }

      document.body.onclick = e => {
        if (!dataFound) {
          e.stopPropagation()
          const target = e.target as HTMLElement
          const targetClass =
            target.className &&
            Array.from(target.classList).find(c => c.startsWith("srvyr-"))

          // Update telemetry data array
          if (telemetry.data.length === 0) {
            telemetry = {
              ...telemetry,
              data: [{ url: url, class: targetClass! }],
            }
          } else if (
            telemetry.data.length > 0 &&
            // Avoid duplicating latest click
            telemetry.data[telemetry.data.length - 1].class !== targetClass
          ) {
            telemetry = {
              ...telemetry,
              data: [...telemetry.data, { url: url, class: targetClass! }],
            }
          }

          if (debug !== undefined && debug === true) {
            console.table(telemetry)
          }
          sessionStorage.setItem("srvyr", JSON.stringify(telemetry))

          // Last data reached
          const lastTelemetry = telemetry.data[telemetry.data.length - 1]
          if (
            lastTelemetry.url === lastData.url &&
            lastTelemetry.class === lastData.class
          ) {
            setDataFound(true)
            setSendData(true)
            putTemplate(telemetry).then(() => {
              setSendData(false)
            })
          }
        }
      }

      // window.onbeforeunload = (e: BeforeUnloadEvent) => {
      //   document.body.onclick = null
      //   if (telemetry.data.length > 0) {
      //     setSendData(true)
      //     putTemplate(telemetry)

      //     // Delay because Firefox is unreliable with unload listener
      //     const time = Date.now()
      //     while (Date.now() - time < 800) {
      //       console.log("waiting...")
      //     }

      //     return null
      //   }
      // }

      return () => {
        document.body.onclick = null
        // window.onbeforeunload = null
      }
    }
  }, [children])

  return (
    <>
      {dataFound && (
        <div className="srvyr-app svyr-fixed svyr-z-50 svyr-grid svyr-h-full svyr-w-full svyr-place-items-center svyr-bg-black svyr-bg-opacity-50">
          <div className="srvyr-app svyr-grid svyr-place-items-center">
            <h1 className="svyr-h1 srvyr-app svyr-text-6xl svyr-font-bold svyr-text-white">
              Congratulations!
            </h1>

            {sendData ? (
              <p className="svyr-p srvyr-app svyr-mt-2">
                Sending data... Please wait a moment.
              </p>
            ) : (
              <p className="svyr-p srvyr-app svyr-mt-2">
                You may now close this window.
              </p>
            )}
          </div>
        </div>
      )}
      {debug && <Debug />} {children}
      {logClicks && (
        <div className="srvyr-app svyr-pointer-events-none svyr-fixed svyr-top-0 svyr-left-0 svyr-grid svyr-rounded-br-3xl svyr-bg-theme-background svyr-px-6 svyr-py-3">
          <div className="srvyr-app svyr-flex svyr-h-max svyr-items-center svyr-gap-3">
            <div className="srvyr-app svyr-mt-[0.1rem] svyr-h-2 svyr-w-2 svyr-rounded-full svyr-bg-theme-primary" />
            <p className="srvyr-app svyr-text-sm svyr-font-semibold svyr-text-theme-primary">
              Recording...
            </p>
          </div>

          <p className="srvyr-app svyr-mt-1 svyr-text-sm">{locateMsg}</p>
        </div>
      )}
      {/* {checkIfDataReached()} */}
    </>
  )
}

export default Surveyor
