"use client"

import { useState, useEffect } from 'react'
import { Search, Monitor } from 'lucide-react'

const SEARCH_QUERIES = [
  "best web engineering agency",
  "best shopping website",
  "customer friendly web design",
  "attractive e-commerce platforms"
]

export function SearchAnimation() {
  const [phase, setPhase] = useState<'initial' | 'typing' | 'searching' | 'results' | 'clicking' | 'done'>('initial')
  const [typedText, setTypedText] = useState('')
  const [queryIndex, setQueryIndex] = useState(0)
  
  const targetText = SEARCH_QUERIES[queryIndex]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (phase === 'initial') {
      timeout = setTimeout(() => setPhase('typing'), 500)
    } else if (phase === 'typing') {
      if (typedText.length < targetText.length) {
        timeout = setTimeout(() => {
          setTypedText(targetText.slice(0, typedText.length + 1))
        }, 50)
      } else {
        timeout = setTimeout(() => setPhase('searching'), 400)
      }
    } else if (phase === 'searching') {
      timeout = setTimeout(() => setPhase('results'), 800)
    } else if (phase === 'results') {
      timeout = setTimeout(() => setPhase('clicking'), 1200)
    } else if (phase === 'clicking') {
      timeout = setTimeout(() => setPhase('done'), 400)
    } else if (phase === 'done') {
      timeout = setTimeout(() => {
        setPhase('initial')
        setTypedText('')
        setQueryIndex((prev) => (prev + 1) % SEARCH_QUERIES.length)
      }, 4000)
    }

    return () => clearTimeout(timeout)
  }, [phase, typedText, targetText])

  return (
    <div className="w-full bg-white border border-black/10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden mb-32 h-[500px] flex flex-col relative transition-all duration-700">
       {/* Browser header */}
       <div className="bg-[#F1F1F1] border-b border-black/10 px-5 py-4 flex items-center gap-2">
         <div className="flex gap-1.5 ml-1">
           <div className="w-3 h-3 rounded-full bg-black/20"></div>
           <div className="w-3 h-3 rounded-full bg-black/20"></div>
           <div className="w-3 h-3 rounded-full bg-black/20"></div>
         </div>
         <div className="mx-auto bg-white rounded-md px-4 py-1.5 text-[11px] text-black/50 w-1/2 max-w-sm text-center border border-black/5 font-mono shadow-sm truncate">
           {phase === 'done' ? 'https://tentacles.com/engineering/web' : 'https://google.com'}
         </div>
       </div>

       {/* Browser body */}
       <div className="flex-1 relative overflow-hidden bg-white">
          {/* Phase: Search */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${(phase === 'initial' || phase === 'typing' || phase === 'searching') ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <div className="text-6xl md:text-7xl font-bold mb-8 tracking-tighter">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </div>
            <div className="w-full max-w-xl px-5 py-4 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3">
               <Search className="w-5 h-5 text-gray-400" />
               <div className="flex-1 text-lg outline-none text-black flex items-center h-6">
                 {typedText}
                 {(phase === 'initial' || phase === 'typing') && (
                   <div className="w-0.5 h-6 bg-black animate-pulse ml-0.5"></div>
                 )}
               </div>
            </div>
            
            {phase === 'searching' && (
              <div className="mt-12 flex gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-bounce"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-bounce" style={{animationDelay: '0.1s'}}></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            )}
          </div>

          {/* Phase: Results */}
          <div className={`absolute inset-0 p-6 md:p-10 transition-opacity duration-500 ${(phase === 'results' || phase === 'clicking') ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
             <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-gray-100 pb-6 mb-6">
                <div className="text-2xl md:text-3xl font-bold tracking-tighter">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </div>
                <div className="w-full max-w-lg px-4 py-2.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-3">
                   <div className="flex-1 text-sm outline-none text-black h-5 flex items-center">
                     {targetText}
                   </div>
                   <Search className="w-4 h-4 text-blue-500" />
                </div>
             </div>

             <div className="max-w-3xl">
               <div className="text-[13px] text-gray-500 mb-6">About 2,140,000,000 results (0.42 seconds)</div>
               
               {/* First Result - Tentacles */}
               <div className={`mb-8 relative group ${phase === 'clicking' ? 'bg-gray-50' : ''} -mx-4 p-4 rounded-xl transition-colors`}>
                  <div className="flex items-center gap-2 mb-1.5">
                     <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shadow-sm">
                        <Monitor className="w-3.5 h-3.5 text-white" />
                     </div>
                     <div className="text-[13px] flex items-center">
                       <span className="text-black font-semibold tracking-wide">Tentacles Pvt. Ltd.</span>
                       <span className="text-gray-500 ml-2 tracking-wide">https://tentacles.com</span>
                     </div>
                  </div>
                  <h3 className={`text-xl md:text-2xl font-medium mb-1.5 ${phase === 'clicking' ? 'text-purple-700 underline' : 'text-[#1a0dab] group-hover:underline'}`}>
                    Tentacles | Top-Tier Web Engineering & Branding
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-600 max-w-2xl">
                    Your website is your shop. We build, brand, and staff it. We design and engineer high-converting digital storefronts that perfectly encapsulate your brand identity.
                  </p>
                  
                  {/* Cursor animation */}
                  {phase === 'results' && (
                    <div className="absolute right-[20%] bottom-[-50px] w-6 h-6 transform opacity-0 animate-[cursorMove_1s_ease-out_forwards]">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg">
                         <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                         <path d="M13 13l6 6"/>
                       </svg>
                    </div>
                  )}
                  {phase === 'clicking' && (
                    <div className="absolute right-[50%] top-[40px] w-6 h-6 transform">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg scale-90 transition-transform">
                         <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
                         <path d="M13 13l6 6"/>
                       </svg>
                       {/* Click ripple */}
                       <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                    </div>
                  )}
               </div>

               {/* Second Result (mock) */}
               <div className="mb-6 -mx-4 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                     <div className="w-7 h-7 rounded-full bg-gray-200"></div>
                     <div className="text-[13px] flex items-center">
                       <span className="text-black font-semibold">Generic Web Agency</span>
                       <span className="text-gray-500 ml-2">https://genericagency.com</span>
                     </div>
                  </div>
                  <h3 className="text-xl md:text-2xl text-[#1a0dab] font-medium mb-1.5">
                    Web Design Services - Build a Website Fast
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-600 max-w-2xl">
                    We make templates look okay for your business. Fast delivery, cheap prices. Contact us today to get your generic template website started.
                  </p>
               </div>
             </div>
          </div>

          {/* Phase: Done (Tentacles Site) */}
          <div className={`absolute inset-0 bg-black text-white p-12 transition-opacity duration-1000 ${(phase === 'done') ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'} flex flex-col items-center justify-center text-center overflow-hidden`}>
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
             
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 relative z-10">Your website is your shop.</h2>
             <p className="text-xl md:text-2xl text-white/50 relative z-10">We build, brand, and staff it.</p>
             
             <div className="mt-10 flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest font-bold relative z-10">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[spin_4s_linear_infinite]"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
               Looping
             </div>
          </div>
       </div>

       <style>{`
         @keyframes cursorMove {
           0% { transform: translate(150px, 100px); opacity: 0; }
           15% { opacity: 1; }
           100% { transform: translate(-300px, -70px); opacity: 1; }
         }
       `}</style>
    </div>
  )
}
