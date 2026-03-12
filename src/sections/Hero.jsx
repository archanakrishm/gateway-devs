import { motion, AnimatePresence } from "motion/react";
import { HERO_SLIDES } from "../constants";
import MagneticButton from "../components/MagneticButton";

export default function Hero({ heroRef, heroIndex, setHeroIndex, heroY, heroOpacity, scrollTo }) {
  return (
    <section id="home" ref={heroRef} className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroIndex}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            src={HERO_SLIDES[heroIndex].img}
            alt="Luxury villa"
            className="w-full h-[120%] object-cover absolute -top-[10%]"
            style={{ y: heroY }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Grain overlay */}
      <div className="grain-bg absolute -inset-1/2 z-[2] pointer-events-none" />

      {/* Dark overlay */}
      <div className="bg-hero-overlay absolute inset-0 z-[3]" />

      {/* Hero Content */}
      <motion.div className="relative z-[4] h-full flex flex-col justify-center items-center text-center px-6" style={{ opacity: heroOpacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[11px] tracking-[6px] uppercase text-accent mb-6 font-medium"
        >
          Where
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(48px,9vw,140px)] font-light leading-[0.95] tracking-[-2px] mb-3"
        >
          LUXURY
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(48px,9vw,140px)] font-light leading-[0.95] tracking-[-2px]"
        >
          MEETS <span className="italic text-accent">NATURE</span>
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={heroIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="text-[15px] font-light text-white/60 mt-8 tracking-[1px]"
          >
            {HERO_SLIDES[heroIndex].tagline}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-12"
        >
          <MagneticButton onClick={() => scrollTo("contact")} className="py-4 px-10 text-sm">Register Interest</MagneticButton>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-12 flex gap-3">
          {HERO_SLIDES.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`h-0.5 cursor-pointer transition-all duration-[400ms] ${
                i === heroIndex ? "w-12 bg-accent" : "w-6 bg-white/30"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
