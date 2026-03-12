import { GALLERY_ITEMS } from "../constants";
import Reveal from "../components/Reveal";

export default function Gallery() {
  return (
    <section className="py-30 px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-3 grid-rows-[300px_300px] gap-4">
        {GALLERY_ITEMS.map((item, i) => (
          <div key={i} style={{ gridColumn: item.span, gridRow: item.rSpan }}>
            <Reveal delay={i * 0.1}>
              <div className="img-reveal h-full rounded overflow-hidden">
                <img src={item.img} alt="Villa" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
