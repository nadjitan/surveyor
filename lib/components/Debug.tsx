import { FC, useEffect, useRef } from "react"

const Debug: FC = () => {
  let debugDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.onmousemove = ({
      clientX,
      clientY,
      target,
    }: React.MouseEvent | MouseEvent) => {
      const t = target as HTMLElement
      const targetClass =
        t.className && Array.from(t.classList).find(c => c.startsWith("srvyr-"))
      if (targetClass) {
        const child = debugDiv.current?.firstElementChild
        debugDiv.current!.style.display = "fixed"
        child!.innerHTML = `<p>tag: ${t.tagName}</p><p>class: ${targetClass}</p>`
      }

      let x = clientX - 100
      let y = clientY - 110

      const { offsetWidth, offsetHeight } = debugDiv.current!
      // Prevent going past right & bottom of body
      const rEdge = document.body.offsetWidth - offsetWidth
      const bEdge = document.body.offsetHeight - offsetHeight

      if (x < 0) x = 0
      if (y < 0) y = 0
      if (x > rEdge) x = rEdge
      if (y > bEdge) y = bEdge

      debugDiv.current!.style.transform = `translate(${x}px, ${y}px)`
    }

    document.body.onmouseenter = () => (debugDiv.current!.style.opacity = "1")
    document.body.onmouseleave = () => (debugDiv.current!.style.opacity = "0")

    return () => {
      document.onmousemove = null
      document.body.onmouseenter = null
      document.body.onmouseleave = null
    }
  })

  return (
    <div
      ref={debugDiv}
      style={{
        position: "absolute",
        opacity: "0",
        top: 0,
        left: 0,
        display: "grid",
        userSelect: "none",
        pointerEvents: "none",
        width: "160px",
        height: "60px",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: 10,
        color: "white",
        font: "12px monospace",
        zIndex: 100,
        transition: "all 0.01s linear, opacity 0.25s ease",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}></div>
    </div>
  )
}

export default Debug
