import clientStyle from "./dashboard.module.css"
import { DashboardPage, MappedTelemetries, Recording } from "@/utils/types"
import { fetchTelemetries, mapTelemetries } from "@/utils/dashboard"
import {
  DatabaseIcon,
  FilmIcon,
  HelpIcon,
  PieChartIcon,
  VGreat,
  Vhdiw,
  VWelcome,
  VWhyRecord,
  XCircleIcon,
} from "./icons"
import { ReplayBody } from "./replay"
import { VizBody } from "./viz"
import RecordingBody from "./recording"
import "toastify-js/src/toastify.css"

import { FC, useEffect, useState } from "react"
import DataBody from "./data"

/**
 * Import to a dedicated page for ```<iframe />``` to work
 */
const Client: FC<{ apiUrl: string }> = ({ apiUrl }) => {
  const [page, setPage] = useState<DashboardPage>("viz")

  const [selectedRec, setSelectedRec] = useState<Recording | null>(null)

  const [telemetryIndex, setTelemetryIndex] = useState(0)
  const [mappedTelemetries, setMappedTelemetries] =
    useState<MappedTelemetries | null>(null)

  const [recordedPaths, setRecordedPaths] = useState<Recording[]>([
    {
      title: "Login",
      data: [
        {
          url: "https://capstone-demo-site.vercel.app/",
          class: "srvyr-vNXrnX0q",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-ZqXOoqXA",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-KLjWqG32",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-2W3k7K3O",
        },
      ],
    },
    {
      title: "Register",
      data: [
        {
          url: "https://capstone-demo-site.vercel.app/",
          class: "srvyr-vNXrnX0q",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-ZpPZbdPx",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-ZqXOoqXA",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-KLjWqG32",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-AYj8YOXp",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-wB3wazjq",
        },
        {
          url: "https://capstone-demo-site.vercel.app/register",
          class: "srvyr-qVXLL8Xz",
        },
      ],
    },
    {
      title: "Forgot password",
      data: [
        {
          url: "https://capstone-demo-site.vercel.app/",
          class: "srvyr-vNXrnX0q",
        },
        {
          url: "https://capstone-demo-site.vercel.app/login",
          class: "srvyr-wB3wazjq",
        },
        {
          url: "https://capstone-demo-site.vercel.app/forgot-password",
          class: "srvyr-ZqXOoqXA",
        },
        {
          url: "https://capstone-demo-site.vercel.app/forgot-password",
          class: "srvyr-8V36GrPY",
        },
      ],
    },
  ])

  useEffect(() => {
    fetchTelemetries(apiUrl).then(d => setMappedTelemetries(mapTelemetries(d)))

    const dialog = document.getElementById("srvyr-help") as HTMLDialogElement
    if (sessionStorage.getItem("srvyr-ftue") === null) {
      dialog.style.display = "grid"
      sessionStorage.setItem("srvyr-ftue", "seen")
    } else {
      dialog.style.display = "none"
    }

    const slidesTabs = Array.from(document.getElementsByClassName("slides-tab"))
    const slides = Array.from(document.getElementsByClassName("slides-content"))
    let currTab = 0

    slides[0].scrollIntoView()
    slidesTabs.map((el, index) => {
      el.addEventListener("click", st => {
        const tab = st.target as HTMLElement
        slidesTabs.map(el => el.classList.remove("slides-tab-active"))
        tab.classList.add("slides-tab-active")

        currTab = index
        slides[currTab].scrollIntoView()
      })
    })

    const slidesNext = document.getElementById("slides-next")!
    slidesNext.onclick = () => {
      if (currTab === slides.length - 1) {
        currTab = 0
        slides[currTab].scrollIntoView()
      } else {
        currTab = currTab + 1
        slides[currTab].scrollIntoView()
      }
      slidesTabs.map(el => el.classList.remove("slides-tab-active"))
      slidesTabs[currTab].classList.add("slides-tab-active")
    }
  }, [])

  return (
    <>
      <dialog
        id="srvyr-help"
        className="svyr-fixed svyr-z-50 svyr-hidden svyr-h-full svyr-w-full svyr-place-items-center svyr-bg-black svyr-bg-opacity-50">
        <div className="svyr-relative svyr-flex svyr-h-[540px] svyr-w-[400px] svyr-flex-col svyr-items-center svyr-rounded-3xl svyr-bg-theme-surface svyr-p-8 svyr-text-theme-on-surface">
          <XCircleIcon
            svgClass="svyr-stroke-theme-grey"
            spanClass="svyr-w-6 svyr-h-6 svyr-absolute svyr-right-4 svyr-top-4"
            onClick={() => {
              const dialog = document.getElementById(
                "srvyr-help"
              ) as HTMLDialogElement

              dialog.style.display = "none"
            }}
          />

          <div className="slider svyr-pt-5">
            <div className="slides">
              <div className="slides-content svyr-gap-2 svyr-text-center">
                <span className="svyr-text-xl svyr-text-theme-on-surface">
                  Welcome
                </span>
                <br />
                <VWelcome />
                <span className="svyr-text-base svyr-text-theme-on-surface">
                  This is a JavaScript Package that aims to improve a website's
                  user navigability.
                </span>
                <p className="svyr-text-sm svyr-text-theme-grey">
                  This package should be inserted to an existing website.
                </p>
              </div>

              <div className="slides-content svyr-gap-2 svyr-text-center">
                <span className="svyr-text-xl svyr-text-theme-on-surface">
                  How does it work?
                </span>
                <br />
                <Vhdiw />
                <span className="svyr-text-base svyr-text-theme-on-surface">
                  Use this package to record the "ideal" way to navigate to a
                  page.
                </span>
                <p className="svyr-text-sm svyr-text-theme-grey">
                  Then, the website's testers will be tested to determine if
                  they can navigate to the page well.
                </p>
              </div>

              <div className="slides-content svyr-gap-2 svyr-text-center">
                <span className="svyr-text-xl svyr-text-theme-on-surface">
                  Why record?
                </span>
                <br />
                <VWhyRecord />
                <span className="svyr-text-base svyr-text-theme-on-surface">
                  The statistics of the website testers' performance will be
                  visualized.
                </span>
                <p className="svyr-text-sm svyr-text-theme-grey">
                  A system analyst can use this visualized data to determine if
                  the website's UI is easily navigable or not.
                </p>
              </div>

              <div className="slides-content svyr-gap-2 svyr-text-center">
                <span className="svyr-text-xl svyr-text-theme-on-surface">
                  Great! Where do I start?
                </span>
                <br />
                <VGreat />
                <span className="svyr-text-base svyr-text-theme-on-surface">
                  Get started with the "Record a new path" found in the "Viz"
                  page.
                </span>
                <p className="svyr-text-sm svyr-text-theme-grey">
                  This is where you record the "ideal" way to navigate to a
                  website's page.
                </p>
              </div>
            </div>
          </div>

          <div className="svyr-flex svyr-h-max svyr-w-full svyr-items-center svyr-justify-between">
            <div className="svyr-flex svyr-gap-3">
              <a className="slides-tab slides-tab-active"></a>
              <a className="slides-tab"></a>
              <a className="slides-tab"></a>
              <a className="slides-tab"></a>
            </div>

            <button
              id="slides-next"
              className="svyr-w-28 svyr-rounded-full svyr-bg-theme-primary svyr-p-2 svyr-font-inter-semibold svyr-text-sm">
              Next
            </button>
          </div>
        </div>
      </dialog>

      {page === "recording" ? (
        <RecordingBody
          recordedPaths={recordedPaths}
          setRecordedPaths={setRecordedPaths}
          setPage={setPage}
        />
      ) : (
        <div className={clientStyle.clientBody}>
          <nav className={clientStyle.leftNav}>
            <div onClick={() => setPage("viz")} className={clientStyle.lItem}>
              <PieChartIcon
                svgClass={`svyr-w-8 svyr-h-8 ${
                  page !== "viz" && "svyr-stroke-theme-grey"
                }`}
              />
              <span
                className={`svyr-mt-1 ${
                  page !== "viz" && "svyr-text-theme-grey"
                }`}>
                Viz
              </span>
            </div>
            <div
              onClick={() => setPage("replay")}
              className={clientStyle.lItem}>
              <FilmIcon
                svgClass={`svyr-w-8 svyr-h-8 ${
                  page !== "replay" && "svyr-stroke-theme-grey"
                }`}
              />
              <span
                className={`svyr-mt-1 ${
                  page !== "replay" && "svyr-text-theme-grey"
                }`}>
                Replay
              </span>
            </div>
            <div onClick={() => setPage("data")} className={clientStyle.lItem}>
              <DatabaseIcon
                svgClass={`svyr-w-8 svyr-h-8 ${
                  page !== "data" && "svyr-stroke-theme-grey"
                }`}
              />
              <span
                className={`svyr-mt-1 ${
                  page !== "data" && "svyr-text-theme-grey"
                }`}>
                Data
              </span>
            </div>

            <div className={clientStyle.lItem}>
              <HelpIcon
                title="Help"
                svgClass="svyr-w-8 svyr-h-8 svyr-stroke-theme-grey"
                onClick={() => {
                  const dialog = document.getElementById(
                    "srvyr-help"
                  ) as HTMLDialogElement

                  dialog.style.display = "grid"
                }}
              />
            </div>
          </nav>

          {page === "viz" && (
            <VizBody
              setPage={setPage}
              setTelemetryIndex={setTelemetryIndex}
              selectedRec={selectedRec}
              mappedTelemetries={mappedTelemetries}
              setRecordedPaths={setRecordedPaths}
              setSelectedRec={setSelectedRec}
              recordedPaths={recordedPaths}
            />
          )}
          {page === "replay" && (
            <ReplayBody
              mappedTelemetries={mappedTelemetries!}
              telemetryIndex={telemetryIndex}
            />
          )}
          {page === "data" && (
            <DataBody
              apiUrl={apiUrl}
              setMappedTelemetries={setMappedTelemetries}
              mappedTelemetries={mappedTelemetries!}
            />
          )}
        </div>
      )}
    </>
  )
}

export default Client
