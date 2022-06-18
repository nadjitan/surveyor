import Hashids from "hashids"
import { FC, useEffect, useState } from "react"
import { PropsWithChildren } from "react"
import Debug from "./Debug"

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
        console.table(telemetry)
      }
      sessionStorage.setItem("srvyr", JSON.stringify(telemetry))
    }

    window.onbeforeunload = (e: BeforeUnloadEvent) => {
      putTemplate(telemetry)

      // Delay fetch because Firefox is unreliable with "unload"
      const time = Date.now()
      while (Date.now() - time < 500) {
        console.log("waiting")
      }

      return
    }

    return () => {
      document.body.onclick = null
      window.onbeforeunload = null
    }
  })

  return (
    <>
      {debug && <Debug />} {children}
    </>
  )
}

export default Surveyor
