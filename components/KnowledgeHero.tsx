import React from 'react';
import { ChevronDown, Play, Layout, Zap, BarChart2, Plus, ArrowRight } from 'lucide-react';

const KnowledgeHero: React.FC = () => {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a] dark:to-black relative overflow-hidden transition-colors">
       
       {/* Ambient Background Glows */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[1000px] bg-gradient-to-b from-blue-50/80 via-purple-50/50 to-transparent dark:from-blue-900/10 dark:via-purple-900/5 pointer-events-none blur-3xl"></div>

       <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
          
          {/* Main Copy */}
          <div className="text-center max-w-5xl mb-20 animate-enter">
             <h2 className="font-serif text-5xl md:text-7xl text-slate-800 dark:text-white tracking-tight leading-[1.1] mb-8 drop-shadow-sm">
                Knowledge & compliance <br/>
                <span className="text-slate-900 dark:text-gray-100 font-medium">for humans and agents</span>
             </h2>
             <p className="text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                EchelonAI unites your employees and AI agents through one powerful learning ecosystem.
             </p>
             <button className="px-10 py-4 bg-white dark:bg-[#1A1A1A] text-slate-900 dark:text-white font-semibold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-white/10 group flex items-center gap-2 mx-auto">
                Try Demo
             </button>
          </div>

          {/* The Dashboard Mockup - Recreated with CSS */}
          <div className="w-full max-w-[1200px] bg-white dark:bg-[#0e0e0e] rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col md:flex-row min-h-[800px] animate-enter" style={{animationDelay: '0.2s'}}>
             
             {/* Sidebar */}
             <div className="w-64 border-r border-gray-100 dark:border-white/5 p-4 flex-shrink-0 hidden md:flex flex-col bg-gray-50/40 dark:bg-[#0e0e0e]">
                <div className="flex items-center gap-2 mb-8 px-2 py-1">
                   <div className="w-6 h-6 bg-slate-200 dark:bg-white/20 rounded flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-white">SL</div>
                   <span className="font-semibold text-sm text-slate-700 dark:text-gray-200">SLMobbin</span>
                   <ChevronDown size={14} className="ml-auto text-slate-400" />
                </div>
                
                <div className="space-y-1">
                   <div className="px-2 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 mt-2">Project</div>
                   <div className="px-2 py-1.5 text-xs font-semibold text-slate-800 dark:text-white mb-2 pl-2">My Project</div>

                   {['Overview', 'Logs', 'Monitor'].map(i => (
                      <div key={i} className="px-2 py-2 text-sm text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-3 transition-colors">
                         <Layout size={16} className="opacity-50" /> {i}
                      </div>
                   ))}
                   <div className="px-2 py-2 text-sm font-medium text-slate-900 dark:text-white bg-gray-200/60 dark:bg-white/10 rounded-md cursor-pointer flex items-center gap-3 shadow-sm border border-gray-200/50 dark:border-transparent">
                      <Zap size={16} /> Playgrounds
                   </div>
                   {['Experiments', 'Datasets', 'Prompts', 'Scorers'].map(i => (
                      <div key={i} className="px-2 py-2 text-sm text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-3 transition-colors">
                         <BarChart2 size={16} className="opacity-50" /> {i}
                      </div>
                   ))}
                    <div className="px-2 py-2 text-sm text-slate-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-3 transition-colors">
                         <span className="w-4 flex justify-center text-slate-400">...</span> More
                      </div>
                </div>

                <div className="mt-auto px-2 pb-2">
                    <div className="text-xs text-slate-500 dark:text-gray-500 font-medium hover:text-slate-800 cursor-pointer transition-colors flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div> Configuration
                    </div>
                </div>
             </div>

             {/* Main Content Area */}
             <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#0e0e0e]">
                
                {/* Header Strip */}
                <div className="h-14 border-b border-gray-100 dark:border-white/5 flex items-center justify-between px-6 bg-white dark:bg-[#0e0e0e]">
                   <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400 font-medium">
                      <span>My Project</span>
                      <span className="text-slate-300">›</span>
                      <span className="text-slate-700 dark:text-white">Playgrounds</span>
                   </div>
                   <div className="flex items-center gap-6">
                      <span className="text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">Upgrade</span>
                      <div className="flex gap-4 text-slate-400">
                          <Layout size={14} className="hover:text-slate-600 cursor-pointer" />
                          <BarChart2 size={14} className="hover:text-slate-600 cursor-pointer" />
                      </div>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-inner">
                         <span className="text-[10px] font-bold text-white">JD</span>
                      </div>
                   </div>
                </div>

                {/* Sub-Header Toolbar */}
                <div className="h-16 border-b border-gray-100 dark:border-white/5 flex items-center justify-between px-6 bg-white dark:bg-[#0e0e0e]">
                   <div className="flex items-center gap-4">
                      <h3 className="font-bold text-lg text-slate-800 dark:text-white tracking-tight">SLMobbin - playground 1</h3>
                      <span className="text-slate-300 pb-1 cursor-pointer hover:text-slate-500">...</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold border border-gray-200 dark:border-white/10 rounded-md hover:bg-gray-50 dark:hover:bg-white/5 text-slate-600 dark:text-gray-300 transition-colors">
                         <Plus size={12} strokeWidth={3} /> Experiment
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold border border-gray-200 dark:border-white/10 rounded-md hover:bg-gray-50 dark:hover:bg-white/5 text-slate-600 dark:text-gray-300 transition-colors">
                         Loop
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-md shadow-sm hover:shadow text-slate-800 dark:text-white transition-all">
                         <Play size={10} fill="currentColor" /> Run
                      </button>
                   </div>
                </div>

                {/* Workspace / Editor */}
                <div className="p-8 flex-1 bg-[#FAFAFA] dark:bg-[#0a0a0a] overflow-y-auto">
                   
                   {/* Model & Config Bar */}
                   <div className="mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 rounded-md shadow-sm w-max cursor-pointer hover:border-blue-300 transition-colors">
                         <div className="w-3.5 h-3.5 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-[2px]"></div>
                         <span className="text-xs font-semibold text-slate-700 dark:text-gray-200">Gemini 2.5 Flash</span>
                         <ChevronDown size={12} className="text-slate-400 ml-2" />
                      </div>
                      <div className="text-xs font-mono text-slate-400 flex items-center gap-1 cursor-pointer hover:text-slate-600">
                          Params <ChevronDown size={10} />
                      </div>
                   </div>

                   {/* System Instruction */}
                   <div className="mb-4 bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 rounded-lg p-5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] relative group hover:border-gray-300 transition-colors">
                      <div className="flex justify-between mb-2">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                             Assistant <ChevronDown size={10} />
                          </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-mono">
                         You are an assistant that looks up population data. Return only the population number for the given city.
                      </p>
                      <div className="absolute top-4 right-4">
                           <button className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-100 dark:border-blue-800/30 shadow-sm opacity-60 group-hover:opacity-100 transition-opacity">Create Channel</button>
                      </div>
                   </div>

                   {/* User Input Block */}
                   <div className="mb-6 bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 rounded-lg p-5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] border-l-[3px] border-l-purple-500 relative">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                         User <ChevronDown size={10} />
                      </div>
                      <div className="flex items-center gap-2 font-mono text-sm text-slate-700 dark:text-gray-300">
                         <span className="text-purple-600 dark:text-purple-400">City:</span>
                         <span className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-1.5 py-0.5 rounded border border-purple-100 dark:border-purple-500/30">{'{{input}}'}</span>
                      </div>
                      <div className="mt-6 flex gap-2">
                         <button className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded text-xs font-semibold text-slate-600 dark:text-gray-400 flex items-center gap-1.5 hover:bg-gray-100">
                            <Plus size={12} /> Message part
                         </button>
                      </div>
                   </div>

                   {/* Action Buttons */}
                   <div className="flex flex-wrap gap-2 mb-12">
                       {['Message', 'Tools', 'Text output', 'Generate message'].map(item => (
                          <button key={item} className="px-3 py-1.5 bg-transparent border border-gray-200 dark:border-white/10 rounded-md text-xs font-semibold text-slate-500 hover:bg-white hover:shadow-sm dark:hover:bg-white/5 transition-all flex items-center gap-1.5">
                             <Plus size={12} /> {item}
                          </button>
                       ))}
                   </div>
                   
                   {/* Divider */}
                   <div className="flex items-center gap-4 mb-8">
                      <button className="px-3 py-1 border border-gray-200 dark:border-white/10 rounded text-[10px] font-bold text-slate-500 bg-white dark:bg-[#151515] flex items-center gap-1">
                         <Layout size={10} /> All rows <ChevronDown size={10} />
                      </button>
                      <div className="h-px flex-1 bg-gray-200 dark:bg-white/10"></div>
                      <div className="flex gap-2">
                           {['Task 1', 'Scorer', 'world-cities 100'].map(t => (
                              <span key={t} className="px-2 py-1 bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 rounded text-[10px] font-mono text-slate-500 flex items-center gap-1">
                                 {t === 'Task 1' && <Plus size={8} />} {t} {t.includes('100') && <ChevronDown size={8} />}
                              </span>
                           ))}
                      </div>
                   </div>

                   {/* Metrics Cards */}
                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-4 bg-white dark:bg-[#151515] rounded-lg border border-gray-100 dark:border-white/5 shadow-sm">
                         <div className="flex items-center gap-2 mb-2">
                             <div className="w-3 h-3 rounded-full border border-slate-200 flex items-center justify-center"><div className="w-1 h-3 bg-slate-300 rotate-45"></div></div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Duration</div>
                         </div>
                         <div className="text-xl font-mono font-medium text-slate-800 dark:text-white">2,444.11s <span className="text-[10px] text-slate-400 font-sans ml-1">SUM</span></div>
                         <div className="mt-4 flex justify-end"><div className="w-3 h-3 rounded-full border border-slate-200"></div></div>
                      </div>
                      <div className="p-4 bg-white dark:bg-[#151515] rounded-lg border border-gray-100 dark:border-white/5 shadow-sm">
                         <div className="flex items-center gap-2 mb-2">
                              <div className="w-3 h-3 rounded-full border border-slate-200 flex items-center justify-center"><div className="w-1 h-3 bg-slate-300 rotate-45"></div></div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">LLM Duration</div>
                         </div>
                         <div className="text-xl font-mono font-medium text-slate-800 dark:text-white">2,443.65s <span className="text-[10px] text-slate-400 font-sans ml-1">SUM</span></div>
                         <div className="mt-4 flex justify-end"><div className="w-3 h-3 rounded-full border border-slate-200"></div></div>
                      </div>
                      <div className="p-4 bg-white dark:bg-[#151515] rounded-lg border border-gray-100 dark:border-white/5 shadow-sm">
                         <div className="flex items-center gap-2 mb-2">
                              <div className="w-3 h-3 rounded-full border border-slate-200 flex items-center justify-center"><div className="w-1 h-3 bg-slate-300 rotate-45"></div></div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Prompt Tokens</div>
                         </div>
                         <div className="text-xl font-mono font-medium text-slate-800 dark:text-white">-</div>
                         <div className="mt-4 flex justify-end"><div className="w-3 h-3 rounded-full border border-slate-200"></div></div>
                      </div>
                       <div className="p-4 bg-white dark:bg-[#151515] rounded-lg border border-gray-100 dark:border-white/5 shadow-sm">
                         <div className="flex items-center gap-2 mb-2">
                             <div className="w-3 h-3 rounded-full border border-slate-200 flex items-center justify-center"><div className="w-1 h-3 bg-slate-300 rotate-45"></div></div>
                             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Prompt Cache</div>
                         </div>
                         <div className="text-xl font-mono font-medium text-slate-800 dark:text-white">-</div>
                         <div className="mt-4 flex justify-end"><div className="w-3 h-3 rounded-full border border-slate-200"></div></div>
                      </div>
                   </div>

                </div>
             </div>

          </div>

          <div className="mt-16 text-center">
             <p className="text-sm font-medium text-slate-500 dark:text-gray-400 tracking-wide">Trusted every day by millions of professional developers.</p>
          </div>

       </div>
    </section>
  );
};

export default KnowledgeHero;