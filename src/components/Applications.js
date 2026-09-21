"use client";

import React from "react";
import { Mail, Instagram } from "lucide-react";

export default function Applications() {
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
            Apply now to join the team for FormaMUN 2026. Select your application track below.
          </p>
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55"></div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
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
