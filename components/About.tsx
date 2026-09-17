"use client";

import { motion } from "motion/react";

const sandalsPhoto = "/images/value-israel-sandals.png";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#315D86] py-24 text-white sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />
      <div className="absolute left-1/2 top-0 h-80 w-[72%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),rgba(59,130,246,0.10)_42%,transparent_76%)] blur-2xl" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-cyan-200 sm:text-xs">
              About
            </p>

            <motion.figure
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 overflow-hidden rounded-[2rem] border border-white/15 bg-[#274C70] shadow-[0_24px_70px_rgba(9,30,54,0.28)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#274C70]">
                <img
                  src={sandalsPhoto}
                  alt="Blue and white outdoor sandals in an Israeli landscape"
                  className="h-full w-full object-cover object-[46%_52%] brightness-[1.02] contrast-[1.01] saturate-[0.98] transition duration-700 hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183650]/35 via-transparent to-transparent" />
              </div>
            </motion.figure>
          </div>

          <div className="max-w-5xl">
            <h2 className="text-[clamp(2.35rem,4.4vw,4.35rem)] font-extralight leading-[1.18] tracking-[-0.045em] text-white">
              Value Israel provides global investors differentiated access to high-quality Israeli growth companies through trusted local relationships, rigorous filtering, and direct market intelligence.
            </h2>

            <p className="mt-10 max-w-4xl text-[clamp(1.2rem,2vw,1.75rem)] font-light leading-[1.6] tracking-[-0.018em] text-white/72">
              Value Israel invests through its own SPV alongside its partners in every deal, thereby creating long-term alignment of interests between the company, the investor, and Value Israel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
