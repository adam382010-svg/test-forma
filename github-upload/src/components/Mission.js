"use client";

import React from "react";
import { Compass, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Mission() {
  const pillars = [
    "Develop advanced public speaking and negotiation skills.",
    "Strengthen critical thinking and policy analysis abilities.",
    "Experience a highly professional conference environment.",
    "Collaborate with ambitious students from diverse backgrounds.",
    "Explore complex international challenges through diplomacy.",
    "Learn the importance of structure, preparation, and leadership.",
  ];

  return (
    <section id="mission" className="relative py-24 bg-[#0A192F] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background blueprint aesthetics */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] font-semibold">
            Foundations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mt-2">
            Mission, Vision & Principles
          </h2>
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55"></div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="relative p-8 rounded-lg bg-[#060E1A]/60 border border-[#E2C799]/10 backdrop-blur-sm shadow-xl group hover:border-[#E2C799]/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#E2C799]/40"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#E2C799]/40"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#E2C799]/40"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#E2C799]/40"></div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-md bg-[#E2C799]/5 border border-[#E2C799]/20 text-[#E2C799]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#E2C799] font-bold tracking-wide">Our Mission</h3>
            </div>
            
            <p className="font-sans text-slate-300 text-base leading-relaxed">
              To empower students with the knowledge, skills, and professional mindset necessary to engage with global affairs, foster diplomacy, and create innovative solutions to contemporary challenges.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative p-8 rounded-lg bg-[#060E1A]/60 border border-[#E2C799]/10 backdrop-blur-sm shadow-xl group hover:border-[#E2C799]/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#E2C799]/40"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#E2C799]/40"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#E2C799]/40"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#E2C799]/40"></div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-md bg-[#E2C799]/5 border border-[#E2C799]/20 text-[#E2C799]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#E2C799] font-bold tracking-wide">Our Vision</h3>
            </div>

            <p className="font-sans text-slate-300 text-base leading-relaxed">
              To establish a conference culture where professionalism, preparation, and purposeful leadership inspire delegates to become confident global citizens capable of shaping the future.
            </p>
          </div>
        </div>

        {/* Why FormaMUN Section */}
        <div className="relative p-10 rounded-xl bg-[#060E1A]/40 border border-[#E2C799]/10 backdrop-blur-sm shadow-2xl">
          {/* Subtle blueprint frame */}
          <div className="absolute inset-0 blueprint-grid-fine opacity-20 rounded-xl"></div>
          
          <div className="relative z-10">
            <div className="text-center md:text-left mb-10">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#E2C799] font-semibold">
                Why FormaMUN?
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide mt-2">
                Core Pillars & Delegate Benefits
              </h3>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 p-5 rounded-lg border border-[#E2C799]/5 bg-[#0B192C]/50 hover:bg-[#0B192C]/80 hover:border-[#E2C799]/25 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex-shrink-0 mt-0.5 text-[#E2C799]">
                    <CheckCircle2 className="w-5 h-5 drop-shadow-[0_0_4px_rgba(226,199,153,0.3)]" />
                  </div>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed font-medium">
                    {pillar}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
