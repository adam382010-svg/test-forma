"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Mission", href: "#mission" },
    { name: "Experience", href: "#experience" },
    { name: "Executive Board", href: "#executive-board" },
    { name: "Committees", href: "#committees" },
    { name: "Applications", href: "#applications" },
    { name: "Sponsors", href: "#sponsors" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060E1A]/90 backdrop-blur-md border-b border-[#E2C799]/10 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Logo & Typography */}
        <a href="#" className="flex items-center group">
          {/* Logo Image */}
          <div className="relative w-[60px] h-[60px] mr-3 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="FormaMUN Logo"
              width={60}
              height={60}
              className="rounded-full object-cover drop-shadow-[0_0_8px_rgba(226,199,153,0.3)]"
              priority
            />
          </div>
          <span className="font-serif text-xl tracking-[0.2em] text-[#E2C799] font-bold group-hover:text-[#F3E5AB] transition-colors duration-300">
            FORMA MUN
          </span>
        </a>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-widest uppercase text-slate-300 hover:text-[#E2C799] transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E2C799] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Register Button */}
        <div className="hidden md:block">
          <button
            disabled
            className="px-6 py-2.5 border border-[#E2C799]/40 text-[#E2C799] rounded-md font-serif text-sm tracking-widest uppercase bg-transparent opacity-60 cursor-not-allowed hover:border-[#E2C799]/80 transition-all duration-300 shadow-[0_0_10px_rgba(226,199,153,0.03)]"
          >
            Register (TBD)
          </button>
        </div>

        {/* Hamburger Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-[#E2C799] focus:outline-none transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#060E1A]/95 border-b border-[#E2C799]/10 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-5 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base tracking-widest uppercase text-slate-300 hover:text-[#E2C799] transition-colors duration-300 py-2 w-full text-center"
            >
              {link.name}
            </a>
          ))}
          <button
            disabled
            className="w-full mt-4 px-6 py-3 border border-[#E2C799]/40 text-[#E2C799] rounded-md font-serif text-sm tracking-widest uppercase bg-transparent opacity-50 cursor-not-allowed text-center"
          >
            Register (TBD)
          </button>
        </div>
      </div>
    </nav>
  );
}
