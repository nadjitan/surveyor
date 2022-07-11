import { FC, PropsWithChildren, useState } from "react"
import { DeleteIcon, EditIcon, PlayIcon, SearchIcon, TempIcon } from "./icons"
import clientStyle from "./Client.module.css"

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
    <div className={clientStyle.clientBody}>
      <nav className={clientStyle.leftNav}>
        <div onClick={() => setPage("data")} className={clientStyle.lItem}>
          <TempIcon svgClass="svyr-fill-theme-grey svyr-w-8 svyr-h-8" />
          <span>Data</span>
        </div>
        <div onClick={() => setPage("replay")} className={clientStyle.lItem}>
          <TempIcon svgClass="svyr-fill-theme-grey svyr-w-8 svyr-h-8" />
          <span>Replay</span>
        </div>
      </nav>

      <main className={clientStyle.clientContent}>
        {/* <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
        <iframe id="svyr-website" src={url} className="svyr-border svyr-h-full svyr-box-border" /> */}

        {page === "data" ? (
          <>
            <div className={clientStyle.ccHeader}>
              <div className={clientStyle.ccHeaderL}>
                <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
                <h4 className="svyr-font-inter-semibold svyr-ml-3">
                  About Page
                </h4>
                <EditIcon
                  spanClass="svyr-w-8 svyr-h-full svyr-ml-6"
                  svgClass="svyr-stroke-theme-grey svyr-h-5 svyr-w-5"
                />
                <DeleteIcon
                  spanClass="svyr-w-8 svyr-h-full"
                  svgClass="svyr-stroke-theme-grey svyr-h-5 svyr-w-5"
                />
              </div>

              <button className={clientStyle.ccHeaderR}>
                <PlayIcon
                  spanClass="svyr-w-7 svyr-h-full"
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                />
                <span>Play a Recording</span>
              </button>
            </div>

            <div className={clientStyle.ccBodyTop}>
              <h5 className="svyr-text-theme-grey svyr-font-inter-semibold">
                User Performance Chart
              </h5>
            </div>

            <div className={clientStyle.ccBodyBottom}>
              <h5 className="svyr-text-theme-grey svyr-font-inter-semibold">
                Recorded User Performance
              </h5>
              <div className="svyr-h-5/6 svyr-w-full svyr-overflow-x-hidden svyr-overflow-y-auto">
                <div className={clientStyle.pathDataContainer}>
                  <h5>100%</h5>
                  <p>home &gt; about</p>
                </div>
                <div className={clientStyle.pathDataContainer}>
                  <h5>40%</h5>
                  <p>home &gt; channels &gt; home &gt; store &gt; about</p>
                </div>
                <div className={clientStyle.pathDataContainer}>
                  <h5>10%</h5>
                  <p>
                    home &gt; store &gt; channels &gt; contact us &gt; home &gt;
                    about
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="svyr-w-full svyr-justify-between svyr-flex">
              <div className="svyr-flex svyr-flex-row svyr-justify-center svyr-items-center">
                <div className="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
                <h4 className="svyr-font-inter-semibold svyr-ml-3">
                  37aed957-bcbd-4ecd-9eec-fb1d9933ee20
                </h4>
              </div>

              <button className="svyr-w-28 svyr-rounded-full svyr-text-sm">
                <PlayIcon
                  spanClass="svyr-w-7 svyr-h-full"
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                />
                <span>Play</span>
              </button>
            </div>

            <iframe
              src=""
              className="svyr-border svyr-w-full svyr-h-full svyr-mt-8"></iframe>

            <div className="svyr-bg-theme-surface svyr-h-40 svyr-w-full svyr-overflow-hidden svyr-box-border svyr-p-6 svyr-mt-4">
              <h5 className="svyr-text-theme-grey svyr-font-inter-semibold">
                Timeline
              </h5>
            </div>
          </>
        )}
      </main>

      <nav className={clientStyle.rightNav}>
        {page === "data" ? (
          <>
            <div className="svyr-h-24">
              <p className="svyr-text-theme-grey svyr-text-sm svyr-font-inter-semibold">
                Recorded Paths
              </p>
              <div className="svyr-flex svyr-flex-row svyr-w-full svyr-h-12 svyr-mt-4 svyr-overflow-hidden svyr-rounded-full svyr-border-[2px] svyr-border-theme-grey">
                <input
                  type="text"
                  placeholder="Search a pathing..."
                  className="svyr-w-full svyr-bg-theme-surface svyr-text-theme-on-surface svyr-box-border svyr-p-4"
                />
                <SearchIcon
                  svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
                  spanClass="svyr-w-12 svyr-h-full"
                />
              </div>
            </div>

            <div className={clientStyle.rnContainer}>
              {/* <span className="svyr-text-theme-grey svyr-m-auto svyr-text-sm svyr-font-inter-medium">
            Record a path to get started!
          </span> */}
              <div className={clientStyle.rnItem}>
                <h5>About Page</h5>
                <p>demopage.com/channels/about</p>
              </div>
              <div className={clientStyle.rnItem}>
                <h5>About Page</h5>
                <p>demopage.com/channels/about</p>
              </div>
              <div className={clientStyle.rnItem}>
                <h5>Channels Page</h5>
                <p>demopage.com/channels</p>
              </div>
            </div>

            <div className="svyr-w-full svyr-h-16 svyr-justify-center svyr-flex butto-mt-4">
              <button className="butto-w-4/5 svyr-rounded-full svyr-text-sm">
                <PlayIcon
                  svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
                  spanClass="svyr-w-8 svyr-h-full"
                />
                <span>Record a new path</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="svyr-h-24">
              <p className="svyr-text-theme-grey svyr-text-sm svyr-font-inter-semibold">
                Recordings
              </p>
              <div className="svyr-flex svyr-flex-row svyr-w-full svyr-h-12 svyr-mt-4 svyr-overflow-hidden svyr-rounded-full svyr-border-[2px] svyr-border-theme-grey">
                <input
                  type="text"
                  placeholder="Search by ID..."
                  className="svyr-w-full svyr-bg-theme-surface svyr-text-theme-on-surface svyr-box-border svyr-p-4"
                />
                <SearchIcon
                  svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
                  spanClass="svyr-w-12 svyr-h-full"
                />
              </div>
            </div>

            <div className={clientStyle.rnContainer}>
              {/* <span className="text-theme-grey m-auto text-sm font-inter-medium">
            Record a path to get started!
          </span> */}
              <div className={clientStyle.rnItem}>
                <h5>37aed957-bcbd-4ecd-9eec-fb1d9933ee20</h5>
              </div>
              <div className={clientStyle.rnItem}>
                <h5>47e36606-669d-4554-a3ee-9cd175d4ace3</h5>
              </div>
              <div className={clientStyle.rnItem}>
                <h5>79007d35-8e20-4447-8564-6332b7eeb57a</h5>
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
