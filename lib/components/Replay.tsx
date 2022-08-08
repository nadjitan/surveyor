import { Dispatch, FC, SetStateAction } from "react"
import { MappedTelemetry, Telemetry } from "@/utils/types"
import clientStyle from "./dashboard.module.css"
import { LoadingIcon, PlayIcon, SearchIcon, StopIcon } from "./icons"

export const ReplayBody: FC<{
  clicksData: Telemetry
  url: string
}> = ({ clicksData, url }) => {
  return (
    <>
      {clicksData ? (
        <>
          <div className="svyr-flex svyr-w-full svyr-justify-between">
            <div className="svyr-flex svyr-flex-row svyr-items-center svyr-justify-center">
              <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
              <h4 className="svyr-ml-3 svyr-font-inter-semibold">
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
              className="svyr-hidden svyr-w-max svyr-rounded-full svyr-bg-theme-primary-disabled svyr-text-sm">
              <StopIcon
                spanClass="svyr-w-7 svyr-h-full"
                svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
              />
              <span>Stop</span>
            </button>
          </div>
          <div className="svyr-relative svyr-mt-8 svyr-grid svyr-h-full svyr-w-full svyr-border svyr-border-theme-surface">
            <iframe
              id="svyr-website"
              src={url}
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
                {clicksData.data.map((c, i) => (
                  <div className="svyr-ml-4 svyr-h-max svyr-w-max" key={i}>
                    <div className="svyr-tl-node svyr-h-4 svyr-w-4 svyr-rotate-45 svyr-cursor-pointer svyr-border-[2px] svyr-border-theme-grey svyr-bg-theme-surface hover:svyr-bg-theme-on-surface" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <span className="text-theme-grey m-auto text-sm font-inter-medium">
          Loading...
        </span>
      )}
    </>
  )
}

export const ReplayNav: FC<{
  mappedTelemetry: MappedTelemetry
  telemetryIndex: number
  setTelemetryIndex: Dispatch<SetStateAction<number>>
}> = ({ mappedTelemetry, telemetryIndex, setTelemetryIndex }) => {
  return mappedTelemetry ? (
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
          />
          <SearchIcon
            svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
            spanClass="svyr-w-12 svyr-h-full"
          />
        </div>
      </div>

      <div className={clientStyle.rnContainer}>
        {[...mappedTelemetry].map(([num, data]) => (
          <div
            onClick={() => setTelemetryIndex(num)}
            key={num}
            className={`svyr-mt-2 svyr-box-border svyr-w-full svyr-cursor-pointer svyr-select-none svyr-rounded-md svyr-bg-theme-container svyr-p-3 hover:svyr-bg-theme-selected [&>*:nth-child(2)]:hover:svyr-text-theme-on-surface ${
              num === telemetryIndex ? " svyr-bg-theme-selected" : ""
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
  )
}
