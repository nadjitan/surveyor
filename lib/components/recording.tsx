import { DashboardPage, Recording } from "@/utils/types"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import { ExitIcon, PauseIcon, PlayIcon, SaveIcon } from "./icons"

const RecordingBody: FC<{
  setPage: Dispatch<SetStateAction<DashboardPage>>
}> = ({ setPage }) => {
  useEffect(() => {
    const iframe = document.getElementById(
      "svyr-website-rec"
    ) as HTMLIFrameElement
    iframe.src = window.location.origin
    let iframeDoc: Document
    let url = iframe.src

    let path: Recording = { title: "", data: [] }
    let paths: Recording[] = []

    if (localStorage.hasOwnProperty("srvyr-paths")) {
      paths = JSON.parse(localStorage.getItem("srvyr-paths")!)
    }

    iframe.onload = () => {
      iframeDoc = iframe.contentDocument!

      const recordingTitle = document.getElementById(
        "input-recording-title"
      ) as HTMLInputElement
      const recordingStatus = document.getElementById(
        "recording-status"
      ) as HTMLDivElement
      const btnRecord = document.getElementById(
        "btn-record-play"
      ) as HTMLButtonElement
      const btnPause = document.getElementById(
        "btn-record-pause"
      ) as HTMLButtonElement
      const btnSave = document.getElementById("btn-save") as HTMLButtonElement

      function recordElems(e: MouseEvent) {
        const elem = e.target! as HTMLElement

        const targetClass =
          elem.className &&
          Array.from(elem.classList).find(c => c.startsWith("srvyr-"))

        // AVOID SEQUENCES OF SAME CLASSES
        if (targetClass && path.data.at(-1)?.class !== targetClass) {
          path.data.push({
            url: url,
            class: targetClass,
          })
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

      recordingTitle.onkeyup = e => {
        const elem = e.target! as HTMLInputElement
        path.title = elem.value
      }

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

      btnSave.onclick = () => {
        if (
          path.title !== "" &&
          path.data.length > 0 &&
          !paths.find(p => p.title === path.title)
        ) {
          paths.push(path)
          localStorage.setItem("srvyr-paths", JSON.stringify(paths))
          setPage("viz")
        }
      }
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
          <h4 className="svyr-font-semibold svyr-text-theme-primary">
            Recording...
          </h4>
        </div>

        <input
          id="input-recording-title"
          type="text"
          placeholder="Enter name of path..."
          className="svyr-box-border svyr-w-full svyr-rounded-full svyr-border-[2px] svyr-border-theme-surface svyr-bg-transparent svyr-p-4 svyr-pl-5 svyr-text-theme-on-surface focus:svyr-border-theme-on-surface"
        />

        <div className="svyr-flex svyr-items-center svyr-gap-4">
          <button
            id="btn-record-pause"
            className="svyr-w-max svyr-rounded-full svyr-bg-theme-primary-disabled svyr-text-sm">
            <PauseIcon
              spanClass="svyr-w-7 svyr-h-full"
              svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
            />
            <span className="svyr-h-full svyr-w-max">Pause</span>
          </button>
          <button
            id="btn-record-play"
            className="svyr-hidden svyr-w-max svyr-rounded-full svyr-text-sm">
            <PlayIcon
              spanClass="svyr-w-7 svyr-h-full"
              svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
            />
            <span>Record</span>
          </button>

          <button
            id="btn-save"
            className="svyr-w-max svyr-rounded-full svyr-text-sm">
            <SaveIcon
              spanClass="svyr-w-7 svyr-h-full"
              svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
            />
            <span>Save</span>
          </button>

          {/* <button
            id="btn-replay"
            onClick={() => setPage("viz")}
            className="svyr-w-max svyr-rounded-full svyr-border-[2px] svyr-border-theme-primary svyr-bg-transparent svyr-py-4 svyr-px-6 svyr-text-sm">
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
