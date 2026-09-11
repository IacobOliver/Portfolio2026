"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Clean Code Quest",
    role: "Full Stack Developer",
    period: "Dec 2022 — Present",
    description: [
      "Built and maintained e-learning platforms serving hundreds of users with interactive course content and progress tracking",
      "Developed project management tools and digital twin platforms for municipal clients",
      "Delivered multiple freelance projects from concept to production deployment",
    ],
    techs: ["React", "Next.js", "Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    company: "Magic Hub Romania",
    role: "Full Stack Developer",
    period: "Apr 2024 — Jul 2024",
    description: [
      "Maintained and improved legacy websites, ensuring stability and performance",
      "Implemented new features and UI improvements based on client requirements",
      "Managed internship programs, mentoring junior developers in web development fundamentals",
    ],
    techs: ["PHP", "HTML", "CSS", "JavaScript"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
        >
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-sans">
            Experience
          </span>
          <h2 className="font-serif font-bold text-text-primary text-3xl md:text-4xl lg:text-5xl mt-4">
            Where I&apos;ve Worked
          </h2>
          <div className="w-12 h-[1px] bg-text-muted mt-6" />
        </motion.div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[1px] bg-border-card" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                variants={fadeUp}
                className="relative pl-8 md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-2 w-2 h-2 rounded-full bg-text-muted -translate-x-[3.5px]" />

                <span className="text-text-muted text-xs tracking-[0.15em] uppercase font-sans">
                  {exp.period}
                </span>
                <h3 className="font-serif text-text-primary text-2xl md:text-3xl font-bold mt-2">
                  {exp.company}
                </h3>
                <p className="text-text-secondary text-sm mt-1 font-sans">
                  {exp.role}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      className="text-text-secondary text-sm leading-relaxed font-sans flex items-start gap-3"
                    >
                      <span className="text-text-muted mt-1.5 text-[6px]">
                        &#9654;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-text-secondary bg-card-dark px-3 py-1 rounded-full border border-border-card"
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
