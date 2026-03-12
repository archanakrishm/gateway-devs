import { motion } from "motion/react";
import { NAV_LINKS } from "../constants";
import MagneticButton from "../components/MagneticButton";

export default function Navbar({ scrolled, scrollTo }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "16px 48px" : "28px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.5s ease",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}
        onClick={() => scrollTo("home")}
      >
        <div style={{
          width: "36px",
          height: "36px",
          background: "linear-gradient(135deg, #E8652D, #D4451A)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "18px",
        }}>G</div>
        <div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "1px",
            lineHeight: 1.1,
          }}>GETAWAY</div>
          <div style={{
            fontSize: "8px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            fontWeight: 300,
          }}>DEVELOPERS</div>
        </div>
      </motion.div>

      <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <span
            key={link}
            className="nav-link"
            onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, ""))}
            style={{
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {link}
          </span>
        ))}
        <MagneticButton onClick={() => scrollTo("contact")} style={{ padding: "12px 28px", fontSize: "11px" }}>
          Register Interest
        </MagneticButton>
      </div>
    </motion.nav>
  );
}
