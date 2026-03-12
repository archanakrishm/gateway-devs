import { motion } from "motion/react";

export default function Marquee({ text, speed = 30 }) {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "20px 0" }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        style={{ display: "inline-block" }}
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px, 7vw, 100px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.15)",
            marginRight: "80px",
            display: "inline-block",
          }}>
            {text} ✦
          </span>
        ))}
      </motion.div>
    </div>
  );
}
