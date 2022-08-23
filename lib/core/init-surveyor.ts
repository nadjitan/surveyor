import { fetchTelemetries, mapTelemetries } from "@/utils/dashboard"
import { DashboardPage, MappedTelemetry, Recording } from "@/utils/types"
import Hashids from "hashids"
import { dashboard, viz } from "./components"

interface Telemetry {
  id?: string
  data: {
    url: string
    action: string
  }[]
}

/**
 * Needs to be called for each HTML page.
 *
 * @param apiUrl The url of you REST api that will be used
 * to store the telemetry.
 *
 * @example
 * This is the object model for each data
 * ```ts
 * interface Telemetry {
 *   id: string
 *   data: string
 * }
 * ```
 */
export function initSurveyor(apiUrl: string) {
  let sendingParentDiv = document.createElement("div")
  sendingParentDiv.id = "srvyr-notif-send"
  sendingParentDiv.style.display = "none"
  sendingParentDiv.style.position = "fixed"
  sendingParentDiv.style.width = "100vw"
  sendingParentDiv.style.height = "100vh"
  sendingParentDiv.style.backgroundColor = "transparent"
  sendingParentDiv.style.pointerEvents = "none"
  sendingParentDiv.style.placeItems = "end"
  let sendingDiv = document.createElement("div")
  sendingDiv.style.display = "grid"
  sendingDiv.style.border = "2px solid black"
  sendingDiv.style.padding = "1.5rem 2.5rem 1.5rem 2.5rem"
  sendingDiv.style.borderRadius = "2rem"
  sendingDiv.style.marginRight = "40px"
  sendingDiv.style.marginBottom = "50px"
  let sendingChild = document.createElement("div")
  sendingChild.style.fontSize = "2rem"
  sendingChild.style.fontFamily = "Helvetica"
  sendingChild.innerText = "Sending..."
  sendingDiv.appendChild(sendingChild)
  sendingParentDiv.appendChild(sendingDiv)
  if (!document.getElementById("srvyr-notif-send")) {
    document.body.prepend(sendingParentDiv)
  }

  function addListeners() {
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

      // if (debug !== undefined && debug === true) {
      //   console.table(telemetry)
      // }
      sessionStorage.setItem("srvyr", JSON.stringify(telemetry))
    }

    const unload = (e: BeforeUnloadEvent) => {
      document.body.onclick = null
      if (telemetry.data.length !== 0) {
        sendingParentDiv.style.display = "grid"
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
  }

  const hashids = new Hashids("srvyr", 8)
  let url: string
  let elems: HTMLElement[]
  let telemetry: Telemetry = { data: [] }
  let gApiUrl: string

  const putTemplate = (tel: Telemetry) =>
    fetch(gApiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        telemetry: { data: JSON.stringify(tel.data) },
      }),
      keepalive: true,
    })

  function addClasses() {
    gApiUrl = apiUrl
    url = window.location.href
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
  }

  if (typeof window !== undefined && typeof document !== undefined) {
    addClasses()
    addListeners()
  }
}