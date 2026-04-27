import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function StickyMenu() {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [triggerPoint, setTriggerPoint] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(70);
  const [activeId, setActiveId] = useState(null);

  const menuItems = [
    { label: "Amenities", id: "amenities" },
    { label: "Plans", id: "plans" },
    { label: "Location", id: "location" },
    { label: "Prices", id: "prices" },
    { label: "Gallery", id: "gallery" },
  ];

  const actionItems = [
    { label: "Enquire", id: "enquire" },
    { label: "Chat", id: "chat" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbar = document.querySelector("nav");
    const offset = (navbar?.offsetHeight || 0) + (menuRef.current?.offsetHeight || 0) + 10;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleEnquire = () => {
    navigate("/");
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById("contact");
      if (el) {
        const navbar = document.querySelector("nav");
        const offset = (navbar?.offsetHeight || 0) + 10;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (attempts < 20) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };
    setTimeout(tryScroll, 100);
  };

  useEffect(() => {
    // Get navbar height
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    // Delay trigger point calculation to ensure banner is fully loaded
    const timer = setTimeout(() => {
      if (menuRef.current) {
        // Add buffer to trigger point so it activates only after menu scrolls out of view
        const menuHeight = menuRef.current.offsetHeight;
        setTriggerPoint(menuRef.current.offsetTop + menuHeight);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Become sticky when scroll passes the menu's original position
      setIsSticky(window.scrollY >= triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerPoint]);

  useEffect(() => {
    const handleScrollActive = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let current = null;
      menuItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + window.scrollY;
          if (elTop <= scrollY) {
            current = item.id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScrollActive);
    handleScrollActive(); // initial check
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  return (
    <motion.div
      ref={menuRef}
      className={`w-full z-40 transition-all duration-300 max-md:hidden ${
        isSticky
          ? "fixed left-0 right-0 bg-white shadow-md"
          : "relative bg-white border-b border-gray-200 shadow-lg "
      }`}
      style={isSticky ? { top: `${navbarHeight}px`, padding: "20px 0" } : { padding: "40px 0" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className=" max-w-[1270px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Menu Items */}
          <div className="flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`text-[16px] font-medium relative whitespace-nowrap cursor-pointer ${
                  activeId === item.id ? 'active text-[#F05923]' : 'text-[#383838]'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-6">
            {actionItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={item.id === "enquire" ? handleEnquire : undefined}
                className={`text-[16px] font-medium whitespace-nowrap cursor-pointer ${
                  item.id === "enquire"
                    ? "text-[#F05923]"
                    : "text-[#383838]"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
