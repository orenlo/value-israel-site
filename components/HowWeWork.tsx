"use client";

import { motion } from "motion/react";
import { useState } from "react";

const steps = [
  {
    title: "Access",
    text: "We stay close to Israel's venture capital, founder and technology networks to continuously identify relevant companies and emerging opportunities.",
  },
  {
    title: "Filter",
    text: "We evaluate each opportunity against the investor's specific mandate, so only genuinely relevant companies move forward.",
  },
  {
    title: "Align",
    text: "We share the relevant context with our investment partners first and confirm preliminary interest before initiating a formal introduction.",
  },
  {
    title: "Connect",
    text: "Once there is real interest, we engage with the company and help create a focused, high-conviction dialogue between both sides.",
  },
];

export default function HowWeWork() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section id="process" className="relative overflow-hidden bg-[#121417] py-24 sm:py-32">
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">How we work</p>
            <h2 className="mt-5 text-4xl font-extralight tracking-[-0.045em] sm:text-6xl">
              A focused process,
              <br />
              built around relevance.
            </h2>
          </div>
          <p className="max-w-2xl text-base font-light leading-8 text-white/52 sm:text-lg">
            We protect the time of both investors and management teams by keeping the process selective, transparent and aligned from the beginning.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const selected = selectedStep === index;

            return (
              <motion.button
                key={step.title}
                type="button"
                onClick={() => setSelectedStep(index)}
                aria-pressed={selected}
                initial={{ opacity: 0, y: 70, scale: 0.96, rotateX: 5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 1200 }}
                className={`relative cursor-pointer rounded-[1.75rem] border p-7 text-left transition-[border-color,background-color,box-shadow,transform] duration-500 sm:p-8 ${
                  selected
                    ? "border-blue-400/70 bg-[linear-gradient(145deg,rgba(59,130,246,0.16),rgba(255,255,255,0.035))] shadow-[0_24px_70px_rgba(37,99,235,0.16),inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "window-panel border-white/8 hover:-translate-y-1 hover:border-blue-500/30"
                }`}
              >
                <div className="mb-9 flex items-center justify-end">
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      selected
                        ? "scale-110 bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]"
                        : "bg-white/16"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className={`text-3xl font-light tracking-[-0.035em] transition-colors ${selected ? "text-white" : "text-white/88"}`}>
                  {step.title}
                </h3>
                <p className={`mt-5 text-sm font-light leading-7 transition-colors ${selected ? "text-white/65" : "text-white/48"}`}>
                  {step.text}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
