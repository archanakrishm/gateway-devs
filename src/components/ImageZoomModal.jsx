import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ImageZoomModal({ src, alt = "", isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && src && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-[44px] h-[44px] xl:w-[54px] xl:h-[54px] rounded-full bg-white/10 border border-white/30 text-white text-2xl flex items-center justify-center cursor-pointer z-[101]"
          >
            &times;
          </button>
          <motion.img
            key={src}
            src={src}
            alt={alt}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-[20px] shadow-2xl cursor-zoom-out"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
