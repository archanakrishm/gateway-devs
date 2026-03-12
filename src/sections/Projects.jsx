import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECT_IMAGES, PROJECT_STATS } from "../constants";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";

export default function Projects() {
  const [projImg, setProjImg] = useState(0);

  return (
    <section id="projects" style={{ padding: "120px 48px", maxWidth: "1400px", margin: "0 auto" }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "12px" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(12px, 1.5vw, 16px)",
            color: "#E8652D",
            fontWeight: 500,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}>01</span>
          <span style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}>Our Projects</span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(40px, 6vw, 80px)",
          fontWeight: 300,
          lineHeight: 1.05,
          marginBottom: "80px",
        }}>
          Elysian <span style={{ fontStyle: "italic" }}>Meadows</span>
        </h2>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
        <Reveal direction="left">
          <div className="img-reveal" style={{ height: "600px", borderRadius: "4px" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={projImg}
                src={PROJECT_IMAGES[projImg]}
                alt="Elysian Meadows"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
              />
            </AnimatePresence>
            <div style={{
              position: "absolute", bottom: "24px", left: "24px", right: "24px", zIndex: 5,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <div style={{ display: "flex", gap: "8px" }}>
                {PROJECT_IMAGES.map((_, i) => (
                  <div key={i} onClick={() => setProjImg(i)} style={{
                    width: "8px", height: "8px", borderRadius: "50%", cursor: "pointer",
                    background: i === projImg ? "#E8652D" : "rgba(255,255,255,0.4)",
                    transition: "all 0.3s",
                  }} />
                ))}
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={() => setProjImg((p) => (p - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length)} style={{
                  width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(0,0,0,0.3)", backdropFilter: "blur(10px)", color: "#fff", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px",
                }}>‹</button>
                <button onClick={() => setProjImg((p) => (p + 1) % PROJECT_IMAGES.length)} style={{
                  width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(0,0,0,0.3)", backdropFilter: "blur(10px)", color: "#fff", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px",
                }}>›</button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.2}>
          <div style={{ paddingTop: "40px" }}>
            <div style={{
              fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase",
              color: "#E8652D", marginBottom: "24px",
            }}>Featured Project</div>
            <p style={{
              fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "40px",
            }}>
              With 38+ years of experience in residential, commercial, and second home development, Getaway has
              delivered over 5 million square feet of premium construction across India — responsible for
              quality craftsmanship, timely execution, and meticulous attention to detail ensuring every villa
              embodies the perfect fusion of luxury and nature.
            </p>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", padding: "40px 0",
              borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              {PROJECT_STATS.map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "36px", fontWeight: 400, color: "#E8652D", lineHeight: 1,
                  }}>{s.val}</div>
                  <div style={{
                    fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)", marginTop: "8px",
                  }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "40px" }}>
              <MagneticButton>Know More</MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
