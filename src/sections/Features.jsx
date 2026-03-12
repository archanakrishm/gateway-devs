import { FEATURES } from "../constants";
import Reveal from "../components/Reveal";

export default function Features() {
  return (
    <section className="py-20 px-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-15 max-w-[1200px] mx-auto border-b border-white/5">
      {FEATURES.map((f, i) => (
        <Reveal key={i} delay={i * 0.15}>
          <div className="flex gap-5 items-start">
            <div className="text-2xl text-accent leading-none mt-1 shrink-0">{f.icon}</div>
            <div>
              <div className="font-serif text-[22px] font-medium mb-2.5">{f.title}</div>
              <div className="text-sm font-light text-white/50 leading-[1.7]">{f.desc}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
