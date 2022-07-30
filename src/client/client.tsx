import React from "react"
import ReactDOM from "react-dom/client"
import { Client } from "../../lib/index"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Client
    apiUrl={"https://capstone-api-theta.vercel.app/api/surveyor"}
    loadIframe={true}
  />
)
