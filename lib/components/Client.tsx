import { FC, PropsWithChildren, useEffect, useState } from "react"

/**
 * Import to a dedicated page for ```<iframe />``` to work
 *
 * @returns void
 */
const Client: FC<PropsWithChildren<{}>> = () => {
  const [url, setUrl] = useState("")

  useEffect(() => setUrl(window.location.origin), [])

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        gridTemplateRows: "auto 150px",
        gridTemplateAreas: `
        'sidenav content' 
        'sidenav footer'
        `,
      }}>
      <div
        style={{
          gridArea: "sidenav",
          boxSizing: "border-box",
          border: "1px solid black",
        }}>
        sidenav
      </div>

      <main
        style={{
          gridArea: "content",
          display: "flex",
          flexDirection: "column",
        }}>
        <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
        <iframe
          id="srvyr-website"
          src={url}
          style={{
            boxSizing: "border-box",
            border: "1px solid black",
            height: "100%",
          }}
        />
      </main>

      <footer
        style={{
          gridArea: "footer",
          boxSizing: "border-box",
          border: "1px solid black",
        }}>
        footer
      </footer>
    </div>
  )
}

export default Client
