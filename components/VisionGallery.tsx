"use client";

import { motion } from "motion/react";

const images = [
  {
    title: "Cybersecurity",
    subtitle: "Defending the digital frontier",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Infrastructure for the next wave",
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=88",
  },
  {
    title: "Israeli Innovation",
    subtitle: "Local talent. Global ambition.",
    url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=88",
  },
];

export default function VisionGallery() {
  return (
    <section className="bg-[#222222] py-24 sm:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-400">
              Focus areas
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-light tracking-[-0.04em] sm:text-6xl">
              Built around the sectors shaping the future.
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-7 text-white/48 sm:text-base">
            A visual view into the technologies, infrastructure and innovation
            ecosystems we spend time around.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.article
              key={image.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.9 }}
              className="group relative min-h-[440px] overflow-hidden rounded-3xl border border-white/8 bg-[#2A2A2A]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${image.url}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/28 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.32em] text-blue-300/90">
                  {image.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-light">{image.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
