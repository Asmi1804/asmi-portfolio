import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Download, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: string; // Anti-bot honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formState.name.trim() || formState.name.trim().length < 2) {
      errs.name = 'Please enter your name (minimum 2 characters)';
    }
    if (!formState.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formState.subject.trim() || formState.subject.trim().length < 3) {
      errs.subject = 'Please specify a subject (minimum 3 characters)';
    }
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      errs.message = 'Please enter a message (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap: if filled, quietly stop
    if (formState.botcheck) {
      setStatus('success');
      setStatusMessage('Thanks! Your message has been sent.');
      return;
    }

    if (!validate()) return;

    setStatus('submitting');
    setStatusMessage('');

    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY;
    const customEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    const targetEmail = 'asmithabanu1804@gmail.com';

    try {
      if (web3Key) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            name: formState.name,
            email: formState.email,
            subject: `[Portfolio Contact] ${formState.subject}`,
            message: formState.message,
            to_email: targetEmail,
            from_name: formState.name,
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus('success');
          setStatusMessage('Thanks! Your message has been sent.');
          setFormState({ name: '', email: '', subject: '', message: '', botcheck: '' });
          return;
        } else {
          throw new Error(data.message || 'Transmission failed');
        }
      } else if (customEndpoint && customEndpoint.startsWith('http')) {
        const response = await fetch(customEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            ...formState,
            _to: targetEmail,
          }),
        });

        if (response.ok) {
          setStatus('success');
          setStatusMessage('Thanks! Your message has been sent.');
          setFormState({ name: '', email: '', subject: '', message: '', botcheck: '' });
          return;
        } else {
          throw new Error('Custom endpoint rejected request');
        }
      } else {
        // Direct reliable client dispatch fallback
        const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
          `[Portfolio Contact] ${formState.subject}`
        )}&body=${encodeURIComponent(
          `Sender: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
        )}`;

        window.location.href = mailtoUrl;

        setStatus('success');
        setStatusMessage(
          `Opening your email client to deliver directly to ${targetEmail}. (To enable background form delivery, add your free Web3Forms key to .env).`
        );
        setFormState({ name: '', email: '', subject: '', message: '', botcheck: '' });
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage(
        `We could not send your message automatically. Please contact me directly at ${targetEmail}.`
      );
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0c0d0f] border-t border-[#232730]" aria-label="Contact Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16181e] border border-[#2c303a] text-accent-champagne text-xs font-mono font-medium mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory-100 tracking-tight leading-tight mb-4">
            Let’s Connect & Collaborate
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            I am actively open to software engineering opportunities, project collaborations, and technical discussions. 
            Submit a message below or contact me directly via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#13151a] border border-[#232730] hover:border-[#353a47] transition-colors shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Direct Inbox
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1a1d24] hover:bg-[#222731] text-xs font-mono text-accent-champagne transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${PROFILE.email}`}
                className="text-lg font-bold text-ivory-100 hover:text-accent-champagne transition-colors break-all"
              >
                {PROFILE.email}
              </a>
              <p className="text-xs text-neutral-400 mt-2">
                Replies typically within 24 hours.
              </p>
            </div>

            {/* Direct Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#13151a] border border-[#232730]">
                <div className="w-8 h-8 rounded-lg bg-[#181a20] flex items-center justify-center text-accent-champagne mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono uppercase text-neutral-400">Phone</div>
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="text-sm font-bold text-ivory-100 hover:text-accent-champagne transition-colors block mt-0.5"
                >
                  {PROFILE.phone}
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-[#13151a] border border-[#232730]">
                <div className="w-8 h-8 rounded-lg bg-[#181a20] flex items-center justify-center text-accent-terracotta mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono uppercase text-neutral-400">Location</div>
                <div className="text-sm font-bold text-ivory-100 mt-0.5">
                  {PROFILE.location}
                </div>
              </div>
            </div>

            {/* Resume Quick Access in Contact */}
            <div className="p-6 rounded-2xl bg-[#13151a] border border-[#232730] flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-ivory-100">
                  Official Resume Document
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Verified PDF • Panimalar ECE (CGPA 8.9)
                </p>
              </div>

              <a
                href="/assets/resume.pdf"
                download="Asmitha_Banu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent-gold hover:bg-accent-champagne text-[#0c0d0f] font-bold text-xs shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Professional Network Links */}
            <div className="p-6 rounded-2xl bg-[#13151a] border border-[#232730]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                Professional Network
              </h4>

              <div className="space-y-2.5">
                {[
                  { name: 'LinkedIn', url: PROFILE.socials.linkedin, handle: 'in/asmi18' },
                  { name: 'GitHub', url: PROFILE.socials.github, handle: 'github.com/Asmi1804' },
                  { name: 'LeetCode', url: PROFILE.socials.leetcode, handle: 'leetcode.com/u/Asmithabanu' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#0c0d10] border border-[#20242d] hover:border-[#3a4152] hover:bg-[#15171d] transition-all text-left group"
                  >
                    <div>
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-ivory-100 block">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-400">
                        {item.handle}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-accent-champagne group-hover:text-accent-gold">
                      <span>Visit</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#13151a] border border-[#232730] shadow-2xl relative">
              
              <h3 className="text-xl font-bold text-ivory-100 mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-normal">
                Dispatches directly to <span className="text-accent-champagne font-mono">asmithabanu1804@gmail.com</span>.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot Spam Field */}
                <input
                  type="text"
                  name="botcheck"
                  value={formState.botcheck}
                  onChange={(e) => setFormState({ ...formState, botcheck: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Name <span className="text-accent-champagne">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c0d10] border text-ivory-100 placeholder-neutral-500 text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500/80 focus:border-red-400' : 'border-[#232730] focus:border-accent-gold'
                      }`}
                      required
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Email <span className="text-accent-champagne">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0c0d10] border text-ivory-100 placeholder-neutral-500 text-sm focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500/80 focus:border-red-400' : 'border-[#232730] focus:border-accent-gold'
                      }`}
                      required
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Subject <span className="text-accent-champagne">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Software Engineering Opportunity / Discussion"
                    value={formState.subject}
                    onChange={(e) => {
                      setFormState({ ...formState, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0c0d10] border text-ivory-100 placeholder-neutral-500 text-sm focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500/80 focus:border-red-400' : 'border-[#232730] focus:border-accent-gold'
                    }`}
                    required
                  />
                  {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Message <span className="text-accent-champagne">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Hi Asmitha, I came across your portfolio and would love to discuss..."
                    value={formState.message}
                    onChange={(e) => {
                      setFormState({ ...formState, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0c0d10] border text-ivory-100 placeholder-neutral-500 text-sm focus:outline-none transition-colors resize-y ${
                      errors.message ? 'border-red-500/80 focus:border-red-400' : 'border-[#232730] focus:border-accent-gold'
                    }`}
                    required
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-[#142018] border border-emerald-800/80 flex items-start gap-3 text-emerald-300 text-xs sm:text-sm animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-0.5">Thanks! Your message has been sent.</span>
                      <p>{statusMessage}</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-[#241315] border border-red-800/80 flex items-start gap-3 text-red-300 text-xs sm:text-sm animate-in fade-in">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                    <div className="space-y-2">
                      <p>{statusMessage}</p>
                      <a
                        href={`mailto:asmithabanu1804@gmail.com?subject=${encodeURIComponent(
                          formState.subject || 'Portfolio Inquiry'
                        )}&body=${encodeURIComponent(formState.message)}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-900/60 text-white font-mono text-xs hover:bg-red-800 transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>Send via Direct Email Client</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-ivory-100 hover:bg-white text-[#0c0d0f] font-bold text-sm shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0c0d0f] border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-neutral-500 text-center">
                  Protected with anti-spam honeypot • Encrypted transmission
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
