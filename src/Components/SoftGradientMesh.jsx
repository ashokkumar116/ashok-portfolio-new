import React from "react"

const SoftGradientMesh = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(
            at 20% 30%,
            rgba(236,72,153,0.35),
            transparent 60%
          ),
          radial-gradient(
            at 80% 40%,
            rgba(217,70,239,0.25),
            transparent 65%
          ),
          radial-gradient(
            at 50% 80%,
            rgba(236,72,153,0.18),
            transparent 70%
          )
        `,
      }}
    />
  )
}

export default SoftGradientMesh
