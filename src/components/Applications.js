"use client";

import React from "react";
import { Mail, Instagram, BellRing } from "lucide-react";

export default function Applications() {
  return (
    <section id="applications" className="relative py-24 bg-[#0B192C] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] font-semibold">
            Registration
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mt-2">
            Applications
          </h2>
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Side: Information & Notice Ticket */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-lg bg-[#060E1A]/40 border border-slate-800 backdrop-blur-sm shadow-xl">
            <div>
              {/* Verbatim Copy */}
              <p className="font-sans text-slate-300 text-base leading-relaxed mb-8">
                Application details will be announced soon. Follow our official platforms to receive updates regarding applications, committee allocations, conference announcements, and future opportunities.
              </p>

              {/* Interactive notice box / ticket */}
              <div className="relative p-6 rounded-md bg-[#0A192F] border border-dashed border-[#E2C799]/30 flex items-start space-x-4 shadow-[0_0_15px_rgba(226,199,153,0.02)] overflow-hidden">
                {/* Decorative circle cuts to look like a ticket */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0B192C] border-r border-[#E2C799]/30"></div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#0B192C] border-l border-[#E2C799]/30"></div>
                
                <div className="p-2 rounded bg-[#E2C799]/5 border border-[#E2C799]/20 text-[#E2C799] ml-2">
                  <BellRing className="w-5 h-5 animate-pulse" />
                </div>
                
                <div className="flex-1 pr-2">
                  <span className="font-mono text-[9px] text-[#E2C799]/60 uppercase tracking-widest block mb-1">
                    Secretariat Notice
                  </span>
                  {/* Verbatim Copy */}
                  <p className="font-sans text-xs italic text-[#E2C799] leading-relaxed">
                    "When applications are live, direct links to Google Forms will be made available here."
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* Instagram link */}
              <a
                href="https://instagram.com/formamun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#E2C799]/30 hover:border-[#E2C799]/70 text-white hover:text-[#E2C799] rounded bg-[#060E1A]/40 transition-all duration-300 font-serif text-sm tracking-widest uppercase hover:scale-[1.02]"
              >
                <Instagram className="w-4 h-4 text-[#E2C799]" />
                <span>@formamun</span>
              </a>

              {/* Email link */}
              <a
                href="mailto:formamun26@gmail.com"
                className="flex-1 inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#E2C799]/30 hover:border-[#E2C799]/70 text-white hover:text-[#E2C799] rounded bg-[#060E1A]/40 transition-all duration-300 font-serif text-sm tracking-widest uppercase hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-[#E2C799]" />
                <span>formamun26@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Side: TBD Card */}
          <div className="lg:col-span-5 relative p-8 rounded-lg bg-[#060E1A]/70 border border-[#E2C799]/15 backdrop-blur-sm shadow-xl flex flex-col justify-center items-center overflow-hidden min-h-[280px]">
            {/* Architectural corner details */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#E2C799]/25"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#E2C799]/25"></div>
            
            <div className="relative z-10 text-center flex flex-col items-center justify-center">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-slate-500 mb-3 block">
                Status
              </span>
              <h3 className="font-serif text-xl text-white tracking-wide mb-4">
                Application Timelines
              </h3>
              
              {/* TBD display */}
              <div className="px-8 py-6 rounded-md border border-[#E2C799]/30 bg-[#E2C799]/5 text-[#E2C799] font-serif text-4xl font-bold tracking-widest gold-text-glow mb-4">
                TBD
              </div>
              
              <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-[240px] mx-auto">
                Opening dates, allocation forms, and delegate registrations are to be announced.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
