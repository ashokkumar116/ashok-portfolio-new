import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const CursorPinkSplash = () => {
  const containerRef = useRef(null)
  let lastTime = 0

  useEffect(() => {
    const createSplash = (x, y) => {
      const splash = document.createElement("div")

      splash.className = `
        pointer-events-none
        absolute
        h-36 w-36
        rounded-full
        bg-pink-500/40
        blur-xl
      `

      splash.style.left = `${x}px`
      splash.style.top = `${y}px`
      splash.style.transform = "translate(-50%, -50%)"

      containerRef.current.appendChild(splash)

      gsap.fromTo(
        splash,
        {
          scale: 0.2,
          opacity: 0.8,
        },
        {
          scale: gsap.utils.random(1.8, 2.5),
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          onComplete: () => splash.remove(),
        }
      )
    }

    const handleMouseMove = (e) => {
      const now = Date.now()

      // throttle for elegance
      if (now - lastTime < 70) return
      lastTime = now

      createSplash(e.clientX, e.clientY)
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

export default CursorPinkSplash
