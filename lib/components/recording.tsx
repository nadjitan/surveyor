import { DashboardPage, Recording } from "@/utils/types"
import {
  ExIcon,
  ExitIcon,
  ListIcon,
  PauseIcon,
  PlayIcon,
  SaveIcon,
} from "./icons"

import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react"
import { divFollower, showToast } from "@/utils/dashboard"

const RecordingBody: FC<{
  setPage: Dispatch<SetStateAction<DashboardPage>>
  setRecordedPaths: Dispatch<SetStateAction<Recording[]>>
  recordedPaths: Recording[]
}> = ({ setPage, recordedPaths, setRecordedPaths }) => {
  const [newPath, setNewPath] = useState<Recording>({ title: "", data: [] })
  const [showList, setShowList] = useState(false)

  const iframe = useRef<HTMLIFrameElement>(null)
  const recording = useRef(true)

  const currUrl = useRef("")
  function updateCurrUrl(el?: HTMLElement) {
    if (el) {
      if (el.tagName === "A" && el.getAttribute("href")?.startsWith("/")) {
        currUrl.current = window.location.origin + el.getAttribute("href")
      } else if (el.tagName === "A") currUrl.current = el.getAttribute("href")!
    } else {
      currUrl.current = iframe.current!.contentWindow!.location.href
    }
  }

  useEffect(() => console.table(newPath.data), [newPath])

  function removeFollower() {
    const box = iframe.current!.contentDocument!.getElementById("svyr-follower")
    if (box) box.remove()
  }

  function recordEl(e: MouseEvent) {
    const elem = e.target! as HTMLElement

    const targetClass =
      elem.className &&
      Array.from(elem.classList).find(c => c.startsWith("srvyr-"))

    if (targetClass) {
      const data = { url: currUrl.current, class: targetClass }

      setNewPath(prev => {
        const prevData = prev.data.slice(-1)[0]

        // AVOID REPEATING SEQUENCE
        if (prevData) {
          if (prevData.class !== data.class || prevData.url !== data.url) {
            prev.data.push(data)
          }
        } else {
          prev.data.push(data)
        }

        return { ...prev }
      })
    }
  }

  function changeDocListeners(rec: boolean) {
    if (rec)
      iframe.current!.contentDocument!.onclick = e => {
        removeFollower()
        recordEl(e)
        updateCurrUrl(e.target as HTMLElement)
      }
    else
      iframe.current!.contentDocument!.onclick = e => {
        removeFollower()
        updateCurrUrl(e.target as HTMLElement)
      }
  }

  function setupListeners() {
    // TODO: Find out why it does not change on first page change
    updateCurrUrl()
    changeDocListeners(recording.current)

    const recordingStatus = document.getElementById(
      "recording-status"
    ) as HTMLDivElement
    const btnRecord = document.getElementById(
      "btn-record-play"
    ) as HTMLButtonElement
    const btnPause = document.getElementById(
      "btn-record-pause"
    ) as HTMLButtonElement

    function showBtnPause() {
      btnPause.style.display = "flex"
      btnRecord.style.display = "none"
      recordingStatus.style.display = "flex"
    }
    function showBtnRecord() {
      btnPause.style.display = "none"
      btnRecord.style.display = "flex"
      recordingStatus.style.display = "none"
    }

    if (recording.current === true) showBtnPause()
    else showBtnRecord()

    btnRecord.onclick = () => {
      showBtnPause()
      recording.current = true
      changeDocListeners(recording.current)
    }

    btnPause.onclick = () => {
      showBtnRecord()
      recording.current = false
      changeDocListeners(recording.current)
    }
  }

  useEffect(() => {
    if (iframe.current) {
      iframe.current.src = window.location.origin

      // if (localStorage.hasOwnProperty("srvyr-paths")) {
      //   paths = JSON.parse(localStorage.getItem("srvyr-paths")!)
      // }

      iframe.current.onload = () => setupListeners()
    }
  }, [])

  return (
    <div className="svyr-grid svyr-place-items-center">
      <iframe
        ref={iframe}
        id="svyr-website-rec"
        className="svyr-h-screen svyr-w-full"
      />

      <div className="svyr-absolute svyr-bottom-0 svyr-box-border svyr-flex svyr-h-20 svyr-w-3/4 svyr-items-center svyr-justify-center svyr-gap-8 svyr-rounded-t-[46px] svyr-bg-theme-background svyr-px-10">
        <div
          id="recording-status"
          className="svyr-flex svyr-h-max svyr-items-center svyr-justify-center svyr-gap-4 svyr-text-center">
          <div className="svyr-mt-1 svyr-h-2 svyr-w-2 svyr-rounded-full svyr-bg-theme-primary" />
          <p className="svyr-text-sm svyr-font-semibold svyr-text-theme-primary">
            Recording...
          </p>
        </div>

        <input
          id="input-recording-title"
          type="text"
          placeholder="Enter name of path..."
          className="svyr-box-border svyr-w-full svyr-rounded-full svyr-border-[2px] svyr-border-theme-surface svyr-bg-transparent svyr-p-4 svyr-pl-5 svyr-text-theme-on-surface focus:svyr-border-theme-on-surface"
          onKeyUp={e =>
            setNewPath(prev => ({ ...prev, title: e.target.value }))
          }
        />

        <div className="svyr-relative svyr-flex svyr-items-center svyr-gap-4">
          <button
            id="btn-record-pause"
            className="srvyr-button svyr-w-max svyr-rounded-full svyr-bg-theme-primary-disabled svyr-text-sm">
            <PauseIcon
              spanClass="svyr-w-7 svyr-h-full"
              svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
            />
            <span className="svyr-h-full svyr-w-max">Pause</span>
          </button>

          <button
            id="btn-record-play"
            className="srvyr-button svyr-hidden svyr-w-max svyr-rounded-full svyr-bg-theme-primary svyr-text-sm">
            <PlayIcon
              spanClass="svyr-w-7 svyr-h-full"
              svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
            />
            <span>Record</span>
          </button>

          <div className="svyr-grid svyr-place-items-center">
            {showList && (
              <div className="svyr-absolute svyr-bottom-20 svyr-box-border svyr-flex svyr-h-56 svyr-w-56 svyr-flex-col svyr-gap-1 svyr-overflow-y-auto svyr-overflow-x-hidden svyr-rounded-md svyr-bg-black svyr-bg-opacity-60 svyr-p-2">
                {newPath.data.length > 0 &&
                  newPath.data.map((np, index) => (
                    <div
                      key={index}
                      className="svyr-flex svyr-w-full svyr-select-none svyr-flex-row svyr-justify-between svyr-rounded-md svyr-bg-black svyr-bg-opacity-20 svyr-text-theme-on-surface">
                      <p
                        className="svyr-w-full svyr-cursor-pointer svyr-rounded-l-md svyr-bg-black svyr-bg-opacity-0 svyr-p-2 svyr-text-sm hover:svyr-bg-opacity-60"
                        onClick={() => {
                          let iframeDoc = iframe.current!.contentDocument!

                          function moveBox() {
                            const elemToFollow = iframeDoc.body.querySelector(
                              `.${np.class!}`
                            ) as HTMLElement

                            if (elemToFollow) {
                              elemToFollow.scrollIntoView()

                              let follower =
                                iframeDoc.getElementById("svyr-follower")
                              if (!follower) {
                                iframeDoc.body.style.position = "relative"
                                iframeDoc.body.appendChild(divFollower)
                                follower = divFollower
                              }

                              const bcr = elemToFollow.getBoundingClientRect()
                              follower.style.transform = `translate(${
                                bcr.left
                              }px, ${
                                bcr.top + iframe.current!.contentWindow!.scrollY
                              }px)`
                              follower.style.opacity = "1"
                              follower.style.width = `${bcr.width}px`
                              follower.style.height = `${bcr.height}px`
                              follower.style.display = "grid"
                              follower.style.pointerEvents = "none"

                              // if (elemToFollow.tagName !== "A")
                              //   elemToFollow.click()
                            }
                          }

                          if (
                            iframe.current!.contentWindow!.location.href !==
                            np.url
                          ) {
                            iframe.current!.src = np.url
                            iframe.current!.onload = () => {
                              iframeDoc = iframe.current?.contentDocument!
                              setTimeout(() => {
                                moveBox()

                                setupListeners()
                              }, 800)
                            }
                          } else moveBox()
                        }}>
                        {np.class}
                      </p>

                      <ExIcon
                        spanClass="svyr-h-full svyr-p-2 svyr-rounded-r-md svyr-bg-black svyr-cursor-pointer svyr-bg-opacity-20"
                        svgClass="svyr-fill-theme-on-surface svyr-h-4 svyr-w-4"
                        onClick={() => {
                          const box =
                            iframe.current?.contentDocument!.getElementById(
                              "svyr-follower"
                            )
                          if (box) box.remove()

                          setNewPath(prev => {
                            prev.data.splice(index, 1)
                            return { ...prev }
                          })
                        }}
                      />
                    </div>
                  ))}
              </div>
            )}

            <button
              id="btn-list"
              className={`${
                showList
                  ? "svyr-bg-theme-primary-disabled"
                  : "svyr-bg-theme-primary"
              } srvyr-button svyr-w-max svyr-rounded-full svyr-text-sm`}
              onClick={() => setShowList(!showList)}>
              <ListIcon
                spanClass="svyr-w-8 svyr-h-full"
                svgClass="svyr-fill-theme-on-surface svyr-h-6 svyr-w-6"
              />
              <span>List</span>
            </button>
          </div>

          <button
            id="btn-save"
            className="srvyr-button svyr-w-max svyr-rounded-full svyr-bg-theme-primary svyr-text-sm"
            onClick={() => {
              if (newPath.title === "") {
                showToast(
                  1500,
                  "Enter name for the path",
                  "bottom",
                  "center",
                  "bottom",
                  { x: 0, y: "80px" },
                  "rgb(187,33,36)"
                )
              } else if (newPath.title !== "" && newPath.data.length === 0) {
                showToast(
                  1500,
                  "Click some elements first",
                  "bottom",
                  "center",
                  "bottom",
                  { x: 0, y: "80px" },
                  "rgb(187,33,36)"
                )
              } else if (
                newPath.title !== "" &&
                newPath.data.length > 0 &&
                !recordedPaths.find(p => p.title === newPath.title)
              ) {
                setRecordedPaths(prev => [...prev, newPath])
                // localStorage.setItem("srvyr-paths", JSON.stringify(paths))
                setPage("viz")
              }
            }}>
            <SaveIcon
              spanClass="svyr-w-7 svyr-h-full"
              svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
            />
            <span>Save</span>
          </button>

          {/* <button
            id="btn-replay"
            onClick={() => setPage("viz")}
            className="srvyr-button svyr-w-max svyr-rounded-full svyr-border-[2px] svyr-border-theme-primary svyr-bg-transparent svyr-py-4 svyr-px-6 svyr-text-sm">
            <ExitIcon
              onClick={() => setPage("viz")}
              spanClass="svyr-w-7 svyr-h-full"
              svgClass=" svyr-h-5 svyr-w-5"
            />
            <span className="svyr-h-full svyr-w-max">Exit</span>
          </button> */}
          <ExitIcon
            onClick={() => setPage("viz")}
            spanClass="svyr-w-8 svyr-h-8"
            title="Exit"
          />
        </div>
      </div>
    </div>
  )
}

export default RecordingBody
