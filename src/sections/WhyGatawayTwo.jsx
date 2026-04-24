import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import villa1 from '../assets/images/villa1.jpg';
import villa2 from '../assets/images/villa2.jpg';
import villa3 from '../assets/images/villa3.jpg';
import pool from '../assets/images/pool.jpg';
import MagneticButton from '../components/MagneticButton';

export default function WhyGetawayTwo() {
  const sliderImages = [villa1, villa2, villa3, pool];
  const navigate = useNavigate();

  return (
    <section id="whygetaway" className="py-[38px] xl:py-[72px] mx-auto relative bg-white">
      <div className="max-w-[1270px] mx-auto px-12 xl:px-[80px]">
        <header className="flex items-center gap-4 justify-between">
          <h2 className="text-[#414141] text-[30px] xl:text-[80px] font-extrabold uppercase  md:leading-3 xl:leading-[90px]">Why Getaway</h2>
          <span className="text-orange text-[30px] xl:text-[96px] font-semibold leading-3 xl:leading-[90px]">02</span>
        </header>
      </div>
      <div className="mt-[16px] xl:mt-[24px] w-full">
        <ImageSlider images={sliderImages} />
      </div>
      <div className="max-w-[1270px] mx-auto px-12 xl:px-[80px]">
        <div className='mt-[16px] xl:mt-[24px]'>
          <h3 className="font-semibold text-[29px] xl:text-[61px] text-[#383838] md:mb-[20px]">Getaway</h3>
          <p className='text-[9px] xl:text-[20px] text-black capitalize'>With 38+ years of experience in residential, commercial, second home development and <br/>
has delivered over 5 million square feet constructed across India… responsible for<br/>
quality construction, timely execution and 
 completion ensuring every Villa</p>
 <div className='flex justify-end mt-[20px]'>
   <MagneticButton onClick={() => navigate("/why-getaway")} className="py-4 px-10 text-[20px] bg-orange text-white max-xl:hidden gap-[14px]">Know More
                <span className=" w-[57px] h-[57px] flex  justify-center items-center white-play relative"></span>
              </MagneticButton>
 </div>
        </div>
      </div>
    </section>
  );
}