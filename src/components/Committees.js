"use client";

import React from "react";
import { Layers } from "lucide-react";
import Image from "next/image";

const committees = [
  {
    id: 1,
    difficulty: "Advanced",
    name: "JCC",
    topic: "The Trial of the Rebellion (Star Wars)",
    chairs: ["Reema Abdullah", "Haya Sheikh"],
    image: "/photos/jcc.jpg",
  },
  {
    id: 2,
    difficulty: "Advanced",
    name: "HCC",
    topic: "Tang China After Taizong",
    chairs: ["Faisal Alsaeed", "Abdullah Alsalamah"],
    image: "/photos/hcc.jpg",
  },
  {
    id: 3,
    difficulty: "Advanced",
    name: "Crisis",
    topic: "(confidential)",
    chairs: ["Tamer Chahine", "Asem AlAzem"],
    image: "/photos/Crisis.png",
    fitContain: true,
  },
  {
    id: 4,
    difficulty: "Advanced",
    name: "UNSC",
    topic: "The Ogaden War (Uni students only)",
    chairs: ["Fahad Al-Bassam", "Yumna Rizk"],
    image: "/photos/unsc.jpg",
  },
  {
    id: 5,
    difficulty: "Intermediate",
    name: "Harry Potter",
    topic: "(Confidential)",
    chairs: ["Omar Khashogji", "Nora Albarrak"],
    image: "/photos/harry-potter.png",
    fitContain: true,
  },
  {
    id: 6,
    difficulty: "Intermediate",
    name: "IAEA",
    topic: "Regulating the Safe Development and Use of Antimatter",
    chairs: ["Razi Money", "Jana Beidas"],
    image: "/photos/iaea.png",
  },
  {
    id: 7,
    difficulty: "Intermediate",
    name: "CAC",
    topic: "The Redemption of Kanye West",
    chairs: ["Ahmed Idris", "Judie Fakhoury"],
    image: "/photos/kanye-west-web.jpg",
  },
  {
    id: 8,
    difficulty: "Intermediate",
    name: "BRICS",
    topic: "Building a BRICS Financial System Independent of the U.S. Dollar",
    chairs: ["Judy Kam Nakch", "Taleen Baroudi"],
    image: "/photos/brics.png",
  },
  {
    id: 9,
    difficulty: "Intermediate",
    name: "Royal Court of Alexandria",
    topic: "Determining the Limits of Knowledge: Collection, Censorship, and Public Access",
    chairs: ["Fares Alzamel", "Yumna Tagelsir"],
    image: "/photos/alexandira.png",
  },
  {
    id: 10,
    difficulty: "Beginner",
    name: "UNEP",
    topic: "Stopping the Illegal Production and Trade of Ozone-Damaging Chemicals",
    chairs: ["Abdulrahman Alshanqeeti", "Marriyah Natto"],
    image: "/photos/ozone.png",
  },
  {
    id: 11,
    difficulty: "Beginner",
    name: "ICAO",
    topic: "Governing Commercial SuperSonic Passenger Travel.",
    chairs: ["Soha Waseem", "Sarah Wadi"],
    image: "/photos/supersonic.jpg",
  },
  {
    id: 12,
    difficulty: "Beginner",
    name: "UNHRC",
    topic: "Ending the Trade of Conflict Minerals That Finance Armed Groups",
    chairs: ["Yamen Elattal", "Fareeha Saroya"],
    image: "/photos/conflictminirals.jpg",
  },
];

export default function Committees() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {committees.map((committee) => (
            <div
              key={committee.id}
              className="relative p-6 rounded-lg bg-[#060E1A]/70 border border-[#E2C799]/15 backdrop-blur-sm shadow-lg overflow-hidden group hover:border-[#E2C799]/40 hover:shadow-[0_0_20px_rgba(226,199,153,0.06)] transition-all duration-300 transform hover:scale-[1.02] flex flex-col justify-between"
            >
              {/* Giant background index number - shifted inside so it is NOT cropped */}
              <div className="absolute right-3 bottom-2 font-serif text-7xl sm:text-8xl font-black text-[#E2C799]/5 select-none pointer-events-none group-hover:text-[#E2C799]/10 transition-colors duration-300">
                {committee.id.toString().padStart(2, "0")}
              </div>

              {/* Decorative engineering/blueprint alignment lines */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#E2C799]/20"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#E2C799]/20"></div>
              
              {/* Card Content */}
              <div className="flex-1 flex flex-col">
                {/* Header info */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                  <span className="font-mono text-[9px] text-[#E2C799]/80 tracking-widest uppercase font-semibold">
                    {committee.difficulty}
                  </span>
                  <Layers className="w-3.5 h-3.5 text-[#E2C799]/40 group-hover:text-[#E2C799] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-bold text-white tracking-wide mb-3 group-hover:text-[#E2C799] transition-colors duration-300 leading-tight">
                  {committee.name}
                </h3>

                {/* Body copy */}
                <p className="font-sans text-xs text-slate-400 font-medium leading-relaxed mb-4">
                  Topic: {committee.topic}
                </p>

                {/* Committee Image Area */}
                <div className="mt-auto pt-2">
                  {committee.fitContain ? (
                    <div className="relative w-full h-48 rounded overflow-hidden border border-[#E2C799]/20 group-hover:border-[#E2C799]/40 transition-colors duration-300 bg-[#060E1A]/50">
                      <Image
                        src={committee.image}
                        alt={`${committee.name} Topic Image`}
                        fill
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="w-full rounded overflow-hidden border border-[#E2C799]/20 group-hover:border-[#E2C799]/40 transition-colors duration-300 bg-[#060E1A]">
                      <img
                        src={committee.image}
                        alt={`${committee.name} Topic Image`}
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Footer / Chairs Badge (Font size doubled) */}
              <div className="mt-6 pt-4 border-t border-slate-900/90 flex flex-col gap-1 relative z-10">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-medium">
                  Chairs:
                </span>
                <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#E2C799] tracking-wide leading-snug">
                  {committee.chairs.join(" & ")}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
