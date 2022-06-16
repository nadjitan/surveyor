import Hashids from "hashids"
import { FC, useState } from "react"
import { PropsWithChildren, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

type Data =
  | {
      url: string
      action: string
    }[]
  | any
interface Telemetry {
  id?: string
  data: Data
}

const Surveyor: FC<PropsWithChildren<{
  debug?: boolean
  /**
   * The url of you REST api that will be used to store the telemetry
   */
  apiUrl: string
}>> = ({ children, debug, apiUrl }) => {
  const hashids = new Hashids("srvyr", 8)
  const [url, setUrl] = useState<string>()
  let elems: HTMLElement[]
  let telemetry: Telemetry = { data: [] }
  let debugDiv = useRef<HTMLDivElement>(null)

  let queue: Promise<Telemetry | void> = Promise.resolve()

  const putTelemetry = async (t: Telemetry) => {
    const putTemplate = (data: Telemetry) =>
      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          telemetry: { ...data, data: JSON.stringify(t.data) },
        }),
        keepalive: true,
        redirect: "follow",
      })

    if (t.id !== undefined) {
      const response = await putTemplate(t)

      telemetry = await response.json()
      telemetry = { ...telemetry, data: JSON.parse(telemetry.data) }
      sessionStorage.setItem("srvyr", JSON.stringify(telemetry))
    } else {
      queue = queue.then(async tel => {
        const toPass = tel ? tel : t
        const response = await putTemplate(toPass)

        telemetry = await response.json()
        telemetry = { ...telemetry, data: JSON.parse(telemetry.data) }
        sessionStorage.setItem("srvyr", JSON.stringify(telemetry))

        return telemetry
      })
    }
  }

  useEffect(() => {
    setUrl(window.location.href)
    // When page load always check if there is a telemetry in sessionStorage
    if (sessionStorage.length === 0) {
      sessionStorage.setItem("srvyr", JSON.stringify(telemetry))
    } else {
      telemetry = JSON.parse(sessionStorage.getItem("srvyr")!)
    }
    // Make hashed classes for every element
    elems = Array.from(
      document.body.querySelectorAll("*:not(script):not(style)")
    )
    elems.forEach((elem, index) => {
      if (index === 0) {
        document.body.classList.add(`srvyr-${hashids.encode(index)}`)
      } else {
        elem.classList.add(`srvyr-${hashids.encode(index)}`)
      }
    })

    document.body.onclick = (e: MouseEvent | FocusEvent) => {
      e.stopPropagation()
      const target = e.target as HTMLElement
      const targetClass =
        target.className &&
        Array.from(target.classList).find(c => c.startsWith("srvyr-"))

      // Update telemetry variable
      telemetry = {
        ...telemetry,
        data: [...telemetry.data, { url: url!, action: targetClass }],
      }

      if (debug !== undefined && debug === true) {
        console.table(telemetry.data.map((d: Data) => d.action))
      }
      // Save telemetry to server
      putTelemetry(telemetry)
    }

    document.body.onmouseenter = () => (debugDiv.current!.style.opacity = "1")
    document.body.onmouseleave = () => (debugDiv.current!.style.opacity = "0")

    if (debug) {
      document.onmousemove = ({
        clientX,
        clientY,
        target,
      }: React.MouseEvent | MouseEvent) => {
        const t = target as HTMLElement
        const targetClass =
          t.className &&
          Array.from(t.classList).find(c => c.startsWith("srvyr-"))
        if (targetClass) {
          const child = debugDiv.current?.firstElementChild
          debugDiv.current!.style.display = "fixed"
          child!.innerHTML = `<p>tag: ${t.tagName}</p><p>class: ${targetClass}</p>`
        }

        let x = clientX - 100
        let y = clientY - 110

        const { offsetWidth, offsetHeight } = debugDiv.current!
        // Prevent going past right & bottom of body
        const rEdge = document.body.offsetWidth - offsetWidth
        const bEdge = document.body.offsetHeight - offsetHeight

        if (x < 0) x = 0
        if (y < 0) y = 0
        if (x > rEdge) x = rEdge
        if (y > bEdge) y = bEdge

        debugDiv.current!.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    return () => {
      document.body.onclick = null
      document.onmousemove = null
      if (debug) {
        document.body.onmouseenter = null
        document.body.onmouseleave = null
      }
    }
  })

  return (
    <>
      {debug === true &&
        createPortal(
          <div
            ref={debugDiv}
            style={{
              position: "absolute",
              opacity: "0",
              top: 0,
              left: 0,
              display: "grid",
              userSelect: "none",
              width: "160px",
              height: "60px",
              padding: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              borderRadius: 10,
              color: "white",
              font: "12px monospace",
              zIndex: 100,
              transition: "all 0.01s linear, opacity 0.25s ease",
            }}
          >
            <div style={{ width: "100%", height: "100%" }}></div>
          </div>,
          document.body
        )}
      {children}
    </>
  )
}

export default Surveyor
