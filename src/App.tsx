import React from 'react';
import { StudioBackground } from './components/StudioBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-zinc-100 selection:bg-zinc-700 selection:text-white overflow-x-hidden">
      {/* Studio Black with Smoke Background */}
      <StudioBackground />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ExperienceTimeline />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
