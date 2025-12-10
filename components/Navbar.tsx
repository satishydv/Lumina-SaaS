'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, Landmark, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, isDark, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', id: 'home', path: '/' },
    { name: 'Features', id: 'product', path: '/product' },
    { name: 'Security', id: 'solutions', path: '/solutions' },
    { name: 'Testimonials', id: 'resources', path: '/resources' },
    { name: 'Pricing', id: 'pricing', path: '/pricing' },
    { name: 'Finance', id: 'finance', path: '/finance' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <div className="w-full max-w-5xl flex items-center justify-between p-2 pl-4 md:pl-6 bg-[#1a1a1a]/80 dark:bg-[#000000]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-300">
        
        {/* Logo Section */}
        <Link 
          href="/"
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
             <Landmark size={16} fill="currentColor" className="text-white/90" />
          </div>
          <span className="font-sans font-medium text-lg text-white/90 tracking-tight group-hover:text-white transition-colors">
            Lumina
          </span>
        </Link>

        {/* Navigation Links - Centered */}
        <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  pathname === link.path || (link.path === '/' && pathname === '/')
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 pr-1">
          {/* Theme Toggle (Subtle) */}
          <button 
            onClick={toggleTheme}
            className="hidden sm:flex p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {/* CTA Button */}
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-medium transition-all shadow-lg hover:shadow-violet-500/25 group">
            <span>Get started free</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white ml-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[-1] bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col pt-32 px-8 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-sans font-medium text-gray-300 hover:text-white text-left border-b border-white/10 pb-4 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-4 text-gray-400">
               <span>Switch Theme</span>
               <button 
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white/10 text-white"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;