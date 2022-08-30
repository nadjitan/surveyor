import { Levenshtein } from "set-distance"
import {
  fetchTelemetries,
  GREY,
  mapTelemetries,
  onClickElem,
  PRIMARY,
  SURFACE,
} from "../utils/dashboard"
import {
  AggregatedScore,
  DashboardPage,
  MappedTelemetry,
  Recording,
  UserPerformance,
} from "../utils/types"
import { dashboard, recording, replay, viz } from "./components"

import Chart from "chart.js/auto"

export class SurveyorDashboard {
  rootDiv: string
  apiUrl: string
  url: string
  page: DashboardPage
  selectedRec: Recording | null
  telemetryIndex: number
  mappedTelemetry: MappedTelemetry | null
  recordedPaths: Recording[]
  prevTimelineNode: HTMLElement | null

  constructor(rootDiv: string, apiUrl: string) {
    this.rootDiv = rootDiv
    this.apiUrl = apiUrl
    this.url = ""
    this.page = "viz"
    this.selectedRec = null
    this.telemetryIndex = 0
    this.mappedTelemetry = null
    this.recordedPaths = []
    this.prevTimelineNode = null
  }

  #render(child: string) {
    if (typeof window !== undefined) {
      this.prevTimelineNode = null
      const root = document.getElementById(this.rootDiv)!
      root.replaceChildren(dashboard(child))

      onClickElem("viz-page", () => this.#vizComponent())
      onClickElem("replay-page", () => this.#replayComponent())
    }
  }

  #vizComponent() {
    let filteredRecPaths = this.recordedPaths

    const initAS = new Map<AggregatedScore, number[]>([
      ["100%", []],
      ["75% - 99%", []],
      ["50% - 74%", []],
      ["1% - 49%", []],
    ])

    let userScores: UserPerformance[] = []

    let aggregatedScores = initAS

    let showModal = false
    let editTitle = false

    if (localStorage.hasOwnProperty("srvyr-paths")) {
      this.recordedPaths = JSON.parse(localStorage.getItem("srvyr-paths")!)
      filteredRecPaths = JSON.parse(localStorage.getItem("srvyr-paths")!)
    }

    const addToAggregatedScores = (num: number) => {
      if (num === 100) {
        aggregatedScores.get("100%")!.push(num)
      } else if (num >= 75 && num <= 99) {
        aggregatedScores.get("75% - 99%")!.push(num)
      } else if (num >= 50 && num <= 74) {
        aggregatedScores.get("50% - 74%")!.push(num)
      } else if (num >= 1 && num <= 49) {
        aggregatedScores.get("1% - 49%")!.push(num)
      }
    }
    const deleteRecording = (recTitle: string) => {
      let recordings: Recording[] = []

      if (localStorage.hasOwnProperty("srvyr-paths")) {
        recordings = JSON.parse(localStorage.getItem("srvyr-paths")!)
        const newRecordings = recordings.filter(
          ({ title }) => title !== recTitle
        )

        localStorage.setItem("srvyr-paths", JSON.stringify(newRecordings))
        this.recordedPaths = newRecordings
        showModal = false
        this.selectedRec = null
      }
    }
    const editRecName = () => {
      const titleInput = document.getElementById(
        "titleInput"
      ) as HTMLSpanElement
      let recordings: Recording[] = []

      if (localStorage.hasOwnProperty("srvyr-paths")) {
        recordings = JSON.parse(localStorage.getItem("srvyr-paths")!)
        const newRecordings = recordings.map(({ title, data }) => {
          if (title === this.selectedRec?.title)
            return { title: titleInput.innerText, data }

          return { title, data }
        })

        localStorage.setItem("srvyr-paths", JSON.stringify(newRecordings))
        this.recordedPaths = newRecordings
      }
    }

    this.#render(
      viz(this.recordedPaths!, filteredRecPaths, this.selectedRec).innerHTML
    )
    onClickElem("record-btn", () => this.#recordingComponent())

    const titleInput = document.getElementById("title-input")

    const recPathDivs = document.getElementsByClassName("rec-path-item")
    Array.from(recPathDivs).map(el => {
      const name = el.firstElementChild?.textContent
      el.addEventListener("click", () => {
        this.selectedRec = this.recordedPaths.find(rp => rp.title === name)!
        const designerSteps: string[] = []
        this.selectedRec.data.map(t =>
          designerSteps.push(t.url + ":" + t.class)
        )

        this.#vizComponent()

        for (const [_, telemetry] of this.mappedTelemetry!) {
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
            userScores.push({
              score: percentage,
              telemetry: telemetry,
            })
            addToAggregatedScores(percentage)
          }
        }

        document.getElementById("rec-path-datas")!.innerHTML = `
        ${userScores
          .map(
            up => `
        <div class="path-data-container"><h5>${up.score}%</h5>
        ${up.telemetry.data
          .map((d, i) => {
            const page = d.url.split("/").pop() ? d.url.split("/").pop() : "/ "
            return i === 0 ? `<p>${page}</p>` : `<p>&nbsp; &gt; ${page} </p>`
          })
          .join("")}</div>`
          )
          .join("")}
        `

        const barCanvas = document.getElementById(
          "bar-canvas"
        ) as HTMLCanvasElement
        const doughnutCanvas = document.getElementById(
          "doughnut-canvas"
        ) as HTMLCanvasElement

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

        const dnChartTextDiv = document.getElementById("dn-chart-text")
        if (aggregatedScores.get("75% - 99%")!.length > 0) {
          const p =
            (aggregatedScores.get("75% - 99%")!.length * 100) / dataLength
          percentage = p

          dnChartTextDiv!.innerHTML = `
          <span>${p}% users</span> had minor issues when navigating the website.`
        } else if (aggregatedScores.get("100%")!.length > 0) {
          const p = (aggregatedScores.get("100%")!.length * 100) / dataLength
          percentage = p

          dnChartTextDiv!.innerHTML = `
          <span>${p}% users</span> have successfully navigated through the desired path.`
        } else {
          dnChartTextDiv!.textContent = `
          Everyone had a hard time navigating the website.`
        }

        const bc = new Chart(barCanvas, {
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
        const dc = new Chart(doughnutCanvas, {
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
      })
    })
  }

  #replayComponent() {
    let filteredTelemetries = this.mappedTelemetry

    this.#render(
      replay(this.mappedTelemetry!, filteredTelemetries!, this.telemetryIndex!)
        .innerHTML
    )

    const searchTelemetries = (value: string) => {
      if (value !== "") {
        filteredTelemetries = new Map(
          [...this.mappedTelemetry!].filter(([k, tel]) =>
            tel.id.toLowerCase().includes(value)
          )
        )
      } else {
        filteredTelemetries = this.mappedTelemetry
      }

      this.#render(
        replay(
          this.mappedTelemetry!,
          filteredTelemetries!,
          this.telemetryIndex!
        ).innerHTML
      )
    }

    Array.from(document.getElementsByClassName("replay-rn-item")).map(
      (el, index) => {
        el.addEventListener("click", () => {
          this.telemetryIndex = index
          this.#replayComponent()
        })
      }
    )

    Array.from(document.getElementsByClassName("tl-node")).map((el, index) => {
      const iframe = document.getElementById(
        "svyr-website"
      )! as HTMLIFrameElement

      el.addEventListener("click", node => {
        if (this.prevTimelineNode) {
          this.prevTimelineNode.classList.remove("tl-node-selected")
        }

        const nodeEl = node.target as HTMLElement
        nodeEl.classList.add("tl-node-selected")
        iframe.src = this.mappedTelemetry!.get(this.telemetryIndex)?.data[
          index
        ].url!

        this.prevTimelineNode = nodeEl
      })
    })
  }

  #recordingComponent() {
    const root = document.getElementById(this.rootDiv)!
    root.replaceChildren(recording())

    onClickElem("btn-save", () => this.#vizComponent())
    onClickElem("btn-record-exit", () => this.#vizComponent())
  }

  run() {
    fetchTelemetries(this.apiUrl).then(d => {
      this.mappedTelemetry = mapTelemetries(d)
      // STARTING PAGE
      this.#vizComponent()
    })
  }
}
