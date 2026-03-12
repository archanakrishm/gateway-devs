import { NAV_LINKS, SOCIAL_LINKS } from "../constants";

export default function Footer({ scrollTo }) {
  return (
    <footer className="pt-15 px-12 pb-10 border-t border-white/5 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-start mb-12">
        <div>
          <div className="font-serif text-[32px] font-semibold tracking-[1px] mb-2">GETAWAY</div>
          <div className="text-xs text-white/35 font-light">Where Luxury Meets Nature</div>
        </div>
        <div className="flex gap-9">
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className="nav-link text-xs tracking-[1.5px] uppercase text-white/45 cursor-pointer"
              onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, ""))}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center pt-6 border-t border-white/5">
        <div className="text-xs text-white/25">
          © 2026 Getaway Developers. All rights reserved.
        </div>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((s) => (
            <span key={s} className="nav-link text-xs text-white/35 cursor-pointer">{s}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
