"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

type NavItem = {
  label: string;
  id: string;
  children?: { label: string; id: string }[];
};

const links: NavItem[] = [
  {
    label: "Who We Are",
    id: "about",
    children: [
      { label: "About", id: "about" },
      { label: "Partners", id: "partners" },
      { label: "Team", id: "team" },
    ],
  },
  {
    label: "How We Work",
    id: "process",
    children: [
      { label: "Our Approach", id: "process" },
      { label: "Investment Focus", id: "company-fit" },
    ],
  },
  {
    label: "Connect",
    id: "contact",
  },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-blue-400/10 bg-[#173A5E]/96 shadow-lg shadow-black/20 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[46px] w-[min(100%-1.5rem,1640px)] items-center justify-between px-1 sm:px-3 lg:px-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="cursor-pointer"
        >
          <Logo className="h-9 w-10" withWordmark />
        </button>

        <nav className="hidden items-center gap-11 xl:flex">
          {links.map((link) => (
            <div key={link.label} className="group/nav relative">
              <button
                onClick={() => scrollToSection(link.id)}
                className="flex cursor-pointer items-center gap-1.5 py-3 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/62 transition hover:text-cyan-200"
              >
                {link.label}
                {link.children && <ChevronIcon />}
              </button>

              {link.children && (
                <div className="pointer-events-none absolute right-0 top-[36px] min-w-[168px] translate-y-2 rounded-xl border border-blue-400/12 bg-[#173A5E]/98 p-1.5 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                  {link.children.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => scrollToSection(child.id)}
                      className="block w-full cursor-pointer rounded-lg px-3 py-2 text-left text-[9px] font-medium uppercase tracking-[0.12em] text-white/55 transition hover:bg-blue-500/10 hover:text-cyan-200"
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-full border border-blue-400/15 bg-[#173A5E]/72 p-1.5 text-white xl:hidden"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-[#102A45]/82 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 z-50 flex h-dvh w-[84%] max-w-sm flex-col overflow-y-auto bg-[#173A5E] p-7 shadow-2xl xl:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo className="h-9 w-10" withWordmark />
                <button
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-full border border-blue-400/15 p-2"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="mt-12 flex flex-col gap-8">
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index + 0.12 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="cursor-pointer text-left text-xl font-light tracking-tight text-white"
                    >
                      {link.label}
                    </button>

                    {link.children && (
                      <div className="mt-3 flex flex-col gap-2 border-l border-blue-400/15 pl-4">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => scrollToSection(child.id)}
                            className="cursor-pointer text-left text-[10px] uppercase tracking-[0.14em] text-white/42 transition hover:text-cyan-200"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
