"use client";

import { motion } from "motion/react";

const sandalsPhoto =
  "https://images.unsplash.com/photo-1501851602203-f40cf2f11ba9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#F7FAFD] py-24 text-[#111317] sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute left-1/2 top-0 h-80 w-[72%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),rgba(14,165,233,0.035)_42%,transparent_76%)] blur-2xl" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 lg:grid-cols-[0.46fr_1.54fr] lg:items-start"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-blue-600 sm:text-xs">
              About
            </p>

            <motion.figure
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 overflow-hidden rounded-[2rem] border border-blue-900/8 bg-white shadow-[0_20px_60px_rgba(17,24,39,0.10)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E9F1FB]">
                <img
                  src={sandalsPhoto}
                  alt="Handmade leather sandal in Israel"
                  className="h-full w-full scale-[1.9] object-cover object-[26%_58%] brightness-[1.02] contrast-[1.01] saturate-[0.95] transition duration-700 hover:scale-[1.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
            </motion.figure>
          </div>

          <div className="max-w-5xl">
            <h2 className="text-[clamp(2.35rem,4.4vw,4.35rem)] font-extralight leading-[1.18] tracking-[-0.045em] text-[#111317]">
              Value Israel provides global investors differentiated access to high-quality Israeli growth companies through trusted local relationships, rigorous filtering, and direct market intelligence.
            </h2>

            <p className="mt-10 max-w-4xl text-[clamp(1.2rem,2vw,1.75rem)] font-light leading-[1.6] tracking-[-0.018em] text-[#52606F]">
              Value Israel invests through its own SPV alongside its partners in every deal, thereby creating long-term alignment of interests between the company, the investor, and Value Israel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
