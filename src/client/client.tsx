import React from "react"
import ReactDOM from "react-dom/client"
import { Client } from "../../lib/index"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Client apiUrl={import.meta.env.API_URL} loadIframe={true} />
)
