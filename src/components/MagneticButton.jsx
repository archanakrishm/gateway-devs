import { useRef } from "react";

export default function MagneticButton({ children, onClick, className = "" }) {
  const ref = useRef(null);
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`border-none font-semibold cursor-pointer rounded-full relative overflow-hidden flex justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
}
