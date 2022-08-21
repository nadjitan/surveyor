import clientStyle from "./dashboard.module.css"
import {
  AggregatedScore,
  DashboardPage,
  MappedTelemetry,
  Recording,
  UserPerformance,
} from "@/utils/types"
import {
  DeleteIcon,
  EditIcon,
  LoadingIcon,
  PlayIcon,
  SaveIcon,
  SearchIcon,
} from "./icons"

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import Chart from "chart.js/auto"
import { Levenshtein } from "set-distance"
import { GREY, PRIMARY, SURFACE } from "@/utils/client"

const initAS = new Map<AggregatedScore, number[]>([
  ["100%", []],
  ["75% - 99%", []],
  ["50% - 74%", []],
  ["1% - 49%", []],
])

export const VizBody: FC<{
  setPage: Dispatch<SetStateAction<DashboardPage>>
  mappedTelemetry: MappedTelemetry | null
  setTelemetryIndex: Dispatch<SetStateAction<number>>
  selectedRec: Recording | null
  setSelectedRec: Dispatch<SetStateAction<Recording | null>>
  setRecordedPaths: Dispatch<SetStateAction<Recording[]>>
  recordedPaths: Recording[]
}> = ({
  setPage,
  mappedTelemetry,
  setTelemetryIndex,
  selectedRec,
  setSelectedRec,
  setRecordedPaths,
  recordedPaths,
}) => {
  // Calculated using Levenshtein Distance
  const [userScores, setUserScores] = useState<UserPerformance[]>([])

  const [filteredRecPaths, setfilteredRecPaths] = useState<Recording[]>([])

  const [aggregatedScores, setAggregatedScores] = useState(initAS)
  const [dnChartText, setDnChartText] = useState({ prercent: 0, text: "" })

  const [showModal, setShowModal] = useState(false)
  const [editTitle, setEditTitle] = useState(false)

  function getRecordedPaths() {
    if (localStorage.hasOwnProperty("srvyr-paths")) {
      setRecordedPaths(JSON.parse(localStorage.getItem("srvyr-paths")!))
      setfilteredRecPaths(JSON.parse(localStorage.getItem("srvyr-paths")!))
    }
  }
  function addToAggregatedScores(num: number) {
    if (num === 100) {
      setAggregatedScores(prev => {
        prev.get("100%")!.push(num)
        return prev
      })
    } else if (num >= 75 && num <= 99) {
      setAggregatedScores(prev => {
        prev.get("75% - 99%")!.push(num)
        return prev
      })
    } else if (num >= 50 && num <= 74) {
      setAggregatedScores(prev => {
        prev.get("50% - 74%")!.push(num)
        return prev
      })
    } else if (num >= 1 && num <= 49) {
      setAggregatedScores(prev => {
        prev.get("1% - 49%")!.push(num)
        return prev
      })
    }
  }
  function deleteRecording(recTitle: string) {
    let recordings: Recording[] = []

    if (localStorage.hasOwnProperty("srvyr-paths")) {
      recordings = JSON.parse(localStorage.getItem("srvyr-paths")!)
      const newRecordings = recordings.filter(({ title }) => title !== recTitle)

      localStorage.setItem("srvyr-paths", JSON.stringify(newRecordings))
      setRecordedPaths(newRecordings)
      setShowModal(false)
      setSelectedRec(null)
    }
  }
  function editRecName() {
    const titleInput = document.getElementById("titleInput") as HTMLSpanElement
    let recordings: Recording[] = []

    if (localStorage.hasOwnProperty("srvyr-paths")) {
      recordings = JSON.parse(localStorage.getItem("srvyr-paths")!)
      const newRecordings = recordings.map(({ title, data }) => {
        if (title === selectedRec?.title)
          return { title: titleInput.innerText, data }

        return { title, data }
      })

      localStorage.setItem("srvyr-paths", JSON.stringify(newRecordings))
      setRecordedPaths(newRecordings)
    }
  }
  function searchRecordedPaths(value: string) {
    if (value !== "") {
      setfilteredRecPaths(
        recordedPaths!.filter(rp => rp.title.toLowerCase().includes(value))
      )
    } else {
      setfilteredRecPaths(recordedPaths)
    }
  }

  useEffect(() => getRecordedPaths(), [])

  useEffect(() => {
    if (selectedRec && mappedTelemetry) {
      const designerSteps: string[] = []

      selectedRec.data.map(t => designerSteps.push(t.url + ":" + t.class))

      for (const [_, telemetry] of mappedTelemetry) {
        const userSteps: string[] = []
        telemetry.data.map(t => userSteps.push(t.url + ":" + t.class))
        const lastStep = `${telemetry.data.slice(-1)[0].url}:${
          telemetry.data.slice(-1)[0].class
        }`

        const st = new Levenshtein(
          // Needs to be put into a new array
          // because it adds 0 for some reason
          [...designerSteps],
          [...userSteps]
        ).getCoefficient()
        const percentage = Math.max(0, (1 - st / designerSteps.length) * 100)

        if (percentage > 0 && lastStep === designerSteps.slice(-1)[0]) {
          setUserScores(prev => [
            ...prev,
            { score: percentage, telemetry: telemetry },
          ])
          addToAggregatedScores(percentage)
        }
      }
    }
  }, [selectedRec, mappedTelemetry])

  useEffect(() => {
    if (userScores.length > 0) {
      const barChart = document.getElementById("barChart") as HTMLCanvasElement
      const dnChart = document.getElementById("dnChart") as HTMLCanvasElement

      Chart.defaults.font.family = "Inter Regular"
      Chart.defaults.color = GREY

      // CHART DATA
      let chartLabels: string[] = []
      let chartData: number[] = []
      let chartColors: string[] = []
      let dataLength = 0
      let percentage = 0
      for (const [key, arr] of aggregatedScores) {
        if (arr.length > 0) {
          chartLabels.push(key)
          chartData.push(arr.length)
          dataLength += arr.length
          if (key === "75% - 99%" || key === "100%") {
            chartColors.push(PRIMARY)
          } else {
            chartColors.push(GREY)
          }
        }
      }

      if (aggregatedScores.get("75% - 99%")!.length > 0) {
        const p = (aggregatedScores.get("75% - 99%")!.length * 100) / dataLength
        percentage = p
        setDnChartText({
          text: "had minor issues when navigating the website.",
          prercent: p,
        })
      } else if (aggregatedScores.get("100%")!.length > 0) {
        const p = (aggregatedScores.get("100%")!.length * 100) / dataLength
        percentage = p
        setDnChartText({
          text: "have successfully navigated through the desired path.",
          prercent: p,
        })
      } else {
        setDnChartText({
          text: "Everyone had a hard time navigating the website.",
          prercent: 0,
        })
      }

      const bc = new Chart(barChart, {
        type: "bar",
        data: {
          labels: chartLabels,
          datasets: [
            {
              // label: "My First Dataset",
              data: chartData,
              backgroundColor: chartColors,
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
                stepSize: 5,
              },
              grid: {
                display: false,
                borderColor: GREY,
              },
            },
          },
        },
      })
      const dc = new Chart(dnChart, {
        type: "doughnut",
        data: {
          labels: chartLabels,
          datasets: [
            {
              // label: "My First Dataset",
              data: chartData,
              backgroundColor: chartColors,
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

              ctx.fillText(
                percentage > 0 ? `${percentage}%` : "",
                width / 2,
                height / 2 + top + 15
              )
            },
          },
        ],
      })

      return () => {
        bc.destroy()
        dc.destroy()
        setAggregatedScores(initAS)
        setUserScores([])
      }
    }
  }, [userScores])

  return (
    <>
      <main className={clientStyle.clientContent}>
        {selectedRec && (
          <>
            <div
              className={`svyr-relative svyr-z-10 ${
                showModal ? "svyr-block" : "svyr-hidden"
              }`}
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true">
              <div
                id="modal-bg"
                className="svyr-fixed svyr-inset-0 svyr-bg-black svyr-bg-opacity-50 svyr-transition-opacity"
                onClick={() => setShowModal(false)}
              />
              <div className="svyr-fixed svyr-inset-0 svyr-z-10 svyr-overflow-y-auto">
                <div className="svyr-flex svyr-min-h-full svyr-items-end svyr-justify-center svyr-p-4 svyr-text-center sm:svyr-items-center sm:svyr-p-0">
                  {/* MODAL */}
                  <div className="svyr-relative svyr-transform svyr-overflow-hidden svyr-rounded-lg svyr-text-left svyr-shadow-xl svyr-transition-all sm:svyr-my-8 sm:svyr-w-full sm:svyr-max-w-lg">
                    <div className="svyr-bg-theme-background svyr-px-4 svyr-pt-5 svyr-pb-4 sm:svyr-p-6 sm:svyr-pb-4">
                      <h4 className="svyr-w-full svyr-text-center svyr-font-inter-medium">
                        Are you sure you want to delete?
                      </h4>

                      <div className="svyr-flex svyr-flex-row svyr-gap-4">
                        <button
                          className="svyr-font-poppins-medium svyr-col-span-6 svyr-mt-4 svyr-block svyr-w-full svyr-rounded-full svyr-border-[2px] svyr-border-theme-primary svyr-bg-theme-background svyr-p-2.5 svyr-text-sm svyr-text-theme-primary hover:svyr-bg-theme-primary hover:svyr-text-theme-surface"
                          onClick={() => deleteRecording(selectedRec.title)}>
                          Delete
                        </button>
                        <button
                          className="svyr-col-span-6 svyr-mt-4 svyr-block svyr-w-full svyr-rounded-full svyr-border-[2px] svyr-border-theme-primary svyr-bg-theme-primary svyr-p-2.5 svyr-font-inter-medium svyr-text-sm svyr-text-theme-surface"
                          onClick={() => setShowModal(false)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={clientStyle.ccHeader}>
              <div className={clientStyle.ccHeaderL}>
                <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>

                <span
                  id="titleInput"
                  className={`${
                    editTitle && "svyr-border-2 svyr-border-theme-grey"
                  } svyr-ml-3 svyr-h-[38px] svyr-w-max svyr-max-w-md svyr-overflow-x-auto svyr-overflow-y-hidden svyr-rounded-lg svyr-bg-transparent svyr-p-2 svyr-font-inter-semibold`}
                  contentEditable={editTitle ? true : false}
                  suppressContentEditableWarning={true}>
                  {selectedRec.title}
                </span>

                <SaveIcon
                  title="Save Title"
                  spanClass={`svyr-w-8 svyr-h-full svyr-ml-6 ${
                    editTitle ? "svyr-flex" : "svyr-hidden"
                  }`}
                  svgClass="svyr-fill-theme-grey svyr-h-5 svyr-w-5"
                  onClick={() => {
                    setEditTitle(false)
                    editRecName()
                  }}
                />
                <EditIcon
                  title="Edit Recording"
                  spanClass={`svyr-w-8 svyr-h-full svyr-ml-6 ${
                    !editTitle ? "svyr-flex" : "svyr-hidden"
                  }`}
                  svgClass="svyr-stroke-theme-grey svyr-h-5 svyr-w-5"
                  onClick={() => setEditTitle(true)}
                />
                <DeleteIcon
                  title="Delete Recording"
                  spanClass="svyr-w-8 svyr-h-full"
                  svgClass="svyr-stroke-theme-grey svyr-h-5 svyr-w-5"
                  onClick={() => setShowModal(true)}
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

              {userScores.length > 0 && (
                <div className="svyr-flex svyr-h-full svyr-w-[95%] svyr-flex-row svyr-items-center svyr-gap-36 svyr-place-self-center">
                  <div className="svyr-relative svyr-w-[80%]">
                    <canvas id="barChart" />
                  </div>

                  <div className="svyr-relative svyr-grid svyr-w-[40%] svyr-gap-4">
                    <canvas id="dnChart" />

                    <div className="svyr-w-full svyr-bg-theme-container svyr-p-4 svyr-text-center svyr-font-inter-medium svyr-text-sm svyr-text-theme-on-surface">
                      <span className="svyr-inline svyr-text-theme-primary">
                        {dnChartText.prercent}% users
                      </span>{" "}
                      {dnChartText.text}
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
                {userScores &&
                  userScores.map((up, i) => (
                    <div
                      key={i}
                      className={clientStyle.pathDataContainer}
                      onClick={() => {
                        let key = 0
                        mappedTelemetry?.forEach(
                          (v, k) => v.id === up.telemetry.id && (key = k)
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
        )}
      </main>

      <nav className={clientStyle.rightNav}>
        {mappedTelemetry ? (
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
                  onChange={e =>
                    searchRecordedPaths(e.target.value.toLowerCase())
                  }
                />
                <SearchIcon
                  svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
                  spanClass="svyr-w-12 svyr-h-full"
                />
              </div>
            </div>
            <div className={clientStyle.rnContainer}>
              {filteredRecPaths.length > 0 ? (
                filteredRecPaths.map((r, index) => (
                  <div
                    key={index}
                    className={`svyr-mt-2 svyr-box-border svyr-w-full svyr-cursor-pointer svyr-select-none svyr-rounded-md svyr-bg-theme-container svyr-p-3 hover:svyr-bg-theme-selected [&>*:nth-child(2)]:hover:svyr-text-theme-on-surface ${
                      selectedRec?.title === r.title && "svyr-bg-theme-selected"
                    }`}
                    onClick={() => {
                      if (r.title !== selectedRec?.title) {
                        setUserScores([])
                        setSelectedRec(r)
                      }
                    }}>
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
        )}
      </nav>
    </>
  )
}
