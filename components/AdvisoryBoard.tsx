"use client";

import { motion } from "motion/react";

const people = [
  {
    name: "Ron Stern",
    role: "Founder",
    initials: "RS",
    accent: "bg-blue-500",
    linkedin: "https://il.linkedin.com/in/ron-stern-b0064634",
  },
  {
    name: "Justin Levi",
    role: "Advisory",
    initials: "JL",
    accent: "bg-cyan-500",
    linkedin: "",
  },
  {
    name: "Oren Lota",
    role: "Scouting & Partnerships",
    initials: "OL",
    accent: "bg-sky-400",
    linkedin: "",
  },
];

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.54V9H7.1v11.45z" />
    </svg>
  );
}

export default function AdvisoryBoard() {
  return (
    <section
      id="advisory"
      className="bg-[#222222] py-24 sm:py-32"
    >
      <div className="section-shell">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
            Advisory
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-light tracking-[-0.04em] sm:text-6xl">
            Built on relationships and judgment.
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {people.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#292929]"
            >
              {/* Person Image / Placeholder */}
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#3a3a3d_0%,#29292b_45%,#202022_100%)]">
                {/* Blue light effect */}
                <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent_25%,rgba(59,130,246,0.08),transparent_70%)]" />

                {/* Initials */}
                <span className="relative text-7xl font-extralight tracking-[-0.06em] text-white/80 transition duration-700 group-hover:scale-110 group-hover:text-white">
                  {person.initials}
                </span>

                {/* LinkedIn Button */}
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white/75 opacity-0 backdrop-blur-md transition-all duration-500 hover:border-blue-400/50 hover:bg-blue-500 hover:text-white group-hover:opacity-100"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                )}
              </div>

              {/* Person Details */}
              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-light">
                  {person.name}
                </h3>

                <div className="mt-3 flex items-center gap-3 text-sm text-white/50">
                  <span
                    className={`h-2 w-2 rounded-full ${person.accent}`}
                  />

                  <span>{person.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}