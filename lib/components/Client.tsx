import { FC, PropsWithChildren, useEffect, useRef, useState } from "react"
import { TempIcon } from "./icons"
import clientStyle from "./Client.module.css"
import {
  mapTelemetries,
  startClient,
  fetchTelemetries,
} from "../utils/utilsSurveyor"
import { VizBody, VizNav } from "./Viz"
import { ReplayBody, ReplayNav } from "./Replay"
import { Recording, Telemetry } from "../utils/types"

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
  const mappedClicks = mapTelemetries([
    {
      id: "37aed957-bcbd-4ecd-9eec-fb1d9933ee20",
      data: [
        { url: "http://localhost:3000/", class: "srvyr-ZpPZbdPx" },
        { url: "http://localhost:3000/", class: "srvyr-VEXGgXLz" },
        { url: "http://localhost:3000/about", class: "srvyr-AYj8YOXp" },
        { url: "http://localhost:3000/about", class: "srvyr-zpjNoVXD" },
        { url: "http://localhost:3000/about", class: "srvyr-zpjNVjDa" },
        { url: "http://localhost:3000/login", class: "srvyr-9kPYa6Pw" },
        { url: "http://localhost:3000/login", class: "srvyr-qVXLL8Xz" },
        { url: "http://localhost:3000/login", class: "srvyr-ax37YqjE" },
      ],
    },
  ])

  // useEffect(() => {
  //   fetchTelemetries(apiUrl).then(d => setTelemetries(d))
  // }, [])

  useEffect(() => {
    if (page === "replay") {
      if (loadIframe) setUrl(window.location.origin)

      startClient(mappedClicks, telemetryIndex)
    }
  }, [page])

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
            mappedClicks={mappedClicks}
            url={url}
            telemetryIndex={telemetryIndex}
          />
        )}
      </main>

      <nav className={clientStyle.rightNav}>
        {page === "data" ? (
          <VizNav recordings={recordedPaths} />
        ) : (
          <ReplayNav mappedClicks={mappedClicks} />
        )}
      </nav>
    </div>
  )
}

export default Client
