import { FC, PropsWithChildren, useEffect, useState } from "react"
import { DeleteIcon, EditIcon, PlayIcon, SearchIcon, TempIcon } from "./icons"
import React from "react"
// import { clientBody } from "./Client.module.css"

/**
 * Import to a dedicated page for ```<iframe />``` to work
 *
 * @returns void
 */
const Client: FC<PropsWithChildren<{}>> = () => {
  const [url, setUrl] = useState("")
  const [page, setPage] = useState<"data" | "replay">("replay")

  // useEffect(() => setUrl(window.location.origin), [])

  return (
    <div
      className="min-h-screen w-full grid text-theme-on-background"
      style={{
        gridTemplateColumns: "80px 1fr 350px",
        // gridTemplateRows: "auto 150px",
        gridTemplateAreas: `
        'lnav content rnav'
        'lnav content rnav'
        `,
      }}>
      <nav
        className="max-h-screen min-h-screen bg-theme-surface flex flex-col"
        style={{ gridArea: "lnav" }}>
        <div
          onClick={() => setPage("data")}
          className="flex flex-col items-center justify-center w-full h-16 cursor-pointer py-10 mt-4">
          <TempIcon svgClass="fill-theme-grey w-8 h-8" />
          <span>Data</span>
        </div>
        <div
          onClick={() => setPage("replay")}
          className="flex flex-col items-center justify-center w-full h-16 cursor-pointer py-10">
          <TempIcon svgClass="fill-theme-grey w-8 h-8" />
          <span>Replay</span>
        </div>
      </nav>

      <main
        className="max-h-screen min-h-screen box-border p-8 flex flex-col h-full bg-theme-background"
        style={{
          gridArea: "content",
        }}>
        {/* <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
        <iframe id="srvyr-website" src={url} className="border h-full box-border" /> */}

        {page === "data" ? (
          <>
            <div className="w-full justify-between flex">
              <div className="flex flex-row justify-center items-center">
                <div className="h-[24px] w-1 bg-theme-primary"></div>
                <h4 className="font-inter-semibold ml-3">About Page</h4>
                <EditIcon
                  spanClass="w-8 h-full ml-6"
                  svgClass="stroke-theme-grey h-5 w-5"
                />
                <DeleteIcon
                  spanClass="w-8 h-full"
                  svgClass="stroke-theme-grey h-5 w-5"
                />
              </div>

              <button className="w-48 rounded-full text-sm">
                <PlayIcon
                  spanClass="w-7 h-full"
                  svgClass="fill-theme-on-surface h-5 w-5"
                />
                <span>Play a Recording</span>
              </button>
            </div>

            <div className="bg-theme-surface h-full w-full box-border p-6 mt-8">
              <h5 className="text-theme-grey font-inter-semibold">
                User Performance Chart
              </h5>
            </div>

            <div className="bg-theme-surface h-96 w-full overflow-hidden box-border p-6 mt-4">
              <h5 className="text-theme-grey font-inter-semibold">
                Recorded User Performance
              </h5>
              <div className="h-5/6 w-full overflow-x-hidden overflow-y-auto">
                <div className="bg-theme-container flex flex-row p-3 items-center mt-2 rounded-md">
                  <h5 className="text-theme-on-surface font-inter-semibold w-14">
                    100%
                  </h5>
                  <p className="text-theme-on-surface text-sm">
                    home &gt; about
                  </p>
                </div>
                <div className="bg-theme-container flex flex-row p-3 items-center mt-2 rounded-md">
                  <h5 className="text-theme-on-surface font-inter-semibold w-14">
                    40%
                  </h5>
                  <p className="text-theme-on-surface text-sm">
                    home &gt; channels &gt; home &gt; store &gt; about
                  </p>
                </div>
                <div className="bg-theme-container flex flex-row p-3 items-center mt-2 rounded-md">
                  <h5 className="text-theme-on-surface font-inter-semibold w-14">
                    10%
                  </h5>
                  <p className="text-theme-on-surface text-sm">
                    home &gt; store &gt; channels &gt; contact us &gt; home &gt;
                    about
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full justify-between flex">
              <div className="flex flex-row justify-center items-center">
                <div className="h-[24px] w-1 bg-theme-primary"></div>
                <h4 className="font-inter-semibold ml-3">
                  37aed957-bcbd-4ecd-9eec-fb1d9933ee20
                </h4>
              </div>

              <button className="w-28 rounded-full text-sm">
                <PlayIcon
                  spanClass="w-7 h-full"
                  svgClass="fill-theme-on-surface h-5 w-5"
                />
                <span>Play</span>
              </button>
            </div>

            <iframe src="" className="border w-full h-full mt-8"></iframe>

            <div className="bg-theme-surface h-40 w-full overflow-hidden box-border p-6 mt-4">
              <h5 className="text-theme-grey font-inter-semibold">Timeline</h5>
            </div>
          </>
        )}
      </main>

      <nav
        className="max-h-screen min-h-screen box-border p-8 flex flex-col bg-theme-surface overflow-hidden"
        style={{
          gridArea: "rnav",
        }}>
        {page === "data" ? (
          <>
            <div className="h-24">
              <p className="text-theme-grey text-sm font-inter-semibold">
                Recorded Paths
              </p>
              <div className="flex flex-row w-full h-12 mt-4 overflow-hidden rounded-full border-[2px] border-theme-grey">
                <input
                  type="text"
                  placeholder="Search a pathing..."
                  className="w-full bg-theme-surface text-theme-on-surface box-border p-4"
                />
                <SearchIcon
                  svgClass="fill-theme-grey h-6 w-6"
                  spanClass="w-12 h-full"
                />
              </div>
            </div>

            <div className="flex flex-col overflow-x-hidden overflow-y-auto h-full w-full mt-2 overflow-hidden">
              {/* <span className="text-theme-grey m-auto text-sm font-inter-medium">
            Record a path to get started!
          </span> */}
              <div className="bg-theme-selected w-full box-border p-3 rounded-md mt-2 select-none cursor-pointer hover:bg-theme-selected [&>*:nth-child(2)]:hover:text-theme-on-surface">
                <h5 className="text-theme-on-surface text-sm font-inter-medium">
                  About Page
                </h5>
                <p className="text-theme-on-surface text-sm text">
                  demopage.com/channels/about
                </p>
              </div>
              <div className="w-full box-border p-3 bg-theme-container rounded-md mt-2 select-none cursor-pointer hover:bg-theme-selected [&>*:nth-child(2)]:hover:text-theme-on-surface">
                <h5 className="text-theme-on-surface text-sm font-inter-medium">
                  About Page
                </h5>
                <p className="text-theme-grey text-sm text">
                  demopage.com/channels/about
                </p>
              </div>
              <div className="w-full box-border p-3 bg-theme-container rounded-md mt-2 select-none cursor-pointer hover:bg-theme-selected [&>*:nth-child(2)]:hover:text-theme-on-surface">
                <h5 className="text-theme-on-surface text-sm font-inter-medium">
                  Channels Page
                </h5>
                <p className="text-theme-grey text-sm text">
                  demopage.com/channels
                </p>
              </div>
            </div>

            <div className="w-full h-16 justify-center flex mt-4">
              <button className="w-4/5 rounded-full text-sm">
                <PlayIcon
                  svgClass="fill-theme-on-surface h-5 w-5"
                  spanClass="w-8 h-full"
                />
                <span>Record a new path</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="h-24">
              <p className="text-theme-grey text-sm font-inter-semibold">
                Recordings
              </p>
              <div className="flex flex-row w-full h-12 mt-4 overflow-hidden rounded-full border-[2px] border-theme-grey">
                <input
                  type="text"
                  placeholder="Search by ID..."
                  className="w-full bg-theme-surface text-theme-on-surface box-border p-4"
                />
                <SearchIcon
                  svgClass="fill-theme-grey h-6 w-6"
                  spanClass="w-12 h-full"
                />
              </div>
            </div>

            <div className="flex flex-col overflow-x-hidden overflow-y-auto h-full w-full mt-2 overflow-hidden">
              {/* <span className="text-theme-grey m-auto text-sm font-inter-medium">
            Record a path to get started!
          </span> */}
              <div className="bg-theme-selected w-full box-border p-3 rounded-md mt-2 select-none cursor-pointer hover:bg-theme-selected [&>*:nth-child(2)]:hover:text-theme-on-surface">
                <h5 className="text-theme-on-surface text-sm font-inter-medium break-words">
                  37aed957-bcbd-4ecd-9eec-fb1d9933ee20
                </h5>
              </div>
              <div className="w-full box-border p-3 bg-theme-container rounded-md mt-2 select-none cursor-pointer hover:bg-theme-selected [&>*:nth-child(2)]:hover:text-theme-on-surface">
                <h5 className="text-theme-on-surface text-sm font-inter-medium break-words">
                  47e36606-669d-4554-a3ee-9cd175d4ace3
                </h5>
              </div>
              <div className="w-full box-border p-3 bg-theme-container rounded-md mt-2 select-none cursor-pointer hover:bg-theme-selected [&>*:nth-child(2)]:hover:text-theme-on-surface">
                <h5 className="text-theme-on-surface text-sm font-inter-medium break-words">
                  79007d35-8e20-4447-8564-6332b7eeb57a
                </h5>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* <footer className="border box-border" style={{ gridArea: "footer" }}>
        footer
      </footer> */}
    </div>
  )
}

export default Client
