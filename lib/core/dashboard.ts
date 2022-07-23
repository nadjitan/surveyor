// <surveyor-client apiUrl="https://capstone-api-theta.vercel.app/api/surveyor"></surveyor-client>

const template = document.createElement("template")
template.innerHTML = `
<div class=${""}>
  <nav class=${""}>
    <div class=${""}>
      <TempIcon svgClass="svyr-fill-theme-grey svyr-w-8 svyr-h-8" />
      <span>Data</span>
    </div>
    <div class=${""}>
      <TempIcon svgClass="svyr-fill-theme-grey svyr-w-8 svyr-h-8" />
      <span>Replay</span>
    </div>
  </nav>

  <main class=${""}>
      <div class=${""}>
        <div class=${""}>
          <div class="svyr-h-[24px] svyr-w-1 svyr-bg-theme-primary"></div>
          <h4 class="svyr-font-inter-semibold svyr-ml-3">
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

        <button class=${""}>
          <PlayIcon
            spanClass="svyr-w-7 svyr-h-full"
            svgClass="svyr-fill-theme-on-surface svyr-h-5 svyr-w-5"
          />
          <span>Play a Recording</span>
        </button>
      </div>

      <div class=${""}>
        <h5 class="svyr-text-theme-grey svyr-font-inter-semibold">
          User Performance Chart
        </h5>
      </div>

      <div class=${""}>
        <h5 class="svyr-text-theme-grey svyr-font-inter-semibold">
          Recorded User Performance
        </h5>
        <div class="svyr-h-5/6 svyr-w-full svyr-overflow-x-hidden svyr-overflow-y-auto">
          <div class=${""}>
            <h5>100%</h5>
            <p>home &gt; about</p>
          </div>
          <div class=${""}>
            <h5>40%</h5>
            <p>home &gt; channels &gt; home &gt; store &gt; about</p>
          </div>
          <div class=${""}>
            <h5>10%</h5>
            <p>
              home &gt; store &gt; channels &gt; contact us &gt; home &gt;
              about
            </p>
          </div>
        </div>
      </div>
  </main>

  <nav class=${""}>
      <div class="svyr-h-24">
        <p class="svyr-text-theme-grey svyr-text-sm svyr-font-inter-semibold">
          Recordings
        </p>
        <div class="svyr-flex svyr-flex-row svyr-w-full svyr-h-12 svyr-mt-4 svyr-overflow-hidden svyr-rounded-full svyr-border-[2px] svyr-border-theme-grey">
          <input
            type="text"
            placeholder="Search by ID..."
            class="svyr-w-full svyr-bg-theme-surface svyr-text-theme-on-surface svyr-box-border svyr-p-4"
          />
          <SearchIcon
            svgClass="svyr-fill-theme-grey svyr-h-6 svyr-w-6"
            spanClass="svyr-w-12 svyr-h-full"
          />
        </div>
      </div>

      <div class=${""}>
        <span class="text-theme-grey m-auto text-sm font-inter-medium">
          Record a path to get started!
        </span>
      </div>
  </nav>
</div>`

export default class SurveyorClient extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    // this.shadowRoot.appendChild(template.content.cloneNode(true))
    // this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name")
    // this.shadowRoot.querySelector("img").src = this.getAttribute("avatar")
  }

  connectedCallback() {
    // this.h3 = this.getAttribute("name")
    this.render()
  }

  render() {
    // this.h3
  }
}
// window.customElements.define("employee-card", SurveyorClient)
