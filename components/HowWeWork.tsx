"use client";

import { motion } from "motion/react";
import { useState } from "react";

const steps = [
  {
    title: "Access",
    text: "Trust-based relationships built over more than 20 years in the Israeli market, spanning 70+ leading VCs and relationships with 100+ company founders.",
  },
  {
    title: "Filter",
    text: "Only genuinely relevant companies are presented after screening against each investor's mandate—no unnecessary outreach or generic elevator pitches.",
  },
  {
    title: "Connect",
    text: "Once there is genuine interest, we approach the company and create a focused, trusted introduction between the management team and the investor.",
  },
  {
    title: "Partner",
    text: "We stay engaged from active deal sourcing and negotiation through closing and post-investment support, helping both sides maintain alignment, momentum, and long-term value creation.",
  },
];

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HowWeWork() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="process" className="relative overflow-hidden bg-[#24405F] py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(103,199,247,0.14),transparent_32%)]" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">Our Approach</p>
          <h2 className="mt-5 text-[clamp(2.5rem,5vw,4rem)] font-extralight tracking-[-0.045em] text-white">
            A selective and disciplined process.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-light leading-8 text-white/62 sm:text-lg">
            We protect the reputation and time of both investors and founders by keeping every process discreet, selective, and focused from the outset.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {steps.map((step, index) => {
            const selected = active === index;
            return (
              <div key={step.title} className="contents">
                <motion.button
                  type="button"
                  onClick={() => setActive(index)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative min-h-[245px] rounded-[1.65rem] border p-6 text-left transition-all duration-300 sm:min-h-[260px] sm:p-7 ${
                    selected
                      ? "border-cyan-300/50 bg-white/[0.11] shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
                      : "border-white/10 bg-white/[0.045] hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  <span
                    className={`absolute right-6 top-6 h-2 w-2 rounded-full transition-all duration-300 ${
                      selected
                        ? "scale-110 bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)]"
                        : "bg-white/16"
                    }`}
                    aria-hidden="true"
                  />

                  <h3 className="pr-8 text-[1.55rem] font-light tracking-[-0.035em] text-white">
                    {step.title}
                  </h3>
                  <p className={`mt-7 text-[13px] font-light leading-6 sm:text-sm sm:leading-7 ${selected ? "text-white/74" : "text-white/58"}`}>
                    {step.text}
                  </p>
                </motion.button>

                {index < steps.length - 1 && (
                  <div className="hidden w-8 items-center justify-center text-white/28 lg:flex" aria-hidden="true">
                    <ArrowRightIcon />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
