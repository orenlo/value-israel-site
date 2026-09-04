"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const heroImages = [
  "/images/tel-aviv-hero-real.jpg",
  "https://images.unsplash.com/photo-1658510981380-059da8878d2d?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1674003487162-effd2b6a1c68?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1707337965825-8e5e04426bb1?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1633088926847-435cdb7e76da?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1678134017317-4edd53da833d?auto=format&fit=crop&fm=jpg&q=82&w=2400",
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
    <section className="relative min-h-screen overflow-hidden bg-[#111214]">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1.01 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.4, ease: "easeInOut" }, scale: { duration: 7.2, ease: "linear" } }}
          className="absolute inset-0 bg-cover bg-center brightness-[1.08] contrast-[1.01] saturate-[1.03]"
          style={{ backgroundImage: `url('${heroImages[activeImage]}')` }}
        />
      </AnimatePresence>

      {/* Keep the photography visible, but add a soft central scrim so the brand stays readable on bright slides. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,10,18,0.18)_0%,rgba(4,10,18,0.06)_30%,rgba(6,12,20,0.22)_67%,rgba(9,14,21,0.80)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(5,12,22,0.02)_0%,rgba(5,12,22,0.06)_32%,rgba(3,8,15,0.42)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[48%] w-[88%] max-w-[1380px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(2,8,16,0.60)_0%,rgba(4,12,24,0.40)_38%,rgba(4,10,18,0.16)_58%,transparent_76%)] blur-xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(100%-2rem,1540px)] items-center justify-center px-4 pb-16 pt-24 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 sm:mb-10"
          >
            <Logo className="h-24 w-28 sm:h-28 sm:w-32" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-visible"
          >
            <h1 className="hero-title-shadow whitespace-nowrap text-[18vw] font-extralight leading-[0.82] tracking-[-0.075em] sm:text-[12vw] lg:text-[9rem] xl:text-[10rem]">
              <span className="text-white">Value</span>
              <span className="gradient-text inline-block pr-[0.18em] font-light">Israel</span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title-shadow mt-10 max-w-5xl text-balance text-2xl font-light leading-[1.28] tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl"
          >
            Creating needle-moving value for the world&apos;s best investors, in Israel
          </motion.h2>

          <motion.button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82, duration: 1 }}
            className="mt-14 cursor-pointer rounded-full border border-cyan-300/25 bg-[#08101A]/30 p-3 text-white/88 backdrop-blur-sm transition hover:border-cyan-300/60 hover:bg-blue-950/30 hover:text-cyan-100"
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
