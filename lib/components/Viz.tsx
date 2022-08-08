import {
  DashboardPage,
  MappedTelemetry,
  Recording,
  UserPerformance,
} from "@/utils/types"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import clientStyle from "./dashboard.module.css"
import {
  DeleteIcon,
  EditIcon,
  LoadingIcon,
  PlayIcon,
  SearchIcon,
} from "./icons"

import Chart from "chart.js/auto"
import { Levenshtein } from "set-distance"

const GREY = "rgba(108, 105, 120, 1)"
const PRIMARY = "rgba(92, 56, 255, 1)"
const SURFACE = "rgb(31, 35, 37)"

export const VizBody: FC<{
  setPage: Dispatch<SetStateAction<DashboardPage>>
  setTelemetryIndex: Dispatch<SetStateAction<number>>
  selectedRec: Recording | null
  mappedTelemetry: MappedTelemetry | null
}> = ({ selectedRec, mappedTelemetry, setPage, setTelemetryIndex }) => {
  const [userPerformances, setUserPerformances] = useState<UserPerformance[]>(
    []
  )

  useEffect(() => {
    if (selectedRec && mappedTelemetry) {
      const designerSteps: string[] = []

      selectedRec.data.map(t => designerSteps.push(t.url + ":" + t.class))

      for (const [num, telemetry] of mappedTelemetry) {
        const userSteps: string[] = []
        telemetry.data.map(t => userSteps.push(t.url + ":" + t.class))
        const lastStep =
          telemetry.data.slice(-1)[0].url +
          ":" +
          telemetry.data.slice(-1)[0].class

        const st = new Levenshtein(
          // Needs to be put into a new array
          // because it adds 0 for some reason
          [...designerSteps],
          [...userSteps]
        ).getCoefficient()
        const lPercent = Math.max(0, (1 - st / designerSteps.length) * 100)

        if (lPercent > 0 && lastStep === designerSteps.slice(-1)[0])
          setUserPerformances(prev => [
            ...prev,
            { score: lPercent, telemetry: telemetry },
          ])

        // console.log(lPercent.toString() + "%")
        // console.log(lastStep + " === " + designerSteps.slice(-1)[0])
      }
    }
  }, [selectedRec, mappedTelemetry])

  useEffect(() => {
    if (userPerformances.length > 0) {
      const barChart = document.getElementById("barChart") as HTMLCanvasElement
      const dnChart = document.getElementById("dnChart") as HTMLCanvasElement

      Chart.defaults.font.family = "Inter Regular"
      Chart.defaults.color = GREY

      new Chart(barChart, {
        type: "bar",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [40, 50, 100],
              backgroundColor: [GREY, GREY, PRIMARY],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            // title: {
            //   display: true,
            //   text: "Custom Chart Title",
            // },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                borderColor: GREY,
              },
            },
            y: {
              ticks: {
                maxTicksLimit: 100,
                stepSize: 20,
              },
              grid: {
                display: false,
                borderColor: GREY,
              },
            },
          },
        },
      })
      new Chart(dnChart, {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [40, 50, 100],
              backgroundColor: [GREY, GREY, PRIMARY],
              hoverOffset: 4,
              borderWidth: 8,
              borderColor: SURFACE,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
        plugins: [
          {
            id: "centerText",
            afterDatasetDraw(chart) {
              const {
                ctx,
                chartArea: { top, width, height },
              } = chart

              ctx.save()
              const fontSize = (height / 114).toFixed(2)
              ctx.fillStyle = "rgba(92, 56, 255, 1)"
              ctx.font = fontSize + "em Inter Medium"
              ctx.textAlign = "center"

              ctx.fillText("10%", width / 2, height / 2 + top + 15)
            },
          },
        ],
      })
    }
  }, [userPerformances])

  return (
    selectedRec && (
      <>
        <div className={clientStyle.ccHeader}>
          <div className={clientStyle.ccHeaderL}>
            <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
            <h4 className="svyr-ml-3 svyr-font-inter-semibold">
              {selectedRec.title}
            </h4>
            <EditIcon
              spanClass="svyr-w-8 svyr-h-full svyr-ml-6"
              svgClass="svyr-stroke-theme-grey svyr-h-5 svyr-w-5"
            />
            <DeleteIcon
              spanClass="svyr-w-8 svyr-h-full"
              svgClass="svyr-stroke-theme-grey svyr-h-5 svyr-w-5"
            />
          </div>

          <button
            className={clientStyle.ccHeaderR}
            onClick={() => setPage("replay")}>
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

          {userPerformances.length > 0 && (
            <div className="svyr-flex svyr-h-full svyr-w-[95%] svyr-flex-row svyr-items-center svyr-gap-36 svyr-place-self-center">
              <div className="svyr-relative svyr-w-[80%]">
                <canvas id="barChart" />
              </div>

              <div className="svyr-relative svyr-grid svyr-w-[40%] svyr-gap-4">
                <canvas id="dnChart" />

                <div className="svyr-w-full svyr-bg-theme-container svyr-p-4 svyr-text-center svyr-font-inter-medium svyr-text-sm svyr-text-theme-on-surface">
                  <span className="svyr-inline svyr-text-theme-primary">
                    10% users
                  </span>{" "}
                  have successfully navigated to this page through the desired
                  path.
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={clientStyle.ccBodyBottom}>
          <h5 className="svyr-font-inter-semibold svyr-text-theme-grey">
            Recorded User Performance
          </h5>
          
          <div className="svyr-h-5/6 svyr-w-full svyr-overflow-y-auto svyr-overflow-x-hidden">
            {userPerformances &&
              userPerformances.map((up, i) => (
                <div
                  key={i}
                  className={clientStyle.pathDataContainer}
                  onClick={() => {
                    let key = 0
                    mappedTelemetry?.forEach((v, k) =>
                      v.id === up.telemetry.id && (key = k)
                    )
                    console.log(key)

                    setTelemetryIndex(key)
                    setPage("replay")
                  }}>
                  <h5>{up.score}%</h5>

                  {up.telemetry.data.map((d, i) => {
                    const page = d.url.split("/").pop()
                      ? d.url.split("/").pop()
                      : "/ "
                    return i === 0 ? (
                      <p key={i}>{page}</p>
                    ) : (
                      <p key={i}>&nbsp; &gt; {page} </p>
                    )
                  })}
                </div>
              ))}
          </div>
        </div>
      </>
    )
  )
}

export const VizNav: FC<{
  setPage: Dispatch<SetStateAction<DashboardPage>>
  selectedRec: Recording | null
  setSelectedRec: Dispatch<SetStateAction<Recording | null>>
  mappedTelemetry: MappedTelemetry | null
}> = ({ setPage, setSelectedRec, selectedRec, mappedTelemetry }) => {
  const [recordedPaths, setRecordedPaths] = useState<Recording[]>([])

  useEffect(() => {
    if (localStorage.hasOwnProperty("srvyr-paths")) {
      setRecordedPaths(JSON.parse(localStorage.getItem("srvyr-paths")!))
    }
  }, [])

  return mappedTelemetry ? (
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
        {recordedPaths && recordedPaths.length > 0 ? (
          recordedPaths.map((r, index) => (
            <div
              key={index}
              className={`svyr-mt-2 svyr-box-border svyr-w-full svyr-cursor-pointer svyr-select-none svyr-rounded-md svyr-bg-theme-container svyr-p-3 hover:svyr-bg-theme-selected [&>*:nth-child(2)]:hover:svyr-text-theme-on-surface ${
                selectedRec?.title === r.title && "svyr-bg-theme-selected"
              }`}
              onClick={() => setSelectedRec(r)}>
              <h5
                className={`svyr-break-words svyr-text-sm svyr-text-theme-on-surface ${
                  selectedRec?.title === r.title
                    ? "svyr-font-inter-semibold"
                    : "svyr-font-inter-medium"
                }`}>
                {r.title}
              </h5>
              <p
                className={`svyr-text-sm ${
                  selectedRec?.title === r.title
                    ? "svyr-text-theme-on-surface"
                    : "svyr-text-theme-grey"
                }`}>
                {r.data[r.data.length - 1].url}
              </p>
            </div>
          ))
        ) : (
          <span className="svyr-m-auto svyr-font-inter-medium svyr-text-sm svyr-text-theme-grey">
            Record a path to get started!
          </span>
        )}
      </div>

      <div className="svyr-mt-4 svyr-flex svyr-h-16 svyr-w-full svyr-justify-center">
        <button
          onClick={() => setPage("recording")}
          className="svyr-w-4/5 svyr-rounded-full svyr-text-sm">
          <PlayIcon
            svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
            spanClass="svyr-w-8 svyr-h-full"
          />
          <span>Record a new path</span>
        </button>
      </div>
    </>
  ) : (
    <div className="svyr-flex svyr-items-center svyr-gap-3 svyr-place-self-center">
      <LoadingIcon /> Fetching...
    </div>
  )
}
