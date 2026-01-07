import React, { useRef } from 'react'
import ServicesCard from '../Components/ServicesCard'
import { SERVICES } from '../Constants/constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const horizontalRef = useRef(null);

    useGSAP(() => {
        const pin = gsap.fromTo(
            horizontalRef.current,
            {
                translateX: 0,
            },
            {
                translateX: () => -(horizontalRef.current.scrollWidth - window.innerWidth + 80),
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                    // markers: true,
                },
            }
        );

        // Parallax effect for the background text
        gsap.to(".parallax-bg", {
            xPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        // Progress Bar update
        gsap.to("#scroll-progress", {
            width: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
            }
        });

        return () => {
            pin.kill();
        };
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id='services' className='bg-[#050505] overflow-hidden'>
            <div ref={triggerRef} className='relative'>
                <div className='sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden'>
                    
                    {/* Cinematic Background Parallax Text */}
                    <div className='parallax-bg absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] font-black text-white/2 whitespace-nowrap pointer-events-none select-none uppercase leading-none'>
                        Services Services Services
                    </div>

                    <div className='relative z-10 w-full px-10 mb-12 flex flex-col items-center text-center'>
                        <h1 className='text-4xl md:text-7xl font-bold bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent mb-4 tracking-tighter'>
                            Expertise & Services
                        </h1>
                        <p className='text-gray-400 text-lg max-w-2xl'>
                            Bringing your vision to life with high-performance, aesthetically stunning digital solutions crafted with precision and passion.
                        </p>
                    </div>

                    <div ref={horizontalRef} className='flex gap-10 px-10 w-max'>
                        {SERVICES.map((service, index) => {
                            return (
                                <div key={index} className='w-[400px] shrink-0'>
                                    <ServicesCard 
                                        name={service.name} 
                                        description={service.description} 
                                        icon={service.icon} 
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/* Progress Bar */}
                    <div className='absolute bottom-10 left-10 right-10 h-[2px] bg-white/10 rounded-full overflow-hidden'>
                        <div className='h-full bg-pink-500 w-0' id='scroll-progress'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services