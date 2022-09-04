import clientStyle from "./dashboard.module.css"
import { DashboardPage, MappedTelemetries, Recording } from "@/utils/types"
import { fetchTelemetries, mapTelemetries } from "@/utils/dashboard"
import { DatabaseIcon, FilmIcon, PieChartIcon } from "./icons"
import { ReplayBody } from "./replay"
import { VizBody } from "./viz"
import RecordingBody from "./recording"
import "toastify-js/src/toastify.css"

import { FC, useEffect, useState } from "react"
import DataBody from "./data"

/**
 * Import to a dedicated page for ```<iframe />``` to work
 */
const Client: FC<{ apiUrl: string }> = ({ apiUrl }) => {
  const [page, setPage] = useState<DashboardPage>("replay")

  const [selectedRec, setSelectedRec] = useState<Recording | null>(null)

  const [telemetryIndex, setTelemetryIndex] = useState(0)
  const [mappedTelemetries, setMappedTelemetries] =
    useState<MappedTelemetries | null>(null)

  const [recordedPaths, setRecordedPaths] = useState<Recording[]>([
    {
      title: "Login",
      data: [
        { url: "http://localhost:3000/", class: "srvyr-zpjNVjDa" },
        { url: "http://localhost:3000/login", class: "srvyr-ZpPZbdPx" },
        { url: "http://localhost:3000/login", class: "srvyr-kq3Vd6jR" },
        { url: "http://localhost:3000/login", class: "srvyr-JvPMMKP4" },
      ],
    },
    {
      title: "Some Other Path",
      data: [
        { url: "http://localhost:3000/", class: "srvyr-gaPlpPVK" },
        { url: "http://localhost:3000/signup", class: "srvyr-YnXm23N7" },
      ],
    },
  ])

  useEffect(() => {
    fetchTelemetries(apiUrl).then(d => setMappedTelemetries(mapTelemetries(d)))
  }, [])

  return page === "recording" ? (
    <RecordingBody
      recordedPaths={recordedPaths}
      setRecordedPaths={setRecordedPaths}
      setPage={setPage}
    />
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
          mappedTelemetries={mappedTelemetries}
          setRecordedPaths={setRecordedPaths}
          setSelectedRec={setSelectedRec}
          recordedPaths={recordedPaths}
        />
      )}
      {page === "replay" && (
        <ReplayBody
          mappedTelemetries={mappedTelemetries!}
          telemetryIndex={telemetryIndex}
        />
      )}
      {page === "data" && (
        <DataBody
          apiUrl={apiUrl}
          setMappedTelemetries={setMappedTelemetries}
          mappedTelemetries={mappedTelemetries!}
        />
      )}
    </div>
  )
}

export default Client
