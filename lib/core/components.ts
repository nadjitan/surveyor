// <surveyor-client apiUrl="https://capstone-api-theta.vercel.app/api/surveyor"></surveyor-client>

import { GREY, ON_SURFACE, stringToHTML } from "@/utils/dashboard"
import {
  DeleteIcon,
  EditIcon,
  ExitIcon,
  LoadingIcon,
  PauseIcon,
  PlayIcon,
  SaveIcon,
  SearchIcon,
  StopIcon,
  TempIcon,
} from "@/utils/icons"
import { MappedTelemetries, Recording } from "@/utils/types"

export const dashboard = (child: string) =>
  stringToHTML(`
<div class="client-body">
  <nav class="left-nav">
    <div class="left-item" id="viz-page">
      ${TempIcon({ svgStyles: { fill: GREY, width: "32px", height: "32px" } })}
      <span class="svyr-span">Data</span>
    </div>

    <div class="left-item" id="replay-page">
      ${TempIcon({ svgStyles: { fill: GREY, width: "32px", height: "32px" } })}
      <span class="svyr-span">Replay</span>
    </div>
  </nav>
  ${child}
</div>`)

export const viz = (
  recordedPaths: Recording[],
  filteredRecPaths: Recording[],
  selectedRec: Recording | null
) => {
  const recPathsDiv = document.createElement("div")
  recordedPaths.forEach((rp, _) => {
    const rpItem = `
    <div class="rec-path-item ${
      selectedRec && rp.title === selectedRec?.title
        ? "rec-path-selected-item"
        : ""
    }">
      <h5>${rp.title}</h5>
      <p>${rp.data[rp.data.length - 1].url}</p>
    </div>
`

    recPathsDiv.appendChild(stringToHTML(rpItem))
  })

  return stringToHTML(`
<div>
  <div
    id="viz-modal"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true">

    <div>
      <h4 class="svyr-h4">Are you sure you want to delete?</h4>

      <div>
        <button class"srvyr-button">DELETE</button>

        <button class"srvyr-button">CANCEL</button>
      </div>
    </div>
  </div>

  <main class="client-content">
    ${
      selectedRec
        ? `
    <div class="cc-header">
      <div class="cc-header-l">
        <div></div>

        <span class="svyr-span" id="title-input">${selectedRec.title}</span>

        ${SaveIcon({
          id: "btn-save-selected-rec",
          title: "Save",
          spanStyles: { width: "32px", height: "full", marginLeft: "24px" },
          svgStyles: { fill: GREY, width: "20px", height: "20px" },
        })}
        ${EditIcon({
          id: "btn-edit-selected-rec",
          title: "Edit",
          spanStyles: { width: "32px", height: "full", marginLeft: "24px" },
          svgStyles: { stroke: GREY, width: "20px", height: "20px" },
        })}
        ${DeleteIcon({
          id: "btn-delete-selected-rec",
          title: "Delete",
          spanStyles: { width: "32px", height: "full" },
          svgStyles: { stroke: GREY, width: "20px", height: "20px" },
        })}
      </div>

      <button class"srvyr-button" class="cc-header-r">
        ${PlayIcon({
          id: "btn-play-selected-recording",
          spanStyles: { width: "28px", height: "full" },
          svgStyles: { fill: ON_SURFACE, width: "20px", height: "20px" },
        })}
        <span class="svyr-span">Play a Recording</span>
      </button>
    </div>
    
    <div class="cc-body-top">
      <h5>User Performance Chart</h5>

      <div id="charts-container">
        <div id="bar-chart">
          <canvas id="bar-canvas"></canvas>
        </div>

        <div id="doughnut-chart">
          <canvas id="doughnut-canvas"></canvas>

          <div id="dn-chart-text"></div>
        </div>
      </div>
    </div>
    
    <div class="cc-body-bottom">
      <h5>Recorded User Performance</h5>

      <div id="rec-path-datas"></div>
    </div>`
        : ""
    }
  </main>

  <nav class="right-nav">
    <div>
      <p>Recorded Paths</p>

      <div class="search-container">
        <input class="svyr-input" type="text" placeholder="Search a pathing..."/>
        ${SearchIcon({
          spanStyles: { width: "48px", height: "full" },
          svgStyles: {
            fill: GREY,
            width: "24px",
            height: "24px",
          },
        })}
      </div>
    </div>

    <div class="rn-container">
    ${
      recordedPaths
        ? recPathsDiv.innerHTML
        : '<span class="svyr-span empty-prompt">Record a path to get started!</span>'
    }
    </div>

    <div class="btn-record">
      <button class="srvyr-button" ="record-btn">
        ${PlayIcon({
          id: "btn-new-recording",
          spanStyles: { width: "32px", height: "full" },
          svgStyles: { fill: ON_SURFACE, width: "20px", height: "20px" },
        })}
        <span class="svyr-span">Record a new path</span>
      </button>
    </div>
  </nav>
</div>
`)
}

export const replay = (
  mappedTelemetries: MappedTelemetries,
  filteredTelemetries: MappedTelemetries,
  telemetryIndex: number
) => {
  const rnParentDiv = document.createElement("div")
  const timelineParentDiv = document.createElement("div")
  const fts = [...filteredTelemetries]

  fts.forEach(([_, data]) => {
    const rnItem = `<div class="replay-rn-item ${
      mappedTelemetries.get(telemetryIndex)?.id === data.id
        ? "replay-rn-item-selected"
        : ""
    }"><h5>${data.id}</h5></div>`
    rnParentDiv.appendChild(stringToHTML(rnItem))
  })

  mappedTelemetries.get(telemetryIndex)?.data.map(() => {
    const tlNode = `<div class="tl-node"><div></div></div>`
    timelineParentDiv.appendChild(stringToHTML(tlNode))
  })

  return stringToHTML(`
<div>
  <main class="client-content">
    <div class="replay-header">
      <div class="replay-header-title">
        <div></div>
        <h4 class="svyr-h4">${mappedTelemetries.get(telemetryIndex)?.id}</h4>
      </div>

      <button class="srvyr-button" id="btn-replay">
        ${PlayIcon({
          id: "btn-play-replay",
          spanStyles: { width: "28px", height: "full" },
          svgStyles: {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
        })}
        <span class="svyr-span">Play</span>
      </button>

      <button class="srvyr-button" id="btn-stop">
        ${StopIcon({
          id: "btn-stop-replay",
          spanStyles: { width: "28px", height: "full" },
          svgStyles: {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
        })}
        <span class="svyr-span">Stop</span>
      </button>
    </div>
    
    <div class="replay-iframe-container">
      <iframe src="http://localhost:3000" id="svyr-website"></iframe>
    </div>

    <div class="replay-timeline-container">
      <h5>Timeline</h5>

      <div id="timeline"><div>${timelineParentDiv.innerHTML}</div></div>
    </div>
  </main>

  <nav class="right-nav">
    <div>
      <p>Recordings</p>

      <div class="search-container">
        <input class="svyr-input" type="text" placeholder="Search by ID..."/>
        ${SearchIcon({
          spanStyles: { width: "48px", height: "full" },
          svgStyles: {
            fill: GREY,
            width: "24px",
            height: "24px",
          },
        })}
      </div>
    </div>

    <div class="rn-container">${rnParentDiv.innerHTML}</div>
  </nav>
</div>
`)
}

// <div id="svyr-iframe-loading" class="">
//   ${LoadingIcon({ fill: GREY })}
// </div>

export const recording = () =>
  stringToHTML(`
<div>
<div id="recording-body">
  <iframe id="svyr-website-rec" src="http://localhost:3000"></iframe>

  <div>
    <div id="recording-status">
      <div></div>
      <h4 class="svyr-h4">Recording...</h4>
    </div>

    <input
      class="svyr-input"
      id="input-recording-title"
      type="text"
      placeholder="Enter name of path..."
    />

    <div id="recording-buttons">
      <button class="srvyr-button" id="btn-record-pause">
        ${PauseIcon({
          id: "btn-pause-recording",
          title: "Pause",
          spanStyles: { width: "28px", height: "full" },
          svgStyles: {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
        })}
        <span class="svyr-span">Pause</span>
      </button>

      <button class="srvyr-button" id="btn-record-play">
        ${PlayIcon({
          id: "btn-start-recording",
          title: "Start",
          spanStyles: { width: "28px", height: "full" },
          svgStyles: {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
        })}
        <span class="svyr-span">Record</span>
      </button>

      <button class="srvyr-button" id="btn-save">
        ${SaveIcon({
          id: "btn-save-recording",
          title: "Save",
          spanStyles: { width: "28px", height: "full" },
          svgStyles: {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
        })}
        <span class="svyr-span">Save</span>
      </button>

      <div id="btn-record-exit">${ExitIcon({
        id: "btn-exit-recording",
        title: "Exit",
        spanStyles: { width: "32px", height: "32px" },
      })}</div>
    </div>
  </div>
</div>
</div>
`)
