import { FC, useEffect, useState } from "react"
import { DashboardPage, MappedClicks, Recording } from "@/utils/types"
import { fetchTelemetries, initReplay, mapTelemetries } from "../utils/client"
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
  const [page, setPage] = useState<DashboardPage>("recording")

  const [recordedPaths, setRecordedPaths] = useState<Recording[]>([
    {
      title: "About Page",
      data: [
        { url: "https://localhost:3000", class: "srvyr-VEXGgXLz" },
        { url: "http://localhost:3000/about", class: "srvyr-AYj8YOXp" },
      ],
    },
    {
      title: "Login Page",
      data: [
        { url: "https://localhost:3000", class: "srvyr-AYj8YOXp" },
        { url: "http://localhost:3000/about", class: "srvyr-zpjNVjDa" },
      ],
    },
  ])

  const [telemetryIndex, setTelemetryIndex] = useState(0)
  const [mappedClicks, setMappedClicks] = useState<MappedClicks | null>(null)

  useEffect(() => {
    fetchTelemetries(apiUrl).then(d => setMappedClicks(mapTelemetries(d)))
  }, [])

  useEffect(() => {
    if (page === "replay" && mappedClicks) {
      if (loadIframe) setUrl(window.location.origin)

      initReplay(mappedClicks!, telemetryIndex)
    }
  }, [page, mappedClicks, telemetryIndex])

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
          <VizBody />
        ) : (
          <ReplayBody
            url={url}
            clicksData={mappedClicks?.get(telemetryIndex)!}
          />
        )}
      </main>

      <nav className={clientStyle.rightNav}>
        {page === "viz" ? (
          <VizNav setPage={setPage} recordings={recordedPaths} />
        ) : (
          <ReplayNav
            mappedClicks={mappedClicks!}
            telemetryIndex={telemetryIndex}
            setTelemetryIndex={setTelemetryIndex}
          />
        )}
      </nav>
    </div>
  )
}

export default Client
