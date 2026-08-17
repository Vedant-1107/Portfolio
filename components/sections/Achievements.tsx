"use client";

import {motion} from "framer-motion";

import {ArrowUpRight01Icon} from "@/components/icons/icons";
import {Icon} from "@/components/icons";

import {achievements} from "@/data/achievements";

export default function Achievements() {
  return (
    <section className="border-t border-white/[0.06]">
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
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#b7ff5a]">
              06 / Learning
            </div>

            <h2 className="mt-4 max-w-md text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
              Curiosity{" "}
              <span className="text-zinc-600">
                outside the classroom.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
              A few of the things I've deliberately spent
              time learning beyond my formal education.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/[0.08]">
            {achievements.map(
              (achievement, index) => (
                <motion.div
                  key={achievement.title}
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
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group flex items-center justify-between gap-6 border-b border-white/[0.07] bg-[#0b0f14] p-5 transition hover:bg-[#10151c] last:border-b-0 sm:p-6"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs text-zinc-700">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="text-sm font-medium text-zinc-200 sm:text-base">
                        {achievement.title}
                      </h3>

                      <p className="mt-1 text-xs text-zinc-600">
                        {achievement.organization}
                      </p>
                    </div>
                  </div>

                  <Icon
                    icon={ArrowUpRight01Icon}
                    size={17}
                    className="shrink-0 text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#b7ff5a]"
                  />
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}