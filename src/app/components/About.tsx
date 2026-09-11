"use client";

import { motion } from "framer-motion";

const expertiseCards = [
  {
    icon: "{ }",
    title: "Frontend Development",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "< />",
    title: "Backend Development",
    techs: ["Java", "Spring Boot", "Node.js", "PostgreSQL"],
  },
  {
    icon: ">>_",
    title: "DevOps & Tools",
    techs: ["Docker", "AWS", "Git", "CI/CD"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
        >
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-sans">
            About
          </span>
          <h2 className="font-serif font-bold text-text-primary text-3xl md:text-4xl lg:text-5xl mt-4">
            Crafting Digital
            <br />
            Experiences
          </h2>
          <div className="w-12 h-[1px] bg-text-muted mt-6" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-sans">
              I&apos;m Oliver, a Full Stack Developer based in Bucharest,
              Romania, with a passion for building clean, performant web
              applications. I specialize in turning complex problems into
              elegant, user-friendly solutions using modern frameworks and
              best practices.
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-sans mt-4">
              From e-learning platforms to project management tools and digital
              twin systems, I&apos;ve worked across diverse domains delivering
              production-ready software. I value clean code, thoughtful
              architecture, and continuous learning.
            </p>
          </motion.div>

          {/* Expertise cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            {expertiseCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                variants={fadeUp}
                className="bg-card-dark border border-border-card rounded-lg p-6 hover:border-text-muted/30 transition-colors duration-300"
              >
                <span className="text-text-muted font-mono text-sm">
                  {card.icon}
                </span>
                <h3 className="font-serif text-text-primary text-lg mt-3 font-semibold">
                  {card.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {card.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-text-secondary bg-card-darker px-3 py-1 rounded-full border border-border-card"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
