import clientStyle from "./dashboard.module.css"
import { DashboardPage, MappedTelemetry, Recording } from "@/utils/types"
import { fetchTelemetries, initReplay, mapTelemetries } from "@/utils/dashboard"
import { DatabaseIcon, FilmIcon, PieChartIcon } from "./icons"
import { ReplayBody } from "./replay"
import { VizBody } from "./viz"
import RecordingBody from "./recording"

import { FC, useEffect, useState } from "react"
import DataBody from "./data"

/**
 * Import to a dedicated page for ```<iframe />``` to work
 */
const Client: FC<{ apiUrl: string; loadIframe?: boolean }> = ({
  apiUrl,
  loadIframe = true,
}) => {
  const [url, setUrl] = useState("")
  const [page, setPage] = useState<DashboardPage>("viz")

  const [selectedRec, setSelectedRec] = useState<Recording | null>(null)

  const [telemetryIndex, setTelemetryIndex] = useState(0)
  const [mappedTelemetry, setMappedTelemetry] =
    useState<MappedTelemetry | null>(null)

  const [recordedPaths, setRecordedPaths] = useState<Recording[]>([])

  useEffect(() => {
    fetchTelemetries(apiUrl).then(d => setMappedTelemetry(mapTelemetries(d)))
  }, [])

  useEffect(() => {
    if (page === "replay" && mappedTelemetry) {
      if (loadIframe) setUrl(window.location.origin)

      initReplay(mappedTelemetry!, telemetryIndex)
    }
  }, [page, mappedTelemetry, telemetryIndex])

  return page === "recording" ? (
    <RecordingBody setPage={setPage} />
  ) : (
    <div className={clientStyle.clientBody}>
      <nav className={clientStyle.leftNav}>
        <div onClick={() => setPage("viz")} className={clientStyle.lItem}>
          <PieChartIcon
            svgClass={`svyr-w-8 svyr-h-8 ${
              page !== "viz" && "svyr-stroke-theme-grey"
            }`}
          />
          <span
            className={`svyr-mt-1 ${page !== "viz" && "svyr-text-theme-grey"}`}>
            Viz
          </span>
        </div>
        <div onClick={() => setPage("replay")} className={clientStyle.lItem}>
          <FilmIcon
            svgClass={`svyr-w-8 svyr-h-8 ${
              page !== "replay" && "svyr-stroke-theme-grey"
            }`}
          />
          <span
            className={`svyr-mt-1 ${
              page !== "replay" && "svyr-text-theme-grey"
            }`}>
            Replay
          </span>
        </div>
        <div onClick={() => setPage("data")} className={clientStyle.lItem}>
          <DatabaseIcon
            svgClass={`svyr-w-8 svyr-h-8 ${
              page !== "data" && "svyr-stroke-theme-grey"
            }`}
          />
          <span
            className={`svyr-mt-1 ${
              page !== "data" && "svyr-text-theme-grey"
            }`}>
            Data
          </span>
        </div>
      </nav>

      {page === "viz" && (
        <VizBody
          setPage={setPage}
          setTelemetryIndex={setTelemetryIndex}
          selectedRec={selectedRec}
          mappedTelemetry={mappedTelemetry}
          setRecordedPaths={setRecordedPaths}
          setSelectedRec={setSelectedRec}
          recordedPaths={recordedPaths}
        />
      )}
      {page === "replay" && (
        <ReplayBody
          url={url}
          clicksData={mappedTelemetry?.get(telemetryIndex)!}
          mappedTelemetry={mappedTelemetry!}
          setMappedTelemetry={setMappedTelemetry}
          telemetryIndex={telemetryIndex}
          setTelemetryIndex={setTelemetryIndex}
        />
      )}
      {page === "data" && (
        <DataBody apiUrl={apiUrl} mappedTelemetry={mappedTelemetry!} />
      )}
    </div>
  )
}

export default Client
