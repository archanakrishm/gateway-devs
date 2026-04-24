import { CONTACT_INFO, CONTACT_BG } from "../constants";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";


export default function Contact() {

  console.log(CONTACT_BG);
  return (
    <section id="contact" className="relative py-[40px] xl:py-40 px-12 overflow-hidden relative">

      <img src={CONTACT_BG} alt="Contact Background" className="absolute top-0 left-0 w-full h-full object-cover" />


      {/* <div className="bg-contact-gradient absolute inset-0" /> */}
      {/* <div className="bg-contact-glow absolute top-0 -right-[10%] w-1/2 h-full opacity-[0.08]" /> */}

      <div className="relative max-w-[1270px] mx-auto flex flex-col-reverse xl:grid xl:grid-cols-2 gap-[40px] xl:gap-20">
        <Reveal direction="left">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-[30px] xl:text-[47px] text-white uppercase font-bold mb-[40px] xl:mb-[84px] max-xl:text-center">Contact</h2>
            <div className="flex flex-col gap-[20px] xl:gap-8">
              {CONTACT_INFO.map((c, i) => (
                <div key={i} className="flex gap-[20px] xl:gap-5 items-start">
                  <div className="text-xl shrink-0 mt-0.5"><img className="w-[32px] h-[32px]" src={c.icon} alt={c.label} /></div>
                  <div>
                    <div className="text-[17px] xl:text-[27px] font-medium text-white">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.2}>
          <div className="mt-10 rounded-[30px] overflow-hidden border border-white/[0.06] relative">
              <iframe
                title="Getaway Developers Office"
                src="https://maps.google.com/maps?q=Satyam+Shopping+Centre,+MG+Road,+Ghatkopar+East,+Mumbai&z=15&output=embed"
                width="100%"
                height="556"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-[filter] duration-500 h-[344px] xl:h-[556px]"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Satyam+Shopping+Centre,+MG+Road,+Ghatkopar+East,+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
                className="absolute inset-0 z-10 cursor-pointer"
              />
            </div>

          {/* <div className="bg-white/[0.03] border border-white/[0.06] rounded p-12">
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
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}
