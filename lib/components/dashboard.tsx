import { FC, useEffect, useState } from "react"
import { DashboardPage, MappedTelemetry, Recording } from "@/utils/types"
import { fetchTelemetries, initReplay, mapTelemetries } from "@/utils/client"
import clientStyle from "./dashboard.module.css"
import { StopIcon, TempIcon } from "./icons"
import { ReplayBody, ReplayNav } from "./replay"
import { VizBody, VizNav } from "./viz"
import RecordingBody from "./recording"

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

      <main className={clientStyle.clientContent}>
        {/* <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
        <iframe id="svyr-website" src={url} className="svyr-border svyr-h-full svyr-box-border" /> */}

        {page === "viz" ? (
          <VizBody
            setPage={setPage}
            setTelemetryIndex={setTelemetryIndex}
            selectedRec={selectedRec}
            mappedTelemetry={mappedTelemetry}
          />
        ) : (
          <ReplayBody
            url={url}
            clicksData={mappedTelemetry?.get(telemetryIndex)!}
          />
        )}
      </main>

      <nav className={clientStyle.rightNav}>
        {page === "viz" ? (
          <VizNav
            setPage={setPage}
            selectedRec={selectedRec}
            setSelectedRec={setSelectedRec}
            mappedTelemetry={mappedTelemetry}
          />
        ) : (
          <ReplayNav
            mappedTelemetry={mappedTelemetry!}
            telemetryIndex={telemetryIndex}
            setTelemetryIndex={setTelemetryIndex}
          />
        )}
      </nav>
    </div>
  )
}

export default Client
