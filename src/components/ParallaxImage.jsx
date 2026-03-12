import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxImage({ src, alt, speed = 0.15, style = {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);
  return (
    <div ref={ref} style={{ overflow: "hidden", position: "relative", ...style }}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, width: "100%", height: "130%", objectFit: "cover", position: "absolute", top: "-15%", left: 0 }}
      />
    </div>
  );
}
