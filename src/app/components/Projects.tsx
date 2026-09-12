"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

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
            <motion.div
              key={project.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              className="group"
            >
              <Link
                href={`/project/${project.slug}`}
                className="block bg-card-dark border border-border-card rounded-lg overflow-hidden hover:border-text-muted/40 transition-colors duration-300"
              >
                {/* Cover image */}
                <div className="w-full aspect-video bg-card-darker relative overflow-hidden">
                  {project.isMobile && project.images.length >= 3 ? (
                    /* Mobile app: show 3 phone screens side by side */
                    <div className="absolute inset-0 flex items-center justify-center gap-3 px-8 py-4 group-hover:scale-105 transition-transform duration-500">
                      <div className="relative h-[90%] aspect-[9/19] rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl -rotate-6 translate-y-2">
                        <Image
                          src={project.images[1]}
                          alt={`${project.title} screen 1`}
                          fill
                          className="object-cover"
                          sizes="180px"
                          quality={70}
                        />
                      </div>
                      <div className="relative h-[95%] aspect-[9/19] rounded-xl overflow-hidden border-2 border-white/15 shadow-2xl z-10">
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} screen 2`}
                          fill
                          className="object-cover"
                          sizes="200px"
                          quality={75}
                        />
                      </div>
                      <div className="relative h-[90%] aspect-[9/19] rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-6 translate-y-2">
                        <Image
                          src={project.images[2]}
                          alt={`${project.title} screen 3`}
                          fill
                          className="object-cover"
                          sizes="180px"
                          quality={70}
                        />
                      </div>
                    </div>
                  ) : project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card-darker via-card-dark to-border-card">
                      <span className="text-text-muted/30 font-serif text-2xl md:text-3xl font-bold">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-text-primary text-xl font-bold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techs.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-text-muted bg-card-darker px-3 py-1 rounded-full border border-border-card"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 5 && (
                      <span className="text-xs text-text-muted bg-card-darker px-3 py-1 rounded-full border border-border-card">
                        +{project.techs.length - 5}
                      </span>
                    )}
                  </div>
                  <div className="mt-5 text-sm text-text-secondary group-hover:text-white transition-colors flex items-center gap-2">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
