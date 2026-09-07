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
    <section id="contact" className="relative overflow-hidden bg-[#213650] py-24 text-white sm:py-32">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/8 blur-3xl" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-12 lg:p-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">Contact</p>
          <h2 className="mt-6 text-[clamp(4rem,9vw,7.5rem)] font-extralight leading-[0.9] tracking-[-0.075em] text-white">
            Let&apos;s build
            <br />
            <span className="gradient-text inline-block pr-3">together.</span>
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <a
              href="mailto:rstern@valueisrael.com"
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-cyan-300/35 hover:bg-white/[0.08]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Ron Stern</p>
              <div className="mt-3 flex items-center justify-between gap-4 text-lg text-white/88">
                <span>rstern@valueisrael.com</span>
                <span className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRightIcon /></span>
              </div>
            </a>

            <a
              href="mailto:olowte@valueisrael.com"
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:border-cyan-300/35 hover:bg-white/[0.08]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Oren Lowte</p>
              <div className="mt-3 flex items-center justify-between gap-4 text-lg text-white/88">
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
