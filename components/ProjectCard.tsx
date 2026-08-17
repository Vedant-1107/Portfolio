"use client";

import {motion} from "framer-motion";

import {ArrowUpRight01Icon, Github01Icon} from "@/components/icons/icons";
import {Icon} from "@/components/icons";
import type {Project} from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b0f14] p-6 sm:p-8 lg:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(183,255,90,.08),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative grid gap-8 lg:grid-cols-[80px_1fr_270px]">
        <div className="font-mono text-sm text-zinc-600">
          /{project.number}
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#b7ff5a]">
              {project.category}
            </span>
            {project.status === "building" && (
              <span className="rounded-full border border-[#b7ff5a]/20 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#b7ff5a]">
                Building
              </span>
            )}
          </div>

          <h3 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {project.name}
          </h3>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
            {project.summary}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
            {project.description}
          </p>
        </div>

        <div className="lg:border-l lg:border-white/[0.08] lg:pl-7">
          <div className="mb-4 text-xs uppercase tracking-[0.18em] text-zinc-600">
            Built with
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-5 text-sm">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#b7ff5a]"
              >
                Live
                <Icon
                  icon={ArrowUpRight01Icon}
                  size={15}
                />
              </a>
            )}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-white"
              >
                <Icon
                  icon={Github01Icon}
                  size={16}
                />
                GitHub
              </a>
            ) : project.status === "building" ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-[#b7ff5a]/15 bg-[#b7ff5a]/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#b7ff5a]">
                <span className="size-1.5 rounded-full bg-[#b7ff5a] animate-pulse" />
                Coming Soon
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}