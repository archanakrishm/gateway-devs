import { motion } from "motion/react";
import { NAV_LINKS } from "../constants";
import MagneticButton from "../components/MagneticButton";

export default function Navbar({ scrolled, scrollTo }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[1000] flex items-center justify-between px-12 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-dark/92 backdrop-blur-[20px] border-b border-white/5"
          : "py-7 bg-transparent backdrop-blur-0 border-b border-transparent"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer flex items-center gap-3"
        onClick={() => scrollTo("home")}
      >
        <div className="w-9 h-9 bg-gradient-to-br from-accent to-accent-dark rounded flex items-center justify-center font-serif font-bold text-lg">
          G
        </div>
        <div>
          <div className="font-serif text-[22px] font-semibold tracking-[1px] leading-tight">GETAWAY</div>
          <div className="text-[8px] tracking-[4px] uppercase text-white/40 font-light">DEVELOPERS</div>
        </div>
      </motion.div>

      <div className="flex gap-9 items-center">
        {NAV_LINKS.map((link) => (
          <span
            key={link}
            className="nav-link text-xs tracking-[2px] uppercase font-normal text-white/75"
            onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, ""))}
          >
            {link}
          </span>
        ))}
        <MagneticButton onClick={() => scrollTo("contact")} className="py-3 px-7 text-[11px]">
          Register Interest
        </MagneticButton>
      </div>
    </motion.nav>
  );
}
