import { MappedTelemetry } from "@/utils/types"
import { FC } from "react"
import { DeleteIcon } from "./icons"

const DataBody: FC<{ mappedTelemetry: MappedTelemetry }> = ({
  mappedTelemetry,
}) => {
  return (
    <main
      className="svyr-box-border svyr-flex svyr-h-full svyr-max-h-screen svyr-min-h-screen svyr-min-w-full svyr-max-w-full svyr-auto-rows-auto svyr-flex-col svyr-overflow-x-hidden svyr-bg-theme-background svyr-p-8"
      style={{ gridColumn: "2 / span 3" }}>
      <div className="svyr-mt-4 svyr-max-h-full svyr-w-full">
        <table className="svyr-h-full svyr-w-full svyr-table-auto svyr-overflow-hidden svyr-text-left">
          <thead className="svyr-flex svyr-w-full svyr-flex-col svyr-items-center svyr-border-b-2 svyr-border-b-theme-grey">
            <tr className="svyr-mb-4 svyr-flex svyr-w-full">
              <th className="svyr-w-[250px] svyr-text-center">ID</th>
              <th className="svyr-flex-1">Data</th>
              <th className="svyr-w-56">Start Time</th>
              <th className="svyr-w-56">End Time</th>
              <th className="svyr-w-44 svyr-text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="svyr-flex svyr-h-[80vh] svyr-flex-col svyr-items-center svyr-overflow-y-auto svyr-overflow-x-hidden">
            {mappedTelemetry &&
              [...mappedTelemetry].map(([num, data]) => {
                const startTime = new Date(data.startTime)
                const endTime = new Date(data.endTime)
                return (
                  <tr
                    className={`svyr-flex svyr-w-full svyr-cursor-pointer svyr-items-center svyr-py-4`}>
                    <td className="svyr-box-border svyr-w-[250px] svyr-break-words svyr-px-5 svyr-text-center svyr-text-sm">
                      {data.id}
                    </td>
                    <td className="svyr-flex-1 svyr-text-sm">
                      {JSON.stringify(data.data)}
                    </td>
                    <td className="svyr-w-56">{startTime.toLocaleString()}</td>
                    <td className="svyr-w-56">{endTime.toLocaleString()}</td>
                    <td className="svyr-w-44">
                      <div className="svyr-flex svyr-flex-row svyr-justify-center svyr-gap-x-4">
                        <DeleteIcon
                          title="delete"
                          svgClass="svyr-w-8 svyr-h-8"
                        />
                      </div>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default DataBody

{
  /* <main
  className="svyr-box-border svyr-flex svyr-h-full svyr-max-h-screen svyr-min-h-screen svyr-min-w-full svyr-max-w-full svyr-auto-rows-auto svyr-flex-col svyr-overflow-x-hidden svyr-bg-theme-background svyr-p-8"
  style={{ gridColumn: "2 / span 3" }}>
  <div className="svyr-mt-4 svyr-max-h-full svyr-w-full">
    <table className="svyr-h-full svyr-w-full svyr-table-auto svyr-overflow-hidden svyr-text-left">
      <thead className="svyr-flex svyr-w-full svyr-flex-col svyr-items-center svyr-border-b-2 svyr-border-b-theme-grey">
        <tr className="svyr-mb-4 svyr-flex svyr-w-full">
          <th className="svyr-w-[250px] svyr-text-center">ID</th>
          <th className="svyr-flex-1">Data</th>
          <th className="svyr-w-56">Start Time</th>
          <th className="svyr-w-56">End Time</th>
          <th className="svyr-w-44 svyr-text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="svyr-flex svyr-h-[80vh] svyr-flex-col svyr-items-center svyr-overflow-y-auto svyr-overflow-x-hidden">
        {mappedTelemetry &&
          [...mappedTelemetry].map(([num, data]) => {
            const startTime = new Date(data.startTime)
            const endTime = new Date(data.endTime)
            return (
              <tr
                className={`svyr-flex svyr-w-full svyr-cursor-pointer svyr-items-center svyr-py-4`}>
                <td className="svyr-box-border svyr-w-[250px] svyr-break-words svyr-px-5 svyr-text-center svyr-text-sm">
                  {data.id}
                </td>
                <td className="svyr-flex-1 svyr-text-sm">
                  {JSON.stringify(data.data)}
                </td>
                <td className="svyr-w-56">{startTime.toLocaleString()}</td>
                <td className="svyr-w-56">{endTime.toLocaleString()}</td>
                <td className="svyr-w-44">
                  <div className="svyr-flex svyr-flex-row svyr-justify-center svyr-gap-x-4">
                    <DeleteIcon
                      title="delete"
                      svgClass="svyr-w-8 svyr-h-8"
                    />
                  </div>
                </td>
              </tr>
            )
          })}
      </tbody>
    </table>
  </div>
</main> */
}
