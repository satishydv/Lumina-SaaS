import React from 'react';

const GitHubSyncHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[800px] bg-[#020510] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Texture - Hexagonal/Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
            backgroundImage: 'radial-gradient(#1e3a8a 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020510] via-transparent to-[#020510] pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020510_100%)] pointer-events-none z-10"></div>

      {/* Main Content */}
      <div className="relative z-30 text-center max-w-4xl px-6 -mt-20">
        {/* Pill Label */}
        <div className="inline-flex items-center justify-center mb-8">
           <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400 backdrop-blur-md">
             Sync Github, Both Ways, Effortlessly
           </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-sans font-medium text-white tracking-tight mb-8 leading-[1.1]">
          Effortlessly sync with <br/>
          GitHub in both directions
        </h2>

        {/* Subheading */}
        <p className="text-blue-200/60 text-lg mb-12 font-light max-w-xl mx-auto">
          Manage your task efficiency with savvy github sync
        </p>

        {/* Button with glow */}
        <div className="relative group inline-block">
           <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>
           <button className="relative px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-200 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
             Download Now
           </button>
           
           {/* The vertical beam connecting to the button */}
           <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-[300px] bg-gradient-to-b from-white via-cyan-400 to-transparent opacity-50 blur-[1px]"></div>
        </div>
      </div>

      {/* The Visual Effect at Bottom (The Blue Funnel) */}
      <div className="absolute bottom-0 left-0 right-0 h-[600px] w-full pointer-events-none z-20">
         
         {/* The Central Glow Spot - The 'Source' */}
         <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600 rounded-full blur-[120px] opacity-50 mix-blend-screen"></div>
         <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-cyan-400 rounded-full blur-[60px] opacity-60 mix-blend-screen"></div>

         {/* SVG Shapes for the Curves */}
         <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600">
            <defs>
               <linearGradient id="curveGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="20%" stopColor="#3b82f6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" />
               </linearGradient>
               
               <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
               </linearGradient>

               <mask id="fadeMask">
                 <rect x="0" y="0" width="1440" height="600" fill="url(#maskGradient)" />
               </mask>
               <linearGradient id="maskGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0" stopColor="white" stopOpacity="0" />
                 <stop offset="0.5" stopColor="white" stopOpacity="1" />
               </linearGradient>
            </defs>

            {/* Left Curve Shape */}
            <path 
              d="M0,600 L0,150 Q450,600 720,600 L720,600 Z" 
              fill="url(#curveGradient)" 
              className="opacity-40"
            />
            
            {/* Right Curve Shape */}
            <path 
              d="M1440,600 L1440,150 Q990,600 720,600 L720,600 Z" 
              fill="url(#curveGradient)" 
              className="opacity-40"
            />

            {/* Glowing Edges */}
            <path 
              d="M0,150 Q450,600 720,600" 
              fill="none" 
              stroke="url(#glowLine)" 
              strokeWidth="2"
              className="blur-[2px] opacity-70"
            />
            <path 
              d="M1440,150 Q990,600 720,600" 
              fill="none" 
              stroke="url(#glowLine)" 
              strokeWidth="2"
              className="blur-[2px] opacity-70"
            />
            
            {/* Sharp Edges (Core) */}
             <path 
              d="M0,150 Q450,600 720,600" 
              fill="none" 
              stroke="cyan" 
              strokeWidth="1"
              className="opacity-40"
            />
            <path 
              d="M1440,150 Q990,600 720,600" 
              fill="none" 
              stroke="cyan" 
              strokeWidth="1"
              className="opacity-40"
            />
         </svg>
      </div>
    </section>
  );
};

export default GitHubSyncHero;