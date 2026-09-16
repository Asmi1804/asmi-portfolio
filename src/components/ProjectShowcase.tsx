import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, CheckCircle2, ChevronRight, X, Info, ArrowRight, Activity } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';

// Explicit editorial numbering mapping requested by Asmitha
const PROJECT_NUMBERS: Record<string, string> = {
  'motion-light-sensor': '01',
  'soft-smile-dental': '02',
  'hotel-freelance-website': '03',
  'plant-watering-system': '04',
  'traffic-sign-matlab': '05',
  'fcep-va-compression': '06',
};

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Software', 'Web', 'IoT', 'AI/ML', 'Academic'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category.includes(selectedCategory);
  });

  const featuredProject = PROJECTS.find((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative bg-[#0c0d0f]" aria-label="Project Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16181e] border border-[#2c303a] text-accent-champagne text-xs font-mono font-medium mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>CURATED BODY OF WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-ivory-100 tracking-tight leading-tight">
              Selected <span className="italic text-accent-champagne">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl mt-3 leading-relaxed font-normal">
              Six projects built with simple purpose: solving real problems across deep learning, computer vision, IoT hardware, and client web applications.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-[#14161a] border border-[#232730] self-start md:self-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isSelected ? 'text-ivory-100 font-semibold' : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#1a1c22]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 rounded-lg bg-[#22252e] border border-[#373c4a]"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 06: FEATURED PROJECT SPOTLIGHT — FCEP-VA Video Compression */}
        {featuredProject && (selectedCategory === 'All' || featuredProject.category.includes(selectedCategory)) && (
          <div className="mb-14">
            <div className="relative rounded-2xl overflow-hidden bg-[#13151a] border border-[#2d323e] hover:border-accent-gold/50 p-6 sm:p-9 lg:p-10 shadow-2xl transition-all duration-300 group">
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Description Column */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="text-xs font-mono font-bold text-accent-champagne bg-[#1c1f27] px-2.5 py-1 rounded-md border border-[#2b303d]">
                      06 / FEATURED RESEARCH
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {featuredProject.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-ivory-100 tracking-tight leading-tight mb-4 group-hover:text-accent-champagne transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {featuredProject.shortDescription}
                  </p>

                  {/* Architecture & Contribution Highlights */}
                  <div className="space-y-2 mb-6 text-xs sm:text-sm text-neutral-300">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                      <span><strong>Contribution:</strong> {featuredProject.contribution}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-terracotta shrink-0 mt-0.5" />
                      <span><strong>What I Learned:</strong> {featuredProject.learned}</span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#181a20] border border-[#272b35] text-xs font-mono text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setActiveModalProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ivory-100 hover:bg-white text-[#0c0d0f] font-bold text-xs shadow-md transition-colors"
                    >
                      <span>Explore Technical Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                      {featuredProject.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Right Visual Metrics Board */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-xl bg-[#0c0d10] border border-[#20242e] shadow-inner">
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#20242e]">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Quantitative Evaluation Metrics
                      </span>
                      <Activity className="w-4 h-4 text-accent-champagne" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {featuredProject.metrics?.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-lg bg-[#14161c] border border-[#242833] flex flex-col justify-between"
                        >
                          <span className="text-[11px] font-mono text-neutral-400 mb-1">
                            {metric.label}
                          </span>
                          <span className="text-sm font-bold text-ivory-100 tracking-tight">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-[#16181f] border border-[#242833] text-[11px] font-mono text-neutral-400 leading-relaxed">
                      Frame-wise CNN enhancement pipeline evaluated across standardized signal and structural fidelity metrics.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* PROJECTS 01 TO 05 — Curated Body of Work with Hover Dynamics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => {
            const projectNumber = PROJECT_NUMBERS[project.id] || '00';

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-[#121418] border border-[#222630] hover:border-[#3a4152] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Background Large Number Watermark */}
                <div className="absolute top-2 right-4 text-5xl font-mono font-bold text-neutral-800/30 group-hover:text-accent-gold/20 transition-colors pointer-events-none select-none">
                  {projectNumber}
                </div>

                <div>
                  {/* Card Header: Project Number + Category */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-accent-champagne">
                      {projectNumber} — {project.category[0]}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h4 className="text-lg font-bold text-ivory-100 group-hover:text-accent-champagne transition-colors mb-3 leading-snug">
                    {project.title}
                  </h4>

                  {/* Short Honest Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#0c0d0f] text-[11px] font-mono text-neutral-400 border border-[#1e222b] group-hover:border-[#2b303c] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#1f232c] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-champagne hover:text-accent-gold transition-colors"
                  >
                    <span>Explore details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[11px] font-mono text-neutral-500">
                    Details on request
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* EXPANDABLE MODAL: Deep Dive into Problem, Contribution, Learning */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-2xl rounded-2xl bg-[#13151a] border border-[#2d323d] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-accent-gold/15 border border-accent-gold/30 text-accent-champagne text-xs font-mono font-medium">
                        {PROJECT_NUMBERS[activeModalProject.id]} — {activeModalProject.category.join(' • ')}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {activeModalProject.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-ivory-100">
                      {activeModalProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-1.5 rounded-lg bg-[#1a1d24] text-neutral-400 hover:text-white hover:bg-[#242832] transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 font-semibold">
                      Overview & Problem
                    </h5>
                    <p className="text-ivory-200">{activeModalProject.fullDescription}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0c0d10] border border-[#222630]">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-accent-champagne mb-2 font-semibold">
                      What I Worked On
                    </h5>
                    <p className="text-neutral-200">{activeModalProject.contribution}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0c0d10] border border-[#222630]">
                    <h5 className="text-xs font-mono uppercase tracking-wider text-accent-terracotta mb-2 font-semibold">
                      What I Learned
                    </h5>
                    <p className="text-neutral-200">{activeModalProject.learned}</p>
                  </div>

                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5 font-semibold">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#1a1d24] text-xs font-mono text-neutral-200 border border-[#2c313d]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-8 pt-6 border-t border-[#232730] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
                    <Info className="w-4 h-4 text-accent-champagne" />
                    <span>{activeModalProject.statusLabel}</span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setActiveModalProject(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-ivory-100 hover:bg-white text-[#0c0d0f] font-bold text-xs transition-colors"
                  >
                    <span>Inquire About This Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
