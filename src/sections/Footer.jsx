import { Link } from "react-router-dom";
import { NAV_LINKS_FOOTER1, NAV_LINKS_FOOTER2, SOCIAL_LINKS } from "../constants";
import footerLogo from "../assets/images/footer-logo.svg";
import footerArrow from "../assets/images/footer-arrow.svg";

export default function Footer({ scrollTo }) {
  return (
    <footer className="bg-dark">

      <div className="pt-15 px-12 pb-10 border-t border-white/5 max-w-[1400px] mx-auto ">


      
      <div className="flex flex-col gap-10 lg:flex-row justify-between items-start mb-12">

        <div className="flex gap-[29px] flex-col md:flex-row">
          <div className="flex gap-3 flex-col min-w-[225px]">
            {NAV_LINKS_FOOTER1.map((link) => {
              if (link.toLowerCase() === "projects") {
                return (
                  <Link
                    key={link}
                    to="/projects"
                    className="text-[20px] font-medium tracking-[1.5px] text-white"
                  >
                    {link}
                  </Link>
                );
              }
              return (
                <span
                  key={link}
                  className="text-[20px] font-medium tracking-[1.5px] text-white cursor-pointer"
                  onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, ""))}
                >
                  {link}
                </span>
              );
            })}
          </div>
          <div className="flex gap-3 flex-col">
            {NAV_LINKS_FOOTER2.map((link) => {
              if (link.toLowerCase() === "projects") {
                return (
                  <Link
                    key={link}
                    to="/projects"
                    className="text-[20px] font-medium tracking-[1.5px] text-white"
                  >
                    {link}
                  </Link>
                );
              }
              return (
                <span
                  key={link}
                  className=" text-[20px] font-medium tracking-[1.5px] text-white cursor-pointer"
                  onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, ""))}
                >
                  {link}
                </span>
              );
            })}
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
      <div className="flex justify-between items-center pt-6 border-t border-[#414141] flex-col gap-[30px]">

        <a href=""><img src={footerArrow} alt="" /></a>
        <span className="text-xs text-white text-[14px] text-center w-full block">
          Copyrights ©2026 Getaway Developers and Resorts LLP
        </span>

      </div>
      </div>
    </footer>
  );
}
