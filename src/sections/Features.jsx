import { FEATURES } from "../constants";
import Reveal from "../components/Reveal";

export default function Features() {
  return (
    <section className="bg-white px-[20px] py-[26px] xl:py-20 xl:px-[80px] grid xl:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[15px] xl:gap-15 w-full mx-auto border-b border-white/5">
      <div className="relative max-w-[1270px] mx-auto grid xl:grid-cols-2 gap-[15px] xl:gap-15 w-full">
      {FEATURES.map((f, i) => (
        <Reveal key={i} delay={i * 0.15}>
          <div className="flex gap-5 items-center bg-light-gray xl:bg-white rounded-[10px] px-[20px] py-[17px] xl:px-0 xl:py-0">
            <figure className="text-2xl text-accent leading-none mt-1 shrink-0">
              <img src={f.icon} alt="image" className="w-[34px] h-[33px] xl:w-[87px] xl:h-[87px]" />
            </figure>
            <h4 className="text-[15px] xl:text-[26px] font-medium text-[#606060] leading-[29px]">{f.title}</h4>
          </div>
        </Reveal>
      ))}
      </div>
    </section>
  );
}
