import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS_FOOTER1, NAV_LINKS_FOOTER2, SOCIAL_LINKS } from "../constants";
import footerLogo from "../assets/images/footer-logo.svg";
import footerArrow from "../assets/images/footer-arrow.svg";

const COMING_SOON_LINKS = new Set([
  "investor relations",
  "disclaimer",
  "our story",
  "our impact",
  "careers",
]);

export default function Footer({ scrollTo }) {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const navigate = useNavigate();

  const renderLink = (link) => {
    const key = link.toLowerCase();
    const baseClass =
      "text-[17px] md:text-[20px] font-medium tracking-[1.5px] text-white cursor-pointer";

    if (key === "projects" || key === "all projects") {
      return (
        <Link key={link} to="/projects" className={baseClass}>
          {link}
        </Link>
      );
    }
    if (key === "why getaway") {
      return (
        <Link key={link} to="/why-getaway" className={baseClass}>
          {link}
        </Link>
      );
    }
    if (COMING_SOON_LINKS.has(key)) {
      return (
        <Link key={link} to="/coming-soon" className={baseClass}>
          {link}
        </Link>
      );
    }
    return (
      <span
        key={link}
        className={baseClass}
        onClick={() => {
          if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollTo?.(key.replace(/\s+/g, "")), 200);
          } else {
            scrollTo?.(key.replace(/\s+/g, ""));
          }
        }}
      >
        {link}
      </span>
    );
  };

  return (
    <footer className="bg-dark">

      <div className="pt-15 px-12 pb-10 border-t border-white/5 max-w-[1400px] mx-auto ">


      
      <div className="flex flex-col gap-10 lg:flex-row justify-between items-start mb-12">

        <div className="flex gap-[29px] flex-col md:flex-row">
          <div className="flex gap-3 flex-col min-w-[225px]">
            {NAV_LINKS_FOOTER1.map(renderLink)}
          </div>
          <div className="flex gap-3 flex-col">
            {NAV_LINKS_FOOTER2.map(renderLink)}
          </div>
        </div>





        <div className="flex flex-col gap-2">
          <div className="font-serif text-[32px] font-semibold tracking-[1px] mb-2"><img src={footerLogo} alt="Footer Logo" /></div>
          <div className="text-[14px] text-white font-light flex justify-between items-center gap-3"><span>Call Us: </span><strong className="font-medium text-[18px]">+91 98196 08906</strong></div>
          <div className="text-[14px] text-white font-light flex justify-between items-center gap-3"><span>Follow us on</span>

            <ul className="flex gap-[6px]">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name} className=""><a href=""><img src={s.icon} alt={s.name} /></a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-6 border-t border-[#414141] flex-col gap-[20px]">

        <button
          type="button"
          onClick={() => setProjectsOpen((p) => !p)}
          aria-label={projectsOpen ? "Collapse projects" : "Expand projects"}
          aria-expanded={projectsOpen}
          className="cursor-pointer bg-transparent border-none p-0"
        >
          <img
            src={footerArrow}
            alt=""
            className="transition-transform duration-300"
            style={{ transform: projectsOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>

        <AnimatePresence initial={false}>
          {projectsOpen && (
            <motion.div
              key="footer-projects-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden w-full flex justify-start"
            >
              <Link
                to="/projects"
                onClick={() => setProjectsOpen(false)}
                className="text-white text-[16px] xl:text-[18px] font-medium tracking-[1px] uppercase hover:text-orange py-2"
              >
                Project - Elysian Meadows
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <span className="text-xs text-white text-[14px] text-center w-full block">
          Copyrights ©2026 Getaway Developers and Resorts LLP
        </span>

      </div>
      </div>
    </footer>
  );
}
