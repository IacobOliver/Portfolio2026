"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="bg-card-dark border border-border-card rounded-lg p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-serif text-text-primary text-xl md:text-2xl font-bold">
              Download My Resume
            </h3>
            <p className="text-text-secondary text-sm mt-2 font-sans">
              Get the full details — experience, skills, projects, and certifications.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="/resume-dark.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-text-secondary text-sm tracking-wide hover:text-white transition-colors duration-300 flex items-center gap-2 border border-border-card rounded hover:border-text-muted/40"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Preview
            </a>
            <a
              href="/Iacob_Oliver_Resume.pdf"
              download="Iacob_Oliver_Resume.pdf"
              className="px-5 py-2.5 bg-text-primary text-bg text-sm font-medium tracking-wide hover:bg-white transition-colors duration-300 flex items-center gap-2 rounded"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
