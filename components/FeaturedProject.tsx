"use client";

import {motion} from "framer-motion";

import {ArrowUpRight01Icon, Github01Icon} from "@/components/icons/icons";
import {Icon} from "@/components/icons";
import type {Project} from "@/data/projects";

type FeaturedProjectProps = {
  project: Project;
};

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.7,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-[#b7ff5a]/15 bg-[#0b0f14]"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-[#b7ff5a]/[0.07] blur-[100px] transition duration-700 group-hover:bg-[#b7ff5a]/[0.12]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#b7ff5a]/[0.025] to-transparent" />
      <div className="relative p-6 sm:p-8 lg:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-[#b7ff5a]/25 bg-[#b7ff5a]/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#b7ff5a]">
              Featured Project
            </span>

            <span className="font-mono text-xs text-zinc-600">
              /{project.number}
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            {project.status}
          </span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#b7ff5a]">
              {project.category}
            </div>

            <h3 className="mt-4 text-6xl font-semibold tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              {project.name}
            </h3>

            <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
              {project.summary}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex items-center gap-3 rounded-full bg-[#b7ff5a] px-5 py-3 text-sm font-medium text-[#071006] transition hover:bg-[#d0ff8b]"
                >
                  Explore GitBud
                  <Icon
                    icon={ArrowUpRight01Icon}
                    size={16}
                    className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:text-white"
              >
                <Icon
                  icon={Github01Icon}
                  size={16}
                />
                View source
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#07090c] p-6">
            <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:32px_32px]" />
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(183,255,90,0)",
                  "0 0 35px rgba(183,255,90,.12)",
                  "0 0 0 rgba(183,255,90,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 z-10 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#b7ff5a]/40 bg-[#10170d]"
            >
              <div className="text-center">
                <div className="font-mono text-lg font-semibold text-[#b7ff5a]">
                  GIT
                </div>

                <div className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">
                  BUD
                </div>
              </div>
            </motion.div>

            <div className="absolute left-[25%] top-1/2 h-px w-[25%] bg-gradient-to-r from-transparent via-[#b7ff5a]/30 to-[#b7ff5a]/50" />
            <div className="absolute left-1/2 top-[25%] h-[25%] w-px bg-gradient-to-b from-transparent via-[#b7ff5a]/30 to-[#b7ff5a]/50" />
            <div className="absolute left-1/2 top-1/2 h-px w-[25%] bg-gradient-to-r from-[#b7ff5a]/50 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[25%] w-px bg-gradient-to-b from-[#b7ff5a]/50 to-transparent" />
            <SystemNode
              className="left-5 top-1/2 -translate-y-1/2"
              title="Repository"
              detail="GitHub"
            />

            <SystemNode
              className="left-1/2 top-5 -translate-x-1/2"
              title="Analyze"
              detail="FastAPI"
            />

            <SystemNode
              className="right-5 top-1/2 -translate-y-1/2"
              title="Explain"
              detail="LLaMA-3"
            />

            <SystemNode
              className="bottom-5 left-1/2 -translate-x-1/2"
              title="Store"
              detail="MongoDB"
            />

            <div className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-700">
              repository intelligence layer
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SystemNode({
  className,
  title,
  detail,
}: {
  className: string;
  title: string;
  detail: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-10 w-28 rounded-xl border border-white/[0.08] bg-[#0d1218] p-3 ${className}`}
    >
      <div className="text-xs font-medium text-zinc-300">
        {title}
      </div>

      <div className="mt-1 font-mono text-[9px] text-zinc-600">
        {detail}
      </div>
    </motion.div>
  );
}