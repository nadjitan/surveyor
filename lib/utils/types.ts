export type Telemetry = {
  id: string
  data: {
    url: string
    class: string
  }[]
}

export type MappedClicks = Map<number, Telemetry>

export type Recording = { title: string; data: Telemetry["data"] }
