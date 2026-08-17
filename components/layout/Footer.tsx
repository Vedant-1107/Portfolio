"use client";

import {ArrowUp01Icon} from "@/components/icons/icons";
import {Icon} from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>
          © {new Date().getFullYear()} Vedant Salunkhe
        </span>

        <span>
          Designed & built from scratch.
        </span>

        <a
          href="#top"
          className="inline-flex items-center gap-2 transition hover:text-zinc-300"
        >
          Back to top
          <Icon
            icon={ArrowUp01Icon}
            size={14}
          />
        </a>
      </div>
    </footer>
  );
}