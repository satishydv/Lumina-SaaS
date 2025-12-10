'use client'

import React from 'react';
import Link from 'next/link';
import { Twitter, Github, Linkedin, Landmark, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#020510] pt-12 pb-6 md:pt-16 md:pb-8 overflow-hidden">
      {/* Background Effects - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-5 md:opacity-10"
        style={{
            backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}
      ></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-8 md:mb-12">
            {/* Brand Column - Full width on mobile */}
            <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 mb-6 sm:mb-0">
                <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                        <Landmark size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                    </div>
                    <span className="font-sans font-medium text-base sm:text-lg text-white tracking-tight group-hover:text-white/90 transition-colors">
                        Lumina
                    </span>
                </Link>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mb-6 sm:mb-8">
                    Clarity in complexity. The essential toolkit for modern teams building the future.
                </p>
                <div className="flex gap-2 sm:gap-3">
                    <a 
                        href="#" 
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 backdrop-blur-sm group"
                    >
                        <Twitter size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                        href="#" 
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 backdrop-blur-sm group"
                    >
                        <Github size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                        href="#" 
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 backdrop-blur-sm group"
                    >
                        <Linkedin size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Links Columns - 2 columns on mobile */}
            <div className="col-span-1">
                <h4 className="font-sans font-semibold text-white mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">Product</h4>
                <ul className="space-y-2 sm:space-y-3">
                    <li>
                        <Link href="/product" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Features
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Integrations
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                    <li>
                        <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Pricing
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Changelog
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-1">
                <h4 className="font-sans font-semibold text-white mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">Company</h4>
                <ul className="space-y-2 sm:space-y-3">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            About Us
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Careers
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Blog
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Contact
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 sm:col-span-1 lg:col-span-1">
                <h4 className="font-sans font-semibold text-white mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">Legal</h4>
                <ul className="space-y-2 sm:space-y-3">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Privacy Policy
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Terms of Service
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-1 group">
                            Cookie Policy
                            <ArrowUpRight size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-400 text-[10px] sm:text-xs text-center sm:text-left order-2 sm:order-1">
                © 2024 Lumina Systems Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
                <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50 flex-shrink-0"></span>
                    <span className="hidden sm:inline">All systems operational</span>
                    <span className="sm:hidden">Operational</span>
                </span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;