import { FC, useEffect, useRef, useState } from "react"

const Debug: FC = () => {
  let debugDiv = useRef<HTMLDivElement>(null)
  const [tagName, setTagName] = useState("")
  const [targetClass, seTargetClass] = useState("")

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
        setTagName(t.tagName)
        seTargetClass("." + targetClass)
      } else {
        setTagName(t.tagName)
        seTargetClass("")
      }

      let x = clientX + 15
      let y = clientY + 15

      // Prevent going past boundaries of body
      const { offsetWidth, offsetHeight } = debugDiv.current!
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
        placeItems: "center",
        userSelect: "none",
        pointerEvents: "none",
        width: "max-content",
        height: "max-content",
        padding: "0.5rem 1rem",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: 10,
        color: "white",
        font: "12px monospace",
        zIndex: 100,
        transition: "all 0.01s linear, opacity 0.25s ease",
      }}>
      <div>
        <div style={{ marginBottom: "8px" }}>
          tag: <span style={{ fontStyle: "italic" }}>{tagName}</span>
        </div>
        <div>
          class: <span style={{ fontWeight: "bold" }}>{targetClass}</span>
        </div>
      </div>
    </div>
  )
}

export default Debug
