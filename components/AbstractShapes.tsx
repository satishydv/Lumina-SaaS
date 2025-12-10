import React from 'react';

const AbstractShapes: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-1000">
      
      {/* Main Container for the Abstract Composition */}
      <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
        
        {/* Shape 1: The Blue Arch/Pill */}
        <div className="absolute top-10 right-10 w-48 h-64 md:w-64 md:h-80 bg-accent-blue rounded-full mix-blend-multiply dark:mix-blend-normal dark:opacity-50 opacity-90 animate-float" style={{ animationDelay: '0s' }}>
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-transparent opacity-40 rounded-full"></div>
        </div>

        {/* Shape 2: The Wireframe Sphere Representation (CSS Border) */}
        <div className="absolute bottom-20 left-10 w-40 h-40 md:w-56 md:h-56 border-[1px] border-gray-300 dark:border-white/20 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '1.5s' }}>
           <div className="absolute inset-4 border-[1px] border-gray-200 dark:border-white/10 rounded-full opacity-60"></div>
           <div className="absolute inset-8 border-[1px] border-gray-100 dark:border-white/5 rounded-full opacity-40"></div>
        </div>

        {/* Shape 3: The Solid Contrast Circle */}
        <div className="absolute top-32 left-0 md:-left-8 w-24 h-24 bg-gray-900 dark:bg-white/90 rounded-full shadow-2xl animate-float z-10 transition-colors" style={{ animationDelay: '0.5s' }}>
             <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black dark:from-white dark:to-gray-200 rounded-full"></div>
        </div>

        {/* Shape 4: The Glass Card */}
        <div className="absolute bottom-12 right-4 md:right-12 w-48 h-32 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-xl shadow-lg flex flex-col justify-center px-4 animate-enter z-20 transition-colors" style={{ animationDelay: '0.8s' }}>
           <div className="flex items-center gap-3 mb-3">
             <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 flex items-center justify-center shadow-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
             </div>
             <div className="h-2 w-20 bg-gray-800/10 dark:bg-white/10 rounded-full"></div>
           </div>
           <div className="space-y-2">
             <div className="h-1.5 w-full bg-gray-800/5 dark:bg-white/10 rounded-full"></div>
             <div className="h-1.5 w-2/3 bg-gray-800/5 dark:bg-white/5 rounded-full"></div>
           </div>
        </div>

        {/* Decorative Lines/Grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" viewBox="0 0 500 500">
           <defs>
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#grid)" />
           <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-slow origin-center text-gray-800 dark:text-white/50"/>
        </svg>

      </div>
    </div>
  );
};

export default AbstractShapes;