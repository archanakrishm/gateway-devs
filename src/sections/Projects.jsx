import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_IMAGES, PROJECT_STATS } from "../constants";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";

export default function Projects() {
  const [projImg, setProjImg] = useState(0);

  return (
    <section id="projects" className="py-30 px-12 max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex items-baseline gap-5 mb-3">
          <span className="font-serif text-[clamp(12px,1.5vw,16px)] text-accent font-medium tracking-[3px] uppercase">01</span>
          <span className="text-[11px] tracking-[4px] uppercase text-white/35">Our Projects</span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-[clamp(40px,6vw,80px)] font-light leading-[1.05] mb-20">
          Elysian <span className="italic">Meadows</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-10 items-start">
        <Reveal direction="left">
          <div className="img-reveal h-[600px] rounded">
            <AnimatePresence mode="wait">
              <motion.img
                key={projImg}
                src={PROJECT_IMAGES[projImg]}
                alt="Elysian Meadows"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </AnimatePresence>
            <div className="absolute bottom-6 left-6 right-6 z-[5] flex justify-between items-center">
              <div className="flex gap-2">
                {PROJECT_IMAGES.map((_, i) => (
                  <div key={i} onClick={() => setProjImg(i)} className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    i === projImg ? "bg-accent" : "bg-white/40"
                  }`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setProjImg((p) => (p - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length)} className="w-10 h-10 rounded-full border border-white/30 bg-black/30 backdrop-blur-[10px] text-white cursor-pointer flex items-center justify-center text-base">‹</button>
                <button onClick={() => setProjImg((p) => (p + 1) % PROJECT_IMAGES.length)} className="w-10 h-10 rounded-full border border-white/30 bg-black/30 backdrop-blur-[10px] text-white cursor-pointer flex items-center justify-center text-base">›</button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.2}>
          <div className="pt-10">
            <div className="text-[11px] tracking-[4px] uppercase text-accent mb-6">Featured Project</div>
            <p className="text-base font-light text-white/65 leading-[1.8] mb-10">
              With 38+ years of experience in residential, commercial, and second home development, Getaway has
              delivered over 5 million square feet of premium construction across India — responsible for
              quality craftsmanship, timely execution, and meticulous attention to detail ensuring every villa
              embodies the perfect fusion of luxury and nature.
            </p>

            <div className="grid grid-cols-2 gap-8 py-10 border-y border-white/[0.06]">
              {PROJECT_STATS.map((s, i) => (
                <div key={i}>
                  <div className="font-serif text-4xl font-normal text-accent leading-none">{s.val}</div>
                  <div className="text-[11px] tracking-[2px] uppercase text-white/35 mt-2">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <MagneticButton className="py-4 px-10 text-sm">Know More</MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
