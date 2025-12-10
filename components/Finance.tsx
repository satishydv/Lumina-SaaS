import React from 'react';
import { Bitcoin, Gem, Eclipse, Hexagon, Triangle, X } from 'lucide-react';

const Finance: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-20 overflow-hidden relative font-sans selection:bg-blue-500/30 flex flex-col items-center">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[40vw] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Pill Label */}
        <div className="inline-flex items-center justify-center mb-8 animate-enter opacity-0" style={{ animationDelay: '0.1s' }}>
           <div className="px-4 py-1.5 rounded-full bg-[#111] border border-white/10 shadow-lg backdrop-blur-md">
             <span className="text-gray-300 text-sm font-medium">Your smart Investor</span>
           </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 animate-enter opacity-0" style={{ animationDelay: '0.2s' }}>
          Empowering the Next Era <br className="hidden md:block" />
          of Digital Finance
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-20 leading-relaxed animate-enter opacity-0" style={{ animationDelay: '0.3s' }}>
          Experience a smarter, faster, and more transparent way to <br className="hidden md:block" />
          trade, invest, and grow with blockchain innovation.
        </p>

        {/* Central Visual Composition */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] flex items-center justify-center animate-enter opacity-0" style={{ animationDelay: '0.5s' }}>
           
           {/* The Blue Arc / Horizon */}
           <div className="absolute bottom-0 w-[150%] md:w-[120%] h-[1000px] rounded-[100%] border-t-[1px] border-blue-500/30 bg-gradient-to-b from-blue-900/10 to-transparent translate-y-[85%] shadow-[0_-20px_100px_rgba(0,100,255,0.15)] overflow-hidden">
              {/* Scanlines on the arc */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,100,255,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%]"></div>
           </div>

           {/* The Central Orb */}
           <div className="relative w-64 h-64 md:w-80 md:h-80 z-20">
              {/* Orb Glow Behind */}
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
              
              {/* Orb Body */}
              <div className="relative w-full h-full rounded-full bg-black border border-blue-500/20 shadow-[inset_0_0_60px_rgba(0,50,150,0.5)] overflow-hidden flex items-center justify-center">
                  
                  {/* Internal Reflection */}
                  <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent opacity-50"></div>
                  
                  {/* The Star Shape */}
                  <div className="relative w-full h-full animate-spin-slow">
                     {/* Horizontal Flare */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-2 bg-blue-400 blur-md rounded-full"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-0.5 bg-white rounded-full"></div>
                     
                     {/* Vertical Flare */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-2 bg-blue-400 blur-md rounded-full"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-0.5 bg-white rounded-full"></div>

                     {/* The 4-pointed Star Body */}
                     <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                        <path d="M 50 10 C 50 35 50 35 75 50 C 50 65 50 65 50 90 C 50 65 50 65 25 50 C 50 35 50 35 50 10 Z" fill="currentColor" className="opacity-80" />
                        <path d="M 50 25 C 50 40 50 40 65 50 C 50 60 50 60 50 75 C 50 60 50 60 35 50 C 50 40 50 40 50 25 Z" fill="white" />
                     </svg>
                  </div>
              </div>
           </div>

           {/* Floating Icons Left */}
           <div className="absolute left-0 md:left-10 lg:left-20 bottom-10 flex gap-4 md:gap-8 items-end">
              <IconBubble icon={<Gem size={20} />} label="ETH" delay="0s" />
              <IconBubble icon={<span className="font-bold font-serif italic text-lg">Đ</span>} label="DOGE" delay="0.5s" />
              <IconBubble icon={<span className="font-bold text-lg">S</span>} label="SOL" delay="1s" />
              <IconBubble icon={<Bitcoin size={20} />} label="BTC" delay="1.5s" />
           </div>

           {/* Floating Icons Right */}
           <div className="absolute right-0 md:right-10 lg:right-20 bottom-10 flex gap-4 md:gap-8 items-end">
              <IconBubble icon={<X size={20} />} label="X" delay="0.2s" />
              <IconBubble icon={<Eclipse size={20} />} label="DOT" delay="0.7s" />
              <IconBubble icon={<Triangle size={20} />} label="AVA" delay="1.2s" />
              <IconBubble icon={<Hexagon size={20} />} label="LINK" delay="1.7s" />
           </div>

        </div>

      </div>
    </div>
  );
};

// Helper Component for the floating icons
const IconBubble = ({ icon, label, delay }: { icon: React.ReactNode, label: string, delay: string }) => (
  <div 
    className="group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg hover:bg-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-float"
    style={{ animationDelay: delay }}
  >
    <div className="text-gray-400 group-hover:text-white transition-colors">
       {icon}
    </div>
    {/* Tooltipish label */}
    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs font-mono text-blue-400 transition-opacity duration-300">
       {label}
    </div>
  </div>
);

export default Finance;
