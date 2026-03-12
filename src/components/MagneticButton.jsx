import { useState, useRef } from "react";
import { motion } from "motion/react";

export default function MagneticButton({ children, onClick, style = {} }) {
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
      style={{
        background: "linear-gradient(135deg, #E8652D 0%, #D4451A 100%)",
        color: "#fff",
        border: "none",
        padding: "16px 40px",
        fontSize: "14px",
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 500,
        letterSpacing: "2px",
        textTransform: "uppercase",
        cursor: "pointer",
        borderRadius: "0",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </motion.button>
  );
}
