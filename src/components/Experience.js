"use client";

import React from "react";
import { Award, Users, Lightbulb } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[#0B192C] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background blueprint aesthetics */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Core panel mimicking a high-end digital ticket or architectural folder */}
        <div className="relative max-w-4xl mx-auto p-8 md:p-16 rounded-xl border border-[#E2C799]/15 bg-[#060E1A]/40 backdrop-blur-md shadow-2xl overflow-hidden group hover:border-[#E2C799]/30 transition-all duration-500">
          
          {/* Subtle blueprint design details on corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#E2C799]/35"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#E2C799]/35"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#E2C799]/35"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#E2C799]/35"></div>
          
          {/* Decorative tech/architectural elements */}
          <div className="absolute top-4 right-8 font-mono text-[8px] tracking-[0.2em] text-[#E2C799]/40 uppercase hidden sm:block">
            SYSTEM.REF_FORMAMUN_2026
          </div>

          <div className="relative z-10 text-center flex flex-col items-center">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] mb-3 font-semibold">
              The Journey
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mb-8">
              The <span className="text-[#E2C799]">FormaMUN</span> Experience
            </h2>

            {/* Verbatim Copy */}
            <p className="font-serif text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mb-12 italic">
              “Greatness in the MUN isn't announced, it’s built - pure discipline is what is shaping what will be your greatest experience ever”
            </p>

            {/* Visual core values representation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8 border-t border-slate-800/80">
              <div className="flex flex-col items-center p-4">
                <div className="p-3 rounded-full bg-[#E2C799]/5 border border-[#E2C799]/15 text-[#E2C799] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-sm tracking-widest uppercase text-white font-bold mb-1">
                  Professionalism
                </h4>
                <p className="text-xs text-slate-500 font-sans">Disciplined conduct and execution</p>
              </div>

              <div className="flex flex-col items-center p-4">
                <div className="p-3 rounded-full bg-[#E2C799]/5 border border-[#E2C799]/15 text-[#E2C799] mb-3">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-sm tracking-widest uppercase text-white font-bold mb-1">
                  Innovation
                </h4>
                <p className="text-xs text-slate-500 font-sans">Creative approaches to global challenges</p>
              </div>

              <div className="flex flex-col items-center p-4">
                <div className="p-3 rounded-full bg-[#E2C799]/5 border border-[#E2C799]/15 text-[#E2C799] mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-sm tracking-widest uppercase text-white font-bold mb-1">
                  Diplomacy
                </h4>
                <p className="text-xs text-slate-500 font-sans">Elevated dialogue and collaboration</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
