"use client";

import { motion } from "motion/react";
import { useState } from "react";

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

const steps = [
  {
    id: "access",
    title: "Access",
    text: "Trust-based relationships built over more than 20 years in the Israeli market, spanning 70+ leading VCs and relationships with 100+ company founders.",
  },
  {
    id: "filter",
    title: "Filter",
    text: "Only genuinely relevant companies are presented after screening against each investor's mandate—no unnecessary outreach or generic elevator pitches.",
  },
  {
    id: "connect",
    title: "Connect",
    text: "Once there is genuine interest, we approach the founder and create a focused, trusted introduction between the company and the investor.",
  },
  {
    id: "partner",
    title: "Partner",
    text: "We stay engaged from active deal discussions and negotiation through closing and post-investment support, helping both sides maintain alignment, momentum, and long-term value creation.",
  },
];

export default function HowWeWork() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section id="process" className="relative overflow-hidden bg-[#33383E] py-20 sm:py-24">
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-blue-400 sm:text-xs">
              Our Approach
            </p>
            <h2 className="mt-4 text-4xl font-extralight tracking-[-0.045em] sm:text-5xl">
              Discreet and focused.
              <br />
              Built around relevance.
            </h2>
          </div>

          <p className="max-w-2xl text-sm font-light leading-7 text-white/52 sm:text-base sm:leading-8">
            We protect the reputation and time of both investors and founders by keeping every process discreet, selective, and focused from the outset.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
          {steps.map((step, index) => {
            const selected = selectedStep === index;

            return (
              <div key={step.id} className="flex min-w-0 flex-1 items-center">
                <motion.button
                  id={`process-${step.id}`}
                  type="button"
                  onClick={() => setSelectedStep(index)}
                  aria-pressed={selected}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative min-h-[270px] w-full cursor-pointer rounded-[1.45rem] border p-6 text-left transition-[border-color,background-color,box-shadow,transform] duration-400 sm:min-h-[285px] sm:p-7 ${
                    selected
                      ? "border-blue-400/65 bg-[linear-gradient(145deg,rgba(59,130,246,0.13),rgba(255,255,255,0.03))] shadow-[0_18px_50px_rgba(37,99,235,0.12),inset_0_1px_0_rgba(255,255,255,0.07)]"
                      : "window-panel border-white/8 hover:-translate-y-1 hover:border-blue-500/28"
                  }`}
                >
                  <span
                    className={`absolute right-6 top-6 h-2 w-2 rounded-full transition-all duration-300 ${
                      selected
                        ? "scale-110 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.85)]"
                        : "bg-white/14"
                    }`}
                    aria-hidden="true"
                  />

                  <h3 className={`pr-8 text-[1.75rem] font-light tracking-[-0.035em] transition-colors ${selected ? "text-white" : "text-white/88"}`}>
                    {step.title}
                  </h3>

                  <p className={`mt-8 text-[13px] font-light leading-6 transition-colors sm:text-sm sm:leading-7 ${selected ? "text-white/66" : "text-white/50"}`}>
                    {step.text}
                  </p>
                </motion.button>

                {index < steps.length - 1 && (
                  <div className="hidden w-9 shrink-0 items-center justify-center text-white/22 lg:flex" aria-hidden="true">
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
