import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ResearchSection } from './components/ResearchSection';
import { SkillsEcosystem } from './components/SkillsEcosystem';
import { CertificationsSection } from './components/CertificationsSection';
import { CuriousSection } from './components/CuriousSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RecruiterModal } from './components/RecruiterModal';

export const App: React.FC = () => {
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0d0f] text-[#ede8dc] selection:bg-[#c5a059]/25 selection:text-[#fdfcfb]">
      {/* Sticky Navigation */}
      <Navbar onOpenRecruiter={() => setIsRecruiterModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 01: Hero Introduction */}
        <Hero onOpenRecruiter={() => setIsRecruiterModalOpen(true)} />

        {/* 02: Storytelling "From Circuits to Code" */}
        <AboutStory />

        {/* 03: Industry & Technical Experience */}
        <ExperienceTimeline />

        {/* 04: Selected Projects Showcase (with FCEP-VA spotlight) */}
        <ProjectShowcase />

        {/* 05: Academic Research & Conference Presentations */}
        <ResearchSection />

        {/* 06: Skill Ecosystem & Currently Learning */}
        <SkillsEcosystem />

        {/* 07: Verified Certifications */}
        <CertificationsSection />

        {/* 08: Beyond the Resume: "Curious by Default" */}
        <CuriousSection />

        {/* 09: Contact & Direct Message Dispatch */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenRecruiter={() => setIsRecruiterModalOpen(true)} />

      {/* Fast-Scan Recruiter Snapshot Modal */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </div>
  );
};

export default App;
