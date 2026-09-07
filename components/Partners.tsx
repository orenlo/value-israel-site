"use client";

import { motion } from "motion/react";

const partners = [
  {
    name: "TPG",
    subtitle: "Advisor",
    domain: "tpg.com",
    href: "https://www.tpg.com",
    description:
      "A global alternative asset manager with deep experience across growth, private equity, and technology investing.",
  },
  {
    name: "Tau Capital",
    subtitle: "Advisory Board Member",
    domain: "taucapital.vc",
    href: "https://www.taucapital.vc",
    description:
      "A growth-stage deep-tech investment firm backing transformative science and engineering companies.",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-[#213650] py-24 text-white sm:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.10] blur-[1px]"
        style={{ backgroundImage: "url('/images/value-israel-banner-reference.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#18304A_0%,rgba(33,54,80,0.94)_30%,rgba(33,54,80,0.90)_70%,#18304A_100%)]" />
      <div className="grid-glow absolute inset-0 opacity-35" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.48em] text-cyan-300 sm:text-xs">
            Partners
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extralight tracking-[-0.04em] text-white sm:text-6xl">
            Trusted by leading global investors.
          </h2>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 70, scale: 0.96, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformPerspective: 1200 }}
              className="group block rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.08] sm:p-10"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-3 shadow-xl shadow-black/10">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=256`}
                    alt={`${partner.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.30em] text-cyan-300">{partner.subtitle}</p>
                  <h3 className="mt-2 text-3xl font-light tracking-[-0.035em] text-white">{partner.name}</h3>
                </div>
              </div>
              <p className="mt-7 max-w-xl text-sm font-light leading-7 text-white/55 sm:text-base">
                {partner.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
