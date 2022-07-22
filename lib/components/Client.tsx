import { FC, PropsWithChildren, useEffect, useRef, useState } from "react"
import { TempIcon } from "./icons"
import clientStyle from "./Client.module.css"
import {
  mapTelemetries,
  initReplay,
  fetchTelemetries,
} from "../utils/utilsClient"
import { VizBody, VizNav } from "./Viz"
import { ReplayBody, ReplayNav } from "./Replay"
import { MappedClicks, Recording, Telemetry } from "../utils/types"

/**
 * Import to a dedicated page for ```<iframe />``` to work
 */
const Client: FC<{ apiUrl: string; loadIframe?: boolean }> = ({
  apiUrl,
  loadIframe = true,
}) => {
  const [url, setUrl] = useState("")
  const [page, setPage] = useState<"data" | "replay">("replay")

  const [recordedPaths, setRecordedPaths] = useState<Recording[]>([
    {
      title: "About Page",
      data: [
        { url: "https://localhost:3000", class: "srvyr-VEXGgXLz" },
        { url: "http://localhost:3000/about", class: "srvyr-AYj8YOXp" },
      ],
    },
    {
      title: "About Page",
      data: [
        { url: "https://localhost:3000", class: "srvyr-VEXGgXLz" },
        { url: "http://localhost:3000/about", class: "srvyr-AYj8YOXp" },
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

  return (
    <div className={clientStyle.clientBody}>
      <nav className={clientStyle.leftNav}>
        <div onClick={() => setPage("data")} className={clientStyle.lItem}>
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

        {page === "data" ? (
          <VizBody />
        ) : (
          <ReplayBody
            mappedClicks={mappedClicks!}
            url={url}
            telemetryIndex={telemetryIndex}
          />
        )}
      </main>

      <nav className={clientStyle.rightNav}>
        {page === "data" ? (
          <VizNav recordings={recordedPaths} />
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
