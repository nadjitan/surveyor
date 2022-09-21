import { stringToHTML } from "@/utils/dashboard"
import Hashids from "hashids"

interface Telemetry {
  id?: string
  data: {
    url: string
    class: string
  }[]
  startTime: string
  endTime: string
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
export function initSurveyor({
  apiUrl,
  logClicks,
  debug,
  locateMsg,
  lastData,
}: {
  apiUrl: string
  logClicks: boolean
  debug: boolean
  locateMsg: string
  lastData: { url: string; class: string }
}) {
  let dataFound = false
  const dataFoundDiv = `
  <div style="position: fixed; z-index: 50; display: grid; height: 100%; width: 100%; place-items: center; background-color: rgb(0 0 0 / 0.5); ">
    <div style="display: grid; place-items: center;">
      <h1 class="svyr-h1" style="font-size: 3.75rem; line-height: 1; font-weight: 700; color: rgb(255 255 255 / 1); ">
        Congratulations!
      </h1>
      <p class="svyr-p" style="margin-top: 0.5rem;">You may now close this window.</p>
    </div>
  </div>`
  const sendingParentDiv = `
  <div id="srvyr-recording-status" style="pointer-events: none; position: fixed; top: 0px; left: 0px; display: grid; border-bottom-right-radius: 1.5rem; background-color: rgb(19, 21, 23); padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 0.75rem; padding-bottom: 0.75rem;">
    <div style="display: flex; height: max-content; align-items: center; gap: 0.75rem;">
      <div style="margin-top: 0.1rem; height: 0.5rem; width: 0.5rem; border-radius: 9999px; background-color: rgb(92, 56, 255);"></div>
      <p class="svyr-p" style="font-size: 0.875rem; line-height: 1.25rem; font-weight: 600; color: rgb(92, 56, 255);">
        Recording...
      </p>
    </div>
    <p class="svyr-p" style="margin-top: 0.25rem; font-size: 0.875rem; line-height: 1.25rem;">Locate the "${locateMsg}"</p>
  </div>`

  function clickEvent(e: MouseEvent | FocusEvent) {
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

      const lastTelemetry = telemetry.data[telemetry.data.length - 1]

      if (
        lastTelemetry.url === lastData.url &&
        lastTelemetry.class === lastData.class
      ) {
        dataFound = true
        document.body.prepend(stringToHTML(dataFoundDiv))
      }
    }
  }

  function addListeners() {
    // const unload = (e: BeforeUnloadEvent) => {
    //   document.body.onclick = null
    //   if (telemetry.data.length !== 0) {
    //     sendingParentDiv.style.display = "grid"
    //     putTemplate(telemetry)

    //     // Delay because Firefox is unreliable with unload listener
    //     if (navigator.userAgent.indexOf("Firefox") != -1) {
    //       const time = Date.now()
    //       while (Date.now() - time < 800) {
    //         console.log("waiting...")
    //       }
    //     }

    //     return null
    //   }
    // }

    // window.onbeforeunload = unload

    if (logClicks) {
      document.body.prepend(stringToHTML(sendingParentDiv))
      document.body.onclick = clickEvent

      window.onbeforeunload = (e: BeforeUnloadEvent) => {
        document.body.onclick = null
        if (telemetry.data.length > 0) {
          putTemplate(telemetry)
          document.getElementById(
            "srvyr-recording-status"
          )!.innerHTML = `<p class="svyr-p" style="font-size: 0.875rem; line-height: 1.25rem;">Sending data...</p>`

          // Delay because Firefox is unreliable with unload listener
          const time = Date.now()
          while (Date.now() - time < 800) {
            console.log("waiting...")
          }

          return null
        }
      }
    }
  }

  const hashids = new Hashids("srvyr", 8)
  let url: string
  let elems: HTMLElement[]
  let telemetry: Telemetry = {
    data: [],
    startTime: new Date().toISOString(),
    endTime: "",
  }

  function putTemplate(tel: Telemetry) {
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
  }

  function addClasses() {
    url = window.location.href
    // When page load always check if there is a telemetry in sessionStorage
    if (sessionStorage.getItem("srvyr") === null) {
      sessionStorage.setItem("srvyr", JSON.stringify(telemetry))
    } else {
      telemetry = JSON.parse(sessionStorage.getItem("srvyr")!)
    }
    // Make hashed classes for every element
    elems = Array.from(
      document.body.querySelectorAll("*:not(script):not(style):not(.srvyr-app)")
    )
    elems.forEach((el, index) => {
      const newClass = `srvyr-${hashids.encode(index)}`
      if (index === 0) {
        // Avoid repetition of class name
        if (!document.body.classList.contains(newClass))
          document.body.classList.add(newClass)
      } else {
        if (!el.classList.contains(newClass)) el.classList.add(newClass)
      }
    })
  }

  if (typeof window !== undefined) {
    addClasses()
    addListeners()
  }
}
