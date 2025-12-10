'use client'

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Resources from '../../components/Resources';
import Footer from '../../components/Footer';

export default function ResourcesPage() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen w-full bg-white dark:bg-[#050505] dark:text-white relative overflow-hidden selection:bg-accent-blue selection:text-white flex flex-col transition-colors duration-300">
        {/* Background Atmosphere */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20 transition-opacity duration-300">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-100 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-float" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-purple-50 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 flex-grow flex flex-col">
          <Navbar currentPage="resources" isDark={isDark} toggleTheme={toggleTheme} />
          <div className="flex-grow flex flex-col">
            <Resources />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

