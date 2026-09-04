"use client";

import { motion } from "motion/react";

const ronPhoto = "/images/ron-stern-updated.jpg";
const orenPhoto = "/images/oren-lowte-full.jpg";

const currentCompanies = [
  { name: "TPG", domain: "tpg.com", href: "https://www.tpg.com" },
  { name: "Tau Capital", domain: "taucapital.vc", href: "https://www.taucapital.vc" },
  { name: "Value Israel", domain: "valueisrael.com", href: "#" },
  { name: "BlueGreen Water Technologies", domain: "bluegreenwatertech.com", href: "https://bluegreenwatertech.com" },
  { name: "SeeTrue AI", domain: "seetrue.ai", href: "https://seetrue.ai" },
];

const recentCompanies = [
  { name: "OurCrowd", domain: "ourcrowd.com", href: "https://www.ourcrowd.com" },
  { name: "Atlas Obscura", domain: "atlasobscura.com", href: "https://www.atlasobscura.com" },
  { name: "Ondas", domain: "ondas.com", href: "https://www.ondas.com" },
  { name: "Edgybees", domain: "edgybees.com", href: "https://edgybees.com" },
  { name: "SaNOtize", domain: "sanotize.com", href: "https://sanotize.com" },
  { name: "Shamrock", domain: "shamrockcap.com", href: "https://www.shamrockcap.com" },
];

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1v11.45z" />
    </svg>
  );
}

function CompanyRow({ title, items }: { title: string; items: { name: string; domain: string; href: string }[] }) {
  return (
    <div className="mt-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/38">{title}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {items.map((item) => (
          <a
            key={`${title}-${item.name}`}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/72 transition hover:border-blue-500/40 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <img
              src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`}
              alt=""
              className="h-5 w-5 rounded-sm object-contain"
            />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="bg-[#2B2F34] py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">Team</p>
            <h2 className="mt-5 text-4xl font-extralight tracking-[-0.045em] sm:text-6xl">
              Experience with
              <br />
              institutional perspective.
            </h2>
          </div>
          <p className="max-w-xl text-base font-light leading-8 text-white/52 sm:text-lg">
            Value Israel combines long-standing investment experience with close familiarity with Israel&apos;s technology ecosystem and disciplined company scouting.
          </p>
        </motion.div>

        <div className="mt-14 space-y-8">
          <motion.article
            id="founder"
            initial={{ opacity: 0, y: 70, scale: 0.97, rotateX: 4 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 1200 }}
            className="window-panel overflow-hidden rounded-[2rem] border border-white/9 bg-[#3B4148]"
          >
            <div className="grid md:grid-cols-[0.72fr_1.28fr]">
              <div className="relative min-h-[520px] overflow-hidden bg-[#2B2F34]">
                <img
                  src={ronPhoto}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-35 blur-2xl"
                />
                <img
                  src={ronPhoto}
                  alt="Ron Stern"
                  className="absolute inset-0 h-full w-full scale-[0.91] object-contain object-center contrast-[1.04] transition duration-700 hover:scale-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-blue-400">Founder &amp; CEO</p>
                  <h3 className="mt-4 text-4xl font-light tracking-[-0.04em] sm:text-5xl">Ron Stern</h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://www.columbia.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-blue-500/25 bg-blue-500/8 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.20em] text-blue-200 transition hover:border-blue-300/50 hover:bg-blue-500/12"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1.5">
                        <img
                          src="https://www.google.com/s2/favicons?domain=columbia.edu&sz=128"
                          alt="Columbia University icon"
                          className="h-full w-full object-contain"
                        />
                      </span>
                      Columbia University
                    </a>
                  </div>

                  <p className="mt-7 text-sm font-light leading-8 text-white/54 sm:text-base">
                    Ron studied at Columbia University and has built his career across investment, operating leadership, and board-level value creation. He currently serves as Advisor to TPG, Advisory Board Member at Tau Capital, and Chief Executive Officer of Value Israel, while also serving as Chairman of BlueGreen Water Technologies and a Board Member at SeeTrue AI. His recent experience includes senior leadership at OurCrowd and board and director roles across technology companies, including Ondas, Atlas Obscura, Edgybees, and SaNOtize.
                  </p>

                  <CompanyRow title="Current organizations" items={currentCompanies} />
                  <CompanyRow title="Recent organizations" items={recentCompanies} />
                </div>

                <a
                  href="https://il.linkedin.com/in/ron-stern-b0064634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-blue-500/35 bg-blue-500/8 px-5 py-3 text-sm text-white transition hover:border-blue-400 hover:bg-blue-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <LinkedinIcon />
                  View Ron on LinkedIn
                </a>
              </div>
            </div>
          </motion.article>

          <motion.article
            id="analyst"
            initial={{ opacity: 0, y: 70, scale: 0.97, rotateX: 4 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformPerspective: 1200 }}
            className="window-panel overflow-hidden rounded-[2rem] border border-white/9 bg-[linear-gradient(145deg,#25292E,#3B4148)]"
          >
            <div className="grid md:grid-cols-[0.72fr_1.28fr]">
              <div className="relative min-h-[500px] overflow-hidden bg-[#2B2F34]">
                <img
                  src={orenPhoto}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-[58%_18%] opacity-28 blur-2xl"
                />
                <img
                  src={orenPhoto}
                  alt="Oren Lowte"
                  className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[58%_18%] transition duration-700 hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-blue-400">Analyst</p>
                  <h3 className="mt-4 text-4xl font-light tracking-[-0.04em] sm:text-5xl">Oren Lowte</h3>

                  <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.035] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/78">
                    <img
                      src="https://www.google.com/s2/favicons?domain=bgu.ac.il&sz=128"
                      alt="Ben-Gurion University logo"
                      className="h-6 w-6 rounded-sm object-contain"
                    />
                    Ben-Gurion University
                  </div>

                  <p className="mt-7 max-w-2xl text-sm font-light leading-8 text-white/54 sm:text-base">
                    Oren is an analyst at Value Israel and an electrical and computer engineer who previously worked at Intel. He supports company research, opportunity screening, investor materials, and sourcing across Israel&apos;s technology ecosystem.
                  </p>
                </div>

                <a
                  href="https://il.linkedin.com/in/oren-lowte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/12 px-5 py-3 text-sm text-white/78 transition hover:border-blue-500/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <LinkedinIcon />
                  View Oren on LinkedIn
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
