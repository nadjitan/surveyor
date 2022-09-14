import { Telemetry } from "./types"
import Toastify from "toastify-js"

// function onClassChange(element: HTMLElement, callback: (node: Node) => void) {
//   const observer = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//       if (
//         mutation.type === "attributes" &&
//         mutation.attributeName === "class"
//       ) {
//         callback(mutation.target)
//       }
//     })
//   })
//   observer.observe(element, { attributes: true })
//   return observer.disconnect
// }

export const GREY = "rgba(108, 105, 120, 1)"
export const PRIMARY = "rgba(92, 56, 255, 1)"
export const SURFACE = "rgb(31, 35, 37)"
export const ON_SURFACE = "rgb(255, 255, 255)"

export function showToast(
  duration: number = 1000,
  msg: string,
  borderPlace: "top" | "right" | "bottom" | "left" = "bottom",
  pos: "left" | "center" | "right" = "right",
  grav: "top" | "bottom" = "top",
  offset: Toastify.Offset = { x: 0, y: 0 },
  color: string = "rgb(75, 181, 67)"
) {
  Toastify({
    text: msg,
    duration: duration,
    position: pos,
    gravity: grav,
    offset: offset,
    style: {
      background: "rgb(19, 21, 23)",
      gap: "10px",
      width: "max-content",
      display: "flex",
      borderRadius: "0.5rem",
      [`border-${borderPlace}`]: `8px solid ${color}`,
      boxSizing: "border-box",
    },
    close: true,
  }).showToast()
}

/** Source: https://stackoverflow.com/a/63116134 */
const camelToKebabCase = (str: string) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter
    })
    .join("")
}

export function stylesToString(cssStyles: Partial<CSSStyleDeclaration>) {
  let string = ""
  for (const [key, val] of Object.entries(cssStyles)) {
    string = string + `${camelToKebabCase(key)}: ${val}; `
  }

  return string
}

export const divFollower = stringToHTML(`
<div id="svyr-follower" class="srvyr-app"
  style="${stylesToString({
    display: "none",
    position: "absolute",
    left: "0px",
    top: "0px",
    border: "2px solid green",
    background: "rgb(0 128 0 / 0.5)",
    transition: "all 0.2s linear, opacity 0.25s ease",
  })}"></div>
`) as HTMLElement

/**
 * Must only have a single parent
 *
 * @param str
 * @returns Element
 */
export function stringToHTML(str: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, "text/html")
  return doc.body.firstElementChild!
}

export function onClickElem(
  elemId: string,
  callback: (me?: MouseEvent) => void
) {
  const elem = document.getElementById(elemId)!
  if (elem) elem.onclick = callback
}

export async function fetchTelemetries(apiUrl: string): Promise<Telemetry[]> {
  const res = await fetch(apiUrl, { method: "GET" })
  return await res.json()
}

export function mapTelemetries(telemetries: Telemetry[]) {
  const map = new Map<number, Telemetry>()

  telemetries.map((t, i) => {
    map.set(i, t)
  })

  return map
}

// export function initReplay(telemetry: Telemetry) {
//   const replayBtn = document.getElementById("btn-replay")!
//   const replayStop = document.getElementById("btn-stop")!

//   let iframe: HTMLIFrameElement
//   let iframeDoc: Document

//   let dataIndex = 0
//   let play = false
//   const delay = 1000

//   let timelineNodes: HTMLCollectionOf<Element>
//   let prevTimelineNode: HTMLElement | null = null

//   const divFollower = stringToHTML(`
//   <div id="svyr-follower"
//     style="${stylesToString({
//       display: "none",
//       position: "absolute",
//       left: "0px",
//       top: "0px",
//       width: "50px",
//       height: "50px",
//       border: "2px solid green",
//       background: "rgb(0 128 0 / 0.5)",
//       transition: "all 0.2s linear, opacity 0.25s ease",
//     })}"></div>
//   `) as HTMLElement

//   function moveFollower(clickElem = true) {
//     let follower = iframeDoc.getElementById("svyr-follower")!
//     if (!follower) {
//       iframeDoc.body.style.position = "relative"
//       iframeDoc.body.appendChild(divFollower)
//       follower = divFollower
//     }

//     const elemToFollow = iframeDoc.body.querySelector(
//       `.${telemetry.data[dataIndex].class!}`
//     ) as HTMLElement

//     if (elemToFollow) {
//       elemToFollow.scrollIntoView()

//       const bcr = elemToFollow!.getBoundingClientRect()
//       follower.style.transform = `translate(${bcr.left}px, ${bcr.top}px)`
//       follower.style.width = `${bcr.width}px`
//       follower.style.height = `${bcr.height}px`
//       follower.style.display = "grid"
//       follower.style.pointerEvents = "none"

//       if (elemToFollow!.tagName !== "A" && clickElem) elemToFollow!.click()

//       // ACTIVATE TIMELINE NODE
//       if (prevTimelineNode) {
//         prevTimelineNode.classList.remove("svyr-node-selected")
//       }

//       if (timelineNodes.length > 0) {
//         timelineNodes[dataIndex].classList.add("svyr-node-selected")
//         prevTimelineNode = timelineNodes[dataIndex] as HTMLElement
//       }
//     }
//   }

//   const iframeLoadingElem = document.getElementById("svyr-iframe-loading")!
//   iframe = document.getElementById("svyr-website") as HTMLIFrameElement

//   /**
//    * REPLAY SYSTEM
//    */
//   function replay() {
//     if (telemetry.data.length === 0 || !telemetry.data) {
//       console.log(`Data of "${telemetry.id}" is empty`)

//       return
//     }

//     play = true
//     replayBtn.style.display = "none"
//     replayStop.style.display = "flex"
//     // ALWAYS RESET ON CLICK
//     dataIndex = 0

//     // LOOPING CLICKS DATA
//     const clicksInterval = setInterval(() => {
//       if (dataIndex < telemetry.data.length) {
//         // IF IFRAME IS NOT EQUAL TO DATA URL
//         if (iframe.src !== telemetry.data[dataIndex].url) {
//           play = false

//           iframe.src = telemetry.data[dataIndex].url!
//           iframeLoadingElem.style.display = "flex"

//           iframe.onload = () => {
//             iframeLoadingElem.style.display = "none"
//             iframeDoc = iframe.contentDocument!
//             play = true
//           }
//         }
//         if (play === true) {
//           moveFollower()
//           dataIndex++
//         }
//       } else {
//         play = false
//         clearInterval(clicksInterval)
//         replayBtn.style.display = "flex"
//         replayStop.style.display = "none"
//       }
//     }, delay)

//     replayStop.onclick = () => {
//       clearInterval(clicksInterval)
//       play = false
//       replayBtn.style.display = "flex"
//       replayStop.style.display = "none"
//     }
//   }

//   iframe.onload = () => {
//     iframeDoc = iframe.contentDocument!
//     iframeLoadingElem.style.display = "none"

//     // TIMELINE NODES
//     timelineNodes = document.getElementsByClassName("svyr-tl-node")
//     if (timelineNodes.length > 0) {
//       Array.from(timelineNodes).map((elem, index) => {
//         elem.addEventListener("click", () => {
//           play = false
//           replayBtn.style.display = "flex"
//           replayStop.style.display = "none"
//           dataIndex = index

//           if (iframe.src !== telemetry.data[dataIndex].url) {
//             iframe.src = telemetry.data[dataIndex].url!
//             iframeLoadingElem.style.display = "flex"

//             iframe.onload = () => {
//               iframeLoadingElem.style.display = "none"
//               iframeDoc = iframe.contentDocument!
//               // replayBtn.onclick = replay
//               setTimeout(() => moveFollower(false), 100)
//             }
//           } else {
//             moveFollower(false)
//           }
//         })
//       })

//       replayBtn.onclick = replay
//     }
//   }
// }
