"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function ProjectGallery({ project }: { project: (typeof projects)[number] }) {
  const [current, setCurrent] = useState(0);
  const images = project.images;

  if (!images || images.length === 0) {
    return (
      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="w-full aspect-[16/9] bg-gradient-to-br from-card-darker via-card-dark to-border-card rounded-lg border border-border-card overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-text-muted/20 font-serif text-3xl md:text-5xl font-bold">
                {project.title}
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  // Mobile app: horizontal scrollable phone screens
  if (project.isMobile) {
    return (
      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 h-[500px] md:h-[600px] aspect-[9/19] rounded-2xl overflow-hidden border-2 border-white/10 bg-card-darker shadow-2xl snap-center"
              >
                <Image
                  src={img}
                  alt={`${project.title} screen ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="280px"
                  quality={80}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  // Desktop/web: standard carousel
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        {/* Main image */}
        <div className="w-full aspect-[16/9] bg-card-darker rounded-lg border border-border-card overflow-hidden relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current]}
                alt={`${project.title} screenshot ${current + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1152px"
                quality={80}
                priority={current === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white/80 text-xs px-3 py-1.5 rounded-full border border-white/10">
              {current + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  i === current
                    ? "border-white/50 opacity-100"
                    : "border-transparent opacity-40 hover:opacity-70"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  quality={50}
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-text-primary text-4xl font-bold">
            Project Not Found
          </h1>
          <Link
            href="/#work"
            className="text-text-secondary hover:text-white mt-4 inline-block transition-colors"
          >
            &larr; Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full z-40 border-b border-border-subtle backdrop-blur-md bg-bg/80">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-text-primary text-lg font-bold hover:text-white transition-colors"
          >
            Oliver Iacob
          </Link>
          <Link
            href="/#work"
            className="text-text-secondary text-sm hover:text-white transition-colors flex items-center gap-2"
          >
            <span>&larr;</span> All Projects
          </Link>
        </div>
      </nav>

      {/* Hero area */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-text-muted text-xs tracking-[0.2em] uppercase font-sans">
                {project.role}
              </span>
              <span className="text-text-muted/30">·</span>
              <span className="text-text-muted text-xs tracking-[0.2em] uppercase font-sans">
                {project.year}
              </span>
            </div>

            <h1 className="font-serif font-bold text-text-primary text-4xl md:text-5xl lg:text-7xl tracking-tight">
              {project.title}
            </h1>

            <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-3xl leading-relaxed font-sans">
              {project.description}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-text-primary/30 text-text-primary text-sm tracking-wide hover:border-white hover:text-white transition-all duration-300"
            >
              {project.linkLabel} &rarr;
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-text-secondary text-sm tracking-wide hover:text-white transition-colors duration-300 flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Source Code
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Images */}
      <ProjectGallery project={project} />

      {/* Details */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          {/* Left — description & highlights */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              variants={fadeUp}
            >
              <h2 className="font-serif text-text-primary text-2xl md:text-3xl font-bold">
                About This Project
              </h2>
              <div className="w-12 h-[1px] bg-text-muted mt-4" />
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-sans mt-6">
                {project.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              variants={fadeUp}
              className="mt-12"
            >
              <h3 className="font-serif text-text-primary text-xl font-bold">
                Key Highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="text-text-secondary text-sm leading-relaxed font-sans flex items-start gap-3"
                  >
                    <span className="text-text-muted mt-1.5 text-[6px]">
                      &#9654;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right — meta info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
          >
            <div className="bg-card-dark border border-border-card rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <h4 className="text-text-muted text-xs tracking-[0.2em] uppercase font-sans mb-2">
                  Role
                </h4>
                <p className="text-text-primary text-sm font-sans">
                  {project.role}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-text-muted text-xs tracking-[0.2em] uppercase font-sans mb-2">
                  Year
                </h4>
                <p className="text-text-primary text-sm font-sans">
                  {project.year}
                </p>
              </div>

              <div>
                <h4 className="text-text-muted text-xs tracking-[0.2em] uppercase font-sans mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-text-secondary bg-card-darker px-3 py-1 rounded-full border border-border-card"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back link */}
      <section className="px-6 md:px-12 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto border-t border-border-subtle pt-8">
          <Link
            href="/#work"
            className="text-text-secondary hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            <span>&larr;</span> Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
