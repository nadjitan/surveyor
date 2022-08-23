import clientStyle from "./dashboard.module.css"
import { DashboardPage, MappedTelemetry, Recording } from "@/utils/types"
import { fetchTelemetries, initReplay, mapTelemetries } from "@/utils/dashboard"
import { TempIcon } from "./icons"
import { ReplayBody } from "./replay"
import { VizBody } from "./viz"
import RecordingBody from "./recording"

import { FC, useEffect, useState } from "react"

/**
 * Import to a dedicated page for ```<iframe />``` to work
 */
const Client: FC<{ apiUrl: string; loadIframe?: boolean }> = ({
  apiUrl,
  loadIframe = true,
}) => {
  const [url, setUrl] = useState("")
  const [page, setPage] = useState<DashboardPage>("replay")

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
          <TempIcon svgClass="svyr-fill-theme-grey svyr-w-8 svyr-h-8" />
          <span>Data</span>
        </div>
        <div onClick={() => setPage("replay")} className={clientStyle.lItem}>
          <TempIcon svgClass="svyr-fill-theme-grey svyr-w-8 svyr-h-8" />
          <span>Replay</span>
        </div>
      </nav>

      {page === "viz" ? (
        <VizBody
          setPage={setPage}
          setTelemetryIndex={setTelemetryIndex}
          selectedRec={selectedRec}
          mappedTelemetry={mappedTelemetry}
          setRecordedPaths={setRecordedPaths}
          setSelectedRec={setSelectedRec}
          recordedPaths={recordedPaths}
        />
      ) : (
        <ReplayBody
          url={url}
          clicksData={mappedTelemetry?.get(telemetryIndex)!}
          mappedTelemetry={mappedTelemetry!}
          setMappedTelemetry={setMappedTelemetry}
          telemetryIndex={telemetryIndex}
          setTelemetryIndex={setTelemetryIndex}
        />
      )}
    </div>
  )
}

export default Client
