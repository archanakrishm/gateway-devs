import { CONTACT_INFO } from "../constants";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 px-12 overflow-hidden">
      <div className="bg-contact-gradient absolute inset-0" />
      <div className="bg-contact-glow absolute top-0 -right-[10%] w-1/2 h-full opacity-[0.08]" />

      <div className="relative max-w-[1200px] mx-auto grid grid-cols-2 gap-20">
        <Reveal direction="left">
          <div>
            <div className="text-[11px] tracking-[4px] uppercase text-accent mb-6">Get In Touch</div>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.15] mb-12">
              Begin Your <span className="italic">Journey</span>
            </h2>

            <div className="flex flex-col gap-8">
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="feature-item flex gap-5 items-start">
                  <div className="text-xl text-accent shrink-0 mt-0.5">{c.icon}</div>
                  <div>
                    <div className="text-[11px] tracking-[2px] uppercase text-white/35 mb-1.5">{c.label}</div>
                    <div className="text-base font-light text-white/80 leading-[1.6]">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded overflow-hidden border border-white/[0.06]">
              <iframe
                title="Getaway Developers Office"
                src="https://maps.google.com/maps?q=Satyam+Shopping+Centre,+MG+Road,+Ghatkopar+East,+Mumbai&z=15&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-[filter] duration-500"
              />
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.2}>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded p-12">
            <div className="font-serif text-[28px] font-normal mb-9">Register Interest</div>
            {["Full Name", "Email Address", "Phone Number"].map((placeholder, i) => (
              <div key={i} className="mb-6">
                <label className="text-[11px] tracking-[2px] uppercase text-white/35 block mb-2">{placeholder}</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="w-full py-3.5 border-b border-white/10 bg-transparent text-white text-[15px] font-sans outline-none transition-colors duration-300 focus:border-accent"
                />
              </div>
            ))}
            <div className="mb-6">
              <label className="text-[11px] tracking-[2px] uppercase text-white/35 block mb-2">Message</label>
              <textarea
                placeholder="Tell us about your dream getaway..."
                rows={3}
                className="w-full py-3.5 border-b border-white/10 bg-transparent text-white text-[15px] font-sans outline-none resize-none transition-colors duration-300 focus:border-accent"
              />
            </div>
            <MagneticButton className="w-full mt-4 py-4 px-10 text-sm">Submit Enquiry</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
