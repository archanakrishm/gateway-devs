import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;

export default function ImageZoomModal({ src, alt = "", isOpen, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragState = useRef({ dragging: false, startX: 0, startY: 0, originX: 0, originY: 0 });

  const resetView = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  const zoomOut = () =>
    setZoom((z) => {
      const next = Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2));
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });

  useEffect(() => {
    if (!isOpen) return;
    resetView();
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      else if (e.key === "+" || e.key === "=") zoomIn();
      else if (e.key === "-" || e.key === "_") zoomOut();
      else if (e.key === "0") resetView();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, src, onClose]);

  const handleWheel = (e) => {
    if (!isOpen) return;
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const handlePointerDown = (e) => {
    if (zoom <= 1) return;
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragState.current.dragging) return;
    setOffset({
      x: dragState.current.originX + (e.clientX - dragState.current.startX),
      y: dragState.current.originY + (e.clientY - dragState.current.startY),
    });
  };

  const handlePointerUp = (e) => {
    dragState.current.dragging = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (zoom === 1) zoomIn();
    else resetView();
  };

  return (
    <AnimatePresence>
      {isOpen && src && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onWheel={handleWheel}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 w-[44px] h-[44px] xl:w-[54px] xl:h-[54px] rounded-full bg-white/10 border border-white/30 text-white text-2xl flex items-center justify-center cursor-pointer z-[101]"
          >
            &times;
          </button>

          {/* Zoom controls */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-3 py-2 z-[101] backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={zoomOut}
              aria-label="Zoom out"
              disabled={zoom <= MIN_ZOOM}
              className="w-[36px] h-[36px] rounded-full bg-white/10 border border-white/30 text-white text-xl flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &minus;
            </button>
            <button
              type="button"
              onClick={resetView}
              aria-label="Reset zoom"
              className="text-white text-sm min-w-[48px] text-center cursor-pointer"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              type="button"
              onClick={zoomIn}
              aria-label="Zoom in"
              disabled={zoom >= MAX_ZOOM}
              className="w-[36px] h-[36px] rounded-full bg-white/10 border border-white/30 text-white text-xl flex items-center justify-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>

          <motion.img
            key={src}
            src={src}
            alt={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={handleImageClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            draggable={false}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
              transition: dragState.current.dragging ? "none" : "transform 0.2s ease-out",
              cursor: zoom > 1 ? "grab" : "zoom-in",
            }}
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-[20px] shadow-2xl select-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
