import { useState, useEffect } from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function Layout({ children, scrollTo }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-mono text-white overflow-x-hidden min-h-screen">
      <Navbar scrolled={scrolled} scrollTo={scrollTo} />
      {children}
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
