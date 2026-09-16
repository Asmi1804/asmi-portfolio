import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0f1115] border-t border-[#232730]" aria-label="Professional Experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16181e] border border-[#2c303a] text-accent-champagne text-xs font-mono font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory-100 tracking-tight leading-tight mb-4">
            Work Experience & Technical Roles
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            Real industry and technical internship experience developing automated data tracking tools, IoT and web solutions, 
            delivering technical instruction, and maintaining production documentation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#232730] ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Node in Warm Gold */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0c0d0f] border-2 border-accent-gold/80 flex items-center justify-center text-accent-champagne group-hover:scale-110 group-hover:border-accent-champagne transition-transform shadow-md shadow-black/40">
                <div className="w-2 h-2 rounded-full bg-accent-gold" />
              </div>

              {/* Date Callout on Left for larger screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-bold text-accent-champagne block">
                  {exp.year}
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  {exp.durationNote}
                </span>
              </div>

              {/* Main Experience Card */}
              <div className="rounded-2xl bg-[#13151a] border border-[#232730] hover:border-[#353a47] p-6 sm:p-8 transition-all duration-300 shadow-xl">
                
                {/* Header row with role, org, period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#20242d]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-accent-gold/15 text-accent-champagne text-xs font-mono font-semibold border border-accent-gold/30">
                        {exp.type}
                      </span>
                      <span className="md:hidden text-xs font-mono text-accent-champagne">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-ivory-100 group-hover:text-accent-champagne transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-neutral-300 mt-0.5">
                      <Building2 className="w-4 h-4 text-neutral-400" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-xs font-mono text-neutral-300">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {exp.durationNote}
                    </span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Bulleted Contributions */}
                <div className="space-y-2.5 mb-6">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    Key Responsibilities & Deliverables:
                  </h5>
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Gained Tags */}
                <div className="pt-4 border-t border-[#20242d] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400 mr-1">Skills:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#181a20] text-xs font-mono text-neutral-300 border border-[#272b35]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
