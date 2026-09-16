import React from 'react';
import { Sparkles, Compass, MessageSquare } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const SkillsEcosystem: React.FC = () => {
  const primarySkills = [
    { name: 'Java', note: 'Object-Oriented Programming, Data Structures & Logic' },
    { name: 'SQL', note: 'Relational Database Queries, Schema Design & Joins' },
    { name: 'HTML5', note: 'Semantic Markup, Accessibility & Modern Standards' },
    { name: 'CSS3', note: 'Responsive Layouts, Grid/Flexbox & Visual Hierarchy' },
    { name: 'JavaScript', note: 'ES6+ Syntax, DOM Interaction & Event Handling' },
  ];

  const exploredSkills = [
    { name: 'Python', note: 'Data Automation & Attendance Tracker Application' },
    { name: 'Arduino', note: 'Embedded C, Sensor Interfacing & Relay Actuation' },
    { name: 'MATLAB', note: 'Image Processing & Machine Learning Pipelines' },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#0e1014] border-t border-[#20242e]" aria-label="Skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16181f] border border-[#272c38] text-accent-champagne text-xs font-mono font-medium mb-3">
            <span>TOOLKIT & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ivory-100 tracking-tight leading-tight">
            Technical <span className="italic text-accent-champagne">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mt-3 leading-relaxed font-normal">
            No meaningless percentage bars. An honest distinction between the core tools I work with and the technologies I have explored through projects.
          </p>
        </div>

        {/* DISTINCTIVE GROUPING: I WORK WITH vs ALSO EXPLORED */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: I WORK WITH (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-gold" />
              <h3 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-accent-champagne">
                I Work With
              </h3>
            </div>

            <div className="space-y-3">
              {primarySkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 sm:p-5 rounded-2xl bg-[#13151a] border border-[#232730] hover:border-[#353a49] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 group"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg sm:text-xl font-mono font-bold text-ivory-100 group-hover:text-accent-champagne transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    {skill.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: ALSO EXPLORED (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-terracotta" />
              <h3 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-accent-terracotta">
                Also Explored
              </h3>
            </div>

            <div className="space-y-3">
              {exploredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 sm:p-5 rounded-2xl bg-[#121418] border border-[#22252e] hover:border-[#303643] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 group"
                >
                  <span className="text-lg font-mono font-bold text-ivory-100 group-hover:text-accent-champagne transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {skill.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Education & Analytical Root */}
            <div className="mt-6 p-5 rounded-2xl bg-[#0c0d10] border border-[#1e222b] text-xs font-mono text-neutral-400 space-y-1.5">
              <div className="text-accent-champagne font-semibold uppercase tracking-wider">
                Engineering Foundation
              </div>
              <p className="text-neutral-300 font-sans leading-relaxed">
                ECE coursework provided deep exposure to digital logic, microprocessors, and mathematical analysis.
              </p>
            </div>
          </div>

        </div>

        {/* SPECIAL FEATURE: CURRENTLY LEARNING */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#13151a] border border-accent-gold/30 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-accent-gold/15 text-accent-champagne border border-accent-gold/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent-champagne font-semibold">
                  ACTIVE STUDY & PRACTICE
                </span>
                <h4 className="text-lg font-bold text-ivory-100">
                  Currently Learning
                </h4>
              </div>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Continuously updated
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PROFILE.currentlyLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#0c0d10] border border-[#232730] flex items-start gap-2 text-xs font-medium text-ivory-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0 mt-1.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#121418] border border-[#20242e]">
            <h4 className="text-xs font-bold text-ivory-100 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-accent-champagne" />
              <span>Professional Strengths</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {PROFILE.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-[#0c0d10] border border-[#20242d] text-xs font-medium text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121418] border border-[#20242e]">
            <h4 className="text-xs font-bold text-ivory-100 uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-accent-terracotta" />
              <span>Languages Known</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {PROFILE.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0c0d10] border border-[#20242d] text-xs font-mono font-medium text-accent-champagne"
                >
                  {lang} (Proficient)
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
