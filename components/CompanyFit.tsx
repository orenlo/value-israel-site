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
    <section
      id="company-fit"
      className="relative overflow-hidden bg-[#4E6E96] py-24 text-white sm:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,52,82,0.12)_0%,rgba(30,52,82,0.035)_48%,rgba(30,52,82,0.12)_100%)]" />
      <div className="absolute -left-36 -top-36 h-[28rem] w-[28rem] rounded-full bg-cyan-200/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-24 h-[30rem] w-[30rem] rounded-full bg-blue-200/10 blur-3xl" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-100">
            Investment Focus
          </p>
          <h2 className="mt-6 text-[clamp(3rem,6.7vw,6.3rem)] font-extralight leading-[1.02] tracking-[-0.055em] text-white">
            Companies built to scale globally.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {criteria.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 55, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.09, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[2rem] border border-white/16 bg-[#365A82]/72 p-8 shadow-[0_24px_65px_rgba(19,44,72,0.20)] backdrop-blur-[3px] transition duration-500 hover:-translate-y-1 hover:border-cyan-100/40 hover:bg-[#3B628D]/82 hover:shadow-[0_30px_75px_rgba(19,44,72,0.28)] sm:p-10"
            >
              <span
                className={`block h-px w-12 ${
                  index === 0 ? "bg-cyan-100" : index === 1 ? "bg-cyan-300" : "bg-blue-100"
                }`}
              />
              <h3 className="mt-10 text-3xl font-light tracking-[-0.035em] text-white">
                {item.title}
              </h3>
              <p className="mt-5 text-sm font-light leading-7 text-white/72">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
