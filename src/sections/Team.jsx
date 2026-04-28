import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../constants";
import Reveal from "../components/Reveal";
import humanIcon from "../assets/images/human-icon.png";

export default function Team() {
  return (
    <section id="team" className="py-[40px] xl:py-[63px] px-[20px] xl:px-[85px] mx-auto bg-grey">
      <div className="max-w-[1270px] mx-auto">
        <Reveal>
          <h2 className="text-[30px] xl:text-[60px]  text-black capitalize mb-[20px] text-center  font-semibold">Teams</h2>
        </Reveal>

        <div className="flex flex-col gap-[15px] md:mt-[110px]">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <motion.div
                className={`team-card overflow-hidden max-xl:flex max-xl:justify-center max-xl:items-center max-xl:gap-[36px] md:p-[52px] md:bg-white rounded-[18px] ${i === 1 ? "max-xl:flex-row-reverse" : ""}`}
                // whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >

                <div className="flex justify-between gap-[89px] md:max-w-[816px] mx-auto">
                  <div className={`max-md:flex max-md:gap-[36px] max-md:justify-center max-md:items-center ${i === 1 ? "max-md:flex-row-reverse" : ""}`}>
                    <div className="rounded-[183px] w-[112px] h-[179px] xl:w-[153px] xl:h-[245px] bg-grey-light xl:mx-auto flex items-center justify-center">
                      <img
                        src={humanIcon}
                        alt={member.name}
                        className="w-[60px] h-[60px] xl:w-[80px] xl:h-[80px] object-contain"
                      />
                    </div>
                    <div className="py-5">
                      <h3 className="text-[18px] xl:text-[18px] font-semibold text-body-title xl:text-center">{member.name}</h3>
                      <span className="text-[18px] xl:text-[18px] text-body-title xl:text-center block w-full">{member.role}</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-[#383838] text-[22px]">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
