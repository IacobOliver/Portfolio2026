"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Devista Consulting",
    role: "Full Stack Developer",
    period: "Jul 2025 — Present",
    location: "Bucharest, Romania",
    description: [
      "Built a backoffice dashboard for client management — client/consultant overviews, project-specific data, and interactive charts for business insights",
      "Delivered key features for CampionPlus insurance app: integrated a new buy-travel-policies flow and revamped the buy-RCA flow via 24Broker API",
      "Created a WhatsApp chatbot (via Make.com) for customer support with role-aware and context-aware responses",
      "Designed a data lake architecture pulling weekly data from 24Broker with automated cleaning and PowerBI-ready output",
      "Managed CI/CD deployments across development, staging, and production environments",
    ],
    techs: ["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "Ionic", "Capacitor", "Docker", "AWS"],
  },
  {
    company: "CleanCodeDevelopment",
    role: "Freelance Full Stack Developer",
    period: "Dec 2022 — Jul 2025",
    location: "Bucharest, Romania",
    description: [
      "Led development of an EU-funded digital twin platform for Bucharest Sector 2 with PostGIS spatial data and real-time CO2 monitoring",
      "Architected a project management SaaS following DDD principles — role-based access, time tracking, automated contract generation, budget planning",
      "Built a full-stack e-learning platform (CleanCodeQuest) with CodeWars API integration, gamified leaderboards, and admin panel",
      "Mentored junior developers and served as team lead across multiple concurrent projects",
    ],
    techs: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "PostGIS", "Tailwind", "Docker", "AWS"],
  },
  {
    company: "Magic Hub Romania",
    role: "Full Stack Developer",
    period: "Apr 2024 — Jul 2024",
    location: "Bucharest, Romania",
    description: [
      "Developed a tattoo studio website with an advanced price configurator based on difficulty and options",
      "Maintained and modernized legacy web applications built with PHP, HTML, and CSS",
      "Managed internship program and implemented new features from client/stakeholder requests",
    ],
    techs: ["PHP", "Laravel", "JavaScript", "CSS", "Tailwind", "HTML"],
  },
  {
    company: "Codecool Talent Hub",
    role: "Full Stack Developer (Training)",
    period: "Dec 2022 — Mar 2024",
    location: "Bucharest, Romania",
    description: [
      "Completed intensive full-stack developer program simulating real job environments with mentorship, pair programming, and code reviews",
      "Built full-stack applications including a restaurant discovery platform and an anime tracking platform",
    ],
    techs: ["Java", "Spring Boot", "JavaScript", "React", "PostgreSQL"],
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

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="text-text-muted text-xs tracking-[0.15em] uppercase font-sans">
                    {exp.period}
                  </span>
                  <span className="text-text-muted text-xs font-sans hidden sm:inline">
                    · {exp.location}
                  </span>
                </div>
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
