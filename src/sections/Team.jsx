import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../constants";
import Reveal from "../components/Reveal";

export default function Team() {
  return (
    <section id="team" className="py-30 px-12 max-w-[1200px] mx-auto">
      <Reveal>
        <div className="text-[11px] tracking-[4px] uppercase text-accent mb-3">Leadership</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] mb-20">
          The <span className="italic">Visionaries</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-3 gap-10">
        {TEAM_MEMBERS.map((member, i) => (
          <Reveal key={i} delay={i * 0.15}>
            <motion.div
              className="team-card rounded overflow-hidden bg-white"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-[420px] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[30%]"
                />
              </div>
              <div className="py-7 px-6">
                <div className="font-serif text-2xl font-medium mb-1">{member.name}</div>
                <div className="text-xs tracking-[2px] uppercase text-accent font-normal">{member.role}</div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
