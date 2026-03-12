import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Reveal({ children, delay = 0, direction = "up", className = "", once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const dirs = { up: [60, 0], down: [-60, 0], left: [0, -60], right: [0, 60] };
  const [y, x] = dirs[direction] || dirs.up;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
