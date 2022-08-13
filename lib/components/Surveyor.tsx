import Debug from "./debug"

import Hashids from "hashids"
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react"

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
  }>
> = ({ children, logClicks = true, locateMsg = "message", debug, apiUrl }) => {
  const hashids = new Hashids("srvyr", 8)
  const [url, setUrl] = useState<string>()
  let elems: HTMLElement[]
  let telemetry: Telemetry = {
    data: [],
    startTime: new Date().toISOString(),
    endTime: "",
  }
  let sendingDiv = useRef<HTMLDivElement>(null)

  const putTemplate = (tel: Telemetry) =>
    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        telemetry: {
          data: JSON.stringify(tel.data),
          startTime: tel.startTime,
          endTime: new Date().toISOString(),
        },
      }),
      keepalive: true,
    })

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
        if (!elem.classList.contains(newClass))
          elem.classList.add(`srvyr-${hashids.encode(index)}`)
      }
    })

    if (logClicks) {
      document.body.onclick = (e: MouseEvent | FocusEvent) => {
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
      }

      window.onbeforeunload = (e: BeforeUnloadEvent) => {
        document.body.onclick = null
        if (telemetry.data.length !== 0) {
          sendingDiv.current!.style.display = "grid"
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
  })

  return (
    <>
      {debug && <Debug />} {children}
      <div
        ref={sendingDiv}
        style={{
          display: "none",
          border: "2px solid black",
          padding: "1.5rem 2.5rem",
          borderRadius: "2rem",
          right: 50,
          bottom: 40,
          position: "absolute",
        }}>
        <div style={{ fontSize: "2rem", fontFamily: "Helvetica" }}>
          Sending...
        </div>
      </div>
      {logClicks && (
        <div className="svyr-pointer-events-none svyr-fixed svyr-top-0 svyr-left-0 svyr-grid svyr-rounded-br-3xl svyr-bg-theme-background svyr-px-6 svyr-py-3">
          <div
            id="recording-status"
            className="svyr-flex svyr-h-max svyr-items-center svyr-gap-3 svyr-text-center">
            <div className="svyr-mt-1 svyr-h-2 svyr-w-2 svyr-rounded-full svyr-bg-theme-primary" />
            <p className="svyr-text-sm svyr-font-semibold svyr-text-theme-primary">
              Recording...
            </p>
          </div>

          <p className="svyr-mt-1 svyr-text-sm">Locate the "{locateMsg}"</p>
        </div>
      )}
    </>
  )
}

export default Surveyor
