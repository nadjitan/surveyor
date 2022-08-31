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
     * Tha last element to find e.g.
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
  const [url, setUrl] = useState<string>()
  let elems: HTMLElement[]
  let telemetry: Telemetry = {
    data: [],
    startTime: new Date().toISOString(),
    endTime: "",
  }
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
      keepalive: true,
    })

  function dataReached() {
    const lastTelemetry = telemetry.data[telemetry.data.length - 1]

    if (
      lastTelemetry.url === lastData.url &&
      lastTelemetry.class === lastData.class
    ) {
      setDataFound(true)
    }
  }

  useEffect(() => {
    setUrl(window.location.href)
    // When page load always check if there is a telemetry in sessionStorage
    if (sessionStorage.getItem("srvyr") === null) {
      sessionStorage.setItem("srvyr", JSON.stringify(telemetry))
    } else {
      telemetry = JSON.parse(sessionStorage.getItem("srvyr")!)
    }
    // Make hashed classes for every element
    elems = Array.from(
      document.body.querySelectorAll("*:not(script):not(style)")
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
      document.body.onclick = e => {
        if (!dataFound) {
          e.stopPropagation()
          const target = e.target as HTMLElement
          const targetClass =
            target.className &&
            Array.from(target.classList).find(c => c.startsWith("srvyr-"))

          if (telemetry.data.length === 0) {
            telemetry = {
              ...telemetry,
              data: [{ url: url!, class: targetClass! }],
            }
          }
          // Update telemetry data array
          if (
            // Avoid duplicating latest click
            telemetry.data[telemetry.data.length - 1].class !== targetClass
          ) {
            telemetry = {
              ...telemetry,
              data: [...telemetry.data, { url: url!, class: targetClass! }],
            }
          }

          if (debug !== undefined && debug === true) {
            console.table(telemetry)
          }
          sessionStorage.setItem("srvyr", JSON.stringify(telemetry))

          dataReached()
        }
      }

      window.onbeforeunload = (e: BeforeUnloadEvent) => {
        document.body.onclick = null
        if (telemetry.data.length > 0) {
          setSendData(true)
          putTemplate(telemetry)

          // Delay because Firefox is unreliable with unload listener
          const time = Date.now()
          while (Date.now() - time < 800) {
            console.log("waiting...")
          }

          return null
        }
      }

      return () => {
        document.body.onclick = null
        window.onbeforeunload = null
      }
    }
  }, [children])

  return (
    <>
      {dataFound && (
        <div className="svyr-fixed svyr-z-50 svyr-grid svyr-h-full svyr-w-full svyr-place-items-center svyr-bg-black svyr-bg-opacity-50">
          <div className="svyr-grid svyr-place-items-center">
            <h1 className="svyr-text-6xl svyr-font-bold svyr-text-white">
              Congratulations!
            </h1>
            <p className="svyr-mt-2">You may now close this window.</p>
          </div>
        </div>
      )}
      {debug && <Debug />} {children}
      {logClicks && (
        <div className="svyr-pointer-events-none svyr-fixed svyr-top-0 svyr-left-0 svyr-grid svyr-rounded-br-3xl svyr-bg-theme-background svyr-px-6 svyr-py-3">
          {!sendData ? (
            <>
              <div className="svyr-flex svyr-h-max svyr-items-center svyr-gap-3">
                <div className="svyr-mt-[0.1rem] svyr-h-2 svyr-w-2 svyr-rounded-full svyr-bg-theme-primary" />
                <p className="svyr-text-sm svyr-font-semibold svyr-text-theme-primary">
                  Recording...
                </p>
              </div>

              <p className="svyr-mt-1 svyr-text-sm">Locate the "{locateMsg}"</p>
            </>
          ) : (
            <p className="svyr-text-sm">Sending data...</p>
          )}
        </div>
      )}
      {/* {checkIfDataReached()} */}
    </>
  )
}

export default Surveyor
