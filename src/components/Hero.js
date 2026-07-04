"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A192F]">
      {/* Blueprint Grids background */}
      <div className="absolute inset-0 blueprint-grid opacity-75"></div>
      <div className="absolute inset-0 blueprint-grid-fine opacity-50"></div>
      
      {/* Subtle radial gradients to create lighting depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#E2C799]/5 to-transparent blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#1A304D]/30 to-transparent blur-[100px] pointer-events-none"></div>

      {/* Abstract architectural wireframe lines background */}
      <div className="absolute right-0 bottom-0 w-full lg:w-1/2 h-full opacity-20 pointer-events-none flex items-end justify-end select-none">
        <svg
          className="w-full max-w-xl h-auto"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Isometric Building Wireframe 1 */}
          <path d="M100 450 L100 150 L250 80 L400 150 L400 450 Z" stroke="#E2C799" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M250 80 L250 450" stroke="#E2C799" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M100 150 L250 220 L400 150" stroke="#E2C799" strokeWidth="1.5" />
          <path d="M100 200 L250 270 L400 200" stroke="#E2C799" strokeWidth="0.5" />
          <path d="M100 250 L250 320 L400 250" stroke="#E2C799" strokeWidth="0.5" />
          <path d="M100 300 L250 370 L400 300" stroke="#E2C799" strokeWidth="0.5" />
          <path d="M100 350 L250 420 L400 350" stroke="#E2C799" strokeWidth="0.5" />
          <path d="M100 400 L250 470 L400 400" stroke="#E2C799" strokeWidth="0.5" />

          {/* Building 2 - Smaller, offset */}
          <path d="M300 450 L300 250 L380 210 L460 250 L460 450 Z" stroke="#E2C799" strokeWidth="0.75" />
          <path d="M380 210 L380 450" stroke="#E2C799" strokeWidth="0.75" />
          <path d="M300 250 L380 290 L460 250" stroke="#E2C799" strokeWidth="0.75" />
          
          {/* Horizon grid line */}
          <line x1="0" y1="450" x2="500" y2="450" stroke="#E2C799" strokeWidth="1.5" className="opacity-40" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Text and CTA */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#E2C799]/20 bg-[#E2C799]/5 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2C799] animate-pulse"></span>
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#E2C799]">
              Inaugural Edition
            </span>
          </div>

          {/* Conference title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4">
            <span className="block text-[#E2C799] gold-text-glow font-bold">FORMA MUN</span>
          </h1>

          {/* Tagline */}
          <p className="font-serif text-xl md:text-2xl text-slate-200 tracking-wider mb-8 border-l-2 border-[#E2C799]/40 pl-4">
            "Where structure shapes diplomacy"
          </p>

          {/* Verbatim Intro Copy */}
          <p className="font-sans text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10">
            FormaMUN is a student-led Model United Nations conference designed around structure, integrity, and professionalism. Just as architecture transforms drawings into buildings, diplomacy transforms dialogue into powerful solutions. At FormaMUN, words are more then simple conversational tools. FormaMUN challenges delegates to think strategically, communicate effectively, and contribute to the architecture and construction of a more cooperative global future.
          </p>

          {/* Meta Details cards */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-10 w-full max-w-xl">
            {/* Location */}
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#060E1A]/60 border border-[#E2C799]/10 backdrop-blur-sm flex-1 min-w-[200px] hover:border-[#E2C799]/30 transition-all duration-300">
              <div className="p-2.5 rounded bg-[#E2C799]/5 border border-[#E2C799]/20 text-[#E2C799]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-wider uppercase text-slate-500">Location</p>
                <p className="text-sm font-semibold text-white tracking-wide">Riyadh, Saudi Arabia</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#060E1A]/60 border border-[#E2C799]/10 backdrop-blur-sm flex-1 min-w-[200px] hover:border-[#E2C799]/30 transition-all duration-300">
              <div className="p-2.5 rounded bg-[#E2C799]/5 border border-[#E2C799]/20 text-[#E2C799]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] tracking-wider uppercase text-slate-500">Date</p>
                <p className="text-sm font-semibold text-white tracking-wide">To Be Announced</p>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E2C799] hover:bg-[#F3E5AB] text-[#060E1A] font-serif font-bold text-sm tracking-widest uppercase rounded shadow-[0_0_20px_rgba(226,199,153,0.2)] hover:shadow-[0_0_30px_rgba(243,229,171,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            {/* Secondary Button */}
            <a
              href="#applications"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#E2C799]/40 text-[#E2C799] bg-[#060E1A]/35 hover:bg-[#E2C799]/5 font-serif font-semibold text-sm tracking-widest uppercase rounded hover:border-[#E2C799]/85 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Applications Coming Soon
            </a>
          </div>
        </div>

        {/* Right Side: Showcase of the official Laurel logo emblem (large) */}
        <div className="lg:col-span-4 flex items-center justify-center relative order-first lg:order-last mb-8 lg:mb-0">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center rounded-full border border-[#E2C799]/10 bg-[#060E1A]/40 backdrop-blur-md shadow-[0_0_50px_rgba(226,199,153,0.05)]">
            {/* Outer golden rotation lines */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#E2C799]/15 animate-[spin_120s_linear_infinite]"></div>
            
            {/* Official Laurel Logo Image */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 transition-transform duration-700 hover:scale-105">
              <Image
                src="/logo.png"
                alt="FormaMUN Official Laurel Logo"
                fill
                sizes="(max-width: 640px) 176px, 224px"
                className="rounded-full object-cover drop-shadow-[0_0_15px_rgba(226,199,153,0.2)]"
                priority
              />
            </div>
            
            {/* Inner accent ring */}
            <div className="absolute inset-3 rounded-full border border-[#E2C799]/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
