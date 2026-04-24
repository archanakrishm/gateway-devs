import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform } from "motion/react";
import { HERO_SLIDES } from "./constants";

// ─── Sections ───
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Projects from "./sections/Projects";
import WhyGetaway from "./sections/WhyGetaway";
import Gallery from "./sections/Gallery";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WhyGetawayTwo from "./sections/WhyGatawayTwo";

// ─── Components ───
import Marquee from "./components/Marquee";

// ─── Fonts (injected via style tag) ───
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@200;300;400;500;600&display=swap&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
fontLink.rel = "stylesheet";
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

export default function GetawayWebsite() {
  const [heroIndex, setHeroIndex] = useState(0);
  // const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 80);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((p) => (p + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-mono bg-dark text-white overflow-x-hidden min-h-screen">
      {/* <Navbar scrolled={scrolled} scrollTo={scrollTo} /> */}
      <Hero
        heroRef={heroRef}
        heroIndex={heroIndex}
        setHeroIndex={setHeroIndex}
        heroY={heroY}
        heroOpacity={heroOpacity}
        scrollTo={scrollTo}
      />
      <Features />
      {/* <Marquee text="Luxury Living · Elysian Meadows · Where Nature Meets Design" /> */}
      <Projects />
      {/* <div className="pt-[27px] xl:pt-[89px] relative bg-white"></div> */}
      {/* <WhyGetaway /> */}
      <WhyGetawayTwo />

      {/* <Gallery /> */}
      <Team />
            {/* <div className="pt-[27px] xl:pt-[89px] relative bg-white"></div> */}

      <Contact />
      {/* <Footer scrollTo={scrollTo} /> */}
    </div>
  );
}
