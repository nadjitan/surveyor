export function onClassChange(
  element: HTMLElement,
  callback: (node: Node) => void
) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        callback(mutation.target)
      }
    })
  })
  observer.observe(element, { attributes: true })
  return observer.disconnect
}

export async function fetchTelemetries(apiUrl: string) {
  const res = await fetch(apiUrl, { method: "GET" })
  return (await res.json()) as {
    id: string
    data: { url: string; class: string }[]
  }[]
}

export function mapTelemetries(
  telemetries: {
    id: string
    data: { url: string; class: string }[]
  }[]
) {
  const map = new Map<
    number,
    { id: string; data: { url: string; class: string }[] }
  >()

  telemetries.map((t, i) => {
    map.set(i, t)
  })

  return map
}

export function startClient(
  mappedClicks: Map<
    number,
    { id: string; data: { url: string; class: string }[] }
  >,
  telemetryIndex: number
) {
  let iframe: HTMLIFrameElement
  let iframeDoc: Document

  let dataIndex = 0
  let stop = false
  const delay = 700

  let timelineNode: HTMLCollectionOf<Element>
  let prevTimelineNode: HTMLElement | null = null

  function createFollower() {
    const divFollower = iframeDoc.createElement("div")
    divFollower.id = "svyr-follower"
    divFollower.style.display = "none"
    divFollower.style.position = "absolute"
    divFollower.style.left = "0px"
    divFollower.style.top = "0px"
    divFollower.style.width = "50px"
    divFollower.style.height = "50px"
    divFollower.style.border = "2px solid green"
    divFollower.style.background = "rgb(0 128 0 / 0.5)"
    iframeDoc.body.style.position = "relative"
    iframeDoc.body.appendChild(divFollower)

    return divFollower
  }

  function moveFollower() {
    let follower = iframeDoc.getElementById("svyr-follower")!
    if (!follower) {
      const divFollower = createFollower()
      iframeDoc.body.appendChild(divFollower)
      follower = divFollower
    }

    const elemToFollow = iframeDoc.body.querySelector(
      `.${mappedClicks.get(telemetryIndex)?.data[dataIndex].class!}`
    ) as HTMLElement
    elemToFollow.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    })

    const bcr = elemToFollow!.getBoundingClientRect()
    follower.style.transition = "all 0.2s linear, opacity 0.25s ease"
    follower.style.transform = `translate(${bcr.left}px, ${bcr.top}px)`
    follower.style.width = `${bcr.width}px`
    follower.style.height = `${bcr.height}px`
    follower.style.display = "grid"
    if (elemToFollow!.tagName !== "A") elemToFollow!.click()
    // ACTIVATE TIMELINE NODE
    if (prevTimelineNode)
      prevTimelineNode.classList.remove("svyr-node-selected")
    timelineNode[dataIndex].classList.add("svyr-node-selected")
    prevTimelineNode = timelineNode[dataIndex] as HTMLElement
  }

  const replayBtn = document.getElementById("btn-replay")!
  const replayStop = document.getElementById("btn-stop")!

  const iframeLoadingElem = document.getElementById("svyr-iframe-loading")!
  iframe = document.getElementById("svyr-website") as HTMLIFrameElement

  /**
   * REPLAY SYSTEM
   */
  function replay() {
    stop = false
    replayBtn.style.display = "none"
    replayStop.style.display = "flex"
    // ALWAYS RESET ON CLICK
    dataIndex = 0

    // LOOPING CLICKS DATA
    const clicksInterval = setInterval(() => {
      if (dataIndex < mappedClicks.get(telemetryIndex)!.data.length) {
        // IF IFRAME IS NOT EQUAL TO DATA URL
        if (
          iframe.src !== mappedClicks.get(telemetryIndex)?.data[dataIndex].url
        ) {
          stop = true

          iframe.src = mappedClicks.get(telemetryIndex)?.data[dataIndex].url!
          iframeLoadingElem.style.display = "flex"

          iframe.onload = () => {
            iframeLoadingElem.style.display = "none"
            iframeDoc = iframe.contentDocument!
            stop = false
          }
        }
        if (stop === false) {
          moveFollower()
          dataIndex++
        }
      } else {
        stop = true
        clearInterval(clicksInterval)
        replayBtn.style.display = "flex"
        replayStop.style.display = "none"
      }
    }, delay)

    replayStop.onclick = () => {
      stop = true
      clearInterval(clicksInterval)
      replayBtn.style.display = "flex"
      replayStop.style.display = "none"
    }
  }

  iframe.onload = () => {
    iframeDoc = iframe.contentDocument!
    iframeLoadingElem.style.display = "none"

    // RECORDING
    // iframeDoc.addEventListener("click", e => {
    //   const elem = e.target! as HTMLElement
    //   const targetClass =
    //     elem.className &&
    //     Array.from(elem.classList).find(c => c.startsWith("srvyr-"))

    //   if (targetClass) {
    //     recordedElems.current.push({
    //       url: iframe.src,
    //       class: targetClass,
    //     })
    //     console.log(recordedElems)
    //   }
    // })

    replayBtn.onclick = replay

    // TIMELINE NODES
    timelineNode = document.getElementsByClassName("svyr-tl-node")
    Array.from(timelineNode).map((elem, index) => {
      elem.addEventListener("click", () => {
        stop = true
        replayBtn.style.display = "flex"
        replayStop.style.display = "none"
        dataIndex = index

        if (
          iframe.src !== mappedClicks.get(telemetryIndex)?.data[dataIndex].url
        ) {
          iframe.src = mappedClicks.get(telemetryIndex)?.data[dataIndex].url!
          iframeLoadingElem.style.display = "flex"

          iframe.onload = () => {
            iframeLoadingElem.style.display = "none"
            iframeDoc = iframe.contentDocument!
            // replayBtn.onclick = replay
            setTimeout(() => moveFollower(), 100)
          }
        } else {
          moveFollower()
        }
      })
    })
  }
}
