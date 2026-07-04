"use client";

import React from "react";
import { Shield, Award, Star, Compass, LayoutGrid, HeartHandshake, Eye, Paintbrush, Megaphone, Lock, Printer, Users } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────────── */
const secretariat = [
  { badge: "SG",     icon: Shield, name: "Omar Sebaey",    title: "Secretary-General"      },
  { badge: "DSG",    icon: Award,  name: "Lea Chaaban",    title: "Deputy Secretary-General" },
  { badge: "SA",     icon: Star,   name: "Joumana Mohamed",title: "Senior Advisor"          },
  { badge: "SA",     icon: Star,   name: "Joe Feghaly",    title: "Senior Advisor"          },
];

const departments = [
  {
    name: "CCDA Department",
    icon: Compass,
    members: [
      { badge: "Head",    name: "Yousef Siddique", title: "Head of CCDA"    },
      { badge: "Co-Head", name: "Ayda El Kattan",  title: "Co-Head of CCDA" },
      { badge: "Co-Head", name: "Malek Bsat",       title: "Co-Head of CCDA" },
    ],
  },
  {
    name: "Media",
    icon: Eye,
    members: [
      { badge: "Head",    name: "Anya Asim",   title: "Head of Media"    },
      { badge: "Co-Head", name: "Sarah Firas", title: "Co-Head of Media" },
    ],
  },
  {
    name: "Ceremonies",
    icon: LayoutGrid,
    members: [
      { badge: "Head",    name: "Badr Almaasarawy", title: "Head of Ceremonies"    },
      { badge: "Co-Head", name: "Mona Mohamed",      title: "Co-Head of Ceremonies" },
    ],
  },
  {
    name: "Public Relations",
    icon: Users,
    members: [
      { badge: "Head", name: "Eyad Haytham", title: "Head of PR" },
    ],
  },
  {
    name: "Logistics",
    icon: LayoutGrid,
    members: [
      { badge: "Head", name: "Ahmed Elamir", title: "Head of Logistics" },
    ],
  },
  {
    name: "Human Resources",
    icon: Users,
    members: [
      { badge: "Head",    name: "Mohamed El Safadi", title: "Head of HR"    },
      { badge: "Co-Head", name: "Zayd Sham",          title: "Co-Head of HR" },
    ],
  },
  {
    name: "Volunteers",
    icon: HeartHandshake,
    members: [
      { badge: "Head",    name: "Syriena Helali",    title: "Head of Volunteers"    },
      { badge: "Co-Head", name: "Sulaiman AbuDawood", title: "Co-Head of Volunteers" },
    ],
  },
  {
    name: "Security",
    icon: Lock,
    members: [
      { badge: "Head",    name: "Sadeen Abdulaziz",      title: "Head of Security"    },
      { badge: "Co-Head", name: "Abdulrahman AlBabtain", title: "Co-Head of Security" },
      { badge: "Co-Head", name: "Sarah Naim",             title: "Co-Head of Security" },
    ],
  },
  {
    name: "Press",
    icon: Printer,
    members: [
      { badge: "Head",    name: "Helen Sadi",    title: "Head of Press"    },
      { badge: "Co-Head", name: "Sama Hashisho", title: "Co-Head of Press" },
    ],
  },
  {
    name: "Graphic Design",
    icon: Paintbrush,
    members: [
      { badge: "Head",    name: "Judi Alazmeh",   title: "Head of Graphic Design"    },
      { badge: "Co-Head", name: "Emad Bachat",    title: "Co-Head of Graphic Design" },
      { badge: "Co-Head", name: "Mariam Shehata", title: "Co-Head of Graphic Design" },
    ],
  },
  {
    name: "Marketing",
    icon: Megaphone,
    members: [
      { badge: "Head",    name: "Rudina Shabana",    title: "Head of Marketing"    },
      { badge: "Co-Head", name: "Serien Elframawy", title: "Co-Head of Marketing" },
    ],
  },
];

/* ─── Member Card ────────────────────────────────────────────────────── */
function MemberCard({ badge, name, title }) {
  return (
    <div className="relative p-5 rounded-lg bg-[#060E1A]/80 border border-[#E2C799]/25 backdrop-blur-md shadow-xl overflow-hidden group hover:border-[#E2C799]/55 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-center" style={{ minWidth: '200px', maxWidth: '280px', flex: '1 1 200px' }}>
      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E2C799]/30" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E2C799]/30" />

      <span className="inline-block px-2 py-0.5 rounded bg-[#E2C799]/10 border border-[#E2C799]/25 font-mono text-[10px] text-[#E2C799] uppercase tracking-widest mb-2 w-fit">
        {badge}
      </span>
      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">
        {title}
      </span>
      <h3 className="font-serif text-xl font-bold text-white tracking-wide leading-tight break-words">
        {name}
      </h3>
    </div>
  );
}

/* ─── Department Row ─────────────────────────────────────────────────── */
function DepartmentRow({ dept }) {
  const DeptIcon = dept.icon;
  return (
    <div className="mb-10">
      {/* Department Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded bg-[#E2C799]/8 border border-[#E2C799]/20 text-[#E2C799]">
          <DeptIcon className="w-5 h-5 stroke-[1.5]" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-[#E2C799] tracking-wide font-bold">
          {dept.name}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#E2C799]/30 to-transparent ml-2" />
      </div>

      {/* Members side-by-side */}
      <div className="flex flex-wrap gap-4 items-stretch">
        {dept.members.map((m, i) => (
          <MemberCard key={i} {...m} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function ExecutiveBoard() {
  return (
    <section id="executive-board" className="relative py-24 bg-[#0B192C] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#E2C799]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#1A304D]/30 to-transparent blur-[120px] pointer-events-none" />

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
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55" />
        </div>

        {/* ── Secretariat Row ── */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded bg-[#E2C799]/8 border border-[#E2C799]/20 text-[#E2C799]">
              <Shield className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#E2C799] tracking-wide font-bold">
              Secretariat
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#E2C799]/30 to-transparent ml-2" />
          </div>

          <div className="flex flex-wrap gap-4">
            {secretariat.map((m, i) => (
              <MemberCard key={i} badge={m.badge} name={m.name} title={m.title} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2C799]/20 to-transparent mb-12" />

        {/* ── Departments ── */}
        {departments.map((dept, i) => (
          <DepartmentRow key={i} dept={dept} />
        ))}

      </div>
    </section>
  );
}
