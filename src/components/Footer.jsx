'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-8 pb-6 py-5 px-5 mt-auto select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-slate-800/60">
        
        {/* Brand & Status Indicator */}
        <div className="group flex items-center space-x-2.5 cursor-pointer">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/10 border border-indigo-500/20 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/50 group-hover:scale-105 flex items-center justify-center text-indigo-400 text-sm font-bold transition-all duration-300">
            ☁️
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-white tracking-wide group-hover:text-indigo-300 transition-colors">
              Robi Weather
            </h3>
            <span className="text-slate-600">•</span>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 group-hover:text-slate-400 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Open-Meteo Sync
            </p>
          </div>
        </div>

        {/* Tech Badges / Clickable Links */}
        <div className="flex items-center gap-2 text-[11px]">
          <a 
            href="https://nextjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all duration-200 cursor-pointer"
          >
            Next.js
          </a>
          
          <a 
            href="https://tailwindcss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-200 cursor-pointer"
          >
            Tailwind CSS
          </a>
          
          <a 
            href="https://open-meteo.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-300 hover:border-amber-500/40 transition-all duration-200 cursor-pointer"
          >
            Open-Meteo
          </a>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-3 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
        <p className="font-medium">
          Created by{" "}
          <a
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-semibold hover:brightness-125 transition-all cursor-pointer"
          >
            Md Robiul Islam
          </a>
        </p>

        <p className="hover:text-slate-400 transition-colors">
          &copy; {currentYear} Roobiul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}