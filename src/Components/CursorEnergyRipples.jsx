import React, { useRef, useEffect } from "react"
import gsap from "gsap"

const CursorEnergyRipples = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let lastTime = 0

    const createRipple = (x, y) => {
      const ripple = document.createElement("div")

      ripple.className = `
        pointer-events-none
        absolute
        h-6 w-6
        border border-pink-500/60
        rounded-sm
        blur-[0.5px]
      `

      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      ripple.style.transform = "translate(-50%, -50%)"

      containerRef.current.appendChild(ripple)

      gsap.fromTo(
        ripple,
        {
          scale: 0.4,
          opacity: 0.8,
        },
        {
          scale: 3,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      )
    }

    const handleMouseMove = (e) => {
      const now = Date.now()

      // throttle ripple creation
      if (now - lastTime < 60) return
      lastTime = now

      createRipple(e.clientX, e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    />
  )
}

export default CursorEnergyRipples
