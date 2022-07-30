import { DashboardPage, Recording } from "@/utils/types"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import clientStyle from "./dashboard.module.css"
import { DeleteIcon, EditIcon, PlayIcon, SearchIcon } from "./icons"

export const VizBody: FC<{
  selectedRec: Recording | null
}> = ({ selectedRec }) => {
  return (
    selectedRec && (
      <>
        <div className={clientStyle.ccHeader}>
          <div className={clientStyle.ccHeaderL}>
            <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
            <h4 className="svyr-ml-3 svyr-font-inter-semibold">
              {selectedRec.title}
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
          <h5 className="svyr-font-inter-semibold svyr-text-theme-grey">
            User Performance Chart
          </h5>
        </div>

        <div className={clientStyle.ccBodyBottom}>
          <h5 className="svyr-font-inter-semibold svyr-text-theme-grey">
            Recorded User Performance
          </h5>
          <div className="svyr-h-5/6 svyr-w-full svyr-overflow-y-auto svyr-overflow-x-hidden">
            <div className={clientStyle.pathDataContainer}>
              <h5>40%</h5>
              <p>home &gt; channels &gt; home &gt; store &gt; about</p>
            </div>
          </div>
        </div>
      </>
    )
  )
}

export const VizNav: FC<{
  setPage: Dispatch<SetStateAction<DashboardPage>>
  selectedRec: Recording | null
  setSelectedRec: Dispatch<SetStateAction<Recording | null>>
}> = ({ setPage, setSelectedRec, selectedRec }) => {
  const [recordedPaths, setRecordedPaths] = useState<Recording[]>([])

  useEffect(() => {
    if (localStorage.hasOwnProperty("srvyr-paths")) {
      setRecordedPaths(JSON.parse(localStorage.getItem("srvyr-paths")!))
    }
  }, [])

  return (
    <>
      <div className="svyr-h-24">
        <p className="svyr-font-inter-semibold svyr-text-sm svyr-text-theme-grey">
          Recorded Paths
        </p>
        <div className="svyr-mt-4 svyr-flex svyr-h-12 svyr-w-full svyr-flex-row svyr-overflow-hidden svyr-rounded-full svyr-border-[2px] svyr-border-theme-grey focus-within:svyr-border-theme-on-surface [&>*:nth-child(2)>*:nth-child(1)]:focus-within:svyr-fill-theme-on-surface">
          <input
            type="text"
            placeholder="Search a pathing..."
            className="svyr-box-border svyr-w-full svyr-bg-theme-surface svyr-p-4 svyr-text-theme-on-surface"
          />
          <SearchIcon
            svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
            spanClass="svyr-w-12 svyr-h-full"
          />
        </div>
      </div>

      <div className={clientStyle.rnContainer}>
        {recordedPaths && recordedPaths.length > 0 ? (
          recordedPaths.map((r, index) => (
            <div
              key={index}
              className={`svyr-mt-2 svyr-box-border svyr-w-full svyr-cursor-pointer svyr-select-none svyr-rounded-md svyr-bg-theme-container svyr-p-3 hover:svyr-bg-theme-selected [&>*:nth-child(2)]:hover:svyr-text-theme-on-surface ${
                selectedRec?.title === r.title && "svyr-bg-theme-selected"
              }`}
              onClick={() => setSelectedRec(r)}>
              <h5
                className={`svyr-break-words svyr-text-sm svyr-text-theme-on-surface ${
                  selectedRec?.title === r.title
                    ? "svyr-font-inter-semibold"
                    : "svyr-font-inter-medium"
                }`}>
                {r.title}
              </h5>
              <p
                className={`svyr-text-sm ${
                  selectedRec?.title === r.title
                    ? "svyr-text-theme-on-surface"
                    : "svyr-text-theme-grey"
                }`}>
                {r.data[r.data.length - 1].url}
              </p>
            </div>
          ))
        ) : (
          <span className="svyr-m-auto svyr-font-inter-medium svyr-text-sm svyr-text-theme-grey">
            Record a path to get started!
          </span>
        )}
      </div>

      <div className="svyr-mt-4 svyr-flex svyr-h-16 svyr-w-full svyr-justify-center">
        <button
          onClick={() => setPage("recording")}
          className="svyr-w-4/5 svyr-rounded-full svyr-text-sm">
          <PlayIcon
            svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
            spanClass="svyr-w-8 svyr-h-full"
          />
          <span>Record a new path</span>
        </button>
      </div>
    </>
  )
}
