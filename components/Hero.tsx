import React from 'react';
import { Play, CircleDot } from 'lucide-react';
import GitHubSyncHero from './GitHubSyncHero';
import SimplePricingHero from './SimplePricingHero';

const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      
      {/* SECTION 1: Red Portal Hero (New Design) */}
      <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center pt-24 md:pt-32">
        
        {/* 1. Background Red Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B3B] via-[#FF1A4B] to-black h-[100vh] z-0"></div>

        {/* 2. Vertical Grid Lines (Overlay on Red) */}
        <div className="absolute inset-0 z-0 flex justify-center opacity-20 pointer-events-none px-4 md:px-0 mix-blend-overlay">
          <div className="w-full max-w-[1600px] flex justify-between h-full">
              {Array.from({ length: 13 }).map((_, i) => (
                   <div key={i} className="w-px h-full bg-white/40"></div>
              ))}
          </div>
        </div>

        {/* 3. The Portal / Arch Shape */}
        <div className="absolute top-[20%] md:top-[18%] left-1/2 -translate-x-1/2 w-[180vw] md:w-[120vw] aspect-[1/0.8] md:aspect-[1/0.65] rounded-[100%] bg-black z-10 border-t border-white/40 shadow-[0_-20px_80px_-10px_rgba(255,255,255,0.3)] overflow-hidden flex flex-col items-center justify-start pt-24 md:pt-40">
           
           {/* Inner Atmosphere inside the Portal */}
           {/* Main dark fill with gradient tint */}
           <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black opacity-100 pointer-events-none"></div>
           
           {/* Left Purple Glow */}
           <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] bg-blue-700/30 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
           
           {/* Right Red Glow */}
           <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-red-700/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

           {/* Inner Content Container */}
           <div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6 mt-4 md:mt-0">
               
               {/* Badge */}
               <div className="mb-8 animate-enter opacity-0" style={{animationDelay: '0.1s'}}>
                   <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase text-pink-200 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span> Unleashed 2025
                   </span>
               </div>

               {/* Headline */}
               <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1] drop-shadow-2xl animate-enter opacity-0" style={{animationDelay: '0.2s'}}>
                  The fastest way to <br/>
                  elevate your brand
               </h1>

               {/* Subhead */}
               <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed animate-enter opacity-0" style={{animationDelay: '0.3s'}}>
                  A dead simple, full-service design solution that delivers <br className="hidden md:block"/>
                  work 3x faster than traditional agencies
               </p>

               {/* CTA */}
               <div className="animate-enter opacity-0" style={{animationDelay: '0.4s'}}>
                   <button className="px-10 py-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.1)] ring-1 ring-white/10">
                      Start your project
                   </button>
               </div>

           </div>

           {/* Bottom Red Glow / Sun */}
           <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4D4D] rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

           {/* Scroll Indicator */}
           <div className="absolute bottom-16 md:bottom-20 z-20 text-[9px] font-bold tracking-[0.2em] text-pink-200/50 uppercase animate-pulse">
              Scroll for more
           </div>

        </div>

        {/* 4. Top Pill Nav (Floating above the portal) */}
        <div className="absolute top-6 md:top-8 z-30 animate-enter opacity-0" style={{animationDelay: '0.5s'}}>
           <div className="flex items-center gap-4 md:gap-8 px-8 py-3 bg-red-900/30 border border-white/20 backdrop-blur-xl rounded-full shadow-2xl">
              <a href="#" className="text-[11px] font-medium text-white/90 hover:text-white transition-colors uppercase tracking-wide">Journey</a>
              <a href="#" className="text-[11px] font-medium text-white/90 hover:text-white transition-colors uppercase tracking-wide">Dimensions</a>
              
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-white to-pink-200 flex items-center justify-center shadow-md">
                   <CircleDot size={16} className="text-red-600" />
              </div>
              
              <a href="#" className="text-[11px] font-medium text-white/90 hover:text-white transition-colors uppercase tracking-wide">Resonance</a>
              <a href="#" className="text-[11px] font-medium text-white/90 hover:text-white transition-colors uppercase tracking-wide">Archive</a>
           </div>
        </div>

      </section>

      {/* SECTION 2: GitHub Sync Hero */}
      <GitHubSyncHero />

      {/* SECTION 3: The Dark "Rewired" Section */}
      <section className="relative w-full bg-[#020510] text-white overflow-hidden py-32 md:py-48 flex flex-col items-center justify-center">
        
        {/* Background Texture - Consistent with GitHubSyncHero */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
              backgroundImage: 'radial-gradient(#3b82f6 1.5px, transparent 1.5px)',
              backgroundSize: '24px 24px'
          }}
        ></div>

        {/* Background Atmospheric Glow - Refined */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Top Blue Gradient */}
            <div className="absolute top-0 w-full h-[50%] bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-transparent mix-blend-screen"></div>
            
            {/* Central Warm Glow */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] md:w-[500px] md:h-[500px] bg-amber-500/20 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>

            {/* Secondary Cyan Glow */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[80vw] h-[45vw] bg-cyan-500/15 rounded-full blur-[100px] opacity-30 mix-blend-screen"></div>
        </div>

        {/* Vignette - Consistent with GitHubSyncHero */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020510] via-transparent to-[#020510] pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020510_100%)] pointer-events-none z-10"></div>

        {/* Content Z-Layer */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          
          {/* Pill Badge - Consistent styling */}
          <div className="inline-flex items-center justify-center mb-8">
             <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-400 backdrop-blur-md">
               Try Rewired: Multi-Agent Layer
             </span>
          </div>

          {/* Headline - Consistent typography */}
          <h2 className="text-5xl md:text-7xl font-sans font-medium text-white tracking-tight mb-8 leading-[1.1]">
            Your Workflow,<br />
            Rewired by Agentic AI
          </h2>

          {/* Subhead - Consistent styling */}
          <p className="text-blue-200/60 text-lg mb-12 font-light max-w-xl mx-auto leading-relaxed">
            The essential toolkit for funding and sharing anything. From writing about your latest idea, to building for the next Big DAO.
          </p>

          {/* Primary CTA - Consistent button style */}
          <div className="relative group inline-block">
             <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>
             <button className="relative px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-200 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
               Try Rewired
             </button>
          </div>

          {/* The "Funnel" Visual Interaction - Refined */}
          <div className="mt-20 md:mt-32 relative">
             {/* The "See How it Works" Button */}
             <div className="relative z-30 group cursor-pointer">
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <button className="relative flex items-center gap-3 px-6 py-3 bg-black/40 border border-cyan-500/30 rounded-full text-cyan-50 shadow-2xl hover:bg-black/60 backdrop-blur-md transition-all">
                   <span className="font-medium text-base">See How it works</span>
                   <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Play size={10} fill="currentColor" className="text-cyan-200 ml-0.5" />
                   </div>
                </button>
             </div>

             {/* Connection Line - Consistent with GitHubSyncHero */}
             <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1px] h-[300px] bg-gradient-to-b from-white via-cyan-400 to-transparent opacity-50 blur-[1px]"></div>
          </div>
          
          {/* Bottom Caption - Refined */}
          <div className="mt-32 text-center relative z-20">
             <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-2">Powering teams inside the world's most innovative companies</p>
             <button className="text-white/70 border-b border-white/20 pb-0.5 hover:text-white hover:border-white/40 transition-colors text-sm">Read More</button>
          </div>

        </div>

        {/* Decorative Particles - Subtle */}
        <div className="absolute inset-0 w-full h-full z-10 opacity-20">
           <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
           <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
           <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

      </section>

      {/* SECTION 4: Simple Pricing Hero */}
      <SimplePricingHero />

    </div>
  );
};

export default Hero;