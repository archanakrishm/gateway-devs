import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxImage({ src, alt, speed = 0.15, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);
  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-[130%] object-cover absolute -top-[15%] left-0"
        style={{ y }}
      />
    </div>
  );
}
