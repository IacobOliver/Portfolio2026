"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Subtle background dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif font-bold text-text-primary leading-[0.9] tracking-tight">
            <span className="block text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]">
              Full Stack
            </span>
            <span className="block text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]">
              Developer
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-text-secondary text-base md:text-lg lg:text-xl max-w-xl font-sans"
        >
          Building robust web applications with modern technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => handleScroll("#work")}
            className="px-6 py-3 border border-text-primary/30 text-text-primary text-sm tracking-wide hover:border-white hover:text-white transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-6 py-3 text-text-secondary text-sm tracking-wide hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            Get In Touch
            <span className="text-lg">&rarr;</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-text-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}
