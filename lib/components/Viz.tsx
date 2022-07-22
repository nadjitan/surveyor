import { Recording, Telemetry } from "@/utils/types"
import { FC } from "react"
import clientStyle from "./Client.module.css"
import { DeleteIcon, EditIcon, PlayIcon, SearchIcon } from "./icons"

export const VizBody: FC = () => {
  return (
    <>
      <div className={clientStyle.ccHeader}>
        <div className={clientStyle.ccHeaderL}>
          <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
          <h4 className="svyr-ml-3 svyr-font-inter-semibold">About Page</h4>
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
}

export const VizNav: FC<{
  recordings: Recording[]
}> = ({ recordings }) => {
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
        {/* <span className="svyr-text-theme-grey svyr-m-auto svyr-text-sm svyr-font-inter-medium">
            Record a path to get started!
          </span> */}
        {recordings &&
          recordings.map(r => (
            <div className={clientStyle.rnItem}>
              <h5>{r.title}</h5>
              <p>{r.data[r.data.length - 1].url}</p>
            </div>
          ))}
      </div>

      <div className="svyr-mt-4 svyr-flex svyr-h-16 svyr-w-full svyr-justify-center">
        <button className="svyr-w-4/5 svyr-rounded-full svyr-text-sm">
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
