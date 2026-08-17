"use client";

import {motion} from "framer-motion";

import {ArrowDown01Icon, ArrowUpRight01Icon} from "@/components/icons/icons";
import {Icon} from "@/components/icons";
import {personal} from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="grid-background absolute inset-0" />
      <div className="absolute right-[-10%] top-[15%] size-[500px] rounded-full bg-[#b7ff5a]/[0.045] blur-[120px]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-5 py-24 lg:grid-cols-[1fr_340px] lg:px-8">
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500"
          >
            <span className="size-2 rounded-full bg-[#b7ff5a] shadow-[0_0_18px_#b7ff5a]" />
            {personal.status} · {personal.location}
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="max-w-5xl text-balance text-[clamp(3.6rem,8.5vw,8rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
          >
            I build{" "}
            <span className="text-[#b7ff5a]">
              intelligent
            </span>{" "}
            systems that become real products
            <span className="cursor-blink text-[#b7ff5a]">
              _
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
            }}
            className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            {personal.description}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.26,
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-[#b7ff5a] px-6 py-3 font-medium text-[#071006] transition hover:bg-[#d0ff8b]"
            >
              Explore the work
              <Icon
                icon={ArrowDown01Icon}
                size={17}
              />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-zinc-200 transition hover:border-white/25"
            >
              Let's build something
              <Icon
                icon={ArrowUpRight01Icon}
                size={17}
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="self-end rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 font-mono text-xs text-zinc-500 lg:mb-8"
        >
          <div className="mb-5 flex items-center gap-2">
            <span className="size-2 rounded-full bg-red-400/70" />
            <span className="size-2 rounded-full bg-yellow-400/70" />
            <span className="size-2 rounded-full bg-green-400/70" />
            <span className="ml-auto">
              vedant@build:~
            </span>
          </div>

          <div className="space-y-2 leading-6">
            <p>
              <span className="text-[#b7ff5a]">
                $
              </span>{" "}
              whoami
            </p>
            <p className="pl-4 text-zinc-300">
              computer-engineering-student
            </p>
            <p>
              <span className="text-[#b7ff5a]">
                $
              </span>{" "}
              focus
            </p>
            <p className="pl-4 text-zinc-300">
              AI / CV / full-stack
            </p>
            <p>
              <span className="text-[#b7ff5a]">
                $
              </span>{" "}
              currently
            </p>
            <p className="pl-4 text-zinc-300">
              building DevOS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}