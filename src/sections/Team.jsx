import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../constants";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";

export default function Team() {
  return (
    <section id="team" className="py-[40px] xl:py-[100px] px-[20px] xl:px-[85px] mx-auto bg-grey">
      <div className="max-w-[1270px] mx-auto">
      <Reveal>
        <h2 className="text-[30px] xl:text-[60px] tracking-[4px] text-body-title uppercase font-bold mb-[20px] xl:mb-[132px] text-center xl:text-left">team</h2>
      </Reveal>

      <div className="grid xl:grid-cols-3 gap-10">
        {TEAM_MEMBERS.map((member, i) => (
          <Reveal key={i} delay={i * 0.15}>
            <motion.div
              className={`team-card overflow-hidden max-xl:flex max-xl:justify-center max-xl:items-center max-xl:gap-[36px] ${i === 1 ? "max-xl:flex-row-reverse" : ""}`}
              // whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-[183px] w-[112px] xl:w-[333px] bg-grey-light xl:mx-auto">
                <motion.img
                  // whileHover={{ scale: 1.05 }}
                  // transition={{ duration: 0.6 }}
                  src={member.img}
                  alt={member.name}
                  className="w-[112px] h-[179px] xl:w-[333px] xl:h-[532px] object-cover grayscale-[30%]"
                />
              </div>
              <div className="py-7">
                <h3 className="text-[20px] xl:text-[40px] font-semibold text-body-title xl:text-center">{member.name}</h3>
                <span className="text-[20px] xl:text-[40px] text-body-title xl:text-center block w-full">{member.role}</span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
      <div className="flex justify-center xl:justify-end mt-[44px] xl:mt-[190px]">
   <MagneticButton onClick={() => scrollTo("contact")} className="py-4 px-10 text-[14px] xl:text-[20px] bg-orange text-white xl:hidden  gap-[14px]">Know More
                <span className=" w-[57px] h-[57px] flex  justify-center items-center white-play relative"></span>
              </MagneticButton>
      </div>
    
      </div>
    </section>
  );
}
