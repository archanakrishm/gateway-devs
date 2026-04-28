import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../constants";
import Reveal from "../components/Reveal";
import humanIcon from "../assets/images/human-icon.png";

export default function Team() {
  return (
    <section id="team" className="py-[20px] xl:py-[63px] px-[20px] xl:px-[85px] mx-auto bg-grey">
      <div className="max-w-[1052px] mx-auto">
        <Reveal>
          <h2 className="text-[30px] xl:text-[60px]  text-black capitalize md:mb-[20px] md:mb-[82px] text-center  font-semibold hidden md:block">Teams</h2>
        </Reveal>

        <div className="flex flex-col gap-[15px]">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <motion.div
                className={`team-card overflow-hidden max-xl:flex max-xl:justify-center max-xl:items-center max-xl:gap-[36px] p-[25px] md:p-[52px] bg-white rounded-[10px] md:rounded-[18px] ${i === 1 ? "max-xl:flex-row-reverse" : ""}`}
                // whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >

                <div className="flex justify-between gap-[15px] md:gap-[89px] w-full md:max-w-[816px] mx-auto items-center">
                  <div className="flex flex-col gap-[10px] md:gap-[20px] justify-center items-center max-md:min-w-[120px]">
                    <div className="rounded-[183px] w-[65px] h-[104px] md:w-[153px] md:h-[245px] bg-grey-light xl:mx-auto flex items-center justify-center">
                      <img
                        src={humanIcon}
                        alt={member.name}
                        className="object-contain"
                      />
                    </div>
                    <div className="">
                      <h3 className="text-[14px] md:text-[18px] font-semibold text-body-title text-center">{member.name}</h3>
                      <span className="text-[14px] md:text-[18px] text-body-title xl:text-center block w-full text-center">{member.role}</span>
                    </div>
                  </div>
                  <div className="block">
                    <p className="text-[#383838] text-[14px] md:text-[22px]">{member.description}</p>
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
