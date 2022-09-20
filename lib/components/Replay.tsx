import clientStyle from "./dashboard.module.css"
import { MappedTelemetries, Telemetry } from "@/utils/types"
import { LoadingIcon, PlayIcon, SearchIcon, StopIcon } from "./icons"

import { FC, useEffect, useRef, useState } from "react"
import { divFollower } from "@/utils/dashboard"

export const ReplayBody: FC<{
  mappedTelemetries: MappedTelemetries
  telemetryIndex: number
}> = ({ mappedTelemetries, telemetryIndex }) => {
  const [filteredTelemetries, setFilteredTelemetries] =
    useState<MappedTelemetries | null>(null)

  const [telemetry, setTelemetry] = useState<Telemetry>()
  const [allowChange, setAllowChange] = useState(true)

  const iframe = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (mappedTelemetries) {
      setFilteredTelemetries(mappedTelemetries)
      setTelemetry(mappedTelemetries.get(telemetryIndex))
    }
  }, [mappedTelemetries])

  useEffect(() => {
    if (telemetry) {
      const replayBtn = document.getElementById("btn-replay")!
      const replayStop = document.getElementById("btn-stop")!

      let iframeDoc: Document
      const iframeLoadingElem = document.getElementById("svyr-iframe-loading")!

      let dataIndex = 0
      let play = false
      const delay = 1000

      let timelineNodes: HTMLCollectionOf<Element>
      let prevTimelineNode: HTMLElement | null = null

      function removeFollowerOnClick() {
        iframeDoc.onclick = () => {
          if (prevTimelineNode) {
            prevTimelineNode.classList.remove("svyr-node-selected")
          }
          const box = iframeDoc.getElementById("svyr-follower")
          if (box) box.remove()
        }
      }

      function moveFollower(clickElem = true) {
        const elemToFollow = iframeDoc.body.querySelector(
          `.${telemetry!.data[dataIndex].class!}`
        ) as HTMLElement

        if (elemToFollow) {
          elemToFollow.scrollIntoView()

          let follower = iframeDoc.getElementById("svyr-follower")
          if (!follower) {
            iframeDoc.body.style.position = "relative"
            iframeDoc.body.appendChild(divFollower)
            follower = divFollower
          }

          const bcr = elemToFollow.getBoundingClientRect()
          follower.style.transform = `translate(${bcr.left}px, ${
            bcr.top + iframe.current!.contentWindow!.scrollY
          }px)`
          follower.style.width = `${bcr.width}px`
          follower.style.height = `${bcr.height}px`
          follower.style.display = "grid"
          follower.style.pointerEvents = "none"

          if (elemToFollow.tagName !== "A" && clickElem) elemToFollow.click()

          // ACTIVATE TIMELINE NODE
          if (prevTimelineNode) {
            prevTimelineNode.classList.remove("svyr-node-selected")
          }

          if (timelineNodes.length > 0) {
            timelineNodes[dataIndex].classList.add("svyr-node-selected")
            prevTimelineNode = timelineNodes[dataIndex] as HTMLElement
          }
        }
      }

      /**
       * REPLAY SYSTEM
       */
      function replay() {
        play = true
        replayBtn.style.display = "none"
        replayStop.style.display = "flex"
        // ALWAYS RESET ON CLICK
        dataIndex = 0
        let clicksTimer: NodeJS.Timer

        function startTimer() {
          setAllowChange(false)

          clicksTimer = setInterval(() => {
            if (dataIndex < telemetry!.data.length) {
              iframe.current!.contentDocument!.onclick = null

              // IF IFRAME IS NOT EQUAL TO DATA URL
              if (
                iframe.current!.contentWindow!.location.href !==
                telemetry!.data[dataIndex].url
              ) {
                play = false
                clearInterval(clicksTimer)

                iframe.current!.src = telemetry!.data[dataIndex].url!
                iframeLoadingElem.style.display = "flex"

                iframe.current!.onload = () => {
                  startTimer()
                  iframeLoadingElem.style.display = "none"
                  iframeDoc = iframe.current!.contentDocument!
                  play = true
                }
              }
              if (play === true) {
                moveFollower()
                dataIndex++
              }
            } else {
              play = false
              clearInterval(clicksTimer)
              replayBtn.style.display = "flex"
              replayStop.style.display = "none"
              setAllowChange(true)
              removeFollowerOnClick()
            }
          }, delay)
        }

        // LOOPING CLICKS DATA
        startTimer()

        replayStop.onclick = () => {
          clearInterval(clicksTimer)
          play = false
          replayBtn.style.display = "flex"
          replayStop.style.display = "none"
          setAllowChange(true)
          removeFollowerOnClick()
        }
      }

      iframe.current!.src = window.location.origin
      iframe.current!.onload = () => {
        iframeDoc = iframe.current!.contentDocument!
        iframeLoadingElem.style.display = "none"

        removeFollowerOnClick()

        // TIMELINE NODES
        timelineNodes = document.getElementsByClassName("svyr-tl-node")
        if (timelineNodes.length > 0 && telemetry.data.length > 0) {
          Array.from(timelineNodes).map((elem, index) => {
            elem.addEventListener("click", () => {
              play = false
              replayBtn.style.display = "flex"
              replayStop.style.display = "none"
              dataIndex = index

              if (
                iframe.current!.contentWindow!.location.href !==
                telemetry.data[dataIndex].url
              ) {
                iframe.current!.src = telemetry.data[dataIndex].url!
                iframeLoadingElem.style.display = "flex"

                iframe.current!.onload = () => {
                  iframeLoadingElem.style.display = "none"
                  iframeDoc = iframe.current!.contentDocument!
                  removeFollowerOnClick()
                  setTimeout(() => moveFollower(false), 800)
                }
              } else {
                moveFollower(false)
              }
            })
          })

          replayBtn.onclick = replay
        }
      }

      return () => {
        replayBtn.onclick = null
        replayStop.onclick = null
      }
    }
  }, [telemetry])

  function searchTelemetries(value: string) {
    if (value !== "")
      setFilteredTelemetries(
        new Map(
          [...mappedTelemetries].filter(([k, tel]) =>
            tel.id.toLowerCase().includes(value)
          )
        )
      )
    else setFilteredTelemetries(mappedTelemetries)
  }

  return (
    <>
      <main className={clientStyle.clientContent}>
        {telemetry && (
          <>
            <div className="svyr-flex svyr-w-full svyr-justify-between">
              <div className="svyr-flex svyr-flex-row svyr-items-center svyr-justify-center">
                <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
                <h4 className="svyr-text-md svyr-ml-3 svyr-font-inter-semibold">
                  {telemetry.id}
                </h4>
              </div>

              <button
                id="btn-replay"
                className="svyr-flex svyr-w-max svyr-flex-row svyr-rounded-full svyr-bg-theme-primary svyr-py-4 svyr-px-6 svyr-font-inter-semibold svyr-text-sm">
                <PlayIcon
                  spanClass="svyr-w-7 svyr-h-full"
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                />
                <span>Play</span>
              </button>
              <button
                id="btn-stop"
                className="svyr-hidden svyr-w-max svyr-flex-row svyr-rounded-full svyr-bg-theme-primary-disabled svyr-py-4 svyr-px-6 svyr-font-inter-semibold svyr-text-sm">
                <StopIcon
                  spanClass="svyr-w-7 svyr-h-full"
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                />
                <span>Stop</span>
              </button>
            </div>

            <div className="svyr-relative svyr-mt-8 svyr-grid svyr-h-full svyr-w-full svyr-border svyr-border-theme-surface">
              <iframe
                ref={iframe}
                id="svyr-website"
                className="svyr-h-full svyr-w-full"
              />
              <div
                id="svyr-iframe-loading"
                className="svyr-absolute svyr-right-5 svyr-bottom-5 svyr-flex svyr-flex-row svyr-items-center">
                <LoadingIcon svgClass="svyr-fill-theme-grey" />
              </div>
            </div>

            <div className="svyr-relative svyr-mt-4 svyr-box-border svyr-h-40 svyr-w-full svyr-min-w-full svyr-overflow-y-hidden svyr-bg-theme-surface svyr-p-6">
              <h5 className="svyr-font-inter-semibold svyr-text-theme-grey">
                Timeline
              </h5>

              <div
                id="timeline"
                className="svyr-relative svyr-flex svyr-h-5/6 svyr-min-w-full svyr-max-w-max svyr-flex-row svyr-items-center svyr-overflow-x-auto svyr-overflow-y-hidden">
                <div className="svyr-flex svyr-h-[2px] svyr-min-w-full svyr-max-w-max svyr-flex-row svyr-items-center svyr-overflow-visible svyr-bg-theme-grey">
                  {telemetry.data.map((_, i) => (
                    <div className="svyr-ml-4 svyr-h-max svyr-w-max" key={i}>
                      <div className="svyr-tl-node svyr-h-4 svyr-w-4 svyr-rotate-45 svyr-cursor-pointer svyr-border-[2px] svyr-border-theme-grey svyr-bg-theme-surface hover:svyr-bg-theme-on-surface" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <nav className={clientStyle.rightNav}>
        {filteredTelemetries ? (
          <>
            <div className="svyr-h-24">
              <p className="svyr-font-inter-semibold svyr-text-sm svyr-text-theme-grey">
                Recordings
              </p>
              <div className="svyr-mt-4 svyr-flex svyr-h-12 svyr-w-full svyr-flex-row svyr-overflow-hidden svyr-rounded-full svyr-border-[2px] svyr-border-theme-grey focus-within:svyr-border-theme-on-surface [&>*:nth-child(2)>*:nth-child(1)]:focus-within:svyr-fill-theme-on-surface">
                <input
                  type="text"
                  placeholder="Search by ID..."
                  className="svyr-box-border svyr-w-full svyr-bg-theme-surface svyr-p-4 svyr-text-theme-on-surface"
                  onChange={e =>
                    searchTelemetries(e.target.value.toLowerCase())
                  }
                />
                <SearchIcon
                  svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
                  spanClass="svyr-w-12 svyr-h-full"
                />
              </div>
            </div>

            <div className={clientStyle.rnContainer}>
              {[...filteredTelemetries].map(([num, data]) => (
                <div
                  onClick={() => {
                    if (allowChange) {
                      const timelineNodes =
                        document.getElementsByClassName("svyr-tl-node")

                      setTelemetry(mappedTelemetries.get(num))

                      Array.from(timelineNodes).map(tl =>
                        tl.classList.remove("svyr-node-selected")
                      )
                    }
                  }}
                  key={num}
                  className={`replay-item svyr-mt-2 svyr-box-border svyr-w-full svyr-cursor-pointer svyr-select-none svyr-break-words svyr-rounded-md svyr-bg-theme-container svyr-p-3 hover:svyr-bg-theme-selected [&>*:nth-child(2)]:hover:svyr-text-theme-on-surface ${
                    data.id === telemetry?.id ? " svyr-bg-theme-selected" : ""
                  }`}>
                  <h5>{data.id}</h5>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="svyr-flex svyr-items-center svyr-gap-3 svyr-place-self-center">
            <LoadingIcon /> Fetching...
          </div>
        )}
      </nav>
    </>
  )
}
