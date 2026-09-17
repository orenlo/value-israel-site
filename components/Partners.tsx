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
    <section id="partners" className="relative overflow-hidden bg-[#F7FAFD] py-24 text-[#111317] sm:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.035] blur-[1px]"
        style={{ backgroundImage: "url('/images/value-israel-banner-reference.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,250,253,0.98)_0%,rgba(247,250,253,0.90)_30%,rgba(247,250,253,0.90)_70%,rgba(247,250,253,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,64,175,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(30,64,175,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.48em] text-blue-600 sm:text-xs">
            Partners
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extralight tracking-[-0.04em] text-[#111317] sm:text-6xl">
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
              className="group block rounded-[2rem] border border-[#A5BDD3] bg-[#CADCED] p-8 shadow-[0_16px_42px_rgba(30,64,175,0.08)] transition duration-500 hover:-translate-y-1 hover:border-[#90B0CC] hover:bg-[#BED4E9] hover:shadow-[0_22px_54px_rgba(30,64,175,0.12)] sm:p-10"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-white p-3 shadow-xl shadow-black/10">
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=256`}
                    alt={`${partner.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.30em] text-[#547594]">{partner.subtitle}</p>
                  <h3 className="mt-2 text-3xl font-light tracking-[-0.035em] text-[#244A70]">{partner.name}</h3>
                </div>
              </div>
              <p className="mt-7 max-w-xl text-sm font-light leading-7 text-[#5D748B] sm:text-base">
                {partner.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
