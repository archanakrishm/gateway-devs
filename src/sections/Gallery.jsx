import { GALLERY_ITEMS } from "../constants";
import Reveal from "../components/Reveal";

export default function Gallery() {
  return (
    <section style={{ padding: "120px 48px", maxWidth: "1400px", margin: "0 auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "300px 300px",
        gap: "16px",
      }}>
        {GALLERY_ITEMS.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="img-reveal" style={{
              gridColumn: item.span,
              gridRow: item.rSpan,
              height: "100%",
              borderRadius: "4px",
              overflow: "hidden",
            }}>
              <img src={item.img} alt="Villa" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
