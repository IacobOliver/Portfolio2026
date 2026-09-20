"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Oracle Certified Associate",
    subtitle: "Java SE 8 Programmer",
    issuer: "Oracle",
    date: "Jan 2026",
    icon: "☕",
  },
  {
    title: "Anthropic AI Developer",
    subtitle: "MCP, Agent Skills, Claude Code, Claude API",
    issuer: "Anthropic",
    date: "Jul 2026",
    icon: "🤖",
  },
];

const education = [
  {
    school: "Codecool Talent Hub",
    degree: "Full Stack Developer Program",
    period: "Dec 2022 — Apr 2024",
  },
  {
    school: '"George Calinescu" Theoretical High School',
    degree: "Math & Computer Science",
    period: "Sep 2018 — Jun 2022",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
        >
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-sans">
            Credentials
          </span>
          <h2 className="font-serif font-bold text-text-primary text-3xl md:text-4xl lg:text-5xl mt-4">
            Certifications &amp; Education
          </h2>
          <div className="w-12 h-[1px] bg-text-muted mt-6" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Certifications */}
          <div>
            <h3 className="text-text-muted text-xs tracking-[0.2em] uppercase font-sans mb-6">
              Certifications
            </h3>
            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                  variants={fadeUp}
                  className="bg-card-dark border border-border-card rounded-lg p-6 hover:border-text-muted/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="font-serif text-text-primary text-lg font-semibold">
                          {cert.title}
                        </h4>
                        <span className="text-text-muted text-xs tracking-wider uppercase font-sans whitespace-nowrap">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm mt-1 font-sans">
                        {cert.subtitle}
                      </p>
                      <p className="text-text-muted text-xs mt-2 font-sans">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-text-muted text-xs tracking-[0.2em] uppercase font-sans mb-6">
              Education
            </h3>
            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.2 }}
                  variants={fadeUp}
                  className="bg-card-dark border border-border-card rounded-lg p-6 hover:border-text-muted/30 transition-colors duration-300"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-text-primary text-lg font-semibold">
                      {edu.school}
                    </h4>
                    <span className="text-text-muted text-xs tracking-wider uppercase font-sans whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mt-1 font-sans">
                    {edu.degree}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <h3 className="text-text-muted text-xs tracking-[0.2em] uppercase font-sans mb-4 mt-8">
              Languages
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeUp}
              className="flex gap-4"
            >
              <div className="bg-card-dark border border-border-card rounded-lg p-4 flex-1">
                <p className="font-serif text-text-primary font-semibold">Romanian</p>
                <p className="text-text-muted text-xs mt-1 font-sans">Native</p>
              </div>
              <div className="bg-card-dark border border-border-card rounded-lg p-4 flex-1">
                <p className="font-serif text-text-primary font-semibold">English</p>
                <p className="text-text-muted text-xs mt-1 font-sans">Professional Working</p>
              </div>
              <div className="bg-card-dark border border-border-card rounded-lg p-4 flex-1">
                <p className="font-serif text-text-primary font-semibold">German</p>
                <p className="text-text-muted text-xs mt-1 font-sans">Beginner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
