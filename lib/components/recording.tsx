import { DashboardPage, Recording } from "@/utils/types"
import {
  ExIcon,
  ExitIcon,
  ListIcon,
  PauseIcon,
  PlayIcon,
  SaveIcon,
} from "./icons"

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { showToast } from "@/utils/dashboard"

const RecordingBody: FC<{
  setPage: Dispatch<SetStateAction<DashboardPage>>
  setRecordedPaths: Dispatch<SetStateAction<Recording[]>>
  recordedPaths: Recording[]
}> = ({ setPage, recordedPaths, setRecordedPaths }) => {
  const [newPath, setNewPath] = useState<Recording>({ title: "", data: [] })
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    const iframe = document.getElementById(
      "svyr-website-rec"
    ) as HTMLIFrameElement
    iframe.src = window.location.origin
    let iframeDoc: Document
    let url = iframe.src

    // if (localStorage.hasOwnProperty("srvyr-paths")) {
    //   paths = JSON.parse(localStorage.getItem("srvyr-paths")!)
    // }

    iframe.onload = () => {
      iframeDoc = iframe.contentDocument!

      const recordingStatus = document.getElementById(
        "recording-status"
      ) as HTMLDivElement
      const btnRecord = document.getElementById(
        "btn-record-play"
      ) as HTMLButtonElement
      const btnPause = document.getElementById(
        "btn-record-pause"
      ) as HTMLButtonElement

      function recordElems(e: MouseEvent) {
        const elem = e.target! as HTMLElement

        const targetClass =
          elem.className &&
          Array.from(elem.classList).find(c => c.startsWith("srvyr-"))

        // AVOID SEQUENCES OF SAME CLASSES
        if (targetClass && newPath.data.at(-1)?.class !== targetClass) {
          setNewPath(prev => ({
            title: prev.title,
            data: [
              ...prev.data,
              {
                url: url,
                class: targetClass,
              },
            ],
          }))
        }

        // Required because SPA apps does not change the src of <iframe />
        if (
          elem.tagName === "A" &&
          elem.getAttribute("href")?.startsWith("/")
        ) {
          url = iframe.src.slice(0, -1) + elem.getAttribute("href")
        } else if (elem.tagName === "A") {
          url = elem.getAttribute("href")!
        }
      }
      iframeDoc.addEventListener("click", recordElems)

      btnRecord.onclick = () => {
        btnPause.style.display = "flex"
        btnRecord.style.display = "none"
        recordingStatus.style.display = "flex"
        iframeDoc.addEventListener("click", recordElems)
      }

      btnPause.onclick = () => {
        btnPause.style.display = "none"
        btnRecord.style.display = "flex"
        recordingStatus.style.display = "none"
        iframeDoc.removeEventListener("click", recordElems)
      }
      // const btnExit = document.getElementById(
      //   "btn-exit"
      // ) as HTMLButtonElement
    }
  }, [])

  return (
    <div className="svyr-grid svyr-place-items-center">
      <iframe id="svyr-website-rec" className="svyr-h-screen svyr-w-full" />

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
                      <p className="svyr-w-full svyr-cursor-pointer svyr-rounded-l-md svyr-bg-black svyr-bg-opacity-0 svyr-p-2 svyr-text-sm hover:svyr-bg-opacity-60">
                        {np.class}
                      </p>
                      <ExIcon
                        spanClass="svyr-h-full svyr-p-2 svyr-rounded-r-md svyr-bg-black svyr-cursor-pointer svyr-bg-opacity-20"
                        svgClass="svyr-fill-theme-on-surface svyr-h-4 svyr-w-4"
                        onClick={() => {
                          setNewPath(prev => ({
                            ...prev,
                            data: prev.data.filter(d => d.class !== np.class),
                          }))
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
                spanClass="svyr-w-7 svyr-h-full"
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
                  { x: 0, y: "80px" }
                )
              } else if (newPath.title !== "" && newPath.data.length === 0) {
                showToast(
                  1500,
                  "Click some elements first",
                  "bottom",
                  "center",
                  "bottom",
                  { x: 0, y: "80px" }
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
