import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants";

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log("Form submitted:", formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-[90%] max-w-[380px] z-[1101]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white  rounded-3xl p-[40px] border border-white/20 relative">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-[20px] right-[20px] w-[24px] h-[24px] flex items-center justify-center focus:outline-none hover:opacity-80 transition-opacity border rounded-full border-[#070707]"
                aria-label="Close modal"
              >
                <svg
                  className="w-[16px] h-full text-[#070707]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Form Title */}
              <h2 className="text-[19px] font-medium text-[#070707] text-center mb-[28px]">
                Request A Call Back
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-[20px]">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#C6C6C6] pb-[8px] text-[#1E1E1E] placeholder-black/90 focus:outline-none focus:border-[#C6C6C6] transition-colors text-[14px]"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail ID*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#C6C6C6] pb-[8px] text-[#1E1E1E] placeholder-black/90 focus:outline-none focus:border-[#C6C6C6] transition-colors text-[14px]"
                  />
                </div>

                {/* Country Select */}
                <div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#C6C6C6] pb-[8px] text-[#1E1E1E] placeholder-black/50 focus:outline-none focus:border-[#C6C6C6] transition-colors text-[14px] appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-dark text-white">
                      Select Country*
                    </option>
                    <option value="India" className="bg-dark text-white">
                      India
                    </option>
                    <option value="USA" className="bg-dark text-white">
                      USA
                    </option>
                    <option value="UK" className="bg-dark text-white">
                      UK
                    </option>
                    <option value="Canada" className="bg-dark text-white">
                      Canada
                    </option>
                    <option value="Australia" className="bg-dark text-white">
                      Australia
                    </option>
                  </select>
                </div>

                {/* City Select */}
                <div>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-[#C6C6C6] pb-[8px] text-[#1E1E1E] placeholder-white/50 focus:outline-none focus:border-[#C6C6C6] transition-colors text-[14px] appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-dark text-white">
                      Select City*
                    </option>
                    <option value="Mumbai" className="bg-dark text-white">
                      Mumbai
                    </option>
                    <option value="Delhi" className="bg-dark text-white">
                      Delhi
                    </option>
                    <option value="Bangalore" className="bg-dark text-white">
                      Bangalore
                    </option>
                    <option value="Pune" className="bg-dark text-white">
                      Pune
                    </option>
                  </select>
                </div>

                {/* Phone Input */}
                <div className="flex items-center border-b border-[#C6C6C6] pb-[8px]">
                  <span className="text-[#1E1E1E] text-[14px] mr-[8px]">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Mobile Number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 bg-transparent   text-[#1E1E1E] placeholder-black/90 focus:outline-none focus:border-[#C6C6C6] transition-colors text-[14px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-[146px] bg-red-500 hover:bg-red-600 text-white font-medium py-[7px] rounded-full mt-[28px] transition-colors text-[16px]"
                >
                  Submit
                </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
