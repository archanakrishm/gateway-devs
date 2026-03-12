import { motion } from "motion/react";

export default function Marquee({ text, speed = 30 }) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="font-serif text-[clamp(48px,7vw,100px)] font-light italic text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] mr-20 inline-block">
            {text} ✦
          </span>
        ))}
      </motion.div>
    </div>
  );
}
