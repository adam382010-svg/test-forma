"use client";

import React from "react";
import { Award, Gavel, Landmark, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="relative py-20 lg:py-32 bg-[#060E1A] overflow-hidden border-t border-b border-[#E2C799]/20">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      {/* Atmospheric Gold Glows */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#E2C799]/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#E2C799]/15 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2C799]/10 border border-[#E2C799]/30 mb-4 shadow-[0_0_15px_rgba(226,199,153,0.1)]">
            <Sparkles className="w-3.5 h-3.5 text-[#E2C799]" />
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#E2C799] font-semibold">
              Recognition & Excellence
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">
            Prize Fund & Honors
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base mt-3 uppercase tracking-widest">
            Recognizing exceptional diplomacy, leadership, and performance at FormaMUN 2026.
          </p>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#E2C799] to-transparent mx-auto mt-5" />
        </div>

        {/* Main Grid: Left side Contract Charter + Right side Grand Prize & Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Diplomatic Prize Agreement Document (Paper/Parchment Charter Design) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#FBF8EF] text-[#1A1A1A] p-7 sm:p-9 rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_30px_rgba(226,199,153,0.15)] border border-[#D8CBB5] transform transition-transform duration-500 lg:-rotate-1 hover:rotate-0 select-none">
              
              {/* Paper Clip Accent */}
              <div className="absolute -top-3 left-10 w-4 h-9 rounded-full border-2 border-slate-400/80 bg-transparent shadow-sm pointer-events-none" />
              <div className="absolute -top-2 left-11 w-2 h-7 rounded-full border border-slate-300 pointer-events-none" />

              {/* Watermark Emblem */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                <svg className="w-72 h-72 text-black" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Header Title */}
              <div className="border-b-2 border-double border-slate-800 pb-3 mb-4 text-center">
                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-wider text-slate-900 uppercase">
                  Contract
                </h3>
                <p className="font-serif text-xs sm:text-sm font-bold tracking-widest text-slate-800 uppercase mt-1">
                  Forma MUN Prize Agreement
                </p>
              </div>

              {/* Contract Terms */}
              <div className="space-y-3.5 text-[11px] sm:text-xs leading-relaxed text-slate-800 font-serif">
                <p className="font-semibold uppercase tracking-wide">
                  A total prize fund of <span className="font-bold text-slate-950 underline decoration-[#B38B4D] decoration-2">15,000 Saudi Riyals (SAR)</span> shall be awarded in the form of gifts and prizes to recognize outstanding performance throughout Forma MUN 2026.
                </p>

                <div>
                  <p className="font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                    The prize fund shall be distributed among the recipients of:
                  </p>
                  <ul className="space-y-1 pl-3 font-semibold">
                    <li className="flex items-center gap-2 text-slate-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                      BEST DELEGATES
                    </li>
                    <li className="flex items-center gap-2 text-slate-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                      BEST EXECUTIVE BOARD MEMBER
                    </li>
                    <li className="flex items-center gap-2 text-slate-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
                      GRAND CHAIR
                    </li>
                  </ul>
                </div>

                <p className="text-[10px] sm:text-[11px] leading-normal text-slate-700 uppercase">
                  The awards are intended to recognize excellence, dedication, leadership, and contributions towards the success of Forma MUN, the heart of diplomacy, leading the change.
                </p>

                {/* Sign-off & Stamp */}
                <div className="pt-4 border-t border-slate-300 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-wider text-slate-500 block">Authorized by:</span>
                    <span className="font-serif italic font-bold text-base text-slate-900 tracking-wide">Forma Secretariat</span>
                    <span className="text-[9px] font-mono tracking-wider text-slate-600 block mt-0.5">Forma MUN 2026-2027</span>
                  </div>

                  {/* Official Diplomatic Stamp */}
                  <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#B38B4D] flex flex-col items-center justify-center p-1 rotate-12 opacity-85">
                    <ShieldCheck className="w-4 h-4 text-[#B38B4D]" />
                    <span className="text-[7px] font-mono font-bold tracking-tighter text-[#B38B4D] uppercase">Official</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT: Grand 15,000 SAR Display & Three Gold Category Badges */}
          <div className="lg:col-span-7 flex flex-col items-center text-center relative">
            
            {/* Background UN Globe & Laurel Silhouette Watermark */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 opacity-[0.07] pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#E2C799]">
                <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="2" />
                <ellipse cx="100" cy="100" rx="70" ry="35" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="100" cy="100" rx="35" ry="70" stroke="currentColor" strokeWidth="1.5" />
                <path d="M100 30 L100 170 M30 100 L170 100" stroke="currentColor" strokeWidth="1.5" />
                {/* Laurels */}
                <path d="M45 150 C30 120 30 80 50 50 C45 70 50 110 70 140 Z" fill="currentColor" />
                <path d="M155 150 C170 120 170 80 150 50 C155 70 150 110 130 140 Z" fill="currentColor" />
              </svg>
            </div>

            {/* Giant Golden Typography */}
            <div className="relative mb-2">
              <span className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] via-[#E2C799] to-[#B38B4D] drop-shadow-[0_0_35px_rgba(226,199,153,0.35)]">
                15,000
              </span>
            </div>

            {/* Subheading */}
            <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold tracking-[0.25em] text-[#E2C799] uppercase max-w-xl mb-12 drop-shadow-sm">
              Saudi Riyals Awarded in Gifts Amongst
            </h3>

            {/* Three Circular Gold Badges */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg">
              
              {/* Badge 1: BEST EB */}
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-[#E2C799]/50 bg-[#060E1A]/90 backdrop-blur-md flex items-center justify-center p-3 shadow-[0_0_25px_rgba(226,199,153,0.15)] group-hover:border-[#E2C799] group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(226,199,153,0.3)] transition-all duration-300">
                  <Landmark className="w-8 h-8 sm:w-10 sm:h-10 text-[#E2C799] stroke-[1.5] group-hover:text-[#FFF5D0] transition-colors" />
                </div>
                <span className="font-serif text-xs sm:text-sm md:text-base font-bold text-white tracking-widest uppercase mt-3.5 group-hover:text-[#E2C799] transition-colors">
                  Best EB
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                  Leadership
                </span>
              </div>

              {/* Badge 2: GRAND CHAIR */}
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-[#E2C799]/50 bg-[#060E1A]/90 backdrop-blur-md flex items-center justify-center p-3 shadow-[0_0_25px_rgba(226,199,153,0.15)] group-hover:border-[#E2C799] group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(226,199,153,0.3)] transition-all duration-300">
                  <Gavel className="w-8 h-8 sm:w-10 sm:h-10 text-[#E2C799] stroke-[1.5] group-hover:text-[#FFF5D0] transition-colors" />
                </div>
                <span className="font-serif text-xs sm:text-sm md:text-base font-bold text-white tracking-widest uppercase mt-3.5 group-hover:text-[#E2C799] transition-colors">
                  Grand Chair
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                  Moderation
                </span>
              </div>

              {/* Badge 3: BEST DELEGATES */}
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-[#E2C799]/50 bg-[#060E1A]/90 backdrop-blur-md flex items-center justify-center p-3 shadow-[0_0_25px_rgba(226,199,153,0.15)] group-hover:border-[#E2C799] group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(226,199,153,0.3)] transition-all duration-300">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#E2C799] stroke-[1.5] group-hover:text-[#FFF5D0] transition-colors" />
                </div>
                <span className="font-serif text-xs sm:text-sm md:text-base font-bold text-white tracking-widest uppercase mt-3.5 group-hover:text-[#E2C799] transition-colors">
                  Best Delegates
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                  Diplomacy
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
