"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const heroImages = [
  "https://images.unsplash.com/photo-1658510981380-059da8878d2d?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1674003487162-effd2b6a1c68?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1707337965825-8e5e04426bb1?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1633088926847-435cdb7e76da?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1678134017317-4edd53da833d?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "/images/tel-aviv-hero-real.jpg",
];

function DownArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.45">
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    heroImages.slice(1).forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#254A70]">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1.005 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.35, ease: "easeInOut" }, scale: { duration: 7.2, ease: "linear" } }}
          className="absolute inset-0 bg-cover bg-center brightness-[1.08] contrast-[1.01] saturate-[1.03]"
          style={{ backgroundImage: `url('${heroImages[activeImage]}')` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,10,18,0.18)_0%,rgba(4,10,18,0.06)_30%,rgba(6,12,20,0.22)_67%,rgba(9,14,21,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(5,12,22,0.02)_0%,rgba(5,12,22,0.06)_32%,rgba(3,8,15,0.38)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[46%] w-[88%] max-w-[1380px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(2,8,16,0.56)_0%,rgba(4,12,24,0.34)_40%,rgba(4,10,18,0.12)_60%,transparent_76%)] blur-xl" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1540px] items-center justify-center px-[clamp(1rem,3vw,3rem)] pb-[clamp(4rem,8vh,7rem)] pt-[clamp(5.5rem,10vh,8rem)]">
        <div className="flex w-full max-w-[1280px] flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-[clamp(1.5rem,4vh,2.5rem)]"
          >
            <Logo className="h-[clamp(4.75rem,6vw,7rem)] w-[clamp(5.5rem,7vw,8rem)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-visible"
          >
            <h1 className="hero-title-shadow whitespace-nowrap text-[clamp(3.8rem,8.2vw,9rem)] font-extralight leading-[0.86] tracking-[-0.07em]">
              <span className="text-white">Value</span>
              <span className="gradient-text inline-block pr-[0.18em] font-light">Israel</span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title-shadow mt-[clamp(1.75rem,4vh,2.5rem)] max-w-[980px] text-balance text-[clamp(1.3rem,2.15vw,2.45rem)] font-light leading-[1.28] tracking-[-0.025em] text-white"
          >
            Creating needle-moving value for the world&apos;s best investors, in Israel
          </motion.h2>

          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.78, duration: 1 }}
            className="mt-[clamp(2.5rem,6vh,4rem)] cursor-pointer rounded-full border border-cyan-300/25 bg-[#08101A]/30 p-3 text-white/88 backdrop-blur-sm transition hover:border-cyan-300/60 hover:bg-blue-950/30 hover:text-cyan-100"
            aria-label="Scroll to About section"
          >
            <DownArrow />
          </motion.button>

          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden="true">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeImage
                    ? "w-6 bg-gradient-to-r from-blue-400 to-cyan-300"
                    : "w-1.5 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
