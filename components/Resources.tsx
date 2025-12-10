'use client'

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the 3D scene component to avoid SSR issues
const Resources3D = dynamic(() => import('./Resources3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white/50">Loading 3D scene...</div>
});


const Resources: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#020305] via-[#030408] to-[#020305] overflow-hidden flex flex-col pt-20">
      
      {/* Enhanced Background Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* HTML Overlay Content - Enhanced */}
      <div className="absolute top-20 md:top-24 left-0 w-full z-30 pointer-events-none flex flex-col items-center justify-center text-center px-4 animate-enter">
        <div className="px-5 py-2 rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl mb-8 shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/90">Trusted by 10,000+ Teams</span>
          </div>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight drop-shadow-2xl mb-2 leading-tight">
          Voices from the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
            Void
          </span>
        </h1>
        <p className="text-sm md:text-base text-white/60 mt-4 max-w-2xl">
          Real stories from teams transforming their workflows with Lumina
        </p>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Resources3D />
      </div>

      {/* Enhanced Bottom overlay */}
      <div className="absolute bottom-6 md:bottom-10 w-full text-center z-30 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
          <p className="text-xs text-white/70 uppercase tracking-wider">Drag to rotate • Scroll to zoom</p>
        </div>
      </div>

    </div>
  );
};

export default Resources;