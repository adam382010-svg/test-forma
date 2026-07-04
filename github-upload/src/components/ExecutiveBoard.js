"use client";

import React from "react";
import { Shield, Award, Star, Compass, LayoutGrid, HeartHandshake, Eye, Paintbrush, Megaphone, Lock, Printer, Users } from "lucide-react";

export default function ExecutiveBoard() {
  const boardCards = [
    {
      badge: "SG",
      role: "Secretariat",
      icon: Shield,
      members: [{ name: "Omar Sebaey", title: "Secretary-General" }],
    },
    {
      badge: "DSG",
      role: "Secretariat",
      icon: Award,
      members: [{ name: "Lea Chaaban", title: "Deputy Secretary-General" }],
    },
    {
      badge: "Advisor",
      role: "Advisory Board",
      icon: Star,
      members: [{ name: "Joumana Mohamed", title: "Senior Advisor" }],
    },
    {
      badge: "Advisor",
      role: "Advisory Board",
      icon: Star,
      members: [{ name: "Joe Feghaly", title: "Senior Advisor" }],
    },
    {
      badge: "CCDA",
      role: "CCDA Department",
      icon: Compass,
      members: [
        { name: "Yousef Siddique", title: "Head of CCDA" },
        { name: "Ayda El Kattan", title: "Co-Head of CCDA" },
        { name: "Malek Bsat", title: "Co-Head of CCDA" },
      ],
    },
    {
      badge: "Media",
      role: "Media Department",
      icon: Eye,
      members: [
        { name: "Anya Asim", title: "Head of Media" },
        { name: "Sarah Firas", title: "Co-Head of Media" },
      ],
    },
    {
      badge: "Ceremonies",
      role: "Ceremonies Department",
      icon: LayoutGrid,
      members: [
        { name: "Badr Almaasarawy", title: "Head of Ceremonies" },
        { name: "Mona Mohamed", title: "Co-Head of Ceremonies" },
      ],
    },
    {
      badge: "PR",
      role: "Public Relations",
      icon: Users,
      members: [{ name: "Eyad Haytham", title: "Head of PR" }],
    },
    {
      badge: "Logistics",
      role: "Logistics Department",
      icon: LayoutGrid,
      members: [{ name: "Ahmed Elamir", title: "Head of Logistics" }],
    },
    {
      badge: "HR",
      role: "Human Resources",
      icon: Users,
      members: [
        { name: "Mohamed El Safadi", title: "Head of HR" },
        { name: "Zayd Sham", title: "Co-Head of HR" },
      ],
    },
    {
      badge: "Volunteers",
      role: "Volunteers Department",
      icon: HeartHandshake,
      members: [
        { name: "Syriena Helali", title: "Head of Volunteers" },
        { name: "Sulaiman AbuDawood", title: "Co-Head of Volunteers" },
      ],
    },
    {
      badge: "Security",
      role: "Security Department",
      icon: Lock,
      members: [
        { name: "Sadeen Abdulaziz", title: "Head of Security" },
        { name: "Abdulrahman AlBabtain", title: "Co-Head of Security" },
        { name: "Sarah Naim", title: "Co-Head of Security" },
      ],
    },
    {
      badge: "Press",
      role: "Press Department",
      icon: Printer,
      members: [
        { name: "Helen Sadi", title: "Head of Press" },
        { name: "Sama Hashisho", title: "Co-Head of Press" },
      ],
    },
    {
      badge: "Design",
      role: "Graphic Design",
      icon: Paintbrush,
      members: [
        { name: "Judi Alazmeh", title: "Head of Graphic Design" },
        { name: "Emad Bachat", title: "Co-Head of Graphic Design" },
        { name: "Mariam Shehata", title: "Co-Head of Graphic Design" },
      ],
    },
    {
      badge: "Marketing",
      role: "Marketing Department",
      icon: Megaphone,
      members: [
        { name: "Rudina Shabana", title: "Head of Marketing" },
        { name: "Serien Elframawy", title: "Co-Head of Marketing" },
      ],
    },
  ];

  return (
    <section id="executive-board" className="relative py-24 bg-[#0B192C] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background blueprint grids */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Decorative lighting glow */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#E2C799]/5 to-transparent blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#1A304D]/30 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] font-semibold">
            Leadership
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mt-2">
            Executive Board
          </h2>
          <p className="font-sans text-slate-400 text-sm mt-3 uppercase tracking-widest">
            The guiding minds steering structure, precision, and global dialogue at FormaMUN 2026.
          </p>
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55"></div>
        </div>

        {/* Unified Board Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardCards.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <div 
                key={idx}
                className="relative p-6 rounded-lg bg-[#060E1A]/80 border-2 border-[#E2C799]/25 backdrop-blur-md shadow-2xl overflow-hidden group hover:border-[#E2C799]/55 transition-all duration-300 transform hover:scale-[1.01] flex flex-col justify-between"
              >
                {/* Blueprint details */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E2C799]/35"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E2C799]/35"></div>
                
                <div className="flex items-start space-x-4">
                  {/* Left Icon Box */}
                  <div className="p-3.5 rounded bg-[#E2C799]/5 border border-[#E2C799]/20 text-[#E2C799] shadow-[0_0_15px_rgba(226,199,153,0.05)]">
                    <CardIcon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  
                  {/* Right Content */}
                  <div className="flex-1">
                    {/* Badge */}
                    <span className="inline-block px-2 py-0.5 rounded bg-[#E2C799]/10 border border-[#E2C799]/25 font-mono text-[10px] text-[#E2C799] uppercase tracking-widest mb-2">
                      {card.badge}
                    </span>
                    
                    {/* Role Title */}
                    <p className="font-sans text-xs text-[#E2C799] font-medium tracking-widest uppercase mb-4">
                      {card.role}
                    </p>
                    
                    {/* Members List (with exact font sizes as SG) */}
                    <div className="space-y-4">
                      {card.members.map((member, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">
                            {member.title}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                            {member.name}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
