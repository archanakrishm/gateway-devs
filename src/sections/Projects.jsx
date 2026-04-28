import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_IMAGES, PROJECT_STATS, PROJECT_BG } from "../constants";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import ImageZoomModal from "../components/ImageZoomModal";
import circleArrowLeft from "../assets/images/circle-arrow-left.svg";
import circleArrowRight from "../assets/images/circle-arrow-right.svg";



export default function Projects() {
  const [projImg, setProjImg] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-[38px] xl:py-30 px-4 xl:px-[80px]  mx-auto relative">
      <img src={PROJECT_BG} className="w-full object-cover absolute top-0 left-0 h-full" />
      <div className="grid xl:grid-cols-2 gap-[20px] xl:gap-10 items-start max-w-[1270px] mx-auto">
        <Reveal direction="left">
          <div className="img-reveal">
            <h2 className="font-black text-[41px] xl:text-[61px] uppercase pb-[33px] xl:pb-[57px]">Project</h2>
            <div className="flex items-baseline gap-4 flex-col xl:pb-[73px]">
              <span className="text-orange text-[35px] xl:text-[52px] font-semibold leading-0 xl:leading-[60px]">01</span>
              <h3 className="text-[35px] xl:text-[52px] font-semibold xl:leading-[60px]">Elysian Meadows</h3>
              <p className="xl:max-w-xl text-white leading-relaxed text-[14px] md:text-[17px]">
                Elysian Meadows is a timeless retreat where Balinese 
                architecture meets contemporary elegance. Each villa 
                draws from tropical forms, natural textures, and 
                open-space rhythms creating an immersive living 
                experience where light, water, and lush greenery come 
                together in seamless harmony. More than a residence, 
                Elysian Meadows is a sanctuary where architectural 
                beauty, landscape, and lifestyle exist in perfect balance.
              </p>
            </div>
            <MagneticButton onClick={() => navigate("/projects")} className="py-3 px-5 text-[17px] bg-orange text-white max-xl:hidden gap-[14px]">Know More
              <span className=" w-[57px] h-[57px] flex  justify-center items-center white-play relative"></span>
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.2} >
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
            <div className="img-reveal max-w-[522px]  rounded-[30px] bg-black-mask py-[25px] px-[27px] xl:ml-auto max-xl:mb-[27px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={projImg}
                  src={PROJECT_IMAGES[projImg]}
                  alt="Elysian Meadows"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  onClick={() => setZoomOpen(true)}
                  className="w-full h-[268px] md:h-[452px] object-cover  top-0 left-0 rounded-[30px] cursor-zoom-in"
                />
              </AnimatePresence>
              <div className="z-[5] flex justify-between items-center">
                <div className="flex gap-2 w-full justify-between gap-2 pt-[30px] xl:pt-[49px]">
                  <button onClick={() => setProjImg((p) => (p - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length)} className="w-[40px] h-[40px] xl:w-[70px] xl:h-[70px] rounded-full text-white cursor-pointer flex items-center justify-center text-base"><img src={circleArrowLeft} /></button>
                  <button onClick={() => setProjImg((p) => (p + 1) % PROJECT_IMAGES.length)} className="w-[40px] h-[40px] xl:w-[70px] xl:h-[70px] rounded-full text-white cursor-pointer flex items-center justify-center text-base"><img src={circleArrowRight} /></button>
                </div>
              </div>
            </div>
            <MagneticButton onClick={() => navigate("/projects")} className="py-4 px-10 text-[14px] xl:text-[20px] bg-orange text-white xl:hidden gap-[14px]">Know More
              <span className=" w-[57px] h-[57px] flex  justify-center items-center white-play relative"></span>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
      <ImageZoomModal
        src={PROJECT_IMAGES[projImg]}
        alt="Elysian Meadows"
        isOpen={zoomOpen}
        onClose={() => setZoomOpen(false)}
      />
    </section>
  );
}
