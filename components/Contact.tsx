"use client";

import { motion } from "motion/react";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#111317] py-24 sm:py-36">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="window-panel max-w-6xl rounded-[2rem] border border-white/8 p-8 sm:p-12 lg:p-16"
        >
          <div className="window-dots mb-10" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Contact</p>
          <h2 className="mt-6 text-[15vw] font-extralight leading-[0.9] tracking-[-0.075em] sm:text-7xl lg:text-[7.5rem]">
            Let&apos;s build
            <br />
            <span className="gradient-text inline-block pr-3">together.</span>
          </h2>

          <p className="mt-10 max-w-2xl text-base font-light leading-8 text-white/54 sm:text-lg">
            For investor relationships, company introductions and opportunities across Israel&apos;s technology ecosystem, contact Value Israel directly.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <a
              href="mailto:rstern@valueisrael.com"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-blue-500/40 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-blue-400">Ron Stern</p>
              <div className="mt-3 flex items-center justify-between gap-4 text-lg text-white/84">
                <span>rstern@valueisrael.com</span>
                <span className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRightIcon /></span>
              </div>
            </a>

            <a
              href="mailto:olowte@valueisrael.com"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-blue-500/40 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-blue-400">Oren Lowte</p>
              <div className="mt-3 flex items-center justify-between gap-4 text-lg text-white/84">
                <span>olowte@valueisrael.com</span>
                <span className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRightIcon /></span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
