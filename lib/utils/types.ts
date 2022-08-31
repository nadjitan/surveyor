export type Telemetry = {
  id: string
  data: {
    url: string
    class: string
  }[]
  startTime: string
  endTime: string
}
export type DashboardPage = "viz" | "replay" | "recording" | "data"
export type MappedTelemetries = Map<number, Telemetry>
export type Recording = { title: string; data: Telemetry["data"] }
export type UserPerformance = { score: number; telemetry: Telemetry }
export type AggregatedScore = "100%" | "75% - 99%" | "50% - 74%" | "1% - 49%"
