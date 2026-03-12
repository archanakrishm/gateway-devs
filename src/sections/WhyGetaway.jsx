import { IMAGES } from "../constants";
import Reveal from "../components/Reveal";
import ParallaxImage from "../components/ParallaxImage";
import Counter from "../components/Counter";

export default function WhyGetaway() {
  return (
    <section id="whygetaway" style={{ position: "relative" }}>
      <ParallaxImage src={IMAGES.nature} alt="Nature" style={{ height: "80vh", width: "100%" }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.9) 100%)",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "0 24px",
      }}>
        <Reveal>
          <div style={{
            fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase",
            color: "#E8652D", marginBottom: "24px",
          }}>02 · Why Getaway</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 300, lineHeight: 1.15, maxWidth: "800px", marginBottom: "48px",
          }}>
            Where <span style={{ fontStyle: "italic" }}>Vision</span> Becomes
            <br />Your <span style={{ fontStyle: "italic", color: "#E8652D" }}>Reality</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{
            fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.55)",
            lineHeight: 1.8, maxWidth: "600px", marginBottom: "48px",
          }}>
            Every Getaway villa is a testament to the art of living — thoughtfully designed,
            sustainably built, and maintained to perfection. We don't just build homes;
            we craft experiences that endure.
          </p>
        </Reveal>

        <div style={{ display: "flex", gap: "80px", marginTop: "24px" }}>
          <Counter end={38} suffix="+" label="Years of Legacy" />
          <Counter end={5} suffix="M+" label="Sq Ft Delivered" />
          <Counter end={200} suffix="+" label="Villas Built" />
        </div>
      </div>
    </section>
  );
}
