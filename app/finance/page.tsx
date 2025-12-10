'use client'

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Finance from '../../components/Finance';
import Footer from '../../components/Footer';

export default function FinancePage() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen w-full bg-white dark:bg-[#050505] dark:text-white relative overflow-hidden selection:bg-accent-blue selection:text-white flex flex-col transition-colors duration-300">
        {/* No background atmosphere for finance page */}
        
        <div className="relative z-10 flex-grow flex flex-col">
          <Navbar currentPage="finance" isDark={isDark} toggleTheme={toggleTheme} />
          <div className="flex-grow flex flex-col">
            <Finance />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

