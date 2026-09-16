import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Download, Copy, Check, GraduationCap, Briefcase, FileCode, Award, Mail } from 'lucide-react';
import { PROFILE, EDUCATION, EXPERIENCES } from '../data/portfolioData';

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterModal: React.FC<RecruiterModalProps> = ({ isOpen, onClose }) => {
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `Asmitha Banu A | ECE Graduate → Aspiring Software Engineer
Location: Chennai, India | Email: ${PROFILE.email} | Phone: ${PROFILE.phone}
Education: B.E. Electronics & Communication Engineering, Panimalar Engineering College (CGPA: 8.9)
Technical Skills: Java, SQL, HTML, CSS, JavaScript, Python, Arduino/IoT, MATLAB
Experience:
- Infomatronics Project Services (Intern & Project Associate, Mar 2024 – Apr 2025)
- Eisystem of Technologies / AICTE (Technical Intern, Python Attendance Tracker, May – Jun 2024)
Projects: 6 complete implementations including FCEP-VA CNN video compression
Research: 2 conference presentations at IConIC 2025`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-3xl rounded-2xl bg-[#121418] border border-[#2c313d] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Recruiter Snapshot"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#222630]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/30 text-accent-champagne text-xs font-mono font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              <span>20-SECOND CANDIDATE SNAPSHOT</span>
            </div>
            <h3 className="text-2xl font-extrabold text-ivory-100">
              Asmitha Banu A
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
              ECE Graduate → Aspiring Software Engineer • Chennai, India • Open to Roles
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#181a20] text-neutral-400 hover:text-white hover:bg-[#222630] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-density recruiter layout */}
        <div className="py-6 space-y-6 text-sm">
          
          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-[#0c0d10] border border-[#20242e]">
              <span className="text-[10px] font-mono text-neutral-400 block mb-1">CGPA (B.E. ECE)</span>
              <span className="text-lg font-bold text-accent-champagne font-mono">8.9 / 10.0</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0c0d10] border border-[#20242e]">
              <span className="text-[10px] font-mono text-neutral-400 block mb-1">Experience</span>
              <span className="text-lg font-bold text-ivory-100 font-mono">2 Roles</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0c0d10] border border-[#20242e]">
              <span className="text-[10px] font-mono text-neutral-400 block mb-1">Projects</span>
              <span className="text-lg font-bold text-ivory-100 font-mono">6 Built</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0c0d10] border border-[#20242e]">
              <span className="text-[10px] font-mono text-neutral-400 block mb-1">Research</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">2 Papers</span>
            </div>
          </div>

          {/* Education Snapshot */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent-gold" />
              <span>Education</span>
            </h4>
            <div className="space-y-2">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#0c0d10] border border-[#1e222a] flex items-center justify-between gap-2">
                  <div>
                    <span className="font-semibold text-ivory-100 block text-xs sm:text-sm">{edu.degree}</span>
                    <span className="text-xs text-neutral-400">{edu.institution} ({edu.period})</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#181a20] text-xs font-mono font-bold text-accent-champagne">
                    {edu.gradeType}: {edu.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-accent-gold" />
              <span>Technical Skills</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Python', 'IoT & Arduino', 'MATLAB'].map((s) => (
                <span key={s} className="px-3 py-1 rounded-lg bg-[#181b22] border border-[#272c37] text-xs font-mono text-neutral-200">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-accent-gold" />
              <span>Industry Experience</span>
            </h4>
            <div className="space-y-2">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-3 rounded-xl bg-[#0c0d10] border border-[#1e222a]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ivory-100 text-xs sm:text-sm">{exp.role}</span>
                    <span className="text-xs font-mono text-accent-champagne">{exp.year}</span>
                  </div>
                  <span className="text-xs text-neutral-400">{exp.organization}</span>
                  <p className="text-xs text-neutral-300 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-accent-gold" />
              <span>Conference Research Presentations</span>
            </h4>
            <div className="p-3 rounded-xl bg-[#0c0d10] border border-[#1e222a] text-xs space-y-1">
              <div className="text-ivory-200 font-medium">• Wireless Charging Roads for EVs</div>
              <div className="text-ivory-200 font-medium">• Track N Seat: Smart Bus Seat Vacancy Detection and Arrival Alerts</div>
              <div className="text-neutral-400 pt-1">Presented at the 8th International Conference on Intelligent Computing (IConIC 2025)</div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#222630] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopySummary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#181a20] hover:bg-[#20242e] text-neutral-300 text-xs font-mono transition-colors"
          >
            {copiedSummary ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedSummary ? 'Copied Brief!' : 'Copy Summary'}</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#181a20] hover:bg-[#20242e] text-ivory-100 text-xs font-semibold transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Candidate</span>
            </a>

            <a
              href="/assets/resume.pdf"
              download="Asmitha_Banu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent-gold hover:bg-accent-champagne text-[#0c0d0f] font-bold text-xs shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
