import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-[#0c0d0f] border-t border-[#232730]" aria-label="Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16181e] border border-[#2c303a] text-accent-champagne text-xs font-mono font-medium mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED SPECIALIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ivory-100 tracking-tight leading-tight mb-4">
            Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            Targeted coursework and verified certifications validating core engineering competencies in 
            Java OOP, relational database modeling with SQL, and modern web development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#13151a] border border-[#232730] hover:border-[#353a47] flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Header: Issuer and Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#181b22] text-[11px] font-mono text-neutral-300 border border-[#282d38]">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-accent-champagne font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-ivory-100 group-hover:text-accent-champagne transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                  {cert.highlights}
                </p>

                {/* Key Skills Covered */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Curriculum Focus:
                  </span>
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Verification Note */}
              <div className="pt-4 border-t border-[#20242d] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Coursework
                </span>
                <span className="text-neutral-500">
                  Credential on request
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
