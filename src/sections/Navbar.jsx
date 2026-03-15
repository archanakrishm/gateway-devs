import { motion } from "motion/react";
import { NAV_LINKS } from "../constants";
import MagneticButton from "../components/MagneticButton";
import logo from "../assets/images/gateway_logo.svg";
import hamberger from "../assets/images/hamburger.svg";

export default function Navbar({ scrolled, scrollTo }) {

  const toggleMenu = () => {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.classList.toggle("open");
    navLinks.classList.toggle("flex");
    navLinks.classList.toggle("hidden");
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[1000] flex items-center justify-between px-[40px] xl:px-[80px] transition-all duration-500 ${
        scrolled
          ? "py-4 pt-4 bg-dark/92 backdrop-blur-[20px] border-b border-white/5"
          : "xl:pt-[87px] bg-transparent backdrop-blur-0 border-b border-transparent"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer flex justify-between w-full xl:w-auto xl:items-center gap-3"
        onClick={() => scrollTo("home")}
      >
        {/* <div className="w-9 h-9 bg-gradient-to-br from-accent to-accent-dark rounded flex items-center justify-center font-serif font-bold text-lg">
          G
        </div> */}
        <div>
          <h1>
            <img src={logo} />
          </h1>
        </div>
        <button id="menuBtn" class="hamburger block xl:hidden focus:outline-none" type="button" aria-label="Toggle menu" onClick={toggleMenu}>
        {/* <span class="hamburger__top-bun"></span><span class="hamburger__bottom-bun"></span> */}

        <img src={hamberger} className="hamburger__top-bun" />
      </button>
      </motion.div>

      <div className="xl:flex gap-[54px] items-center bg-light-white px-[74px] py-[25px] rounded-full border border-white/10 nav-links hidden">
        {NAV_LINKS.map((link) => (
          <span
            key={link}
            className="nav-link text-2xl font-medium text-white/75"
            onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, ""))}
          >
            {link}
          </span>
        ))}
        {/* <MagneticButton onClick={() => scrollTo("contact")} className="py-3 px-7 text-[11px]">
          Register Interest
        </MagneticButton> */}
      </div>
    </motion.nav>
  );
}
