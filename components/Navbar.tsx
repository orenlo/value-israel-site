"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { label: "Advisory", id: "advisory" },
  { label: "How We Work", id: "process" },
  { label: "Company Fit", id: "company-fit" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 6l12 12M18 6L6 18" />
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
    const y = element.getBoundingClientRect().top + window.scrollY - 48;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-[#111318]/92 shadow-lg shadow-black/10 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[48px] w-[min(100%-1.5rem,1640px)] items-center justify-between px-1 sm:px-3 lg:px-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="origin-left scale-[0.86] cursor-pointer"
        >
          <Logo className="h-7 w-8" withWordmark />
        </button>

        <nav className="hidden items-center gap-4 xl:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer text-[6px] font-semibold uppercase tracking-[0.20em] text-white/62 transition hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-full border border-white/10 bg-black/10 p-1.5 text-white xl:hidden"
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
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed right-0 top-0 z-50 flex h-dvh w-[84%] max-w-sm flex-col bg-[#17191d] p-7 shadow-2xl xl:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <div className="origin-left scale-[0.88]">
                  <Logo className="h-7 w-8" withWordmark />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-full border border-white/10 p-2"
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="mt-16 flex flex-col gap-6">
                {links.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="cursor-pointer text-left text-2xl font-light tracking-tight text-white"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index + 0.12 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
