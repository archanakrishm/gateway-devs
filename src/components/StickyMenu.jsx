import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function StickyMenu() {
  const menuRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [triggerPoint, setTriggerPoint] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(70);

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Amenities", id: "amenities" },
    { label: "Location", id: "location" },
    { label: "Plans", id: "plans" },
    { label: "Prices", id: "prices" },
    { label: "Gallery", id: "gallery" },
  ];

  const actionItems = [
    { label: "Enquire", id: "enquire" },
    { label: "Chat", id: "chat" },
  ];

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

  return (
    <motion.div
      ref={menuRef}
      className={`w-full z-40 transition-all duration-300 ${
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
                className="text-[16px] font-medium text-[#383838] hover:text-[#F05923] transition-colors duration-200 relative whitespace-nowrap"
               
              >
                {item.label}
                <motion.div
                  className="absolute bottom-[-8px] left-0 h-[2px] bg-[#F05923] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-6">
            {actionItems.map((item) => (
              <motion.button
                key={item.id}
                className={`text-[16px] font-medium transition-colors duration-200 whitespace-nowrap ${
                  item.id === "enquire"
                    ? "text-[#F05923] hover:text-gray-800"
                    : "text-[#383838] hover:text-[#F05923]"
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
