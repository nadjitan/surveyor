import { MappedTelemetries, Telemetry } from "@/utils/types"
import { FC, useEffect, useState } from "react"
import { ChevronDownIcon, DeleteIcon, DownArrowIcon } from "./icons"
import clientStyle from "./dashboard.module.css"

import LazyObjectView from "lazy-object-view"

const DataBody: FC<{ apiUrl: string; mappedTelemetries: MappedTelemetries }> = ({
  apiUrl,
  mappedTelemetries,
}) => {
  const [telemetry, setTelemetry] = useState<Telemetry>()
  const [orderedList, setOrderedList] = useState<[number, Telemetry][]>([])
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const deleteTemplate = () =>
    fetch(apiUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ telemetries: selectedIds }),
    })

  useEffect(() => {
    if (telemetry) {
      const tdv = document.getElementById("telemetry-data-viewer")
      const lov = new LazyObjectView()

      if (tdv !== null) {
        tdv.innerHTML = ""
        lov.render(tdv, telemetry.data)
      }
    }
  }, [telemetry])

  useEffect(() => {
    if (mappedTelemetries) {
      setOrderedList(
        [...mappedTelemetries.entries()].sort(([numA, telA], [numB, telB]) => {
          const dateA = new Date(telA.startTime)
          const dateB = new Date(telB.startTime)
          if (dateA > dateB) return -1
          if (dateA < dateB) return 1
          return 0
        })
      )
    }
  }, [mappedTelemetries])

  useEffect(() => {
    if (orderedList) {
      const telIdInputs = document.getElementsByClassName("telemetry-id")
      let lastclicked = 0
      let shiftHeld = false

      window.onkeydown = event => {
        if (event.key === "Shift") shiftHeld = true
      }
      window.onkeyup = event => {
        if (event.key === "Shift") shiftHeld = false
      }

      Array.from(telIdInputs).map((el, index) => {
        el.addEventListener("click", elem => {
          const inputEl = elem.target as HTMLInputElement
          const elemId = inputEl.getAttribute("data-telemetry-id")!

          if (inputEl.checked) {
            if (shiftHeld) {
            } else {
              setSelectedIds(prev => [...prev, elemId])
            }

            lastclicked = index
          } else {
            if (shiftHeld) {
            } else {
              setSelectedIds(prev =>
                prev.filter(id => {
                  if (id !== elemId) return id
                })
              )
            }
          }
        })
      })

      return () => {
        window.onkeydown = null
        window.onkeyup = null
      }
    }
  }, [orderedList])

  const arrangeTelemetries = (value: string) => {
    const tels = [...mappedTelemetries.entries()]
    if (value === "Latest") {
      setOrderedList(
        tels.sort(([numA, telA], [numB, telB]) => {
          const dateA = new Date(telA.startTime)
          const dateB = new Date(telB.startTime)
          if (dateA > dateB) return -1
          if (dateA < dateB) return 1
          return 0
        })
      )
    } else if (value === "Oldest") {
      setOrderedList(
        tels.sort(([numA, telA], [numB, telB]) => {
          const dateA = new Date(telA.startTime)
          const dateB = new Date(telB.startTime)
          if (dateA > dateB) return 1
          if (dateA < dateB) return -1
          return 0
        })
      )
    } else if (value === "IdAscending") {
      setOrderedList(
        tels.sort(([numA, telA], [numB, telB]) => {
          if (telA.id > telB.id) return 1
          if (telA.id < telB.id) return -1
          return 0
        })
      )
    } else if (value === "IdDescending") {
      setOrderedList(
        tels.sort(([numA, telA], [numB, telB]) => {
          if (telA.id > telB.id) return -1
          if (telA.id < telB.id) return 1
          return 0
        })
      )
    } else if (value === "LongestData") {
      setOrderedList(
        tels.sort(([numA, telA], [numB, telB]) => {
          if (telA.data.length > telB.data.length) return -1
          if (telA.data.length < telB.data.length) return 1
          return 0
        })
      )
    } else if (value === "ShortestData") {
      setOrderedList(
        tels.sort(([numA, telA], [numB, telB]) => {
          if (telA.data.length > telB.data.length) return 1
          if (telA.data.length < telB.data.length) return -1
          return 0
        })
      )
    }
  }

  return (
    <>
      <main className={clientStyle.clientContent}>
        <div className="svyr-flex svyr-h-max svyr-w-full svyr-flex-row svyr-items-center svyr-justify-between">
          <div className="svyr-relative svyr-grid svyr-place-items-center">
            <select
              onChange={e => arrangeTelemetries(e.target.value)}
              className="svyr-m-0 svyr-h-full svyr-w-64 svyr-appearance-none svyr-rounded svyr-bg-theme-surface
              svyr-px-4
              svyr-py-2.5 svyr-font-inter-semibold
              svyr-text-theme-on-surface
            focus:svyr-border-blue-600 focus:svyr-outline-none"
              aria-label="Filter Telemtries"
              defaultValue={"Latest"}>
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
              <option value="IdAscending">ID ascending</option>
              <option value="IdDescending">ID descending</option>
              <option value="LongestData">Longest Data</option>
              <option value="ShortestData">Shortest Data</option>
            </select>

            <ChevronDownIcon
              spanClass="svyr-absolute svyr-right-4 svyr-h-6 svyr-w-6 svyr-pointer-events-none"
              svgClass="svyr-stroke-theme-on-surface"
            />
          </div>

          <button
            onClick={() => {
              if (selectedIds.length > 0) {
                deleteTemplate()
                setSelectedIds([])
                setOrderedList(prev =>
                  prev.filter(tel => !selectedIds.includes(tel[1].id))
                )
              }
            }}
            className={`svyr-font-poppins-bold svyr-bg-theme-error svyr-opacity-60 ${
              selectedIds.length > 0
                ? "svyr-opacity-100"
                : "svyr-cursor-not-allowed"
            }`}>
            DELETE [{selectedIds.length}]
          </button>
        </div>

        <div className="svyr-mt-4 svyr-max-h-full svyr-w-full">
          <table className="svyr-h-full svyr-w-full svyr-table-auto svyr-overflow-hidden svyr-text-left">
            <thead className="svyr-flex svyr-w-full svyr-flex-col svyr-items-center svyr-border-b-2 svyr-border-b-theme-grey">
              <tr className="svyr-mb-4 svyr-flex svyr-w-full svyr-text-theme-grey">
                <th className="svyr-w-12 svyr-text-center"></th>
                <th className="svyr-w-[250px] svyr-text-center">ID</th>
                <th className="svyr-flex-1">Data</th>
                <th className="svyr-w-56">Start Time</th>
                <th className="svyr-w-56">End Time</th>
              </tr>
            </thead>
            <tbody className="svyr-flex svyr-h-[70vh] svyr-flex-col svyr-items-center svyr-overflow-y-auto svyr-overflow-x-hidden">
              {orderedList &&
                [...orderedList].map(([num, data]) => {
                  const startTime = new Date(data.startTime)
                  const endTime = new Date(data.endTime)
                  return (
                    <tr
                      key={num}
                      onClick={() => setTelemetry(data)}
                      className={`svyr-flex svyr-w-full svyr-cursor-pointer svyr-items-center svyr-border-b-2 svyr-border-b-theme-surface svyr-py-4 hover:svyr-bg-theme-surface ${
                        telemetry?.id === data.id && "svyr-bg-theme-surface"
                      }`}>
                      <td className="svyr-grid svyr-w-12 svyr-place-items-center">
                        <input
                          data-telemetry-id={data.id}
                          type="checkbox"
                          className="telemetry-id svyr-h-5 svyr-w-5"
                        />
                      </td>
                      <td className="svyr-box-border svyr-w-[250px] svyr-break-words svyr-px-5 svyr-text-center svyr-text-sm">
                        {data.id}
                      </td>
                      <td className="line-clamp-2 svyr-box-border svyr-flex-1 svyr-pr-3 svyr-text-sm svyr-text-theme-grey">
                        {JSON.stringify(data.data)}
                      </td>
                      <td className="svyr-w-56">
                        {startTime.toLocaleString()}
                      </td>
                      <td className="svyr-w-56">{endTime.toLocaleString()}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </main>

      <nav className={clientStyle.rightNav}>
        {telemetry && (
          <div className="svyr-box-border svyr-grid svyr-w-full svyr-gap-4 svyr-break-words svyr-pr-2">
            <div className="svyr-break-words svyr-text-theme-grey">
              <span className="svyr-w-max svyr-rounded svyr-bg-theme-container svyr-py-[0.1rem] svyr-px-2 svyr-font-inter-semibold svyr-text-theme-grey">
                id{" "}
              </span>
              <code className="svyr-text-theme-on-surface">
                {telemetry?.id}
              </code>
            </div>

            <div className="svyr-text-theme-grey">
              <span className="svyr-w-max svyr-rounded svyr-bg-theme-container svyr-py-[0.1rem] svyr-px-2 svyr-font-inter-semibold svyr-text-theme-grey">
                startTime{" "}
              </span>
              <code className="svyr-text-theme-on-surface">
                {telemetry?.startTime}
              </code>
            </div>

            <div className="svyr-text-theme-grey">
              <span className="svyr-w-max svyr-rounded svyr-bg-theme-container svyr-py-[0.1rem] svyr-px-2 svyr-font-inter-semibold svyr-text-theme-grey">
                endTime{" "}
              </span>
              <code className="svyr-text-theme-on-surface">
                {telemetry?.endTime}
              </code>
            </div>

            <div className="svyr-text-theme-grey">
              <span className="svyr-w-max svyr-rounded svyr-bg-theme-container svyr-py-[0.1rem] svyr-px-2 svyr-font-inter-semibold svyr-text-theme-grey">
                data{" "}
              </span>
              <code
                id="telemetry-data-viewer"
                className="svyr-text-theme-on-surface"></code>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default DataBody

{
  /* <main class="">
  <div class="">
    <table class="">
      <thead class="">
        <tr class="">
          <th class=""></th>
          <th class="">ID</th>
          <th class="">Data</th>
          <th class="">Start Time</th>
          <th class="">End Time</th>
        </tr>
      </thead>
      <tbody class="">
        {mappedTelemetries &&
          [...mappedTelemetries].map(([num, data]) => {
            const startTime = new Date(data.startTime)
            const endTime = new Date(data.endTime)
            return (
              <tr
                class="">
                <td class="">
                  <input
                    type="checkbox"
                    data-telemetry-id={data.id}
                    class="telemetry-id"
                  />
                </td>
                <td class="">
                  {data.id}
                </td>
                <td class="line-clamp-2">
                  {JSON.stringify(data.data)}
                </td>
                <td class="">{startTime.toLocaleString()}</td>
                <td class="">{endTime.toLocaleString()}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  </div>
</main> */
}
