import { fetchTelemetries, mapTelemetries } from "../utils/client"
import { DashboardPage, MappedTelemetry, Recording } from "../utils/types"
import { dashboard, replay, viz } from "./components"

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

  #render(el: string) {
    const root = document.getElementsByTagName("body")[0]
    root.appendChild(dashboard(el))
  }

  #vizComponent() {
    this.#render(viz().innerHTML)
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
        this.#render(
          replay(
            this.mappedTelemetry!,
            filteredTelemetries!,
            this.telemetryIndex!
          ).innerHTML
        )
      } else {
        filteredTelemetries = this.mappedTelemetry
      }
    }
  }

  run() {
    fetchTelemetries(this.apiUrl).then(d => {
      this.mappedTelemetry = mapTelemetries(d)
      console.table(this.mappedTelemetry)

      this.#replayComponent()
    })
  }
}
