"use client";

import { motion } from "motion/react";

const criteria = [
  {
    title: "Growth-Stage Companies",
    text: "Companies with established product-market fit, meaningful commercial traction, and the capacity to scale globally.",
  },
  {
    title: "Israeli DNA",
    text: "Israel-based companies, Israeli-founded global businesses, and companies with a meaningful connection to the Israeli technology ecosystem.",
  },
  {
    title: "Exceptional Growth Potential",
    text: "Differentiated businesses with strong market positioning and the potential to become significant global category leaders.",
  },
];

export default function CompanyFit() {
  return (
    <section id="company-fit" className="relative overflow-hidden bg-[#2B2F34] py-24 sm:py-32">
      <div className="grid-glow absolute inset-0 opacity-30" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.95 }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Investment Focus</p>
          <h2 className="mt-5 text-4xl font-extralight tracking-[-0.045em] sm:text-6xl">
            Companies built to scale globally.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {criteria.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 55, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.09, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-[2rem] border p-8 transition duration-500 hover:-translate-y-1 sm:p-10 ${
                index === 0
                  ? "border-blue-900/40 bg-[linear-gradient(145deg,rgba(4,26,70,0.78),rgba(75,81,89,0.96))] hover:border-blue-600/50"
                  : index === 1
                    ? "border-blue-600/30 bg-[linear-gradient(145deg,rgba(8,72,150,0.46),rgba(75,81,89,0.97))] hover:border-blue-400/50"
                    : "border-cyan-500/25 bg-[linear-gradient(145deg,rgba(7,93,128,0.34),rgba(75,81,89,0.97))] hover:border-cyan-300/45"
              }`}
            >
              <span className={`block h-px w-12 ${index === 0 ? "bg-blue-700" : index === 1 ? "bg-blue-400" : "bg-cyan-300"}`} />
              <h3 className="mt-10 text-3xl font-light tracking-[-0.035em]">{item.title}</h3>
              <p className="mt-5 text-sm font-light leading-7 text-white/48">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
