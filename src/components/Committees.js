"use client";

import React from "react";
import { Layers } from "lucide-react";

export default function Committees() {
  // Array of 12 items for committees
  const committeesArray = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section id="committees" className="relative py-24 bg-[#0A192F] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background blueprint grids */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] font-semibold">
            Structure
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mt-2">
            Committees, Topics, and Chairs
          </h2>
          <p className="font-sans text-slate-400 text-sm mt-3 uppercase tracking-widest">
            Featuring 12 specialized committees built on strategic structure and rigorous debate.
          </p>
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55"></div>
        </div>

        {/* 12 Architectural Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {committeesArray.map((num) => (
            <div
              key={num}
              className="relative p-6 rounded-lg bg-[#060E1A]/70 border border-[#E2C799]/15 backdrop-blur-sm shadow-lg overflow-hidden group hover:border-[#E2C799]/40 hover:shadow-[0_0_20px_rgba(226,199,153,0.06)] transition-all duration-300 transform hover:scale-[1.02] flex flex-col justify-between min-h-[200px]"
            >
              {/* Giant background index number in gold outline */}
              <div className="absolute -right-4 -bottom-6 font-serif text-8xl font-black text-[#E2C799]/5 select-none pointer-events-none group-hover:text-[#E2C799]/10 transition-colors duration-300">
                {num.toString().padStart(2, "0")}
              </div>

              {/* Decorative engineering/blueprint alignment lines */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#E2C799]/20"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#E2C799]/20"></div>
              
              {/* Card Content */}
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                  <span className="font-mono text-[9px] text-[#E2C799]/70 tracking-widest uppercase">
                    SECTOR_{num.toString().padStart(2, "0")}
                  </span>
                  <Layers className="w-3.5 h-3.5 text-[#E2C799]/40 group-hover:text-[#E2C799] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-base font-bold text-white tracking-wide mb-2 group-hover:text-[#E2C799] transition-colors duration-300">
                  Committee {num} (TBD)
                </h3>

                {/* Body copy */}
                <p className="font-sans text-xs text-slate-400 font-medium">
                  Topic: To Be Announced
                </p>
              </div>

              {/* Footer / Chairs Badge */}
              <div className="mt-8 pt-3 border-t border-slate-900 flex items-center">
                <span className="inline-block px-2.5 py-1 rounded bg-[#E2C799]/5 border border-[#E2C799]/15 font-mono text-[9px] text-[#E2C799] tracking-wider uppercase">
                  Chairs: TBD & TBD
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
