export type Telemetry = {
  id: string
  data: {
    url: string
    class: string
  }[]
  startTime: string
  endTime: string
}
export type DashboardPage = "viz" | "replay" | "recording"
export type MappedClicks = Map<number, Telemetry>
export type Recording = { title: string; data: Telemetry["data"] }
