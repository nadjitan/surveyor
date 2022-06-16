import Hashids from "hashids"
import { FC, useState } from "react"
import { PropsWithChildren, useEffect, useRef } from "react"
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

    return () => {
      document.body.onclick = null
    }
  })

  return (
    <>
      {debug && <Debug />} {children}
    </>
  )
}

export default Surveyor
