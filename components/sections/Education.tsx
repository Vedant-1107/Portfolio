"use client";

import {motion} from "framer-motion";

import {education} from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/[0.06] bg-[#090c10]"
    >
      <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
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
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#b7ff5a]">
              05 / Education
            </div>

            <h2 className="mt-4 max-w-md text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Where I{" "}
              <span className="text-zinc-600">
                learned.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
              The formal part of the journey — alongside the
              much messier education that happens while
              building things.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/[0.08]" />
            <div className="space-y-10">
              {education.map((item, index) => (
                <motion.div
                  key={item.institution}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative grid grid-cols-[32px_1fr] gap-5"
                >
                  <div className="relative flex justify-center">
                    <div className="mt-1.5 size-[11px] rounded-full border border-[#b7ff5a]/60 bg-[#090c10] shadow-[0_0_0_4px_#090c10]" />
                  </div>

                  <div className="border-b border-white/[0.07] pb-10">
                    <div className="mb-3 font-mono text-xs tracking-[0.12em] text-[#b7ff5a]">
                      {item.period}
                    </div>

                    <h3 className="text-xl font-medium leading-7 text-zinc-200 sm:text-2xl">
                      {item.institution}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      {item.qualification}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}