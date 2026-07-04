"use client";

import React from "react";
import { ArrowUp, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060E1A] border-t border-[#E2C799]/15 py-12 relative overflow-hidden">
      {/* Blueprint background accent */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a href="#" onClick={handleScrollToTop} className="flex items-center group mb-4">
              <span className="font-serif text-lg tracking-[0.2em] text-[#E2C799] font-bold">
                FORMA MUN
              </span>
            </a>
            <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-sm">
              Saudi Arabia's premier student-led Model United Nations conference. Just as architecture transforms ideas into enduring realities, diplomacy transforms dialogue into meaningful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm text-[#E2C799] tracking-widest uppercase mb-4 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#about" className="text-slate-400 hover:text-[#E2C799] transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#mission" className="text-slate-400 hover:text-[#E2C799] transition-colors duration-300">Mission & Vision</a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-[#E2C799] transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#executive-board" className="text-slate-400 hover:text-[#E2C799] transition-colors duration-300">Executive Board</a>
              </li>
              <li>
                <a href="#committees" className="text-slate-400 hover:text-[#E2C799] transition-colors duration-300">Committees</a>
              </li>
              <li>
                <a href="#applications" className="text-slate-400 hover:text-[#E2C799] transition-colors duration-300">Applications</a>
              </li>
              <li>
                <a href="#sponsors" className="text-slate-400 hover:text-[#E2C799] transition-colors duration-300">Sponsors</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm text-[#E2C799] tracking-widest uppercase mb-4 font-bold">
              Connect
            </h4>
            <ul className="space-y-3 text-xs font-sans">
              <li>
                <a
                  href="https://instagram.com/formamun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-slate-400 hover:text-[#E2C799] transition-colors duration-300"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@formamun</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:formamun26@gmail.com"
                  className="inline-flex items-center space-x-2 text-slate-400 hover:text-[#E2C799] transition-colors duration-300"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>formamun26@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Creator Signature Section */}
        <div className="mt-12 pt-8 border-t border-slate-900/80 flex flex-col items-center justify-center text-center group">
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-slate-500 mb-2 group-hover:text-[#E2C799]/50 transition-colors duration-300">
            DESIGNED & DEVELOPED BY
          </span>
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-widest text-[#E2C799] gold-text-glow font-bold uppercase transition-transform duration-500 hover:scale-[1.02] mb-6">
            Made By Adam Khudai
          </p>
          
          {/* 4x Larger Contact Creator Button */}
          <a
            href="https://www.instagram.com/adam_ahmad_khudair/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 text-[#E2C799] hover:text-[#F3E5AB] border-2 border-[#E2C799]/40 hover:border-[#E2C799] px-8 py-3.5 rounded-md transition-all duration-300 bg-[#E2C799]/5 hover:bg-[#E2C799]/10 font-serif text-xs sm:text-sm tracking-widest uppercase font-bold shadow-[0_0_30px_rgba(226,199,153,0.05)] hover:shadow-[0_0_40px_rgba(226,199,153,0.15)] transform hover:scale-[1.03]"
          >
            Contact Me
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-slate-500">
          {/* Copyright */}
          <p>© 2026 FormaMUN. All rights reserved.</p>
          
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center justify-center space-x-2 text-slate-400 hover:text-[#E2C799] border border-slate-800 hover:border-[#E2C799]/20 px-3 py-1.5 rounded transition-all duration-300 bg-[#0A192F]/40"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
