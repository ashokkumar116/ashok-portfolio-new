import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const ServicesCard = ({name,description,icon:Icon}) => {
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
        <div className="relative group w-100 p-px rounded-2xl transition-all duration-300 ease-out"
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
            <div className="relative rounded-2xl bg-[#0a0a0a]/40 backdrop-blur-3xl border border-white/5 overflow-hidden flex flex-col items-center text-center p-10 h-full transition-all duration-500 group-hover:border-pink-500/30 group-hover:bg-[#0a0a0a]/60">
                {/* Spotlight Overlay */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                        background: `radial-gradient(800px circle at ${spotlight.x}px ${spotlight.y}px, rgba(236, 72, 153, 0.08), transparent 40%)`
                    }}
                />

                <div className='relative z-10 w-24 h-24 mb-8 flex items-center justify-center rounded-3xl bg-pink-500/5 border border-pink-500/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]'>
                    <Icon className='size-12 text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]' />
                </div>
                
                <div className='relative z-10 flex flex-col gap-4'>
                    <h1 className='text-3xl font-bold tracking-tight bg-linear-to-br from-white via-white to-white/40 bg-clip-text text-transparent'>
                        {name}
                    </h1>
                    <p className='text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500'>
                        {description}
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </div>
    );
};

export default ServicesCard
