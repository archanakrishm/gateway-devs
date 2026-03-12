import { motion, AnimatePresence } from "motion/react";
import { HERO_SLIDES } from "../constants";
import MagneticButton from "../components/MagneticButton";

export default function Hero({ heroRef, heroIndex, setHeroIndex, heroY, heroOpacity, scrollTo }) {
  return (
    <section id="home" ref={heroRef} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={heroIndex}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <motion.img
            src={HERO_SLIDES[heroIndex].img}
            alt="Luxury villa"
            style={{ y: heroY, width: "100%", height: "120%", objectFit: "cover", position: "absolute", top: "-10%" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Grain overlay */}
      <div style={{
        position: "absolute", inset: "-50%", zIndex: 2, pointerEvents: "none",
        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        animation: "grain 8s steps(10) infinite",
      }} />

      {/* Dark overlays */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        background: "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.6) 100%)",
      }} />

      {/* Hero Content */}
      <motion.div style={{ opacity: heroOpacity, position: "relative", zIndex: 4, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: "11px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            color: "#E8652D",
            marginBottom: "24px",
            fontWeight: 500,
          }}
        >
          Where
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 9vw, 140px)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-2px",
            marginBottom: "12px",
          }}
        >
          LUXURY
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 9vw, 140px)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-2px",
          }}
        >
          MEETS <span style={{ fontStyle: "italic", color: "#E8652D" }}>NATURE</span>
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={heroIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "15px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              marginTop: "32px",
              letterSpacing: "1px",
            }}
          >
            {HERO_SLIDES[heroIndex].tagline}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          style={{ marginTop: "48px" }}
        >
          <MagneticButton onClick={() => scrollTo("contact")}>Register Interest</MagneticButton>
        </motion.div>

        {/* Slide indicators */}
        <div style={{ position: "absolute", bottom: "48px", display: "flex", gap: "12px" }}>
          {HERO_SLIDES.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setHeroIndex(i)}
              style={{
                width: i === heroIndex ? "48px" : "24px",
                height: "2px",
                background: i === heroIndex ? "#E8652D" : "rgba(255,255,255,0.3)",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
