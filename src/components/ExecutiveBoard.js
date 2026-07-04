"use client";

import React from "react";
import {
  Shield, Award, Star, Compass, LayoutGrid,
  HeartHandshake, Eye, Paintbrush, Megaphone, Lock, Printer, Users,
} from "lucide-react";

/* ─── Data ────────────────────────────────────────────────────────────── */
const sg = [
  { badge: "SG", name: "Omar Sebaey", title: "Secretary-General" },
];

const dsg = [
  { badge: "DSG", name: "Lea Chaaban", title: "Deputy Secretary-General" },
];

const seniorAdvisors = [
  { badge: "SA", name: "Joumana Mohamed", title: "Senior Advisor" },
  { badge: "SA", name: "Joe Feghaly",     title: "Senior Advisor" },
];

const departments = [
  {
    name: "CCDA Department", icon: Compass,
    members: [
      { badge: "Head",    name: "Yousef Siddique", title: "Head of CCDA"     },
      { badge: "Co-Head", name: "Ayda El Kattan",  title: "Co-Head of CCDA"  },
      { badge: "Co-Head", name: "Malek Bsat",      title: "Co-Head of CCDA"  },
    ],
  },
  {
    name: "Media", icon: Eye,
    members: [
      { badge: "Head",    name: "Anya Asim",   title: "Head of Media"    },
      { badge: "Co-Head", name: "Sarah Firas", title: "Co-Head of Media"  },
    ],
  },
  {
    name: "Ceremonies", icon: LayoutGrid,
    members: [
      { badge: "Head",    name: "Badr Almaasarawy", title: "Head of Ceremonies"    },
      { badge: "Co-Head", name: "Mona Mohamed",     title: "Co-Head of Ceremonies" },
    ],
  },
  {
    name: "Public Relations", icon: Users,
    members: [
      { badge: "Head", name: "Eyad Haytham", title: "Head of PR" },
    ],
  },
  {
    name: "Logistics", icon: LayoutGrid,
    members: [
      { badge: "Head", name: "Ahmed Elamir", title: "Head of Logistics" },
    ],
  },
  {
    name: "Human Resources", icon: Users,
    members: [
      { badge: "Head",    name: "Mohamed El Safadi", title: "Head of HR"    },
      { badge: "Co-Head", name: "Zayd Sham",         title: "Co-Head of HR" },
    ],
  },
  {
    name: "Volunteers", icon: HeartHandshake,
    members: [
      { badge: "Head",    name: "Syriena Helali",     title: "Head of Volunteers"    },
      { badge: "Co-Head", name: "Sulaiman AbuDawood", title: "Co-Head of Volunteers" },
    ],
  },
  {
    name: "Security", icon: Lock,
    members: [
      { badge: "Head",    name: "Sadeen Abdulaziz",      title: "Head of Security"    },
      { badge: "Co-Head", name: "Abdulrahman AlBabtain", title: "Co-Head of Security" },
      { badge: "Co-Head", name: "Sarah Naim",             title: "Co-Head of Security" },
    ],
  },
  {
    name: "Press", icon: Printer,
    members: [
      { badge: "Head",    name: "Helen Sadi",    title: "Head of Press"    },
      { badge: "Co-Head", name: "Sama Hashisho", title: "Co-Head of Press" },
    ],
  },
  {
    name: "Graphic Design", icon: Paintbrush,
    members: [
      { badge: "Head",    name: "Judi Alazmeh",   title: "Head of Graphic Design"    },
      { badge: "Co-Head", name: "Emad Bachat",    title: "Co-Head of Graphic Design" },
      { badge: "Co-Head", name: "Mariam Shehata", title: "Co-Head of Graphic Design" },
    ],
  },
  {
    name: "Marketing", icon: Megaphone,
    members: [
      { badge: "Head",    name: "Rudina Shabana",   title: "Head of Marketing"    },
      { badge: "Co-Head", name: "Serien Elframawy", title: "Co-Head of Marketing" },
    ],
  },
];

/* ─── Member Card ─────────────────────────────────────────────────────── */
function MemberCard({ badge, name, title, stretch }) {
  return (
    <div
      className="relative p-5 rounded-lg bg-[#060E1A]/80 border border-[#E2C799]/25 backdrop-blur-md shadow-xl overflow-hidden hover:border-[#E2C799]/55 transition-colors duration-300 flex flex-col gap-1"
      style={stretch ? { width: '100%' } : { width: '160px', flexShrink: 0 }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E2C799]/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E2C799]/30 pointer-events-none" />

      {/* Badge */}
      <span className="inline-block w-fit px-2 py-0.5 rounded bg-[#E2C799]/10 border border-[#E2C799]/25 font-mono text-[10px] text-[#E2C799] uppercase tracking-widest">
        {badge}
      </span>

      {/* Sub-title */}
      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-tight">
        {title}
      </span>

      {/* Name */}
      <h3 className="font-serif text-sm font-bold text-white tracking-wide leading-snug break-words">
        {name}
      </h3>
    </div>
  );
}

/* ─── Members Row — scrollable on mobile, wrapping grid on desktop ─────── */
function MembersRow({ members, stretch }) {
  return (
    <>
      {/* Mobile */}
      {stretch ? (
        /* Stretch mode: cards fill full width side by side */
        <div className="md:hidden flex gap-3">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} stretch />
          ))}
        </div>
      ) : (
        /* Scroll mode: fixed-width cards, scroll if overflow */
        <div className="md:hidden overflow-x-auto pb-3">
          <div className="flex gap-3" style={{ width: 'max-content' }}>
            {members.map((m, i) => (
              <MemberCard key={i} {...m} />
            ))}
          </div>
        </div>
      )}

      {/* Desktop: wrapping grid */}
      <div
        className="hidden md:grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))" }}
      >
        {members.map((m, i) => (
          <MemberCard key={i} {...m} />
        ))}
      </div>
    </>
  );
}

/* ─── Department Section ──────────────────────────────────────────────── */
function DepartmentRow({ dept }) {
  const DeptIcon = dept.icon;
  return (
    <div className="mb-10">
      {/* Title bar */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded bg-[#E2C799]/10 border border-[#E2C799]/20 text-[#E2C799] shrink-0">
          <DeptIcon className="w-5 h-5 stroke-[1.5]" />
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-[#E2C799] font-bold tracking-wide">
          {dept.name}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#E2C799]/30 to-transparent" />
      </div>

      <MembersRow members={dept.members} />
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────── */
export default function ExecutiveBoard() {
  return (
    <section
      id="executive-board"
      className="relative py-24 bg-[#0B192C] overflow-hidden border-t border-[#E2C799]/10"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#E2C799]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#1A304D]/30 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section header */}
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

        {/* ── Secretary-General ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded bg-[#E2C799]/10 border border-[#E2C799]/20 text-[#E2C799] shrink-0">
              <Shield className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#E2C799] font-bold tracking-wide">
              Secretary-General
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#E2C799]/30 to-transparent" />
          </div>
          <MembersRow members={sg} stretch />
        </div>

        {/* ── Deputy Secretary-General ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded bg-[#E2C799]/10 border border-[#E2C799]/20 text-[#E2C799] shrink-0">
              <Award className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#E2C799] font-bold tracking-wide leading-tight">
              Deputy<br />Secretary-General
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#E2C799]/30 to-transparent" />
          </div>
          <MembersRow members={dsg} stretch />
        </div>

        {/* ── Senior Advisors ── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded bg-[#E2C799]/10 border border-[#E2C799]/20 text-[#E2C799] shrink-0">
              <Star className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#E2C799] font-bold tracking-wide shrink-0">
              Senior Advisors
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#E2C799]/30 to-transparent" />
          </div>
          <MembersRow members={seniorAdvisors} />
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
