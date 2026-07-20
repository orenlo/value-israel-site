"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

const sectors = [
  { name: "Artificial Intelligence", industry: "AI & Data", tag: "Growth" },
  { name: "Cybersecurity", industry: "Security", tag: "Scale" },
  { name: "Enterprise Software", industry: "B2B Software", tag: "Growth" },
  { name: "Fintech", industry: "Financial Technology", tag: "Scale" },
  { name: "Digital Health", industry: "Healthcare Technology", tag: "Innovation" },
  { name: "DeepTech", industry: "Frontier Technology", tag: "Breakthrough" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  );
}

export default function Portfolio() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return sectors;
    return sectors.filter((sector) =>
      `${sector.name} ${sector.industry} ${sector.tag}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <section id="portfolio" className="bg-[#181a1e] py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Focus</p>
            <h2 className="mt-5 text-4xl font-extralight tracking-[-0.045em] sm:text-6xl">
              Where exceptional
              <br />
              companies emerge.
            </h2>
          </div>

          <label className="flex w-full max-w-sm items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3.5 text-white/50 transition focus-within:border-blue-500/40 lg:w-80">
            <SearchIcon />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by sector"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/28"
            />
          </label>
        </motion.div>

        <motion.div layout className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((sector) => (
              <motion.article
                layout
                key={sector.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group min-h-[255px] rounded-[2rem] border border-white/8 bg-[#202226] p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-500/35 hover:bg-[#24272d] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-blue-300">
                    {sector.tag}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-blue-500 opacity-45 shadow-[0_0_18px_rgba(59,130,246,0.8)] transition group-hover:opacity-100" />
                </div>
                <div className="mt-24">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/30">{sector.industry}</p>
                  <h3 className="mt-3 text-2xl font-light tracking-tight">{sector.name}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
