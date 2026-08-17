"use client";

import {useState} from "react";

import {Icon} from "@/components/icons";

import {Cancel01Icon, Menu01Icon} from "@/components/icons/icons";

import {personal} from "@/data/personal";

const links = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/[0.06] bg-[#07090c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3"
        >
          <span className="grid size-8 place-items-center rounded-full border border-white/10 font-mono text-[10px] font-medium transition group-hover:border-[#b7ff5a] group-hover:text-[#b7ff5a]">
            VS
          </span>
          <span className="hidden font-mono text-xs tracking-[0.15em] text-zinc-400 sm:block">
            VEDANT / BUILDING
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resume}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:border-[#b7ff5a]/50 hover:text-[#b7ff5a]"
          >
            Resume ↗
          </a>
        </nav>

        <button
          type="button"
          aria-label={
            open
              ? "Close navigation"
              : "Open navigation"
          }
          onClick={() => setOpen(!open)}
          className="text-zinc-300 md:hidden"
        >
          <Icon
            icon={
              open
                ? Cancel01Icon
                : Menu01Icon
            }
            size={21}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#07090c] px-5 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/[0.06] py-4 text-lg text-zinc-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resume}
            className="block py-4 text-[#b7ff5a]"
          >
            Download resume ↗
          </a>
        </div>
      )}
    </header>
  );
}