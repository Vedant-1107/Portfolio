"use client";

import {motion} from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-white/[0.06] bg-[#090c10]"
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
          className="font-mono text-xs uppercase tracking-[0.25em] text-[#b7ff5a]"
        >
          02 / About the builder
        </motion.div>

        <div className="mt-8 grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
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
          >
            <p className="text-3xl leading-tight tracking-[-0.03em] text-zinc-200 sm:text-5xl">
              I'm most interested in the space between{" "}
              <span className="text-[#b7ff5a]">
                an idea
              </span>{" "}
              and the moment it finally works.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500">
              My work sits across AI, computer vision,
              backend systems and the web. I enjoy the
              engineering underneath the interface:
              APIs, data, models, detection pipelines,
              authentication and the decisions that make
              a product hold together.
            </p>
          </motion.div>

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
            transition={{
              delay: 0.1,
            }}
            className="grid grid-cols-2 gap-3 self-start"
          >
            {[
              ["03", "featured builds"],
              ["AI", "core direction"],
              ["Pune", "based in India"],
              ["DevOS", "currently building"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/[0.08] p-5"
              >
                <div className="text-3xl font-semibold">
                  {value}
                </div>

                <div className="mt-2 text-xs text-zinc-500">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}