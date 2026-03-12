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
    <div ref={ref} className="text-center">
      <div className="font-serif text-[clamp(48px,5vw,72px)] font-light text-accent leading-none">
        {count}{suffix}
      </div>
      <div className="font-sans text-[13px] tracking-[2.5px] uppercase text-white/50 mt-3">
        {label}
      </div>
    </div>
  );
}
