"use client";

import {motion} from "framer-motion";

import {skillGroups} from "@/data/skills";

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
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
        className="mb-12"
      >
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#b7ff5a]">
          03 / Toolkit
        </div>

        <h2 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
          Tools are useful.{" "}
          <span className="text-zinc-600">
            Knowing what to build with them matters more.
          </span>
        </h2>
      </motion.div>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
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
            transition={{
              delay: index * 0.05,
            }}
            className="bg-[#0b0f14] p-7 sm:p-9"
          >
            <div className="mb-7 flex items-start justify-between gap-5">
              <div>
                <h3 className="text-lg font-medium">
                  {group.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
                  {group.description}
                </p>
              </div>

              <span className="font-mono text-xs text-zinc-600">
                0{index + 1}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/[0.045] px-3 py-2 text-sm text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}