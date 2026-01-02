import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useMemo } from 'react'
import CursorPinkSplash from '../Components/CursorPinkSplash'
import DotMatrixBg from '../Components/DotMatrixBg'
import GrainOverlay from '../Components/GrainOverlay'
import SoftGradientMesh from '../Components/SoftGradientMesh'
import ashok from '../assets/ash1.jpg'

const Hero = () => {

    const isMobile = useMemo(
  () => window.matchMedia("(max-width: 768px)").matches,
  []
)


    const getDirection = (e, el) => {
        const rect = el.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const top = y
        const bottom = rect.height - y
        const left = x
        const right = rect.width - x

        const min = Math.min(top, bottom, left, right)

        if (min === top) return "top"
        if (min === bottom) return "bottom"
        if (min === left) return "left"
        return "right"
    }

    useGSAP(() => {
        if (isMobile) return // Disable complex hover animations on mobile

        const buttons = document.querySelectorAll(".gsap-btn")
        
        buttons.forEach((btn) => {
            const text = btn.querySelector(".gsap-text")
            const bg = btn.querySelector(".gsap-bg")

            gsap.set(bg, { xPercent: -101, yPercent: 0 })

            const handleEnter = (e) => {
                const dir = getDirection(e, btn)
                const from = {
                    xPercent: dir === "left" ? -100 : dir === "right" ? 100 : 0,
                    yPercent: dir === "top" ? -100 : dir === "bottom" ? 100 : 0,
                }

                gsap.fromTo(bg, from, {
                    xPercent: 0,
                    yPercent: 0,
                    duration: 0.35,
                    ease: "power3.out",
                    force3D: true,
                })

                if (text) {
                    gsap.to(text, {
                        color: "#ffffff",
                        duration: 0.2,
                        ease: "power1.out",
                    })
                }
            }

            const handleLeave = (e) => {
                const dir = getDirection(e, btn)
                const to = {
                    xPercent: dir === "left" ? -100 : dir === "right" ? 100 : 0,
                    yPercent: dir === "top" ? -100 : 100,
                }

                gsap.to(bg, {
                    ...to,
                    duration: 0.35,
                    ease: "power3.in",
                    force3D: true,
                })

                if (text) {
                    gsap.to(text, {
                        color: "#ec4899",
                        duration: 0.2,
                        ease: "power1.out",
                    })
                }
            }

            btn.addEventListener("mouseenter", handleEnter)
            btn.addEventListener("mouseleave", handleLeave)
        })
    }, [isMobile])


    useGSAP(() => {
        const tl = gsap.timeline({})

        const splittitle = SplitText.create(".title", {
            type: isMobile ? "words" : "chars",
        })

        // Optimized animation for mobile
        tl.from(isMobile ? splittitle.words : splittitle.chars, {
            scale: isMobile ? 1.1 : 2.5,
            opacity: 0,
            filter: isMobile ? "none" : "blur(10px)",
            stagger: isMobile ? 0.05 : 0.01,
            ease: "power2.out",
            textShadow: isMobile ? "none" : "0 0 25px rgba(255,0,150,0.8)",
            force3D: true, // Hardware acceleration
        })

        return () => {
            splittitle.revert()
        }
    }, [isMobile])

  return (
    <section className='h-screen flex flex-col justify-center items-center gap-10 overflow-hidden' id='hero'>
        {!isMobile && <CursorPinkSplash />}
        <DotMatrixBg />
        <GrainOverlay />
        <SoftGradientMesh />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10' id='img-container'>
            <img src={ashok} alt="" className='w-0 h-0 rounded-full object-cover' id='ashok-img' />
        </div>
        <h1 id='intro-name' className='text-3xl md:text-7xl font-bold absolute left-130  text-white'>Hi, I’m Ashok Kumar</h1>
        <div className='text-white flex flex-col justify-center items-center text-center gap-10 w-[80%] mx-auto '>
            <h1 className='text-3xl md:text-7xl font-bold title'>Looking for a <span className="text-pink-500">website</span> that <br />actually helps your business<span className="text-pink-500"> grow?</span></h1>
            <p className='text-sm md:text-5xl font-bold subtitle absolute-center'>You’re exactly where you need to be.</p>
        </div>
        {/* <div className="flex gap-5 btns">
            <button className="btn-1 group cursor-pointer relative overflow-hidden rounded-2xl bg-pink-500 px-6 py-3 font-medium text-white gsap-btn">
                <span className="pointer-events-none relative z-10">Start a project</span>
                <span className="absolute inset-0 bg-pink-600 gsap-bg rounded-xl" />
            </button>

            <button className="btn-2 group cursor-pointer relative overflow-hidden rounded-2xl border-2 border-pink-500 px-6 py-3 font-medium text-pink-500 gsap-btn">
                <span className="pointer-events-none relative z-10 gsap-text max-md:text-white max-md:text-center">View my work</span>
                <span className="absolute inset-0 bg-pink-500 gsap-bg rounded-xl" />
            </button>
        </div> */}

    </section>
  )
}

export default Hero