import { motion, AnimatePresence } from "motion/react";
import { HERO_SLIDES, HOME_BG } from "../constants";
import MagneticButton from "../components/MagneticButton";

export default function Hero({ heroRef, heroOpacity, scrollTo }) {
  return (
    <section id="home" ref={heroRef} className="relative h-screen overflow-hidden">
      <img
            src={HOME_BG}
            alt="Luxury villa"
            className="w-full h-[120%] object-cover absolute -top-[10%]"
         />


      {/* Hero Content */}
      <motion.div className="relative z-[4] h-full flex flex-col justify-center items-center text-center px-6 xl:pt-[174px]" style={{ opacity: heroOpacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-[33px] xl:text-[71px] text-white mb-6 font-extralight leading-[0]"
        >
          Where
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[78px] xl:text-[clamp(78px,186px,186px)] font-black leading-[0.9] mb-0"
        >
          LUXURY
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[43px]  xl:text-[clamp(48px,102px,102px)] font-bold leading-[0.9]"
        >
          MEETS NATURE
        </motion.h1>

        {/* <AnimatePresence mode="wait">
          <motion.p
            key={heroIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="text-[15px] font-light text-white/60 mt-8 tracking-[1px]"
          >
            {HERO_SLIDES[heroIndex].tagline}
          </motion.p>
        </AnimatePresence> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-[22px] xl:mt-12"
        >
          <MagneticButton onClick={() => scrollTo("contact")} className="py-[6px] xl:py-4 ps-[20px] pe-[6px] xl:ps-[49px] xl:pe-[12px] text-[14px] xl:text-[26px] text-black bg-white gap-[20px] xl:gap-[37px]">Register Interest
            <span className="bg-black w-[29px] h-[29px] xl:w-[57px] xl:h-[57px] flex rounded-full justify-center items-center orange-play relative"></span>
          </MagneticButton>
        </motion.div>

      </motion.div>
    </section>
  );
}
