'use client'

import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full animate-enter flex flex-col items-center">
      
      <div className="text-center max-w-2xl mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-accent-text dark:text-white mb-6 transition-colors">
          Transparent <span className="text-accent-blue">Value</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors">
          Choose a plan that scales with your ambition. No hidden fees, just pure functionality.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <span className={`text-sm font-medium ${!annual ? 'text-accent-text dark:text-white' : 'text-gray-400'}`}>Monthly</span>
          <button 
            onClick={() => setAnnual(!annual)}
            className="w-14 h-8 bg-gray-200 dark:bg-white/20 rounded-full relative transition-colors duration-300 focus:outline-none"
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${annual ? 'left-7' : 'left-1'}`}></div>
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-accent-text dark:text-white' : 'text-gray-400'}`}>Yearly <span className="text-accent-blue text-xs ml-1 font-bold">(-20%)</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-center">
        
        {/* Free Plan */}
        <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 h-fit">
          <h3 className="font-serif text-2xl text-gray-800 dark:text-white mb-2 transition-colors">Starter</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold tracking-tight text-accent-text dark:text-white">$0</span>
            <span className="text-gray-400 text-sm">/mo</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 transition-colors">Perfect for exploring the ecosystem.</p>
          <ul className="space-y-3 mb-8">
            {['Single User', '5 Projects', 'Community Support', 'Basic Analytics'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <Check size={16} className="text-gray-400" /> {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
            Get Started
          </button>
        </div>

        {/* Pro Plan - Redesigned to match image */}
        <div className="relative group md:-my-4">
             {/* Gradient Border/Glow Wrapper */}
            <div className="absolute -inset-[2px] rounded-[34px] bg-gradient-to-tr from-green-400 via-blue-600 to-purple-600 opacity-100 blur-[0.5px]"></div>
            
            {/* Card Content */}
            <div className="relative h-full bg-[#050508] rounded-[32px] p-8 md:p-10 flex flex-col overflow-hidden z-10">
                
                {/* Dot Pattern Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{
                       backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
                       backgroundSize: '24px 24px'
                     }}>
                </div>

                {/* Top Right Light Leak/Glow */}
                <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-purple-600/40 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                    <h3 className="font-sans text-xl font-medium text-gray-200 mb-6">Pro</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-6xl font-sans font-medium text-white tracking-tight">
                            ${annual ? '12' : '15'}
                        </span>
                        <span className="text-gray-400 text-lg translate-y-2">/ month</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-8 font-light">For professionals who write daily</p>

                    <button className="w-full py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium mb-8 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                        Upgrade To Pro <ArrowRight size={18} />
                    </button>

                    <div className="h-px w-full bg-white/10 mb-8"></div>

                    <ul className="space-y-5">
                        {['Unlimited Documents', 'Smart Rewrite + Summarizer', 'Personal Tone Training', 'Email + Chat Support'].map(item => (
                            <li key={item} className="flex items-center gap-3 text-[15px] text-gray-300">
                                <Check size={18} className="text-white flex-shrink-0" strokeWidth={3} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* Enterprise Plan */}
        <div className="p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 h-fit">
          <h3 className="font-serif text-2xl text-gray-800 dark:text-white mb-2 transition-colors">Scale</h3>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold tracking-tight text-accent-text dark:text-white">$99</span>
            <span className="text-gray-400 text-sm">/mo</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 transition-colors">For teams building the future.</p>
          <ul className="space-y-3 mb-8">
            {['Unlimited Users', 'SSO & Security', 'Dedicated Manager', 'API Access', '99.9% SLA'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <Check size={16} className="text-gray-400" /> {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-3 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>

      </div>
    </main>
  );
};

export default Pricing;