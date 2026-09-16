import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Radio, Globe, Code2, Sparkles, GraduationCap, ArrowRight, Laptop } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

const JOURNEY_STEPS = [
  {
    step: '01',
    label: 'ECE Student',
    title: 'Foundational Circuit & Signal Logic',
    summary: 'Learned first-principles analytical thinking, silicon gate behavior, and mathematics at Panimalar Engineering College.',
    icon: Cpu,
  },
  {
    step: '02',
    label: 'Hardware & IoT',
    title: 'Sensor Loops & Actuation',
    summary: 'Built closed-loop embedded systems like the Automatic Plant Watering System and Motion Light Sensor using Arduino and C/C++.',
    icon: Radio,
  },
  {
    step: '03',
    label: 'Web Development',
    title: 'User-Facing Products & UI',
    summary: 'Created client web interfaces for Soft Smile Dental Care and a freelance hotel portal using semantic HTML, CSS, and modern JavaScript.',
    icon: Globe,
  },
  {
    step: '04',
    label: 'Internships',
    title: 'Automation & Operations',
    summary: 'Built an automated Python Attendance Tracker at Eisystem (AICTE) and delivered IoT/web technical training at Infomatronics.',
    icon: Laptop,
  },
  {
    step: '05',
    label: 'Vision & ML Research',
    title: 'Image Processing & CNNs',
    summary: 'Authored MATLAB Traffic Sign Recognition and developed the FCEP-VA video compression CNN benchmark evaluated with PSNR and SSIM.',
    icon: Sparkles,
  },
  {
    step: '06',
    label: 'Software Engineering',
    title: 'Structured Code & Scalable Systems',
    summary: 'Now pursuing software engineering opportunities, with focus on Java, SQL, algorithms, and clean system design.',
    icon: Code2,
  },
];

export const AboutStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="about" className="py-24 relative bg-[#0e1014] border-t border-[#20242e]" aria-label="About Story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16181f] border border-[#272c38] text-accent-champagne text-xs font-mono font-medium mb-3">
            <span>THE EVOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ivory-100 tracking-tight leading-tight mb-5">
            From electronics to <span className="italic text-accent-champagne">software</span>.
          </h2>
          
          {/* Natural 3-4 sentence narrative */}
          <div className="space-y-3 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl">
            <p>
              I started in Electronics and Communication Engineering, learning how computing systems operate from the silicon gate and signal level.
            </p>
            <p>
              Building physical IoT controllers taught me how code commands real-world devices. That curiosity pulled me naturally into software—building responsive client web apps, writing structured Java and SQL, and researching deep convolutional networks for video enhancement.
            </p>
            <p className="text-ivory-200 font-medium">
              Today, I bring that hardware discipline and analytical clarity into software engineering.
            </p>
          </div>
        </div>

        {/* VISUAL STORYTELLING: Connected Visual Path */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#20242e]">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Interactive Path: Follow the Evolution
            </span>
            <span className="text-[11px] font-mono text-accent-champagne">
              Step {activeStep + 1} of {JOURNEY_STEPS.length}
            </span>
          </div>

          {/* Stepper Node Line */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {JOURNEY_STEPS.map((item, idx) => {
              const isSelected = activeStep === idx;
              const IconComp = item.icon;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#181b22] border-accent-gold/60 shadow-lg shadow-black/40'
                      : 'bg-[#121418] border-[#22262f] hover:bg-[#16181e] hover:border-[#2f3542]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-accent-champagne' : 'text-neutral-500'}`}>
                      {item.step}
                    </span>
                    <IconComp className={`w-4 h-4 ${isSelected ? 'text-accent-gold' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                  </div>
                  <div>
                    <span className={`text-xs font-semibold block transition-colors ${isSelected ? 'text-ivory-100' : 'text-neutral-300'}`}>
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Card for Selected Step */}
          <AnimatePresence mode="wait">
            {(() => {
              const current = JOURNEY_STEPS[activeStep];
              const IconComp = current.icon;

              return (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 sm:p-8 rounded-2xl bg-[#13151a] border border-[#282d38] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#181a22] border border-[#2b303d] flex items-center justify-center text-accent-champagne shrink-0 mt-0.5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-xs font-mono text-accent-champagne">
                        <span>STAGE {current.step}</span>
                        <span>•</span>
                        <span>{current.label}</span>
                      </div>
                      <h3 className="text-xl font-bold text-ivory-100 mb-2">
                        {current.title}
                      </h3>
                      <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                        {current.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                    {activeStep < JOURNEY_STEPS.length - 1 ? (
                      <button
                        onClick={() => setActiveStep((prev) => prev + 1)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1a1d24] hover:bg-[#222631] text-xs font-mono text-neutral-200 border border-[#2a2f3c] transition-colors"
                      >
                        <span>Next Milestone</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <a
                        href="#projects"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent-gold hover:bg-accent-champagne text-[#0c0d0f] text-xs font-bold transition-colors"
                      >
                        <span>Explore Projects</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>

        {/* Academic Credentials Snapshot */}
        <div className="pt-10 border-t border-[#20242e]">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-accent-gold" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121418] border border-[#22262f] hover:border-[#2f3542] transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-mono text-accent-champagne font-medium">
                      {edu.period}
                    </span>
                    <h4 className="text-base font-bold text-ivory-100 mt-0.5">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      {edu.institution}, {edu.location}
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#181b22] border border-[#2a2f3b] text-right">
                    <div className="text-[10px] font-mono text-neutral-400 uppercase">
                      {edu.gradeType}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-ivory-100 font-mono">
                      {edu.grade}
                    </div>
                  </div>
                </div>
                {edu.notes && (
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {edu.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
