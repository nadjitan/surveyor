import {
  fetchTelemetries,
  mapTelemetries,
  onClickElem,
} from "../utils/dashboard"
import { DashboardPage, MappedTelemetry, Recording } from "../utils/types"
import { dashboard, recording, replay, viz } from "./components"

export class SurveyorDashboard {
  apiUrl: string
  url: string
  page: DashboardPage
  selectedRec: Recording | null
  telemetryIndex: number
  mappedTelemetry: MappedTelemetry | null
  recordedPaths: Recording[]

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
    this.url = ""
    this.page = "viz"
    this.selectedRec = null
    this.telemetryIndex = 0
    this.mappedTelemetry = null
    this.recordedPaths = []
  }

  #render(child: string) {
    const root = document.getElementById("root")!
    root.replaceChildren(dashboard(child))

    onClickElem("viz-page", () => this.#vizComponent())
    onClickElem("replay-page", () => this.#replayComponent())
  }

  #vizComponent() {
    let filteredRecPaths = this.recordedPaths
    let selectedRec: Recording | null = null

    if (localStorage.hasOwnProperty("srvyr-paths")) {
      this.recordedPaths = JSON.parse(localStorage.getItem("srvyr-paths")!)
      filteredRecPaths = JSON.parse(localStorage.getItem("srvyr-paths")!)
    }

    this.#render(
      viz(this.recordedPaths!, filteredRecPaths, selectedRec).innerHTML
    )
    onClickElem("record-btn", () => this.#recordingComponent())
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
  }

  #recordingComponent() {
    const root = document.getElementById("root")!
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
