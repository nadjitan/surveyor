// <surveyor-client apiUrl="https://capstone-api-theta.vercel.app/api/surveyor"></surveyor-client>

import { GREY, ON_SURFACE, stringToHTML } from "@/utils/client"
import {
  DeleteIcon,
  EditIcon,
  PlayIcon,
  SaveIcon,
  SearchIcon,
  TempIcon,
} from "@/utils/icons"

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

      <div
        id="modal-bg"
        class=""
      />

      <div class="">
        <div class="">
          <div class="">
            <div class="">
              <h4 class="">
                Are you sure you want to delete?
              </h4>

              <div class="">
                <button
                  class="">
                  Delete
                </button>

                <button
                  class="">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cc-header">
      <div class="cc-header-l">
        <div class=""></div>

        <span
          id="titleInput"
          class=""
          >
          {selectedRec.title}
        </span>

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

      <button
        class="cc-header-r">
        ${PlayIcon(
          { fill: ON_SURFACE, width: "20px", height: "20px" },
          { width: "28px", height: "full" }
        )}
        <span>Play a Recording</span>
      </button>
    </div>
    
    <div class="cc-body-top>
      <h5 class="">
        User Performance Chart
      </h5>

      <div class="">
        <div class="">
          <canvas id="barChart" />
        </div>

        <div class="">
          <canvas id="dnChart" />

          <div class="">
            <span class="">
              {dnChartText.prercent}% users
            </span>{" "}
            {dnChartText.text}
          </div>
        </div>
      </div>
    </div>
    <div class="cc-body-bottom">
      <h5 class="">
        Recorded User Performance
      </h5>

      <div class="">
        map...
      </div>
    </div>
  </main>

  <nav class="right-nav">
    <div class="">
      <p class="">
        Recorded Paths
      </p>

      <div class="search-container">
        <input
          type="text"
          placeholder="Search a pathing..."
          class=""
        />
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
      <span class="">
        Record a path to get started!
      </span>
    </div>

    <div class="">
      <button
        class="">
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

export const replay = () =>
  stringToHTML(`
<div>
<main class="client-content">
  <div class="">
    <div class="">
      <div class=""></div>
      <h4 class="">
        37aed957-bcbd-4ecd-9eec-fb1d9933ee20
      </h4>
    </div>

    <button
      id="btn-replay"
      class="">
      <PlayIcon />
      <span>Play</span>
    </button>
    <button
      id="btn-stop"
      class="">
      <StopIcon />
      <span>Stop</span>
    </button>
  </div>
  
  <div class="">
    <iframe
      id="svyr-website"
      class="svyr-h-full svyr-w-full"
    />
    <div
      id="svyr-iframe-loading"
      class="">
      <LoadingIcon />
    </div>
  </div>

  <div class="">
    <h5 class="">
      Timeline
    </h5>

    <div
      id="timeline"
      class="">
      <div class="">
        map...
      </div>
    </div>
  </div>
</main>

<nav class="right-nav">
  <div class="">
    <p class="">
      Recordings
    </p>
    <div class="">
      <input
        type="text"
        placeholder="Search by ID..."
        class=""
      />
      <SearchIcon />
    </div>
  </div>

  <div class="rn-container">
    map...
  </div>
</nav>
</div>
`)
