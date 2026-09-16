import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { RESEARCH_PAPERS } from '../data/portfolioData';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-24 relative bg-[#0c0d0f] border-t border-[#232730]" aria-label="Research and Publications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16181e] border border-[#2c303a] text-accent-champagne text-xs font-mono font-medium mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ACADEMIC SCHOLARSHIP & PAPERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory-100 tracking-tight leading-tight mb-4">
            Research & Conference Presentations
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            Rigorous inquiry into intelligent computing and dynamic transit infrastructure. Authored and presented peer-reviewed research papers at the prestigious 
            <strong> 8th International Conference on Intelligent Computing (IConIC 2025)</strong>, Panimalar Engineering College, Chennai.
          </p>
        </div>

        {/* Papers Grid - Editorial Research Paper Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {RESEARCH_PAPERS.map((paper, idx) => (
            <motion.article
              key={paper.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="rounded-2xl bg-[#13151a] border border-[#232730] hover:border-[#353b49] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Paper Header / Conference Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent-gold/15 text-accent-champagne border border-accent-gold/30 text-xs font-mono font-semibold">
                    {paper.status}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    Presented {paper.year}
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-ivory-100 group-hover:text-accent-champagne transition-colors mb-4 leading-snug">
                  {paper.title}
                </h3>

                {/* Venue / Author Metadata */}
                <div className="p-3.5 rounded-xl bg-[#0c0d10] border border-[#1f232c] text-xs font-mono text-neutral-300 mb-6 space-y-1">
                  <div className="text-accent-champagne font-semibold">
                    {paper.conference}
                  </div>
                  <div className="text-neutral-400">
                    {paper.institution}
                  </div>
                  <div className="text-neutral-400">
                    Author: Asmitha Banu A
                  </div>
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-semibold">
                    Research Abstract:
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    "{paper.summary}"
                  </p>
                </div>

                {/* Key Contributions */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    Key Technical Contributions:
                  </h4>
                  {paper.keyContributions.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0 mt-2" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-[#20242d] flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Domain: Intelligent Systems</span>
                <span className="text-accent-champagne">IConIC 2025 Proceedings</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
