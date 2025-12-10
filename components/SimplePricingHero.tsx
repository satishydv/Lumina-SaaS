'use client'

import React, { useState } from 'react';
import { Check, Hexagon, Circle, Share2 } from 'lucide-react';

const SimplePricingHero: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#020510] overflow-hidden flex flex-col items-center justify-center min-h-[900px]">
      
      {/* Background Texture - Consistent */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
            backgroundImage: 'radial-gradient(#3b82f6 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Vignette - Consistent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020510] via-transparent to-[#020510] pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020510_100%)] pointer-events-none z-10"></div>
      
      {/* Atmospheric Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-start">
        
        {/* Header Section */}
        <div className="mb-16 w-full max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white mb-6 tracking-tight leading-[1.1]">
                Find The Right <span className="font-serif italic text-blue-600">AI Power</span> For You
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
                From A <span className="italic font-serif text-gray-300">Simple Spark</span> To Full-Scale Intelligence — Choose The Plan That Matches Your Creativity And Ambition.
            </p>

            {/* Toggle Switch */}
            <div className="inline-flex p-1 rounded-full bg-white w-fit">
                <button 
                    onClick={() => setIsYearly(true)}
                    className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isYearly ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    Yearly
                </button>
                <button 
                    onClick={() => setIsYearly(false)}
                    className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!isYearly ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    Monthly
                </button>
            </div>
        </div>

        {/* Cards Container */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Lite Card */}
            <div className="group relative rounded-3xl border border-blue-900/30 bg-[#0A0A0E] overflow-hidden hover:border-blue-800/50 transition-colors duration-300 flex flex-col md:flex-row min-h-[400px]">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none"></div>

                {/* Left Side: Info */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between relative z-10">
                    <div>
                        {/* Icon: Sphere */}
                        <div className="w-12 h-12 mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-400 shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.5),0_0_15px_rgba(255,255,255,0.1)]"></div>
                        
                        <h3 className="text-3xl font-sans font-medium text-white mb-2">Lite</h3>
                        <p className="text-gray-400 text-sm mb-8">Perfect For Trying It Out</p>
                        
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-sans font-bold text-white">$0</span>
                            <span className="text-gray-500 text-sm font-medium">/Month</span>
                        </div>
                    </div>

                    <button className="w-full py-3.5 px-6 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-medium text-sm">
                        Get Pro Plan
                    </button>
                </div>

                {/* Divider Line (Dashed) */}
                <div className="hidden md:block w-px border-l border-dashed border-blue-900/30 my-8"></div>
                <div className="md:hidden h-px border-t border-dashed border-blue-900/30 mx-8"></div>

                {/* Right Side: Features */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center relative z-10 bg-black/20">
                    <ul className="space-y-6">
                        {[
                            'Access Basic Chat & Response Tools',
                            'Generate Simple Text, Code & Summaries',
                            'Ask Questions And Get Instant Answers',
                            'Use On Web And Mobile'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check size={18} className="text-white mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-300 font-light leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Pro Card */}
            <div className="group relative rounded-3xl border border-blue-600/30 bg-[#0A0A0E] overflow-hidden hover:border-blue-500/50 transition-colors duration-300 flex flex-col md:flex-row min-h-[400px] shadow-[0_0_40px_rgba(37,99,235,0.05)]">
                 {/* Background Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none"></div>

                {/* Left Side: Info */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between relative z-10">
                    <div>
                        {/* Icon: Node/Hexagon */}
                        <div className="w-12 h-12 mb-6 flex items-center justify-center">
                            <Share2 className="text-white w-10 h-10" strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="text-3xl font-sans font-medium text-white mb-2">Pro</h3>
                        <p className="text-gray-400 text-sm mb-8">For Creators And Daily Power Users</p>
                        
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-4xl font-sans font-bold text-white">${isYearly ? '20' : '25'}</span>
                            <span className="text-gray-500 text-sm font-medium">/Month {isYearly && 'Billed Annually'}</span>
                        </div>
                    </div>

                    <button className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all font-medium text-sm mt-6">
                        Get Pro Plan
                    </button>
                </div>

                {/* Divider Line (Dashed) */}
                <div className="hidden md:block w-px border-l border-dashed border-blue-500/30 my-8"></div>
                <div className="md:hidden h-px border-t border-dashed border-blue-500/30 mx-8"></div>

                {/* Right Side: Features */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center relative z-10 bg-black/20">
                    <ul className="space-y-6">
                        {[
                            'Longer Chats And More Daily Requests',
                            'Access To Creative Tools: Image Gen, AI Writing',
                            'Code Generation With Debugging Support',
                            'Use Advanced Voice Commands',
                            'Priority Processing And Faster Replies'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check size={18} className="text-white mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-300 font-light leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default SimplePricingHero;
