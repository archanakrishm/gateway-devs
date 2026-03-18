
import { useState } from "react";
import { IMAGES } from "../constants";
import Reveal from "../components/Reveal";
import ParallaxImage from "../components/ParallaxImage";
import Counter from "../components/Counter";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_IMAGES, PROJECT_STATS, WHY_BG } from "../constants";
import MagneticButton from "../components/MagneticButton";
import circleArrowLeft from "../assets/images/circle-arrow-left.svg";
import circleArrowRight from "../assets/images/circle-arrow-right.svg";

export default function WhyGetaway() {
  const [projImg, setProjImg] = useState(0);

  return (
    <section id="projects" className="py-[38px] xl:py-30 px-12 xl:px-[80px]  mx-auto relative">
      <img src={WHY_BG} className="w-full object-cover absolute top-0 left-0 h-full" />
      <div className="grid xl:grid-cols-2 gap-[20px] xl:gap-10 items-start justify-between max-w-[1270px] mx-auto max-xl:flex-col-reverse max-xl:flex">
        <Reveal direction="left" delay={0.2} className="w-full">
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
          <div className="img-reveal max-w-[522px]  rounded-[30px] bg-black-mask py-[25px] px-[27px] max-xl:mb-[27px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={projImg}
                src={PROJECT_IMAGES[projImg]}
                alt="Elysian Meadows"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-[268px] md:h-[452px] object-cover  top-0 left-0 rounded-[30px]"
              />
            </AnimatePresence>
            <div className="z-[5] flex justify-between items-center">
              <div className="flex gap-2 w-full justify-between gap-2 pt-[49px]">
                <button onClick={() => setProjImg((p) => (p - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length)} className="w-[40px] h-[40px] xl:w-[70px] xl:h-[70px]  rounded-full border border-white/30 bg-black/30 backdrop-blur-[10px] text-white cursor-pointer flex items-center justify-center text-base"><img src={circleArrowLeft} /></button>
                <button onClick={() => setProjImg((p) => (p + 1) % PROJECT_IMAGES.length)} className="w-[40px] h-[40px] xl:w-[70px] xl:h-[70px]  rounded-full border border-white/30 bg-black/30 backdrop-blur-[10px] text-white cursor-pointer flex items-center justify-center text-base"><img src={circleArrowRight} /></button>
              </div>
            </div>
            
          </div>
          <MagneticButton onClick={() => scrollTo("contact")} className="py-4 px-10 text-[14px] xl:text-[20px] bg-orange text-white xl:hidden  gap-[14px]">Know More
              <span className=" w-[57px] h-[57px] flex  justify-center items-center white-play relative"></span>
            </MagneticButton>
            </div>

        </Reveal>
        <Reveal direction="right">
          <div className="img-reveal rounded">
            <h2 className="font-black text-[38px] xl:text-[70px] uppercase pb-[33px] xl:pb-[57px]">Why Getaway</h2>
            <div className="flex items-baseline gap-4 flex-col xl:pb-[73px]">
              <span className="text-orange text-[35px] xl:text-[60px]  font-semibold leading-0 xl:leading-[60px]">02</span>
              <h3 className="text-[35px] xl:text-[60px] font-semibold leading-[60px]">Getaway</h3>
              <p className="xl:max-w-xl text-white leading-relaxed text-[13px]  md:text-[20px]">
                With 38+ years of experience in residential,
                commercial, second home development and
                has delivered over 5 million square feet
                constructed across India… responsible for
                quality construction, timely execution and
                completion ensuring every Villa
              </p>

            </div>
            <MagneticButton onClick={() => scrollTo("contact")} className="py-4 px-10 text-[20px] bg-orange text-white max-xl:hidden ">Know More
              <span className=" w-[57px] h-[57px] flex  justify-center items-center white-play relative"></span>
            </MagneticButton>
          </div>

        </Reveal>
      </div>
    </section>
  );
}
