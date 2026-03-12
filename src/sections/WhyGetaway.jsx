import { IMAGES } from "../constants";
import Reveal from "../components/Reveal";
import ParallaxImage from "../components/ParallaxImage";
import Counter from "../components/Counter";

export default function WhyGetaway() {
  return (
    <section id="whygetaway" className="relative">
      <ParallaxImage src={IMAGES.nature} alt="Nature" className="h-[80vh] w-full" />
      <div className="bg-why-overlay absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <Reveal>
          <div className="text-[11px] tracking-[4px] uppercase text-accent mb-6">02 · Why Getaway</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-[clamp(36px,5vw,72px)] font-light leading-[1.15] max-w-[800px] mb-12">
            Where <span className="italic">Vision</span> Becomes
            <br />Your <span className="italic text-accent">Reality</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[15px] font-light text-white/55 leading-[1.8] max-w-[600px] mb-12">
            Every Getaway villa is a testament to the art of living — thoughtfully designed,
            sustainably built, and maintained to perfection. We don't just build homes;
            we craft experiences that endure.
          </p>
        </Reveal>

        <div className="flex gap-20 mt-6">
          <Counter end={38} suffix="+" label="Years of Legacy" />
          <Counter end={5} suffix="M+" label="Sq Ft Delivered" />
          <Counter end={200} suffix="+" label="Villas Built" />
        </div>
      </div>
    </section>
  );
}
