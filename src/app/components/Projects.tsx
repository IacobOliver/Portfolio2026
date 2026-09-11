"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Management",
    description:
      "A comprehensive project management platform for organizing tasks, tracking progress, and collaborating in teams. Features real-time updates and intuitive dashboards.",
    techs: [
      "Java",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Spring Boot",
      "Docker",
    ],
    link: "https://pm.cleancode.ro",
  },
  {
    title: "Primaria Sector 2",
    description:
      "Digital twin platform for Bucharest's Sector 2 municipality, enabling urban decarbonization analysis and environmental monitoring through interactive data visualizations.",
    techs: [
      "Java",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Spring Boot",
      "Docker",
    ],
    link: "https://decarbonare.cleancodeit.com",
  },
  {
    title: "Clean Code Academy",
    description:
      "An e-learning platform offering structured programming courses with progress tracking, quizzes, and hands-on coding challenges for aspiring developers.",
    techs: [
      "Java",
      "JavaScript",
      "React",
      "PostgreSQL",
      "Spring Boot",
      "AWS",
    ],
    link: "https://quest.cleancode.ro",
  },
  {
    title: "Magic Tattoo",
    description:
      "A sleek, modern website for a tattoo studio showcasing artist portfolios, gallery collections, and an integrated booking system for appointments.",
    techs: ["JavaScript", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
    link: "https://magictattoo.ink",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
        >
          <span className="text-text-muted text-xs tracking-[0.3em] uppercase font-sans">
            Work
          </span>
          <h2 className="font-serif font-bold text-text-primary text-3xl md:text-4xl lg:text-5xl mt-4">
            Selected Projects
          </h2>
          <div className="w-12 h-[1px] bg-text-muted mt-6" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              className="group block bg-card-dark border border-border-card rounded-lg overflow-hidden hover:border-text-muted/40 transition-colors duration-300"
            >
              {/* Image placeholder */}
              <div className="w-full aspect-video bg-gradient-to-br from-card-darker via-card-dark to-border-card relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-text-muted/30 font-serif text-2xl md:text-3xl font-bold">
                    {project.title}
                  </span>
                </div>
                {/* Subtle grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-text-primary text-xl font-bold group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-text-muted bg-card-darker px-3 py-1 rounded-full border border-border-card"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 text-sm text-text-secondary group-hover:text-white transition-colors flex items-center gap-2">
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
