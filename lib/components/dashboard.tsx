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
  const [page, setPage] = useState<DashboardPage>("viz")

  const [selectedRec, setSelectedRec] = useState<Recording | null>(null)

  const [telemetryIndex, setTelemetryIndex] = useState(0)
  const [mappedTelemetries, setMappedTelemetries] =
    useState<MappedTelemetries | null>(null)

  const [recordedPaths, setRecordedPaths] = useState<Recording[]>([
    {
      title: "Login",
      data: [
        {
          url: "https://capstone-demo-site.vercel.app/",
          class: "srvyr-vNXrnX0q",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-ZqXOoqXA",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-KLjWqG32",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-2W3k7K3O",
        },
      ],
    },
    {
      title: "Register",
      data: [
        {
          url: "https://capstone-demo-site.vercel.app/",
          class: "srvyr-vNXrnX0q",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-ZpPZbdPx",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-ZqXOoqXA",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-KLjWqG32",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-AYj8YOXp",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-wB3wazjq",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-qVXLL8Xz",
        },
      ],
    },
    {
      title: "Forgot password",
      data: [
        {
          url: "https://capstone-demo-site.vercel.app/",
          class: "srvyr-vNXrnX0q",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-wB3wazjq",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-ZqXOoqXA",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-8V36GrPY",
        },
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
