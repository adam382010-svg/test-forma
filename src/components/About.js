"use client";

import React from "react";
import { Shield, Target, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0B192C] overflow-hidden border-t border-[#E2C799]/10">
      {/* Blueprint elements background */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Verbatim Content and features */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] mb-3 font-semibold">
              Introduction
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mb-8">
              About <span className="text-[#E2C799]">FormaMUN</span>
            </h2>

            {/* Verbatim Body Copy */}
            <div className="space-y-6 text-slate-300 font-sans text-base leading-relaxed">
              <p>
                FormaMUN is a platform designed to develop the next generation of leaders through structured debate, thoughtful collaboration, and professional conduct.
              </p>
              <p>
                Inspired by the concepts of architecture, our conference encourages delegates to approach global challenges with precision, creativity, and structure. Every speech, resolution, and negotiation contributes to building solutions that can withstand the complexities of today's interconnected world.
              </p>
              <p>
                Delegates learn to take stands on pressing matters, whether others agree or not, strengthen their abilities in diplomacy, research, leadership, and public speaking while engaging with some of the most pressing international issues of our time.
              </p>
            </div>
            
            {/* Architectural sub-details */}
            <div className="grid grid-cols-3 gap-6 mt-12 w-full pt-8 border-t border-slate-800">
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#E2C799] font-bold">100%</span>
                <span className="text-[10px] tracking-wider uppercase text-slate-500 mt-1">Student Led</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#E2C799] font-bold">12</span>
                <span className="text-[10px] tracking-wider uppercase text-slate-500 mt-1">Committees</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#E2C799] font-bold">Riyadh</span>
                <span className="text-[10px] tracking-wider uppercase text-slate-500 mt-1">Host City</span>
              </div>
            </div>
          </div>

          {/* Right Side: Architectural elevation and blueprint mockup */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-md aspect-square relative rounded-xl border border-[#E2C799]/15 bg-[#060E1A]/40 p-6 backdrop-blur-sm shadow-xl group hover:border-[#E2C799]/30 transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#E2C799]/30"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#E2C799]/30"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#E2C799]/30"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#E2C799]/30"></div>

              {/* Title tag on card */}
              <div className="absolute top-4 left-4 font-mono text-[9px] tracking-wider text-[#E2C799]/60 uppercase">
                elevation_dwg_2026.dxf
              </div>
              
              {/* Detailed Architectural building drawing */}
              <div className="w-full h-full flex items-center justify-center pt-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <svg
                  className="w-full h-full text-[#E2C799]/60 group-hover:text-[#E2C799] transition-colors duration-500"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid background inside mock */}
                  <rect x="20" y="20" width="360" height="360" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-20" />
                  
                  {/* Vertical axis line */}
                  <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" className="opacity-30" />
                  {/* Horizontal axis line */}
                  <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" className="opacity-30" />

                  {/* Skyscraper Elevation lines */}
                  {/* Structural Columns */}
                  <line x1="80" y1="360" x2="80" y2="120" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="160" y1="360" x2="160" y2="60" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="240" y1="360" x2="240" y2="60" stroke="currentColor" strokeWidth="0.75" />
                  <line x1="320" y1="360" x2="320" y2="120" stroke="currentColor" strokeWidth="0.75" />
                  
                  {/* Horizontal Floors */}
                  <line x1="80" y1="360" x2="320" y2="360" stroke="currentColor" strokeWidth="2" />
                  <line x1="80" y1="300" x2="320" y2="300" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="80" y1="240" x2="320" y2="240" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="80" y1="180" x2="320" y2="180" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="80" y1="120" x2="320" y2="120" stroke="currentColor" strokeWidth="1" />
                  <line x1="160" y1="90" x2="240" y2="90" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="160" y1="60" x2="240" y2="60" stroke="currentColor" strokeWidth="1" />
                  
                  {/* Diagonal bracing/ties */}
                  <line x1="80" y1="360" x2="160" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="160" y1="360" x2="80" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="160" y1="360" x2="240" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="240" y1="360" x2="160" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="240" y1="360" x2="320" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="320" y1="360" x2="240" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />

                  <line x1="80" y1="300" x2="160" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="160" y1="300" x2="80" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="160" y1="300" x2="240" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="240" y1="300" x2="160" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="240" y1="300" x2="320" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                  <line x1="320" y1="300" x2="240" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />

                  {/* Concentric circles showing compass markings */}
                  <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.25" strokeDasharray="4 8" className="opacity-40" />
                  <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.25" strokeDasharray="4 8" className="opacity-40" />

                  {/* Abstract golden laurel branches below structure */}
                  <path d="M140 330 C150 355 170 355 200 355 C230 355 250 355 260 330" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Blueprint details */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-[9px] font-mono text-[#E2C799]/60">
                <span>SCALE: 1:250</span>
                <span>•</span>
                <span>SHEET: A-01</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
