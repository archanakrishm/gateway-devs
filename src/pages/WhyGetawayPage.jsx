import Banner from "../components/Banner";
import StickyMenu from "../components/StickyMenu";
import AmenitiesSlider from "../components/AmenitiesSlider";
import whyGetawayBanner from "../assets/images/whyget-banner.jpg";
import { FEATURESDEV, ABOUT_IMG, IMAGES } from "../constants";

export default function WhyGetawayPage() {

    


    return (
        <>
            <Banner image={whyGetawayBanner} alt="Why Getaway Banner" />

            {/* Why Getaway Section */}
            <section className="pt-[23px] xl:py-[80px] xl:px-[80px] mx-auto relative bg-white md:bg-[#EAECF0]">
                <div className="rounded-none xl:rounded-[19px] bg-white xl:p-[60px] shadow-none xl:shadow-lg">


                    <div className="max-w-[1270px] mx-auto">
                        {/* Header */}
                        <div className="text-center mb-[17px] md:mb-[60px] max-md:px-4">
                            <h2 className="text-[20px] md:text-[45px] xl:text-[48px] font-semibold text-gray-900 md:mb-5">
                                Why Getaway Developers
                            </h2>
                            <p className="text-gray-600 text-[14px] md:text-[16px] xl:text-[18px] leading-relaxed max-w-[800px] mx-auto">
                                Experience Balinese Tropical Luxury Fused With Maharashtra's Natural Beauty, Backed By Sustainable Construction And Professional Rental Services For Effortless Ownership.
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div class="w-full  bg-[#f0f2f5] rounded-none md:rounded-3xl p-4 md:p-12 shadow-sm">

                            <div class="hidden lg:grid grid-cols-3 gap-8 mb-8 items-center">
                                <div class="flex items-center gap-5"><div class="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><img alt="Design Theme" src={IMAGES.featureOne} /></div><span class="text-[22px] font-semibold text-[#272727] leading-tight">Feature</span></div>
                                <div class="text-[22px] font-semibold text-[#272727] leading-tight">Getaway Advantage</div>
                                <div class="text-[22px] font-semibold text-[#272727] leading-tight">Market Standard</div>
                            </div>

                            <div className="space-y-10 md:space-y-12">
                                {FEATURESDEV.map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-center border-b border-gray-200 pb-5 md:pb-[46px] last:border-0 last:pb-0 md:border-0 md:pb-0 mb-5 md:mb-0"
                                    >
                                        {/* Column 1: Feature with Icon */}
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                            <span className="text-[18px] md:text-[22px] font-medium text-gray-800 leading-tight">
                                                {item.title}
                                            </span>
                                        </div>

                                        {/* Column 2: Advantage */}
                                        <div className="text-black text-base lg:text-[22px] ">
                                            <span className="lg:hidden  text-[16px] block uppercase tracking-wider text-black mb-1">
                                                Advantage
                                            </span>
                                            {item.advantage}
                                        </div>

                                        {/* Column 3: Standard */}
                                        <div className="text-black text-base lg:text-[22px]">
                                            <span className="lg:hidden  text-[16px] block uppercase tracking-wider text-black mb-1">
                                                Market Standard
                                            </span>
                                            {item.standard}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pb-[54px] pt-[41px] xl:py-30 px-4 xl:px-[80px]  mx-auto relative bg-white">
                <div className="max-w-[1270px] mx-auto">
                     <header className="pb-[22px] md:pb-[60px]">
                        <h2 className="text-[20px] md:text-[34px] font-semibold text-gray-900 mb-3 text-center">
                            About Getaway Developers
                        </h2>
                        <p className="text-[#6A6A6A] leading-relaxed text-[14px] md:text-[16px] text-center max-w-[763px] mx-auto">
                            Getaway Developers LLP specializes in luxury nature-themed developments featuring Bali-style tropical aesthetics, sustainable natural materials, expansive plotting schemes, bespoke villas, wellness centers, and resort-style gated communities across Maharashtra. With Elysian Meadows being the first project on Pali-Khopoli Road offers HNIs and second-home buyers a serene escape with professional villa rental management ensuring hassle-free ownership and returns.
                        </p>
                    </header>
                    <div className="about-slider-wrap">
                        <AmenitiesSlider amenities={ABOUT_IMG} />
                    </div>
                </div>
            </section>
        </>
    );
}