'use client'

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Solutions from '../../components/Solutions';
import Footer from '../../components/Footer';

export default function SolutionsPage() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen w-full bg-[#020510] text-white relative overflow-hidden selection:bg-accent-blue selection:text-white flex flex-col">
        <div className="relative z-10 flex-grow flex flex-col">
          <Navbar currentPage="solutions" isDark={isDark} toggleTheme={toggleTheme} />
          <div className="flex-grow flex flex-col">
            <Solutions />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

