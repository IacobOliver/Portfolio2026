"use client";

import { motion } from "framer-motion";

const shootingStars = [
  { top: "8%",  left: "70%", angle: 35,  duration: 1.0, delay: 0,  length: 100 },
  { top: "20%", left: "40%", angle: 25,  duration: 1.3, delay: 2,  length: 130 },
  { top: "55%", left: "80%", angle: 40,  duration: 0.9, delay: 4,  length: 90  },
  { top: "35%", left: "55%", angle: 30,  duration: 1.1, delay: 6,  length: 110 },
  { top: "75%", left: "30%", angle: 20,  duration: 1.4, delay: 8,  length: 140 },
  { top: "15%", left: "90%", angle: 45,  duration: 0.8, delay: 1,  length: 80  },
  { top: "45%", left: "60%", angle: 32,  duration: 1.2, delay: 3,  length: 120 },
  { top: "65%", left: "15%", angle: 28,  duration: 1.0, delay: 5,  length: 100 },
  { top: "10%", left: "25%", angle: 38,  duration: 1.1, delay: 7,  length: 110 },
  { top: "85%", left: "50%", angle: 22,  duration: 1.3, delay: 9,  length: 130 },
  { top: "30%", left: "85%", angle: 42,  duration: 0.9, delay: 1.5, length: 95  },
  { top: "50%", left: "10%", angle: 18,  duration: 1.5, delay: 3.5, length: 140 },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Shooting stars */}
      {shootingStars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.length,
            height: 1,
            transform: `rotate(${s.angle}deg)`,
            transformOrigin: "right center",
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-l from-white/50 via-white/15 to-transparent rounded-full"
            style={{ width: s.length }}
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: [200, -s.length * 6],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              repeatDelay: 6 + (i % 4) * 2,
              delay: s.delay,
              ease: "easeIn",
            }}
          />
        </motion.div>
      ))}

      {/* Constellation SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        {/* Constellation cluster — top right */}
        <line x1={850} y1={120} x2={940} y2={180} stroke="white" strokeWidth="0.5" opacity="0.07" />
        <line x1={940} y1={180} x2={1020} y2={140} stroke="white" strokeWidth="0.5" opacity="0.07" />
        <line x1={1020} y1={140} x2={1080} y2={200} stroke="white" strokeWidth="0.5" opacity="0.07" />
        <line x1={940} y1={180} x2={960} y2={260} stroke="white" strokeWidth="0.5" opacity="0.07" />
        <motion.circle cx={850} cy={120} r={2} fill="white"
          animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx={940} cy={180} r={2.5} fill="white"
          animate={{ opacity: [0.25, 0.7, 0.25] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.circle cx={1020} cy={140} r={2} fill="white"
          animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        <motion.circle cx={1080} cy={200} r={1.8} fill="white"
          animate={{ opacity: [0.15, 0.5, 0.15] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.circle cx={960} cy={260} r={1.5} fill="white"
          animate={{ opacity: [0.2, 0.45, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />

        {/* Constellation cluster — bottom right */}
        <line x1={880} y1={420} x2={960} y2={460} stroke="white" strokeWidth="0.5" opacity="0.06" />
        <line x1={960} y1={460} x2={1040} y2={430} stroke="white" strokeWidth="0.5" opacity="0.06" />
        <line x1={960} y1={460} x2={940} y2={530} stroke="white" strokeWidth="0.5" opacity="0.06" />
        <motion.circle cx={880} cy={420} r={1.8} fill="white"
          animate={{ opacity: [0.15, 0.5, 0.15] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
        <motion.circle cx={960} cy={460} r={2.2} fill="white"
          animate={{ opacity: [0.2, 0.55, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} />
        <motion.circle cx={1040} cy={430} r={1.5} fill="white"
          animate={{ opacity: [0.15, 0.45, 0.15] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.circle cx={940} cy={530} r={1.3} fill="white"
          animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />

        {/* Scattered solo stars */}
        <motion.circle cx={780} cy={200} r={1.2} fill="white"
          animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.circle cx={1100} cy={350} r={1} fill="white"
          animate={{ opacity: [0.08, 0.25, 0.08] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.circle cx={820} cy={550} r={1.3} fill="white"
          animate={{ opacity: [0.1, 0.35, 0.1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.circle cx={1060} cy={580} r={1} fill="white"
          animate={{ opacity: [0.08, 0.2, 0.08] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
      </svg>

      <div className="relative z-10 max-w-5xl w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-text-muted text-sm tracking-[0.3em] uppercase font-sans mb-4">
              Iacob Alexander-Oliver
            </p>
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
            className="mt-6 md:mt-8 text-text-secondary text-base md:text-lg lg:text-xl max-w-xl font-sans leading-relaxed"
          >
            3+ years shipping production web apps with Java/Spring Boot, React &amp; Angular.
            Team lead, mentor, and clean architecture enthusiast based in Bucharest, Romania.
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
