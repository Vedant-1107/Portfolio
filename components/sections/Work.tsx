"use client";

import {motion} from "framer-motion";

import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";

import {projects} from "@/data/projects";

export default function Work() {
  const featuredProject = projects.find(
    (project) => project.featured,
  );

  const otherProjects = projects.filter(
    (project) => !project.featured,
  );

  return (
    <section
      id="work"
      className="mx-auto max-w-7xl px-5 py-28 lg:px-8"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mb-12 grid gap-5 lg:grid-cols-[1fr_340px]"
      >
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#b7ff5a]">
            01 / Selected work
          </div>

          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
            Things I've{" "}
            <span className="text-zinc-600">
              made.
            </span>
          </h2>
        </div>

        <p className="max-w-sm self-end text-sm leading-6 text-zinc-500">
          Not a list of technologies. A collection of
          problems I've tried to solve with them.
        </p>
      </motion.div>

      {featuredProject && (
        <div className="mb-20">
          <FeaturedProject
            project={featuredProject}
          />
        </div>
      )}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mb-7 flex items-center gap-4"
      >
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
          Other builds
        </div>
        
        <div className="h-px flex-1 bg-white/[0.06]" />
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, index) => ( 
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}