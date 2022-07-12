import { FC, PropsWithChildren, useEffect, useRef, useState } from "react"
import {
  DeleteIcon,
  EditIcon,
  LoadingIcon,
  PlayIcon,
  SearchIcon,
  StopIcon,
  TempIcon,
} from "./icons"
import clientStyle from "./Client.module.css"

type Data = { url: string; class: string }

function onClassChange(element: HTMLElement, callback: (node: Node) => void) {
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

/**
 * Import to a dedicated page for ```<iframe />``` to work
 *
 * @returns void
 */
const Client: FC<
  PropsWithChildren<{ clicks: Data[]; loadIframe: boolean }>
> = ({ clicks, loadIframe }) => {
  const [url, setUrl] = useState("")
  const [page, setPage] = useState<"data" | "replay">("replay")

  let recordedElems = useRef<Data[]>([])

  let iframe: HTMLIFrameElement
  let iframeDoc: Document

  let arrIndex = 0
  let paused = false
  const delay = 700

  let tlNodes: HTMLCollectionOf<Element>
  let prevNode: HTMLElement | null = null

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
    let follower = iframeDoc.getElementById("svyr-follower")
    if (!follower) {
      const divFollower = createFollower()
      iframeDoc.body.appendChild(divFollower)
      follower = divFollower
    }

    const elemToFollow = iframeDoc.body.getElementsByClassName(
      clicks[arrIndex].class
    )[0] as HTMLElement

    const bcr = elemToFollow!.getBoundingClientRect()
    // FOLLOWER STYLES
    follower!.style.transition = "all 0.2s linear, opacity 0.25s ease"
    follower!.style.transform = `translate(${bcr.left}px, ${bcr.top}px)`
    follower!.style.width = `${bcr.width}px`
    follower!.style.height = `${bcr.height}px`
    follower!.style.display = "grid"
    if (elemToFollow!.tagName !== "A") elemToFollow!.click()
    // ACTIVATE TIMELINE NODE
    if (prevNode) prevNode.classList.remove("svyr-node-selected")
    tlNodes[arrIndex].classList.add("svyr-node-selected")
    prevNode = tlNodes[arrIndex] as HTMLElement
  }

  useEffect(() => {
    if (page === "replay") {
      if (loadIframe) setUrl(window.location.origin)

      const replayBtn = document.getElementById("btn-replay")
      const replayStop = document.getElementById("btn-stop")

      const iframeLoadingElem = document.getElementById("svyr-iframe-loading")
      iframe = document.getElementById("svyr-website") as HTMLIFrameElement

      /**
       * REPLAY SYSTEM
       */
      function replay() {
        replayBtn!.style.display = "none"
        replayStop!.style.display = "flex"
        // ALWAYS RESET ON CLICK
        arrIndex = 0
        // LOOPING CLICKS DATA
        const clicksInterval = setInterval(() => {
          if (arrIndex < clicks.length) {
            // IF IFRAME IS NOT EQUAL TO DATA URL
            if (iframe.src !== clicks[arrIndex].url) {
              paused = true

              // iframeDoc.body.removeChild(divFollower)
              iframe.src = clicks[arrIndex].url
              iframeLoadingElem!.style.display = "flex"

              iframe.onload = e => {
                iframeLoadingElem!.style.display = "none"
                iframeDoc = iframe.contentDocument!
                // WAIT SURVEYOR SCRIPTS
                onClassChange(iframeDoc.body, () => {
                  paused = false
                })
              }
            }
            if (paused === false) {
              moveFollower()
              arrIndex++
            }
          } else {
            paused = true
            clearInterval(clicksInterval)
            replayBtn!.style.display = "flex"
            replayStop!.style.display = "none"
          }
        }, delay)

        replayStop!.onclick = () => {
          paused = true
          clearInterval(clicksInterval)
          replayBtn!.style.display = "flex"
          replayStop!.style.display = "none"
        }
      }

      iframe.onload = () => {
        iframeDoc = iframe.contentDocument!
        iframeLoadingElem!.style.display = "none"

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

        replayBtn!.onclick = replay

        // TIMELINE NODES
        tlNodes = document.getElementsByClassName("svyr-tl-node")
        Array.from(tlNodes).map((elem, index) => {
          elem.addEventListener("click", () => {
            paused = true
            replayBtn!.style.display = "flex"
            replayStop!.style.display = "none"
            arrIndex = index

            if (iframe.src !== clicks[arrIndex].url) {
              iframe.src = clicks[arrIndex].url
              iframeLoadingElem!.style.display = "flex"

              iframe.onload = e => {
                iframeLoadingElem!.style.display = "none"
                iframeDoc = iframe.contentDocument!
                replayBtn!.onclick = replay
                onClassChange(iframeDoc.body, () => {
                  moveFollower()
                })
              }
            } else {
              moveFollower()
            }
          })
        })
      }
    }
  }, [page])

  return (
    <div className={clientStyle.clientBody}>
      <nav className={clientStyle.leftNav}>
        <div onClick={() => setPage("data")} className={clientStyle.lItem}>
          <TempIcon svgClass="svyr-fill-theme-grey svyr-w-8 svyr-h-8" />
          <span>Data</span>
        </div>
        <div onClick={() => setPage("replay")} className={clientStyle.lItem}>
          <TempIcon svgClass="svyr-fill-theme-grey svyr-w-8 svyr-h-8" />
          <span>Replay</span>
        </div>
      </nav>

      <main className={clientStyle.clientContent}>
        {/* <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
        <iframe id="svyr-website" src={url} className="svyr-border svyr-h-full svyr-box-border" /> */}

        {page === "data" ? (
          <>
            <div className={clientStyle.ccHeader}>
              <div className={clientStyle.ccHeaderL}>
                <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
                <h4 className="svyr-font-inter-semibold svyr-ml-3">
                  About Page
                </h4>
                <EditIcon
                  spanClass="svyr-w-8 svyr-h-full svyr-ml-6"
                  svgClass="svyr-stroke-theme-grey svyr-h-5 svyr-w-5"
                />
                <DeleteIcon
                  spanClass="svyr-w-8 svyr-h-full"
                  svgClass="svyr-stroke-theme-grey svyr-h-5 svyr-w-5"
                />
              </div>

              <button className={clientStyle.ccHeaderR}>
                <PlayIcon
                  spanClass="svyr-w-7 svyr-h-full"
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                />
                <span>Play a Recording</span>
              </button>
            </div>

            <div className={clientStyle.ccBodyTop}>
              <h5 className="svyr-text-theme-grey svyr-font-inter-semibold">
                User Performance Chart
              </h5>
            </div>

            <div className={clientStyle.ccBodyBottom}>
              <h5 className="svyr-text-theme-grey svyr-font-inter-semibold">
                Recorded User Performance
              </h5>
              <div className="svyr-h-5/6 svyr-w-full svyr-overflow-x-hidden svyr-overflow-y-auto">
                <div className={clientStyle.pathDataContainer}>
                  <h5>100%</h5>
                  <p>home &gt; about</p>
                </div>
                <div className={clientStyle.pathDataContainer}>
                  <h5>40%</h5>
                  <p>home &gt; channels &gt; home &gt; store &gt; about</p>
                </div>
                <div className={clientStyle.pathDataContainer}>
                  <h5>10%</h5>
                  <p>
                    home &gt; store &gt; channels &gt; contact us &gt; home &gt;
                    about
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="svyr-w-full svyr-justify-between svyr-flex">
              <div className="svyr-flex svyr-flex-row svyr-justify-center svyr-items-center">
                <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
                <h4 className="svyr-font-inter-semibold svyr-ml-3">
                  37aed957-bcbd-4ecd-9eec-fb1d9933ee20
                </h4>
              </div>

              <button
                id="btn-replay"
                className="svyr-w-max svyr-rounded-full svyr-text-sm">
                <PlayIcon
                  spanClass="svyr-w-7 svyr-h-full"
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                />
                <span>Play</span>
              </button>
              <button
                id="btn-stop"
                className="svyr-w-max svyr-rounded-full svyr-bg-theme-primary-disabled svyr-text-sm svyr-hidden">
                <StopIcon
                  spanClass="svyr-w-7 svyr-h-full"
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                />
                <span>Stop</span>
              </button>
            </div>

            <div className="svyr-border svyr-w-full svyr-h-full svyr-mt-8 svyr-border-theme-surface svyr-grid svyr-relative">
              <iframe
                id="svyr-website"
                src={url}
                className="svyr-w-full svyr-h-full"
              />
              <div
                id="svyr-iframe-loading"
                className="svyr-absolute svyr-flex svyr-flex-row svyr-items-center svyr-right-5 svyr-bottom-5">
                <LoadingIcon svgClass="svyr-fill-theme-grey" />
              </div>
            </div>

            <div className="svyr-bg-theme-surface svyr-h-40 svyr-min-w-full svyr-w-full svyr-relative svyr-overflow-y-hidden svyr-box-border svyr-p-6 svyr-mt-4">
              <h5 className="svyr-text-theme-grey svyr-font-inter-semibold">
                Timeline
              </h5>
              <div
                id="timeline"
                className="svyr-relative svyr-h-5/6 svyr-overflow-y-hidden svyr-overflow-x-auto svyr-min-w-full svyr-max-w-max svyr-flex svyr-flex-row svyr-items-center">
                <div className="svyr-h-[2px] svyr-bg-theme-grey svyr-max-w-max svyr-min-w-full svyr-flex svyr-flex-row svyr-items-center svyr-overflow-visible">
                  {clicks &&
                    clicks.map(c => (
                      <div className="svyr-h-max svyr-w-max svyr-ml-4">
                        <div className="svyr-tl-node hover:svyr-bg-theme-on-surface svyr-w-4 svyr-h-4 svyr-border-[2px] svyr-border-theme-grey svyr-bg-theme-surface svyr-rotate-45 svyr-cursor-pointer" />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <nav className={clientStyle.rightNav}>
        {page === "data" ? (
          <>
            <div className="svyr-h-24">
              <p className="svyr-text-theme-grey svyr-text-sm svyr-font-inter-semibold">
                Recorded Paths
              </p>
              <div className="svyr-flex svyr-flex-row svyr-w-full svyr-h-12 svyr-mt-4 svyr-overflow-hidden svyr-rounded-full svyr-border-[2px] svyr-border-theme-grey">
                <input
                  type="text"
                  placeholder="Search a pathing..."
                  className="svyr-w-full svyr-bg-theme-surface svyr-text-theme-on-surface svyr-box-border svyr-p-4"
                />
                <SearchIcon
                  svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
                  spanClass="svyr-w-12 svyr-h-full"
                />
              </div>
            </div>

            <div className={clientStyle.rnContainer}>
              {/* <span className="svyr-text-theme-grey svyr-m-auto svyr-text-sm svyr-font-inter-medium">
            Record a path to get started!
          </span> */}
              <div className={clientStyle.rnItem}>
                <h5>About Page</h5>
                <p>demopage.com/channels/about</p>
              </div>
              <div className={clientStyle.rnItem}>
                <h5>About Page</h5>
                <p>demopage.com/channels/about</p>
              </div>
              <div className={clientStyle.rnItem}>
                <h5>Channels Page</h5>
                <p>demopage.com/channels</p>
              </div>
            </div>

            <div className="svyr-w-full svyr-h-16 svyr-justify-center svyr-flex svyr-mt-4">
              <button className="svyr-w-4/5 svyr-rounded-full svyr-text-sm">
                <PlayIcon
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                  spanClass="svyr-w-8 svyr-h-full"
                />
                <span>Record a new path</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="svyr-h-24">
              <p className="svyr-text-theme-grey svyr-text-sm svyr-font-inter-semibold">
                Recordings
              </p>
              <div className="svyr-flex svyr-flex-row svyr-w-full svyr-h-12 svyr-mt-4 svyr-overflow-hidden svyr-rounded-full svyr-border-[2px] svyr-border-theme-grey">
                <input
                  type="text"
                  placeholder="Search by ID..."
                  className="svyr-w-full svyr-bg-theme-surface svyr-text-theme-on-surface svyr-box-border svyr-p-4"
                />
                <SearchIcon
                  svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
                  spanClass="svyr-w-12 svyr-h-full"
                />
              </div>
            </div>

            <div className={clientStyle.rnContainer}>
              {/* <span className="text-theme-grey m-auto text-sm font-inter-medium">
            Record a path to get started!
          </span> */}
              <div className={clientStyle.rnItem}>
                <h5>37aed957-bcbd-4ecd-9eec-fb1d9933ee20</h5>
              </div>
              <div className={clientStyle.rnItem}>
                <h5>47e36606-669d-4554-a3ee-9cd175d4ace3</h5>
              </div>
              <div className={clientStyle.rnItem}>
                <h5>79007d35-8e20-4447-8564-6332b7eeb57a</h5>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* <footer className="border box-border" style={{ gridArea: "footer" }}>
        footer
      </footer> */}
    </div>
  )
}

export default Client
