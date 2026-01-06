import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const ServicesCard = () => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Adjust the threshold value to control the tilt effect
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        
        const x = mouseX / width - 0.5;
        const y = mouseY / height - 0.5;
        
        setTilt({ x: y * -threshold, y: x * threshold });
        setSpotlight({ x: mouseX, y: mouseY });
    };

    return (
        <div className="relative group p-px rounded-2xl transition-all duration-300 ease-out"
            onMouseMove={handleMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setTilt({ x: 0, y: 0 });
                setIsHovered(false);
            }}
            style={{ 
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                background: isHovered ? `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(236, 72, 153, 0.4), transparent 40%)` : 'rgba(236, 72, 153, 0.1)'
            }}
        >
            <div className="relative rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center text-center p-8 h-full transition-all duration-300">
                {/* Spotlight Overlay */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255, 255, 255, 0.05), transparent 40%)`
                    }}
                />

                <div className='relative z-10 w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-pink-500/10 border border-pink-500/20 group-hover:scale-110 transition-transform duration-500'>
                    <FaWhatsapp className='size-10 text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]' />
                </div>
                
                <div className='relative z-10 flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold bg-linear-to-br from-white to-white/60 bg-clip-text text-transparent'>
                        Web Design
                    </h1>
                    <p className='text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors'>
                        I design and build full-stack web solutions that help brands grow through clarity, performance, and reliability.
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 blur-3xl rounded-full -mr-12 -mt-12" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/5 blur-3xl rounded-full -ml-12 -mb-12" />
            </div>
        </div>
    );
};

export default ServicesCard
