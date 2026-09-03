"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const heroImages = [
  "/images/tel-aviv-hero-real.jpg",
  "https://images.unsplash.com/photo-1617381739934-096520d943cd?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1528791075103-b149f525eb22?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1500990702037-7620ccb6a60a?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1564321805247-0415ce7bf234?auto=format&fit=crop&fm=jpg&q=82&w=2400",
  "https://images.unsplash.com/photo-1593848542300-1de6caea3887?auto=format&fit=crop&fm=jpg&q=82&w=2400",
];

function DownArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#161719]">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeImage}
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1.015 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.45, ease: "easeInOut" }, scale: { duration: 7.2, ease: "linear" } }}
          className="absolute inset-0 bg-cover bg-center brightness-[0.94] contrast-[1.02] saturate-[0.98]"
          style={{ backgroundImage: `url('${heroImages[activeImage]}')` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,12,22,0.18)_0%,rgba(8,15,26,0.15)_30%,rgba(7,12,20,0.34)_62%,rgba(8,12,18,0.66)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(4,9,16,0.08)_0%,rgba(4,9,16,0.12)_32%,rgba(4,9,16,0.46)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(100%-2rem,1540px)] items-center justify-center px-4 pb-16 pt-28 sm:px-8">
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 26, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-9 sm:mb-11"
          >
            <Logo className="h-24 w-28 sm:h-28 sm:w-32" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-visible"
          >
            <h1 className="whitespace-nowrap text-[18vw] font-extralight leading-[0.82] tracking-[-0.075em] drop-shadow-[0_4px_22px_rgba(0,0,0,0.35)] sm:text-[12vw] lg:text-[9rem] xl:text-[10rem]">
              <span className="text-white">Value</span>
              <span className="gradient-text inline-block pr-[0.18em] font-light">
                Israel
              </span>
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-5xl text-balance text-2xl font-light leading-[1.28] tracking-[-0.025em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] sm:text-3xl lg:text-4xl"
          >
            Creating needle-moving value for the world&apos;s best investors in Israel
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62, duration: 1.2 }}
            className="mt-5 max-w-2xl text-sm font-light leading-7 text-white/82 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-base"
          >
            Value Israel gives global investors differentiated access to high-quality Israeli growth companies through trusted local relationships, rigorous filtering, and direct market intelligence.
          </motion.p>

          <motion.button
            onClick={() => document.getElementById("advisory")?.scrollIntoView({ behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 1 }}
            className="mt-14 cursor-pointer rounded-full border border-white/18 bg-black/12 p-3 text-white/80 backdrop-blur-sm transition hover:border-blue-300/55 hover:bg-black/20 hover:text-white"
            aria-label="Scroll to advisory section"
          >
            <DownArrow />
          </motion.button>

          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden="true">
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeImage ? "w-6 bg-white/80" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
