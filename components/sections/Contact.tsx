"use client";

import {motion} from "framer-motion";

import {Github01Icon, Linkedin01Icon, Mail01Icon, Location01Icon} from "@/components/icons/icons";
import {Icon} from "@/components/icons";
import {personal} from "@/data/personal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(183,255,90,.10),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-32 text-center lg:px-8">
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
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#b7ff5a]">
            04 / Contact
          </div>

          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-6xl font-semibold tracking-[-0.06em] sm:text-8xl">
            Let's build{" "}
            <span className="text-zinc-600">
              something.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-zinc-500">
            Have a problem worth solving, a project worth
            building, or an opportunity worth discussing?
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#b7ff5a] px-7 py-3.5 font-medium text-[#071006] transition hover:bg-[#d0ff8b]"
          >
            Start a conversation
            <Icon
              icon={Mail01Icon}
              size={17}
            />
          </a>

          <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-zinc-500">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Icon
                icon={Github01Icon}
                size={16}
              />
              GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Icon
                icon={Linkedin01Icon}
                size={16}
              />
              LinkedIn
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Icon
                icon={Mail01Icon}
                size={16}
              />
              {personal.email}
            </a>

            <span className="inline-flex items-center gap-2">
              <Icon
                icon={Location01Icon}
                size={16}
              />
              {personal.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}