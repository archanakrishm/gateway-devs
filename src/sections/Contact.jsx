import { CONTACT_INFO } from "../constants";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" style={{ position: "relative", padding: "160px 48px", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #111 0%, #0A0A0A 50%, #151010 100%)",
      }} />
      <div style={{
        position: "absolute", top: 0, right: "-10%", width: "50%", height: "100%", opacity: 0.08,
        background: `radial-gradient(circle, #E8652D, transparent 70%)`,
      }} />

      <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
        <Reveal direction="left">
          <div>
            <div style={{
              fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase",
              color: "#E8652D", marginBottom: "24px",
            }}>Get In Touch</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 300, lineHeight: 1.15, marginBottom: "48px",
            }}>
              Begin Your <span style={{ fontStyle: "italic" }}>Journey</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="feature-item" style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "20px", color: "#E8652D", flexShrink: 0, marginTop: "2px" }}>{c.icon}</div>
                  <div>
                    <div style={{
                      fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)", marginBottom: "6px",
                    }}>{c.label}</div>
                    <div style={{ fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.2}>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "4px",
            padding: "48px",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "28px", fontWeight: 400, marginBottom: "36px",
            }}>Register Interest</div>
            {["Full Name", "Email Address", "Phone Number"].map((placeholder, i) => (
              <div key={i} style={{ marginBottom: "24px" }}>
                <label style={{
                  fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "8px",
                }}>{placeholder}</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  style={{
                    width: "100%", padding: "14px 0", border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.1)", background: "transparent",
                    color: "#F5F0EB", fontSize: "15px", fontFamily: "'Outfit', sans-serif",
                    outline: "none", transition: "border-color 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "#E8652D")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.1)")}
                />
              </div>
            ))}
            <div style={{ marginBottom: "24px" }}>
              <label style={{
                fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)", display: "block", marginBottom: "8px",
              }}>Message</label>
              <textarea
                placeholder="Tell us about your dream getaway..."
                rows={3}
                style={{
                  width: "100%", padding: "14px 0", border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)", background: "transparent",
                  color: "#F5F0EB", fontSize: "15px", fontFamily: "'Outfit', sans-serif",
                  outline: "none", resize: "none", transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#E8652D")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <MagneticButton style={{ width: "100%", marginTop: "16px" }}>Submit Enquiry</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
