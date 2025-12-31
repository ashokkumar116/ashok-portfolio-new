import React from "react"

const GrainOverlay = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
        opacity: 0.06,
      }}
    />
  )
}

export default GrainOverlay
