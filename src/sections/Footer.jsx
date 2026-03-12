import { NAV_LINKS, SOCIAL_LINKS } from "../constants";

export default function Footer({ scrollTo }) {
  return (
    <footer style={{
      padding: "60px 48px 40px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      maxWidth: "1400px",
      margin: "0 auto",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "32px", fontWeight: 600, letterSpacing: "1px", marginBottom: "8px",
          }}>GETAWAY</div>
          <div style={{
            fontSize: "12px", color: "rgba(255,255,255,0.35)", fontWeight: 300,
          }}>Where Luxury Meets Nature</div>
        </div>
        <div style={{ display: "flex", gap: "36px" }}>
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className="nav-link"
              onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, ""))}
              style={{
                fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)", cursor: "pointer",
              }}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
          © 2026 Getaway Developers. All rights reserved.
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {SOCIAL_LINKS.map((s) => (
            <span key={s} className="nav-link" style={{
              fontSize: "12px", color: "rgba(255,255,255,0.35)", cursor: "pointer",
            }}>{s}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
