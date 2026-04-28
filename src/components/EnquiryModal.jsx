import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants";

const RECIPIENT_EMAIL = "info@getawaydevelopers.com";

const INITIAL_FORM = {
  name: "",
  email: "",
  country: "",
  city: "",
  phone: "",
};

const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(INITIAL_FORM);
      setErrors({});
      setIsSent(false);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (data) => {
    const next = {};
    if (!data.name.trim()) next.name = "Name is required";
    else if (!NAME_REGEX.test(data.name.trim()))
      next.name = "Enter a valid name (letters only, min 2 chars)";

    if (!data.email.trim()) next.email = "Email is required";
    else if (!EMAIL_REGEX.test(data.email.trim()))
      next.email = "Enter a valid email address";

    if (!data.country) next.country = "Please select a country";
    if (!data.city) next.city = "Please select a city";

    if (!data.phone.trim()) next.phone = "Mobile number is required";
    else if (!PHONE_REGEX.test(data.phone.trim()))
      next.phone = "Enter a valid 10-digit mobile number";

    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent("New Enquiry from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Country: ${formData.country}\n` +
        `City: ${formData.city}\n` +
        `Phone: +91 ${formData.phone}\n`
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  const inputBase =
    "w-full bg-transparent border-b pb-[8px] text-[#1E1E1E] placeholder-black/90 focus:outline-none transition-colors text-[14px]";
  const borderClass = (field) =>
    errors[field] ? "border-red-500" : "border-[#C6C6C6] focus:border-[#C6C6C6]";

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
                onClick={onClose}
                className="absolute top-[20px] right-[20px] w-[24px] h-[24px] flex items-center justify-center focus:outline-none border rounded-full border-[#070707]"
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

              {isSent ? (
                <div className="flex flex-col items-center justify-center py-[20px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-[72px] h-[72px] rounded-full bg-green-500 flex items-center justify-center mb-[20px]"
                  >
                    <svg
                      className="w-[40px] h-[40px] text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-[19px] font-medium text-[#070707] text-center mb-[8px]">
                    Message Sent
                  </h2>
                  <p className="text-[14px] text-[#5a5a5a] text-center">
                    Thank you! We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-[19px] font-medium text-[#070707] text-center mb-[28px]">
                    Request A Call Back
                  </h2>

                  <form onSubmit={handleSubmit} noValidate className="space-y-[20px]">
                    {/* Name Input */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`${inputBase} ${borderClass("name")}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-[12px] mt-[4px]">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-Mail ID*"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`${inputBase} ${borderClass("email")}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[12px] mt-[4px]">{errors.email}</p>
                      )}
                    </div>

                    {/* Country Select */}
                    <div>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`${inputBase} ${borderClass("country")} appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-dark text-white">
                          Select Country*
                        </option>
                        <option value="India" className="bg-dark text-white">India</option>
                        <option value="USA" className="bg-dark text-white">USA</option>
                        <option value="UK" className="bg-dark text-white">UK</option>
                        <option value="Canada" className="bg-dark text-white">Canada</option>
                        <option value="Australia" className="bg-dark text-white">Australia</option>
                      </select>
                      {errors.country && (
                        <p className="text-red-500 text-[12px] mt-[4px]">{errors.country}</p>
                      )}
                    </div>

                    {/* City Select */}
                    <div>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`${inputBase} ${borderClass("city")} appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-dark text-white">
                          Select City*
                        </option>
                        <option value="Mumbai" className="bg-dark text-white">Mumbai</option>
                        <option value="Delhi" className="bg-dark text-white">Delhi</option>
                        <option value="Bangalore" className="bg-dark text-white">Bangalore</option>
                        <option value="Pune" className="bg-dark text-white">Pune</option>
                      </select>
                      {errors.city && (
                        <p className="text-red-500 text-[12px] mt-[4px]">{errors.city}</p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div>
                      <div
                        className={`flex items-center border-b pb-[8px] ${
                          errors.phone ? "border-red-500" : "border-[#C6C6C6]"
                        }`}
                      >
                        <span className="text-[#1E1E1E] text-[14px] mr-[8px]">+91</span>
                        <input
                          type="tel"
                          name="phone"
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="Enter Mobile Number*"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="flex-1 bg-transparent text-[#1E1E1E] placeholder-black/90 focus:outline-none transition-colors text-[14px]"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-[12px] mt-[4px]">{errors.phone}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <motion.button
                        type="submit"
                        className="w-[146px] bg-red-500 text-white font-medium py-[7px] rounded-full mt-[28px] text-[16px]"
                      >
                        Submit
                      </motion.button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
