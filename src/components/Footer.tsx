import React from 'react';
import { ArrowUp, Sparkles, Download } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenRecruiter: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRecruiter }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090a] border-t border-[#20242e] pt-16 pb-12 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#20242e]">
          
          {/* Identity & Core Motto (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#14161b] border border-[#262a34] flex items-center justify-center text-ivory-100 font-bold font-mono text-sm">
                A
              </div>
              <span className="text-base font-bold text-ivory-100 tracking-tight">
                {PROFILE.name}
              </span>
            </div>
            
            <p className="text-sm text-neutral-300 max-w-md italic font-normal">
              “Building, learning, and turning ideas into something real.”
            </p>

            <p className="text-xs text-neutral-400 font-mono">
              B.E. Electronics & Communication Engineering • Panimalar Engineering College (CGPA 8.9)
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Explore
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-accent-champagne transition-colors">From Circuits to Code</a></li>
              <li><a href="#experience" className="hover:text-accent-champagne transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-accent-champagne transition-colors">Featured Projects</a></li>
              <li><a href="#research" className="hover:text-accent-champagne transition-colors">Conference Research</a></li>
              <li><a href="#skills" className="hover:text-accent-champagne transition-colors">Skill Ecosystem</a></li>
              <li>
                <button
                  onClick={onOpenRecruiter}
                  className="text-accent-champagne hover:text-accent-gold transition-colors flex items-center gap-1 font-mono"
                >
                  <Sparkles className="w-3 h-3 text-accent-gold" />
                  <span>Recruiter Snapshot</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact, Status & Resume (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Inquiries & Credentials
            </h5>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-xs font-mono text-accent-champagne hover:underline block break-all"
            >
              {PROFILE.email}
            </a>
            <div className="text-xs text-neutral-400">
              Chennai, Tamil Nadu, India
            </div>
            <div className="flex items-center gap-2.5 pt-1 text-xs font-mono">
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent-champagne transition-colors"
              >
                LinkedIn ↗
              </a>
              <span className="text-neutral-700">•</span>
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent-champagne transition-colors"
              >
                GitHub ↗
              </a>
              <span className="text-neutral-700">•</span>
              <a
                href={PROFILE.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-accent-champagne transition-colors"
              >
                LeetCode ↗
              </a>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/assets/resume.pdf"
                download="Asmitha_Banu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14161a] hover:bg-[#1a1d22] text-xs font-mono text-ivory-200 border border-[#272b35] transition-colors w-fit"
              >
                <Download className="w-3 h-3 text-accent-gold" />
                <span>Resume (PDF)</span>
              </a>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#101311] border border-emerald-900/60 text-[11px] font-mono text-emerald-400 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Software Roles</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {currentYear} {PROFILE.name}. Built with React, TypeScript & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121418] hover:bg-[#1a1c22] text-neutral-400 hover:text-ivory-100 border border-[#232730] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
