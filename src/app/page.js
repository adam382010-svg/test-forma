import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Experience from "@/components/Experience";
import Committees from "@/components/Committees";
import ExecutiveBoard from "@/components/ExecutiveBoard";
import Applications from "@/components/Applications";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Mission, Vision, and Benefits Section */}
        <Mission />

        {/* The FormaMUN Experience Section */}
        <Experience />

        {/* Executive Board Section */}
        <ExecutiveBoard />

        {/* Committees Section */}
        <Committees />

        {/* Applications Section */}
        <Applications />

        {/* Sponsors and Partners Section */}
        <Sponsors />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

