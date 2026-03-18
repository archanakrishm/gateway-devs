import { useState, useRef } from "react";
import { motion } from "motion/react";

export default function MagneticButton({ children, onClick, className = "" }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - rect.left - rect.width / 2) * 0.15, y: (e.clientY - rect.top - rect.height / 2) * 0.15 });
  };
  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={onClick}
      className={`border-none font-semibold cursor-pointer rounded-full relative overflow-hidden flex justify-center items-center ${className}`}
    >
      {children}
      {/* <span className="relative z-10 flex justify-center items-center">{children}</span> */}
    </motion.button>
  );
}
