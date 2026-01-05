import React from "react"

const DotMatrixBg = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(236,72,153,0.35) 2px, transparent 2px)",
        backgroundSize: "18px 18px",
        opacity: 0.15,
        transform: "translateZ(0)",
      }}
    />
  )
}

export default DotMatrixBg
