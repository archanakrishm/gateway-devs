import { useState } from "react";
import { motion } from "motion/react";
import { NAV_LINKS, IMAGES } from "../constants";
import MagneticButton from "../components/MagneticButton";
import logo from "../assets/images/gateway_logo.svg";
import hamberger from "../assets/images/hamburger.svg";
import { menu } from "motion/react-client";

export default function Navbar({ scrolled, scrollTo }) {

  const [menuOpen, setMenuOpen] = useState(false);


const toggleMenu = () => setMenuOpen(prev => !prev);
const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[1000] flex items-center justify-between px-[40px] xl:px-[80px] transition-all duration-500 ${
        scrolled
          ? "py-4 xl:pt-4 bg-dark/92 backdrop-blur-[20px] border-b border-white/5"
          : "pt-[22px] xl:pt-[40px] bg-transparent backdrop-blur-0 border-b border-transparent"
      }`}
    >
      <motion.div
        className="cursor-pointer flex justify-between w-full xl:w-auto xl:items-center gap-3"
        onClick={() => scrollTo("home")}
      >
        <div>
          <h1>
            <img src={logo} alt="Getaway Developers Logo" className="max-xl:w-[94px] w-[137px]"/>
          </h1>
        </div>
        <button id="menuBtn" className="hamburger block xl:hidden focus:outline-none" type="button" aria-label="Toggle menu" onClick={toggleMenu}>

        <img src={hamberger} className="hamburger__top-bun" />
      </button>
      </motion.div>

      
      <div className={`xl:flex xl:gap-[54px] items-center bg-light-white px-[40px] xl:px-[45px] py-[13px] xl:rounded-full border border-white/10 nav-links mobile-menu ${menuOpen ? "flex" : "hidden"}`}>
        <div className="flex justify-between gap-1 w-full xl:hidden mb-[20px]">
          <div>
            <h1>
              <img src={logo} alt="Getaway Developers Logo" className="max-xl:w-[94px]"/>
            </h1>
          </div>
          <div className="flex gap-[20px]"> 
            <button id="btn-search">
              <img src={IMAGES.icoSearch} alt="search" />
            </button>
            <button id="menuBtnClose" className="hamburger block xl:hidden focus:outline-none" type="button" aria-label="Toggle menu" onClick={closeMenu}>
              <img src={IMAGES.icoClose} className="hamburger__top-bun" />
            </button>

          </div>
        </div>
        {NAV_LINKS.map((link) => (
          <span
            key={link}
            className="nav-link text-[15px] xl:text-[17px] font-medium text-white max-xl:py-[28px]"
            onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, ""))}
          >
            {link}
          </span>
        ))}
        <div className="xl:hidden flex justify-between gap-2 w-full mt-auto">
          <button>ENQUIRE</button>
          <button className="flex gap-1 items-center"><img src={IMAGES.icoPhoneWhite} alt="Phone" />CALL</button>
          <button className="flex gap-1 items-center"><img src={IMAGES.icoChat} alt="Chat" />CHAT</button>

        </div>
      </div>
    </motion.nav>
  );
}
