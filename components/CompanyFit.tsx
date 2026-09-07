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
    <section id="company-fit" className="relative overflow-hidden bg-[#FBFCFE] py-24 text-[#111317] sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.95 }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">Investment Focus</p>
          <h2 className="mt-5 text-4xl font-extralight tracking-[-0.045em] text-[#111317] sm:text-6xl">
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
              className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition duration-500 hover:-translate-y-1 hover:border-blue-500/25 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:p-10"
            >
              <span className={`block h-px w-12 ${index === 0 ? "bg-blue-800" : index === 1 ? "bg-blue-500" : "bg-cyan-500"}`} />
              <h3 className="mt-10 text-3xl font-light tracking-[-0.035em] text-[#111317]">{item.title}</h3>
              <p className="mt-5 text-sm font-light leading-7 text-[#64707C]">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
