import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { PROJECT_IMAGES, AMENITIES, PLANS, LOCATIONS, AMENITIES_LIST } from "../constants";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import Banner from "../components/Banner";
import StickyMenu from "../components/StickyMenu";
import AmenitiesSlider from "../components/AmenitiesSlider";
import bannerImage from "../assets/images/projects-banner.jpg";

import villaImage2 from "../assets/images/villa5.jpg";
import villaImage3 from "../assets/images/villa7.jpg";
import GallerySlider from "../components/GallerySlider";
import MediaTabs from "../components/MediaTabs";


export default function ProjectsPage() {
    // const navigate = useNavigate();
    // const [selectedProject, setSelectedProject] = useState(0);
      const [activeTab, setActiveTab] = useState("images");

    return (
        <>
            <Banner image={bannerImage} alt="Projects Banner" />
            <StickyMenu />



            <section className="py-[38px] xl:py-30 px-4 xl:px-[80px]  mx-auto relative">
                <div className=" max-w-[1270px] mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-[16px] md:gap-[80px]">

                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            <img
                                src={villaImage2}
                                alt="Elysian Meadows"
                                className="w-full h-[200px] md:h-full object-cover rounded-2xl"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-[20px] md:text-[30px] font-semibold text-gray-900 mb-3 md:uppercase leading-[20px] md:leading-[30px]">
                                <span className="text-[#F05923] block">About</span>
                                Elysian Meadows
                            </h2>
                            <p className="text-gray-500 leading-relaxed text-[14px] md:text-[16px]">
                                Nestled in the serene hills of Pali-Khopoli, 
Elysian Meadows is an exclusive community of 
ultra-luxe tropical private villas, just 2 hours 
from Mumbai. Each half-acre NA-titled villa 
brings together five luxurious master suites, 
a temperature-controlled infinity pool, a 
double-height open-to-sky living area, 
and panoramic Sahyadri views within fully landscaped grounds. 


                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col-reverse  md:flex-row items-center gap-[16px] md:gap-[80px] pt-[34px]">



                        {/* Content Section */}
                        <div className="w-full md:w-1/2">
                           
                            <p className="text-gray-500 leading-relaxed text-[14px] md:text-[16px]">
                                Rooted in tropical design philosophy where 
architecture becomes part of nature, never 
apart from it. Elysian Meadows is conceived 
as a place of deep belonging. A home that 
happens to be both sanctuary and 
investment.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            <img
                                src={villaImage3}
                                alt="Elysian Meadows"
                                className="w-full h-[200px] md:h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section id="amenities" className="py-[38px] xl:py-30 px-4 xl:px-[80px]  mx-auto relative bg-[#EAECF0]">
                <div className=" max-w-[1270px] mx-auto">
                    <header>
                        <h2 className="text-[20px] md:text-[34px] font-semibold text-gray-900 mb-3 text-center">
                            Amenities
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-[14px] md:text-[16px] text-center max-w-[763px] mx-auto">
                            Amenities are not a checklist, they are a philosophy. Every feature has been chosen to deepen your connection to the space, elevate your everyday rituals, and ensure that life here feels effortless from the moment you arrive.
                        </p>
                    </header>
                    <div className=" py-[20px] md:py-[77px]">
                        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center md:grid md:grid-cols-3 lg:grid-cols-5 gap-[16px] md:gap-8 text-center">

                            {AMENITIES_LIST.map((item, index) => (
                                <div key={index} className="flex flex-col items-center">

                                    {/* Icon Circle */}
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm mb-4">
                                        {/* <span className="text-red-500 text-2xl">{item.icon}</span> */}
                                        <img src={item.icon} alt={item.title} />
                                    </div>

                                    {/* Text */}
                                    <p className="text-[#272727] text-[14px] md:text-[17px]">
                                        {item.title}
                                    </p>
                                    <p className="text-[#272727] text-[14px] md:text-[17px]">
                                        {item.subtitle}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>
                    <AmenitiesSlider amenities={AMENITIES} />







                </div>
            </section>


             <section id="plans" className="py-[38px] xl:py-30 px-4 xl:px-[80px]  mx-auto relative bg-white">
                <div className=" max-w-[1270px] mx-auto">
                    <header className="pb-[25px] md:pb-[94px]">
                        <h2 className="text-[20px] md:text-[30px] font-semibold text-gray-900 mb-3 text-center">
                            Plans
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-[14px] md:text-[16px] text-center max-w-[763px] mx-auto">
                            With 38+ years of experience in residential, commercial, second home development
                            and has delivered over 5 million square feet constructed across India… responsible for
                            quality construction, timely execution and
                            completion ensuring every Villa
                        </p>
                    </header>


                   
                    <AmenitiesSlider amenities={PLANS} type="plans" />







                </div>
            </section>



 <section id="location" className="py-[38px] xl:py-30 px-4 xl:px-[80px]  mx-auto relative bg-[#EAECF0]">
                <div className=" max-w-[1270px] mx-auto">
                    <header className="mb-[20px] md:mb-[100px]">
                        <h2 className="text-[20px] md:text-[30px] font-semibold text-gray-900 mb-3 text-center">
                            Location
                        </h2>
    
                    </header>

                    <div className="flex flex-col md:flex-row items-center gap-[35px] md:gap-[80px]">

                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            
                        <div className="grid grid-cols-1 gap-4  ">

                            {LOCATIONS.map((item, index) => (
                                <div key={index} className="flex gap-[19px] items-center">

                                    {/* Icon Circle */}
                                    <div className="w-16 h-16 min-w-16 flex items-center justify-center rounded-full bg-white shadow-sm">
                                        {/* <span className="text-red-500 text-2xl">{item.icon}</span> */}
                                        <img src={item.img} alt={item.title} />
                                    </div>

                                    {/* Text */}
                                    <div>
                                         <p className="text-[#272727] text-[12px]">
                                        {item.title}
                                    </p>
                                    <p className="text-[#272727] text-[12px]">
                                        {item.desc}
                                    </p>
                                    </div>
                                   

                                </div>
                            ))}

                        </div>
                    
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2">
                            <iframe
                title="Getaway Developers Office"
                src="https://maps.google.com/maps?q=Satyam+Shopping+Centre,+MG+Road,+Ghatkopar+East,+Mumbai&z=15&output=embed"
                width="100%"
                height="556"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-[filter] duration-500 h-[344px] xl:h-[556px] border-1 border-[#969696] rounded-[10px] md:rounded-[30px]"
              />
                        </div>

                    </div>
                    







                </div>
            </section>


            <PricesSection />


            <section id="gallery" className="py-[38px] xl:py-30 px-4 xl:px-[80px]  mx-auto relative bg-[#EAECF0]">
                <div className=" max-w-[1270px] mx-auto">
                    <header className="pb-[30px] md:pb-[83px]">
                        <h2 className="text-[20px] md:text-[30px] font-semibold text-gray-900 mb-3 text-center">
                            Gallery
                        </h2>
                       
                    </header>


                    
  {/* 🔹 Tabs */}
        <div className="flex gap-8 border-b-[2px] mb-[16px] md:mb-[40px] border-[#D9D9D9]">
          <button
            onClick={() => setActiveTab("images")}
            className={`pb-2 text-[16px] md:text-[20px] font-medium relative top-[2px] border-b-2 ${
              activeTab === "images"
                ? "text-[#F05923]  border-[#F05923]"
                : "text-[#383838] border-transparent"
            }`}
          >
            Images
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`pb-2 text-[16px] md:text-[20px] border-b-2 font-medium relative top-[2px] ${
              activeTab === "videos"
                ? "text-[#F05923] border-[#F05923]"
                : "text-[#383838] border-transparent"
            }`}
          >
            Videos
          </button>
        </div>

        {/* 🔹 Content */}
        <div>
          {activeTab === "images" && (
            <GallerySlider key="images" images={AMENITIES} />
          )}

          {activeTab === "videos" && (
            <div className="">
                <GallerySlider key="images" images={AMENITIES} />
              {/* {VIDEOS?.map((video, i) => (
                <video
                  key={i}
                  src={video}
                  controls
                  className="w-full h-[300px] object-cover rounded-[20px]"
                />
              ))} */}
            </div>
          )}
        </div>
                    

                   







                </div>
            </section>
    






        </>
    );
}

const PRICE_ROWS = [
    { type: "1 Bed", price: "₹ 2.99 Cr.+" },
    { type: "2 Bed", price: "₹ 3.99 Cr.+" },
    { type: "3 Bed", price: "₹ 4.99 Cr.+" },
    { type: "3 Bed with Study", price: "₹ 5.99 Cr.+" },
    { type: "4 Bed", price: "₹ 8.59 Cr.+" },
    { type: "5 Bed", price: "On request" },
    { type: "Penthouse", price: "On request" },
];

function PricesSection() {
    const [expanded, setExpanded] = useState(false);
    const visibleRows = expanded ? PRICE_ROWS : PRICE_ROWS.slice(0, 3);

    return (
        <section id="prices" className="py-[38px] xl:py-30 px-4 xl:px-[80px] mx-auto relative bg-white">
            <div className="max-w-[1270px] mx-auto">
                <header className="pb-[40px] xl:pb-[60px]">
                    <h2 className="text-[20px] md:text-[30px] font-semibold text-gray-900 mb-3 text-center">
                        Prices
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-[14px] md:text-[16px] text-center max-w-[763px] mx-auto">
                        Indicative starting prices across configurations. Final pricing may vary
                        based on view, floor, and availability. Connect with us for detailed
                        cost sheets and current offers.
                    </p>
                </header>

                <div className="border-t border-[#D9D9D9]">
                    {visibleRows.map((row, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-2 border-b border-[#D9D9D9] py-[22px]"
                        >
                            <div className="text-[#272727] text-[18px] text-center">
                                {row.type}
                            </div>
                            <div className="text-[#272727] text-[18px] text-center">
                                {row.price}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-[30px]">
                    <button
                        type="button"
                        onClick={() => setExpanded((p) => !p)}
                        className="text-[#F05923] text-[16px] underline cursor-pointer"
                    >
                        {expanded ? "View Less" : "View More"}
                    </button>
                </div>
            </div>
        </section>
    );
}
