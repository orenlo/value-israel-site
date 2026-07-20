"use client";

import { motion } from "motion/react";

type CareerItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  domain?: string;
  href?: string;
  description?: string;
  current?: boolean;
};

const career: CareerItem[] = [
  { company: "TPG", role: "Advisor", period: "Apr 2025 – Present", location: "Israel", domain: "tpg.com", href: "https://www.tpg.com", current: true },
  { company: "Tau Capital", role: "Advisory Board Member", period: "Feb 2025 – Present", location: "Remote", domain: "taucapital.vc", href: "https://www.taucapital.vc", current: true },
  { company: "Value Israel", role: "Chief Executive Officer", period: "Apr 2025 – Present", location: "Tel Aviv District, Israel · Hybrid", domain: "valueisrael.com", href: "#", current: true },
  { company: "BlueGreen Water Technologies", role: "Chairman", period: "Jan 2024 – Present", location: "Israel · Hybrid", domain: "bluegreenwatertech.com", href: "https://bluegreenwatertech.com", current: true },
  { company: "SeeTrue AI", role: "Board Member", period: "2021 – Present", domain: "seetrue.ai", href: "https://seetrue.ai", current: true },
  { company: "Ondas Holdings", role: "Board Member", period: "Jan 2025 – Dec 2025", location: "Remote", domain: "ondas.com", href: "https://www.ondas.com" },
  { company: "Atlas Obscura", role: "Director", period: "Feb 2024 – Mar 2025", location: "United States · Remote", domain: "atlasobscura.com", href: "https://www.atlasobscura.com" },
  { company: "OurCrowd", role: "General Partner, Head of Portfolio Management Department", period: "Apr 2017 – Mar 2025", location: "Jerusalem District, Israel", domain: "ourcrowd.com", href: "https://www.ourcrowd.com" },
  { company: "Edgybees", role: "Board Member", period: "Jan 2018 – Mar 2024", domain: "edgybees.com", href: "https://edgybees.com" },
  { company: "SaNOtize", role: "Board Member", period: "2020 – Feb 2024", domain: "sanotize.com", href: "https://sanotize.com" },
  { company: "CytoReason", role: "Board Member", period: "May 2021 – Sep 2023", domain: "cytoreason.com", href: "https://www.cytoreason.com" },
  { company: "Superpedestrian", role: "Board Observer", period: "2021 – Jun 2023", domain: "superpedestrian.com", href: "https://superpedestrian.com" },
  { company: "Airobotics", role: "Chairman", period: "Oct 2019 – Jan 2023", domain: "airoboticsdrones.com", href: "https://airoboticsdrones.com" },
  { company: "Ripple Foods", role: "Board Observer", period: "2019 – Jan 2023", domain: "ripplefoods.com", href: "https://ripplefoods.com" },
  { company: "enVerid Systems", role: "Board Member", period: "Jan 2018 – Jan 2022", domain: "enverid.com", href: "https://www.enverid.com" },
  { company: "BioCatch", role: "Board Member", period: "Jun 2017 – Mar 2018", domain: "biocatch.com", href: "https://www.biocatch.com" },
  { company: "Albert", role: "CFO", period: "Feb 2015 – Apr 2017", location: "Tel Aviv", domain: "albert.ai", href: "https://albert.ai" },
  {
    company: "Pritzker Group",
    role: "Senior Advisor",
    period: "Mar 2013 – Dec 2014",
    location: "Tel Aviv, Israel",
    domain: "pritzkergroup.com",
    href: "https://www.pritzkergroup.com",
    description: "Represented Pritzker Group in Israel, sourcing and evaluating Israeli opportunities across venture capital and private capital strategies.",
  },
  {
    company: "Value Israel",
    role: "Founder",
    period: "Jan 2010 – Dec 2014",
    location: "Tel Aviv, Israel",
    domain: "valueisrael.com",
    href: "#",
    description: "Scout and advisor to a group of U.S. investors, connecting global capital with Israeli investment opportunities.",
  },
  {
    company: "Shamrock",
    role: "Partner / Vice President",
    period: "Sep 2002 – Dec 2009",
    location: "Burbank, CA & Tel Aviv, Israel",
    domain: "shamrockcap.com",
    href: "https://www.shamrockcap.com",
    description: "Built and managed the local investment team, led transaction execution and supported portfolio company IPOs and turnarounds.",
  },
  { company: "Ernst & Young", role: "Senior Consultant – Strategic Consulting Services", period: "Jul 2001 – Aug 2002", location: "New York, NY", domain: "ey.com", href: "https://www.ey.com" },
  { company: "Intel Corporation", role: "Purchasing Specialist", period: "1996 – 1998", domain: "intel.com", href: "https://www.intel.com" },
];

function CompanyLogo({ item }: { item: CareerItem }) {
  if (!item.domain) {
    return <span className="text-sm font-semibold text-white/75">{item.company.slice(0, 2).toUpperCase()}</span>;
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`}
      alt=""
      className="h-7 w-7 object-contain"
    />
  );
}

export default function RonExperience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#101215] py-24 sm:py-32">
      <div className="grid-glow absolute inset-0 opacity-35" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-extralight tracking-[-0.045em] sm:text-6xl">
            Selected experience
            <br />
            across investing and operating.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-light leading-8 text-white/48 sm:text-lg">
            A selected timeline across advisory roles, board positions, portfolio leadership and operating experience. Company cards and logos below link directly to the relevant websites.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="window-panel rounded-[2rem] border border-white/9 bg-white/[0.025] p-8 sm:p-10">
              <div className="window-dots mb-8">
                <span />
                <span />
                <span />
              </div>
              <p className="text-sm leading-8 text-white/52">
                Ron&apos;s track record spans global investment platforms, private equity, strategic consulting, operating roles and extensive board service. The timeline highlights the breadth of organizations and sectors he has worked with over more than two decades.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/8 bg-black/15 p-5">
                  <div className="text-3xl font-light text-white">20+</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/35">Years investing</div>
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/15 p-5">
                  <div className="text-3xl font-light text-white">Global</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/35">Investor network</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative pl-8 sm:pl-12">
            <div className="timeline-line absolute bottom-4 left-[7px] top-4 w-px sm:left-[11px]" />
            <div className="space-y-4">
              {career.map((item, index) => {
                const content = (
                  <motion.article
                    key={`${item.company}-${item.role}-${item.period}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: Math.min(index * 0.025, 0.25), duration: 0.65 }}
                    className="group relative rounded-3xl border border-white/8 bg-[#17191d]/92 p-6 transition duration-500 hover:border-blue-500/30 hover:bg-[#1a1d22] sm:p-7"
                  >
                    <span className={`absolute -left-[2.02rem] top-8 h-3.5 w-3.5 rounded-full border-2 border-[#101215] sm:-left-[3.18rem] ${item.current ? "bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.8)]" : "bg-[#565d68]"}`} />

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white p-2.5">
                          <CompanyLogo item={item} />
                        </div>
                        <div>
                          <h3 className="text-xl font-light text-white transition group-hover:text-blue-100 sm:text-2xl">{item.company}</h3>
                          <p className="mt-2 text-sm text-blue-300/85">{item.role}</p>
                        </div>
                      </div>
                      {item.current && (
                        <span className="w-fit rounded-full border border-blue-500/25 bg-blue-500/8 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-blue-300">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/36">
                      <span>{item.period}</span>
                      {item.location && <span>{item.location}</span>}
                    </div>

                    {item.description && (
                      <p className="mt-5 max-w-3xl text-sm font-light leading-7 text-white/46">{item.description}</p>
                    )}
                  </motion.article>
                );

                if (item.href && item.href !== "#") {
                  return (
                    <a key={`${item.company}-${item.role}-${item.period}`} href={item.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  );
                }

                return content;
              })}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
          className="mt-20"
        >
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.42em] text-white/36">Current and recent organizations</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {career.map((item) => {
              const card = (
                <div className="flex min-h-24 items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition hover:border-blue-500/25 hover:bg-white/[0.04]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                    <CompanyLogo item={item} />
                  </div>
                  <span className="text-xs font-medium leading-5 text-white/70">{item.company}</span>
                </div>
              );

              return item.href && item.href !== "#" ? (
                <a
                  key={`logo-${item.company}-${item.role}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card}
                </a>
              ) : (
                <div key={`logo-${item.company}-${item.role}`}>{card}</div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
