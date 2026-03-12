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

// ─── Components ───
import Marquee from "./components/Marquee";

// ─── Fonts (injected via style tag) ───
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@200;300;400;500;600&display=swap";
fontLink.rel = "stylesheet";
if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
  document.head.appendChild(fontLink);
}

// ─── Global Styles ───
const GLOBAL_STYLES = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  ::selection { background: #E8652D; color: #fff; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0A0A0A; }
  ::-webkit-scrollbar-thumb { background: #E8652D; }
  html { scroll-behavior: smooth; }
  a { text-decoration: none; color: inherit; }
  .nav-link { position: relative; cursor: pointer; }
  .nav-link::after {
    content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px;
    background: #E8652D; transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .nav-link:hover::after { width: 100%; }
  .img-reveal { position: relative; overflow: hidden; }
  .img-reveal img { transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
  .img-reveal:hover img { transform: scale(1.05); }
  .team-card { position: relative; overflow: hidden; cursor: pointer; }
  .team-card::before {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 0;
    background: linear-gradient(transparent, rgba(232,101,45,0.15));
    transition: height 0.5s ease; z-index: 1;
  }
  .team-card:hover::before { height: 100%; }
  .feature-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 32px 0; }
  .feature-item:hover { border-bottom-color: #E8652D; }
  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -10%); }
    30% { transform: translate(3%, -15%); }
    50% { transform: translate(-15%, 5%); }
    70% { transform: translate(8%, 10%); }
    90% { transform: translate(-10%, 15%); }
  }
`;

export default function GetawayWebsite() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((p) => (p + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      fontFamily: "'Outfit', sans-serif",
      background: "#0A0A0A",
      color: "#F5F0EB",
      overflowX: "hidden",
      minHeight: "100vh",
    }}>
      <style>{GLOBAL_STYLES}</style>

      <Navbar scrolled={scrolled} scrollTo={scrollTo} />
      <Hero
        heroRef={heroRef}
        heroIndex={heroIndex}
        setHeroIndex={setHeroIndex}
        heroY={heroY}
        heroOpacity={heroOpacity}
        scrollTo={scrollTo}
      />
      <Features />
      <Marquee text="Luxury Living · Elysian Meadows · Where Nature Meets Design" />
      <Projects />
      <WhyGetaway />
      <Gallery />
      <Team />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
