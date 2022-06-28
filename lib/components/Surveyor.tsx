import Hashids from "hashids"
import { FC, useEffect, useRef, useState } from "react"
import { PropsWithChildren } from "react"
import Debug from "./Debug"

interface Telemetry {
  id?: string
  data: {
    url: string
    action: string
  }[]
}

const Surveyor: FC<
  PropsWithChildren<{
    /**
     * Enable showing of class and
     * tag name of an element.
     */
    debug?: boolean
    /**
     * The url of you REST api that will be used
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
> = ({ children, debug, apiUrl }) => {
  const hashids = new Hashids("srvyr", 8)
  const [url, setUrl] = useState<string>()
  let elems: HTMLElement[]
  let telemetry: Telemetry = { data: [] }
  let sendingDiv = useRef<HTMLDivElement>(null)

  const putTemplate = (tel: Telemetry) =>
    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        telemetry: { data: JSON.stringify(tel.data) },
      }),
      keepalive: true,
    })

  // On page load
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
  }, [])
  // For event listeners
  useEffect(() => {
    document.body.onclick = (e: MouseEvent | FocusEvent) => {
      e.stopPropagation()
      const target = e.target as HTMLElement
      const targetClass =
        target.className &&
        Array.from(target.classList).find(c => c.startsWith("srvyr-"))

      if (telemetry.data.length === 0) {
        telemetry = {
          ...telemetry,
          data: [{ url: url!, action: targetClass! }],
        }
      }
      // Update telemetry data array
      if (
        // Avoid duplicating latest click
        telemetry.data[telemetry.data.length - 1].action !== targetClass
      ) {
        telemetry = {
          ...telemetry,
          data: [...telemetry.data, { url: url!, action: targetClass! }],
        }
      }

      if (debug !== undefined && debug === true) {
        console.table(telemetry)
      }
      sessionStorage.setItem("srvyr", JSON.stringify(telemetry))
    }

    const unload = (e: BeforeUnloadEvent) => {
      document.body.onclick = null
      if (telemetry.data.length !== 0) {
        sendingDiv.current!.style.display = "grid"
        putTemplate(telemetry)

        // Delay because Firefox is unreliable with unload listener
        if (navigator.userAgent.indexOf("Firefox") != -1) {
          const time = Date.now()
          while (Date.now() - time < 800) {
            console.log("waiting...")
          }
        }

        return null
      }
    }

    window.onbeforeunload = unload

    return () => {
      document.body.onclick = null
      window.onbeforeunload = null
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
          padding: "1.5rem 2.5rem 1.5rem 2.5rem",
          borderRadius: "2rem",
          right: 50,
          bottom: 40,
          position: "absolute",
        }}>
        <div style={{ fontSize: "2rem", fontFamily: "Helvetica" }}>
          Sending...
        </div>
      </div>
    </>
  )
}

export default Surveyor
