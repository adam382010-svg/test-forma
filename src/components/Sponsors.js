"use client";

import React from "react";
import { Award } from "lucide-react";

export default function Sponsors() {
  const sponsorsArray = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section id="sponsors" className="relative py-24 bg-[#0A192F] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] font-semibold">
            Collaboration
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mt-2">
            Sponsors and Partners
          </h2>
          {/* Verbatim Copy */}
          <p className="font-sans text-slate-400 text-sm mt-3 uppercase tracking-widest">
            Sponsors and Partners are to be announced.
          </p>
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55"></div>
        </div>

        {/* 6 Grid Panels */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sponsorsArray.map((idx) => (
            <div
              key={idx}
              className="relative aspect-[3/2] flex flex-col items-center justify-center rounded-lg border border-slate-800 bg-[#060E1A]/40 backdrop-blur-sm p-6 overflow-hidden group hover:border-[#E2C799]/30 hover:bg-[#060E1A]/60 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Internal draft blueprint coordinates */}
              <div className="absolute top-2 left-2 font-mono text-[7px] text-slate-600 uppercase">
                LOC_PNR_{idx.toString().padStart(2, "0")}
              </div>
              
              {/* Corner markings */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#E2C799]/15"></div>
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#E2C799]/15"></div>
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#E2C799]/15"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#E2C799]/15"></div>

              {/* Wireframe logo silhouette */}
              <div className="p-3 rounded-full border border-dashed border-slate-800 text-slate-600 group-hover:text-[#E2C799]/60 group-hover:border-[#E2C799]/20 transition-all duration-300 mb-3">
                <Award className="w-6 h-6 stroke-[1.25]" />
              </div>

              {/* Verbatim text */}
              <span className="font-serif text-[11px] tracking-widest text-slate-500 uppercase group-hover:text-slate-300 transition-colors duration-300 text-center font-bold">
                TBD
              </span>

              {/* Bottom diagonal drafting line */}
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E2C799]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
