import React, { CSSProperties } from "react"
import ReactDOM from "react-dom/client"
import { Surveyor } from "../lib"

const styles = (color: string): CSSProperties => ({
  width: "100%",
  height: "400px",
  backgroundColor: color,
  display: "grid",
  placeItems: "center",
  fontSize: "3rem",
  color: "white",
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Surveyor
    logClicks={false}
    locateMsg={"Login page"}
    debug={true}
    apiUrl={"https://capstone-api-theta.vercel.app/api/surveyor"}>
    <div style={styles("green")}>Hello</div>
    <div style={styles("violet")}>Hello</div>
    <div style={styles("red")}>Hello</div>
    <div style={styles("blue")}>Hello</div>
  </Surveyor>
)
