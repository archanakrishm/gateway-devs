import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../constants";
import Reveal from "../components/Reveal";

export default function Team() {
  return (
    <section id="team" style={{ padding: "120px 48px", maxWidth: "1200px", margin: "0 auto" }}>
      <Reveal>
        <div style={{
          fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase",
          color: "#E8652D", marginBottom: "12px",
        }}>Leadership</div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 300, lineHeight: 1.1, marginBottom: "80px",
        }}>
          The <span style={{ fontStyle: "italic" }}>Visionaries</span>
        </h2>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
        {TEAM_MEMBERS.map((member, i) => (
          <Reveal key={i} delay={i * 0.15}>
            <motion.div
              className="team-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderRadius: "4px", overflow: "hidden", background: "#111" }}
            >
              <div style={{ height: "420px", overflow: "hidden" }}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={member.img}
                  alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }}
                />
              </div>
              <div style={{ padding: "28px 24px" }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "24px", fontWeight: 500, marginBottom: "4px",
                }}>{member.name}</div>
                <div style={{
                  fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase",
                  color: "#E8652D", fontWeight: 400,
                }}>{member.role}</div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
