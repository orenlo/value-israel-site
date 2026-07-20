"use client";

import { motion } from "motion/react";

const capabilities = [
  {
    number: "01",
    title: "Local Market Access",
    text: "Long-standing relationships across Israel's venture capital, founder and professional communities help us identify high-quality opportunities before they become broadly visible.",
  },
  {
    number: "02",
    title: "Disciplined Screening",
    text: "We analyze companies against each investor's mandate and prioritize only the opportunities with a clear strategic, commercial and investment fit.",
  },
  {
    number: "03",
    title: "Growth-Stage Focus",
    text: "Our primary focus is on growth-stage technology businesses with Israeli DNA, including companies headquartered abroad and companies founded by Israeli entrepreneurs.",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-[#191b1f] py-24 sm:py-32">
      <div className="grid-glow absolute inset-0 opacity-40" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="window-panel rounded-[2rem] border border-white/8 p-8 sm:p-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-10 lg:p-12"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">What we do</p>
            <h2 className="mt-5 text-4xl font-extralight tracking-[-0.045em] sm:text-6xl">
              Local access.
              <br />
              Global perspective.
            </h2>
          </div>
          <p className="max-w-2xl text-base font-light leading-8 text-white/52 sm:text-lg">
            Value Israel acts as a trusted local extension for global investors, combining deep market familiarity, rigorous filtering and direct market intelligence to surface differentiated opportunities across Israel&apos;s technology ecosystem.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/8 bg-white/8 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.85 }}
              className="bg-[#202226] p-8 transition duration-500 hover:bg-[#242831] sm:p-10"
            >
              <span className="text-xs tracking-[0.32em] text-blue-400/80">{item.number}</span>
              <h3 className="mt-10 text-3xl font-light tracking-tight">{item.title}</h3>
              <p className="mt-5 text-sm font-light leading-7 text-white/48">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
