"use client";

import { motion } from "motion/react";

const ronPhoto = "/images/ron-stern-updated.jpg";
const orenPhoto = "/images/oren-lowte-full.jpg";

type OrgItem = {
  name: string;
  role: string;
  domain: string;
  href: string;
};

const advisoryRoles: OrgItem[] = [
  { name: "TPG", role: "Advisor", domain: "tpg.com", href: "https://www.tpg.com" },
  { name: "Tau Capital", role: "Advisory Board Member", domain: "taucapital.vc", href: "https://www.taucapital.vc" },
];

const boardPositions: OrgItem[] = [
  { name: "BlueGreen Water Technologies", role: "Chairman", domain: "bluegreenwatertech.com", href: "https://bluegreenwatertech.com" },
  { name: "SeeTrue AI", role: "Board Member", domain: "seetrue.ai", href: "https://seetrue.ai" },
];

const recentOrganizations: OrgItem[] = [
  { name: "Ondas", role: "Board Member", domain: "ondas.com", href: "https://www.ondas.com" },
  { name: "OurCrowd", role: "General Partner, Head of Portfolio Management", domain: "ourcrowd.com", href: "https://www.ourcrowd.com" },
  { name: "BioCatch", role: "Director", domain: "biocatch.com", href: "https://www.biocatch.com" },
];

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1v11.45z" />
    </svg>
  );
}

function OrganizationGroup({ title, items }: { title: string; items: OrgItem[] }) {
  return (
    <div className="mt-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#64748B]">{title}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <a
            key={`${title}-${item.name}`}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[76px] items-center gap-3 rounded-2xl border border-black/8 bg-[#F7FAFD] px-4 py-3 transition hover:border-blue-500/30 hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white p-2">
              <img
                src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=128`}
                alt=""
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-[#111317]">{item.name}</span>
              <span className="mt-1 block text-xs leading-5 text-[#6B7280]">{item.role}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="bg-[#F4F8FC] py-24 text-[#111317] sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">Team</p>
          <h2 className="mt-5 text-[clamp(2.6rem,5vw,4rem)] font-extralight tracking-[-0.045em] text-[#111317]">
            Experience with
            <br />
            institutional perspective.
          </h2>
        </motion.div>

        <div className="mt-14 space-y-8">
          <motion.article
            id="founder"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
          >
            <div className="grid md:grid-cols-[0.68fr_1.32fr]">
              <div className="relative min-h-[520px] overflow-hidden bg-[#E7EEF7]">
                <img
                  src={ronPhoto}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-20 blur-2xl"
                />
                <img
                  src={ronPhoto}
                  alt="Ron Stern"
                  className="absolute inset-0 h-full w-full scale-[0.88] object-contain object-center contrast-[1.03] transition duration-700 hover:scale-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-blue-600">Founder &amp; CEO</p>
                  <h3 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#111317] sm:text-5xl">Ron Stern</h3>

                  <a
                    href="https://www.columbia.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-blue-800 transition hover:border-blue-500/40"
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

                  <p className="mt-7 text-sm font-light leading-8 text-[#5B6470] sm:text-base">
                    Ron studied at Columbia University and has built his career across investment, operating leadership, and board-level value creation. His experience spans global investment platforms, portfolio leadership, strategic advisory, and board service across technology companies.
                  </p>

                  <OrganizationGroup title="Current Advisory Roles" items={advisoryRoles} />
                  <OrganizationGroup title="Current Board Positions" items={boardPositions} />
                  <OrganizationGroup title="Recent Organizations" items={recentOrganizations} />
                </div>

                <a
                  href="https://il.linkedin.com/in/ron-stern-b0064634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-blue-600/25 bg-blue-50 px-5 py-3 text-sm text-blue-900 transition hover:border-blue-600/45 hover:bg-blue-100"
                >
                  <LinkedinIcon />
                  View Ron on LinkedIn
                </a>
              </div>
            </div>
          </motion.article>

          <motion.article
            id="analyst"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ delay: 0.06, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
          >
            <div className="grid md:grid-cols-[0.68fr_1.32fr]">
              <div className="relative min-h-[500px] overflow-hidden bg-[#E7EEF7]">
                <img
                  src={orenPhoto}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-[58%_20%] opacity-18 blur-2xl"
                />
                <img
                  src={orenPhoto}
                  alt="Oren Lowte"
                  className="absolute inset-0 h-full w-full scale-[0.94] object-contain object-[54%_18%] transition duration-700 hover:scale-[0.98]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-blue-600">Analyst</p>
                  <h3 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#111317] sm:text-5xl">Oren Lowte</h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-3 rounded-full border border-black/8 bg-[#F7FAFD] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#334155]">
                      <img
                        src="https://www.google.com/s2/favicons?domain=bgu.ac.il&sz=128"
                        alt="Ben-Gurion University logo"
                        className="h-6 w-6 rounded-sm object-contain"
                      />
                      Ben-Gurion University
                    </span>
                    <span className="inline-flex items-center gap-3 rounded-full border border-black/8 bg-[#F7FAFD] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#334155]">
                      <img
                        src="https://www.google.com/s2/favicons?domain=intel.com&sz=128"
                        alt="Intel logo"
                        className="h-6 w-6 rounded-sm object-contain"
                      />
                      Intel
                    </span>
                  </div>

                  <p className="mt-7 max-w-3xl text-sm font-light leading-8 text-[#5B6470] sm:text-base">
                    Oren is an analyst at Value Israel and an electrical and computer engineer. Before joining Value Israel, he worked at Intel as an FPGA designer, focusing on Verilog-based design and verification in Linux development environments. At Value Israel, he supports company research, opportunity screening, investor materials, and sourcing across the Israeli technology ecosystem.
                  </p>
                </div>

                <a
                  href="https://il.linkedin.com/in/oren-lowte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-blue-600/25 bg-blue-50 px-5 py-3 text-sm text-blue-900 transition hover:border-blue-600/45 hover:bg-blue-100"
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
