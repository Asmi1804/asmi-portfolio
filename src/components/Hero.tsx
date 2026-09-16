import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Download, ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenRecruiter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiter }) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-subtle-grid"
      aria-label="Introduction"
    >
      {/* Subtle warm ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Confident Editorial Typography (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Meta Line: Geolocation & Availability */}
            <div className="flex flex-wrap items-center gap-3 mb-6 text-[11px] font-mono text-neutral-400">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#14161a] border border-[#232730]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-neutral-300">Open to Software Roles</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="tracking-wider">CHENNAI, INDIA [13°04'N 80°17'E]</span>
            </div>

            {/* Name / Editorial Banner */}
            <div className="mb-2">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-400 block mb-2 font-medium">
                Digital Portfolio / 2026
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-ivory-100 uppercase leading-[1.08]">
                {PROFILE.name}
              </h1>
            </div>

            {/* Distinctive Storyline Statement */}
            <div className="my-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-accent-champagne tracking-normal leading-snug">
                “From circuits to code.”
              </h2>
            </div>

            {/* Crisp, Natural Supporting Description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed mb-8 font-normal">
              ECE graduate exploring software through projects, web development, and technology. 
              Bridging analytical engineering foundations with Java, SQL, and intelligent systems.
            </p>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-4 mb-8 border-y border-[#20242e] w-full max-w-lg text-left">
              <div>
                <span className="text-lg sm:text-xl font-mono font-bold text-ivory-100 block">8.9</span>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">CGPA (B.E. ECE)</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-mono font-bold text-ivory-100 block">06</span>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Built Projects</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-mono font-bold text-ivory-100 block">02</span>
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Papers at IConIC</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ivory-100 hover:bg-white text-[#0c0d0f] font-bold text-xs shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/assets/resume.pdf"
                download="Asmitha_Banu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent-gold hover:bg-accent-champagne text-[#0c0d0f] font-bold text-xs shadow-sm transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#14161a] hover:bg-[#1a1d22] text-neutral-200 hover:text-white font-medium text-xs border border-[#262932] transition-all duration-200"
              >
                <span>Let’s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <button
                onClick={onOpenRecruiter}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#14161a] hover:bg-[#1c1f26] text-accent-champagne font-medium text-xs border border-accent-gold/30 hover:border-accent-gold/60 transition-all duration-200"
                title="Open 20-second summary for recruiters"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
                <span>Recruiter Snapshot</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Asymmetric Editorial Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Asymmetric offset architectural backing frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent-gold/40 bg-[#121419] -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />

              {/* Main Portrait Card */}
              <div className="overflow-hidden rounded-2xl bg-[#14161b] border border-[#282d38] p-3 shadow-2xl relative">
                
                {/* Photo Container */}
                <div className="relative aspect-[3.7/5] rounded-xl overflow-hidden bg-[#0c0d0f]">
                  <img
                    src="/assets/profile.jpg"
                    alt="Asmitha Banu A - ECE Graduate and Software Engineer"
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.99] transition-all duration-700 ${
                      imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } group-hover:scale-102`}
                  />

                  {/* Gentle lower vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0f]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Refined Identification Plaque */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#111317]/90 border border-[#232730] backdrop-blur-md shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-accent-champagne font-mono font-semibold">
                          Profile Identity
                        </div>
                        <div className="text-sm font-bold text-ivory-100">
                          Asmitha Banu A
                        </div>
                        <div className="text-xs text-neutral-400">
                          B.E. ECE • Panimalar Engineering College
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-md bg-[#181a20] border border-[#262a33] text-[11px] font-mono text-accent-champagne">
                        CGPA 8.9
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-label bar */}
                <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Circuits → IoT → Software</span>
                  <span className="text-accent-champagne">Panimalar '26</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
          <span>SCROLL TO EXPLORE WORK</span>
        </div>
        <a href="#about" className="hover:text-neutral-300 transition-colors flex items-center gap-1">
          <span>About Journey</span>
          <ArrowDown className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};
