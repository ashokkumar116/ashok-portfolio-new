import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {

    useGSAP(()=>{
        const splitsubtitle = SplitText.create(".subtitle",{
            type:"words",
        })
        const splitintro = SplitText.create("#intro-name",{
            type:"chars",
        })
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"3% top",
                end:"bottom top",
                scrub:1,
                pin:true,
            }
        })
        tl.to(".title",{
            scale:0,
            opacity:0,
            ease:"power2.inOut",
        })
        tl.from(splitsubtitle.words,{
            y:100,
            opacity:0,
            stagger:0.05,
            ease:"power2.inOut",
        },"-=0.4")
        
        tl.fromTo(".subtitle",{
            opacity:1,
            ease:"power2.inOut",
        },{
            delay:1,
            scale:0,
            opacity:0,
            ease:"power2.inOut",
        })
        tl.to("#ashok-img",{
            height:"400px",
            width:"400px",
            borderRadius:"10px",
            ease:"power2.inOut",
        },"-=0.2")
        tl.to("#img-container",{
            left:"240px",
            ease:"power2.inOut",
        })
        tl.fromTo(splitintro.chars,{
            opacity:0,
            y:100,
            scale:1.3,
            filter:"blur(10px)",
            ease:"power2.inOut",
        },{
            opacity:1,
            stagger:0.05,
            y:0,
            scale:1,
            filter:"blur(0px)",
            ease:"power2.inOut",
        })
    })

    useGSAP(()=>{
        const splitabouttitle = SplitText.create("#about-title",{
            type:"words",
        })
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#about",
                start:"top 30%",
                end:"bottom top",
                scrub:true,
                markers:true,
                pin:true,
            }
        })
        tl.to(splitabouttitle.words,{
            color:"white",
            stagger:1,
            ease:"power1.in",
        })
    })

  return (
    <section id='about'>
        <div className='px-6 py-10'>
            <h1 className='text-3xl md:text-7xl font-bold text-center  text-gray-700' id='about-title'>I design and build full-stack web solutions that help brands grow through clarity, performance, and reliability.</h1>
        </div>
    </section>
  )
}

export default About