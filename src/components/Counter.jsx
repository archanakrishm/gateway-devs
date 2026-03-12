import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

export default function Counter({ end, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.max(1, Math.floor(end / 60));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(interval); }
      else setCount(start);
    }, 25);
    return () => clearInterval(interval);
  }, [isInView, end]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(48px, 5vw, 72px)",
        fontWeight: 300,
        color: "#E8652D",
        lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: "13px",
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.5)",
        marginTop: "12px",
      }}>
        {label}
      </div>
    </div>
  );
}
