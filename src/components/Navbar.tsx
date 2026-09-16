import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Download } from 'lucide-react';

interface NavbarProps {
  onOpenRecruiter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      const sections = ['hero', 'about', 'experience', 'projects', 'research', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d0f]/90 backdrop-blur-md border-b border-[#232730] py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Subtle Hairline Reading Progress */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-accent-gold transition-all duration-100 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group focus-visible:ring-2 focus-visible:ring-accent-gold rounded-lg p-1"
            aria-label="Asmitha Banu - Back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-[#17191e] border border-[#2c303a] flex items-center justify-center text-ivory-100 font-bold font-mono text-base group-hover:border-accent-gold/60 transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-ivory-100 group-hover:text-accent-champagne transition-colors">
                Asmitha Banu A
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                ECE → Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#14161a]/80 p-1.5 rounded-full border border-[#232730] backdrop-blur-sm" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#232730] text-accent-champagne font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-ivory-100 hover:bg-[#1a1c21]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Recruiter Snapshot & Resume */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenRecruiter}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#16181e] hover:bg-[#1c1f26] text-accent-champagne border border-[#2c303a] hover:border-accent-gold/40 transition-all duration-200 group"
              title="Open 20-second summary for recruiters"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-gold group-hover:rotate-12 transition-transform" />
              <span>Recruiter Snapshot</span>
            </button>

            <a
              href="/assets/resume.pdf"
              download="Asmitha_Banu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-accent-gold hover:bg-accent-champagne text-[#0c0d0f] font-semibold shadow-sm transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Recruiter snapshot trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenRecruiter}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[#181a20] text-accent-champagne border border-[#2c303a]"
              aria-label="Open Recruiter Snapshot"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              <span>Snapshot</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#14161a] border border-[#232730] text-neutral-300 hover:text-white"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#121418] border border-[#232730] backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:bg-[#1a1c22] hover:text-accent-champagne transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-[#232730] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRecruiter();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#181a20] text-accent-champagne border border-[#2c303a]"
                >
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                  <span>Open Recruiter Snapshot</span>
                </button>
                <a
                  href="/assets/resume.pdf"
                  download="Asmitha_Banu_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-accent-gold text-[#0c0d0f]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
