"use client";

import React, { useState, useEffect } from "react";
import { Mail, Instagram, Clock } from "lucide-react";

export default function Applications() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      // Target: October 15, 2026, 6:00 PM Riyadh Time (UTC+3)
      const targetDate = new Date("2026-10-15T18:00:00+03:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const applicationLinks = [
    {
      title: "Volunteer Applications",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfslzkbDMJEpS3FAuN1p2SuAuwRgfDxn1MXu3MYTePDwiEQXw/viewform?usp=publish-editor",
    },
    {
      title: "Security Applications",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScGEKipBE_y5ZaSDmvhvDAPksAsp9jb4qp2z4sJofFx7Bopkw/viewform?usp=publish-editor",
    },
    {
      title: "Press Applications",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdwdKT5CmWHdWyUnfQPzXTVGjDJHB2P0nr-D5NoHJ25Ox0chg/viewform?usp=publish-editor",
    },
  ];

  return (
    <section id="applications" className="relative py-24 bg-[#0B192C] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 blueprint-grid-fine opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] font-semibold">
            Registration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mt-2 font-bold drop-shadow-md">
            TEAM APPLICATIONS ARE OUT NOW!
          </h2>
          <p className="font-sans text-slate-300 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Apply now to join the team for FormaMUN 2026. Select your application track below before the deadline.
          </p>
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55"></div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Countdown Timer Box (Placed Above the Buttons) */}
          <div className="w-full mb-12 p-6 sm:p-8 rounded-xl bg-[#060E1A]/80 border border-[#E2C799]/25 backdrop-blur-md shadow-[0_0_30px_rgba(226,199,153,0.05)] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#E2C799]/40"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#E2C799]/40"></div>

            <div className="flex items-center justify-center gap-2 mb-4 text-[#E2C799]">
              <Clock className="w-4 h-4 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] font-semibold">
                Applications Close: October 15 at 6:00 PM (Riyadh Time)
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto">
              {[
                { label: "Days", value: mounted ? timeLeft.days : 0 },
                { label: "Hours", value: mounted ? timeLeft.hours : 0 },
                { label: "Minutes", value: mounted ? timeLeft.minutes : 0 },
                { label: "Seconds", value: mounted ? timeLeft.seconds : 0 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-[#0A192F]/90 border border-[#E2C799]/15 shadow-inner"
                >
                  <span className="font-serif text-2xl sm:text-4xl font-extrabold text-[#E2C799] tracking-tight">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] sm:text-xs uppercase tracking-widest text-slate-400 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Three Rectangular Application Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            {applicationLinks.map((app, idx) => (
              <a
                key={idx}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 bg-[#060E1A]/90 border border-[#E2C799]/25 hover:border-[#E2C799] shadow-lg transition-all duration-300 flex flex-col justify-between items-center text-center min-h-[170px]"
              >
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#E2C799] transition-colors mb-6">
                  {app.title}
                </h3>

                {/* Rectangular APPLY NOW button without any symbols/icons */}
                <div className="w-full py-3 px-4 bg-[#E2C799]/10 border border-[#E2C799]/40 group-hover:bg-[#E2C799] group-hover:text-[#060E1A] text-[#E2C799] font-serif text-sm tracking-widest font-bold uppercase transition-all duration-300 text-center">
                  APPLY NOW
                </div>
              </a>
            ))}
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-8 border-t border-slate-800/80">
            <a
              href="https://instagram.com/forma_mun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-6 py-3 border border-[#E2C799]/30 hover:border-[#E2C799]/70 text-white hover:text-[#E2C799] rounded bg-[#060E1A]/40 transition-all duration-300 font-serif text-xs tracking-widest uppercase hover:scale-[1.02]"
            >
              <Instagram className="w-4 h-4 text-[#E2C799]" />
              <span>@forma_mun</span>
            </a>

            <a
              href="mailto:formamun26@gmail.com"
              className="inline-flex items-center justify-center space-x-3 px-6 py-3 border border-[#E2C799]/30 hover:border-[#E2C799]/70 text-white hover:text-[#E2C799] rounded bg-[#060E1A]/40 transition-all duration-300 font-serif text-xs tracking-widest uppercase hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 text-[#E2C799]" />
              <span>formamun26@gmail.com</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
