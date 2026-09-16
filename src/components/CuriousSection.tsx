import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export const CuriousSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#0f1115] border-t border-[#232730]" aria-label="Philosophy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative rounded-2xl bg-[#13151a] border border-[#232730] p-8 sm:p-12 shadow-2xl overflow-hidden"
        >
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#16181e] border border-[#2c303a] text-accent-champagne text-xs font-mono font-medium mb-5">
              <Compass className="w-3.5 h-3.5 text-accent-gold" />
              <span>ENGINEERING PHILOSOPHY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ivory-100 tracking-tight mb-5 leading-snug">
              Curious by default.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal mb-8">
              I learn best by building things that actually work. Whether it is wiring an Arduino moisture sensor on a breadboard, 
              benchmarking convolutional neural network video enhancement algorithms in Python, writing SQL queries to extract relational data insights, 
              or structuring accessible web interfaces—I enjoy breaking down complex problems and turning ideas into reliable, tangible software.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#232730] text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                <span>Build to Understand</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-terracotta" />
                <span>Respect the Fundamentals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Iterate with Discipline</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
