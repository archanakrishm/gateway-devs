import { FEATURES } from "../constants";
import Reveal from "../components/Reveal";

export default function Features() {
  return (
    <section style={{
      padding: "80px 48px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "60px",
      maxWidth: "1200px",
      margin: "0 auto",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      {FEATURES.map((f, i) => (
        <Reveal key={i} delay={i * 0.15}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{
              fontSize: "24px",
              color: "#E8652D",
              lineHeight: 1,
              marginTop: "4px",
              flexShrink: 0,
            }}>{f.icon}</div>
            <div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "22px",
                fontWeight: 500,
                marginBottom: "10px",
              }}>{f.title}</div>
              <div style={{
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
              }}>{f.desc}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
