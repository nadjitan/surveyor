// <surveyor-client apiUrl="https://capstone-api-theta.vercel.app/api/surveyor"></surveyor-client>

import { GREY, ON_SURFACE, stringToHTML } from "@/utils/client"
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
import { MappedTelemetry } from "@/utils/types"

export const dashboard = (el: string) =>
  stringToHTML(`
<div class="client-body">
  <nav class="left-nav">
    <div class="left-item">
      ${TempIcon({ fill: GREY, width: "32px", height: "32px" })}
      <span>Data</span>
    </div>

    <div class="left-item">
      ${TempIcon({ fill: GREY, width: "32px", height: "32px" })}
      <span>Replay</span>
    </div>
  </nav>
  ${el}
</div>`)

export const viz = () =>
  stringToHTML(`
<div>
  <main class="client-content">
    <div
      class="viz-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">

      <div id="modal-bg" class=""></div>

      <div class="">
        <div class="">
          <div class="">
            <div class="">
              <h4 class="">Are you sure you want to delete?</h4>

              <div class="">
                <button class="">Delete</button>

                <button class="">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cc-header">
      <div class="cc-header-l">
        <div class=""></div>

        <span id="titleInput" class="">{selectedRec.title}</span>

        ${SaveIcon(
          { fill: GREY, width: "20px", height: "20px" },
          { width: "32px", height: "full", marginLeft: "24px" }
        )}
        ${EditIcon(
          { stroke: GREY, width: "20px", height: "20px" },
          { width: "32px", height: "full", marginLeft: "24px" }
        )}
        ${DeleteIcon(
          { stroke: GREY, width: "20px", height: "20px" },
          { width: "32px", height: "full" }
        )}
      </div>

      <button class="cc-header-r">
        ${PlayIcon(
          { fill: ON_SURFACE, width: "20px", height: "20px" },
          { width: "28px", height: "full" }
        )}
        <span>Play a Recording</span>
      </button>
    </div>
    
    <div class="cc-body-top>
      <h5 class="">User Performance Chart</h5>

      <div class="">
        <div class="">
          <canvas id="barChart" />
        </div>

        <div class="">
          <canvas id="dnChart" />

          <div class="">
            <span class="">{dnChartText.prercent}% users</span>{" "}
            {dnChartText.text}
          </div>
        </div>
      </div>
    </div>
    
    <div class="cc-body-bottom">
      <h5 class="">Recorded User Performance</h5>

      <div class="">
        map...
      </div>
    </div>
  </main>

  <nav class="right-nav">
    <div>
      <p>Recorded Paths</p>

      <div class="search-container">
        <input type="text" placeholder="Search a pathing..."/>
        ${SearchIcon(
          {
            fill: GREY,
            width: "24px",
            height: "24px",
          },
          { width: "48px", height: "full" }
        )}
      </div>
    </div>

    <div class="rn-container">
      <span class="empty-prompt">Record a path to get started!</span>
    </div>

    <div class="btn-record">
      <button>
        ${PlayIcon(
          { fill: ON_SURFACE, width: "20px", height: "20px" },
          { width: "32px", height: "full" }
        )}
        <span>Record a new path</span>
      </button>
    </div>
  </nav>
</div>
`)

export const replay = (
  mappedTelemetry: MappedTelemetry,
  filteredTelemetries: MappedTelemetry,
  telemetryIndex: number
) => {
  const rnParentDiv = document.createElement("div")
  const timelineParentDiv = document.createElement("div")
  const fts = [...filteredTelemetries]

  fts.forEach(([_, data]) => {
    const rnItem = `<div class="replay-rn-item"><h5>${data.id}</h5></div>`
    rnParentDiv.appendChild(stringToHTML(rnItem))
  })

  mappedTelemetry.get(telemetryIndex)?.data.map(() => {
    const tlNode = `<div class="tl-node"><div></div></div>`
    timelineParentDiv.appendChild(stringToHTML(tlNode))
  })

  return stringToHTML(`
<div>
  <main class="client-content">
    <div class="replay-header">
      <div class="replay-header-title">
        <div></div>
        <h4>${mappedTelemetry.get(telemetryIndex)?.id}</h4>
      </div>

      <button id="btn-replay">
        ${PlayIcon(
          {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
          { width: "28px", height: "full" }
        )}
        <span>Play</span>
      </button>

      <button id="btn-stop">
        ${StopIcon(
          {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
          { width: "28px", height: "full" }
        )}
        <span>Stop</span>
      </button>
    </div>
    
    <div class="replay-iframe-container">
      <iframe src="http://localhost:3000" id="svyr-website" />
    </div>

    <div class="replay-timeline-container">
      <h5>Timeline</h5>

      <div id="timeline">
        <div>${timelineParentDiv.innerHTML}</div>
      </div>
    </div>
  </main>

  <nav class="right-nav">
    <div>
      <p>Recordings</p>

      <div class="search-container">
        <input type="text" placeholder="Search by ID..."/>
        ${SearchIcon(
          {
            fill: GREY,
            width: "24px",
            height: "24px",
          },
          { width: "48px", height: "full" }
        )}
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
  <iframe id="svyr-website-rec" class="" />

  <div class="">
    <div id="recording-status" class="">
      <div class=""></div>
      <h4 class="">Recording...</h4>
    </div>

    <input
      id="input-recording-title"
      type="text"
      placeholder="Enter name of path..."
      class=""
    />

    <div class="recording-buttons">
      <button id="btn-record-pause" class="">
        ${PauseIcon(
          {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
          { width: "28px", height: "full" }
        )}
        <span class="">Pause</span>
      </button>

      <button id="btn-record-play" class="">
        ${PlayIcon(
          {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
          { width: "28px", height: "full" }
        )}
        <span>Record</span>
      </button>

      <button id="btn-save" class="">
        ${SaveIcon(
          {
            fill: ON_SURFACE,
            width: "20px",
            height: "20px",
          },
          { width: "28px", height: "full" }
        )}
        <span>Save</span>
      </button>

      ${ExitIcon({}, { width: "32px", height: "32px" })}
    </div>
  </div>
</div>
</div>
`)
