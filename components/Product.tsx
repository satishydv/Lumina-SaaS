import React from 'react';
import { Zap, Shield, Layers, Box, GitBranch, Cpu } from 'lucide-react';

const Product: React.FC = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Instant Sync",
      desc: "Real-time state management across all connected nodes.",
      span: "col-span-1 md:col-span-2",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Shield size={24} />,
      title: "Encrypted Core",
      desc: "AES-256 standard applied to every packet.",
      span: "col-span-1",
      bg: "bg-white dark:bg-[#111]"
    },
    {
      icon: <Layers size={24} />,
      title: "Adaptive UI",
      desc: "Interfaces that mold to user intent via predictive behavioral analysis.",
      span: "col-span-1",
      bg: "bg-white dark:bg-[#111]"
    },
    {
      icon: <GitBranch size={24} />,
      title: "Version Logic",
      desc: "Branching workflows for complex decision trees.",
      span: "col-span-1 md:col-span-2",
      bg: "bg-gray-50 dark:bg-white/5"
    }
  ];

  return (
    <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto w-full animate-enter">
      <div className="max-w-3xl mb-16">
        <span className="text-accent-blue font-bold tracking-wider uppercase text-xs mb-4 block">Product Architecture</span>
        <h1 className="font-serif text-5xl md:text-6xl text-accent-text dark:text-white mb-6 leading-[1.1] transition-colors">
          Engineered for <span className="italic font-light text-gray-400">Flow</span> state.
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl transition-colors">
          We dismantled the traditional SaaS dashboard and rebuilt it around the human cognitive process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Feature Card */}
        <div className="md:col-span-2 min-h-[300px] bg-accent-text dark:bg-[#0A0A0A] dark:border dark:border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden group text-white">
           <div className="relative z-10">
             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
               <Cpu size={24} className="text-white" />
             </div>
             <h3 className="font-serif text-3xl mb-4">Neural Processing</h3>
             <p className="text-white/60 max-w-md text-lg">
               Our engine anticipates your next move. By pre-fetching data contexts, Lumina reduces perceived latency to near zero.
             </p>
           </div>
           
           {/* Abstract Visual */}
           <div className="absolute top-1/2 right-[-10%] w-[300px] h-[300px] border border-white/10 rounded-full animate-spin-slow pointer-events-none">
              <div className="absolute inset-4 border border-white/5 rounded-full"></div>
              <div className="absolute inset-[50%] w-2 h-2 bg-blue-500 rounded-full top-0"></div>
           </div>
           <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full"></div>
        </div>

        {/* Secondary Feature Card */}
        <div className="col-span-1 min-h-[300px] bg-white dark:bg-[#111] border border-gray-100 dark:border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
           <div>
             <div className="w-12 h-12 bg-blue-50 dark:bg-white/10 rounded-full flex items-center justify-center mb-6 text-accent-blue dark:text-white">
               <Box size={24} />
             </div>
             <h3 className="font-serif text-2xl text-accent-text dark:text-white mb-2 transition-colors">Modular Blocks</h3>
             <p className="text-gray-500 dark:text-gray-400">Compose your workspace like lego.</p>
           </div>
           <div className="flex gap-2 mt-4">
             <div className="w-full h-16 bg-gray-50 dark:bg-white/5 rounded-lg border border-dashed border-gray-200 dark:border-white/10"></div>
             <div className="w-full h-16 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-white/5"></div>
           </div>
        </div>

        {/* Dynamic Grid */}
        {features.map((f, i) => (
          <div key={i} className={`${f.span} ${f.bg} rounded-2xl p-8 border border-gray-100/50 dark:border-white/5 hover:border-accent-blue/30 transition-colors duration-300 flex flex-col justify-center`}>
             <div className="mb-4 text-accent-text dark:text-white opacity-80">{f.icon}</div>
             <h3 className="font-serif text-xl text-accent-text dark:text-white mb-2">{f.title}</h3>
             <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;