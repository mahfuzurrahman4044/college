import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Research.css";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import img1 from "../../assets/Research/download (1).jpeg";
import img2 from "../../assets/Research/download (2).jpeg";
import img3 from "../../assets/Research/download (3).jpeg";
import img4 from "../../assets/Research/download (4).jpeg";
import img6 from "../../assets/Research/download (6).jpeg";
import img7 from "../../assets/Research/download (7).jpeg";
import img8 from "../../assets/Research/download.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Research = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="lg:pt-10 bg-gradient-to-r from-blue-500 to-cyan-500 research">
      <div className="lg:py-0 py-4">
        <SectionTitle title={"Research"}></SectionTitle>
      </div>
      <div>
        <Swiper
          data-aos="zoom-in"
          data-aos-duration="3000"
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-img">
            <p className="font-semibold lg:text-2xl lg:py-2">Powerful Chip</p>
            <img className="rounded-md" src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold lg:text-2xl lg:py-2">5G Network</p>
            <img className="rounded-md" src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold lg:text-2xl lg:py-2">New Topology</p>
            <img className="rounded-md" src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold lg:text-2xl lg:py-2">Cancer Cell</p>
            <img className="rounded-md" src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold lg:text-2xl lg:py-2">Powerful CPU</p>
            <img className="rounded-md" src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold lg:text-2xl lg:py-2">Artificial Intelligence</p>
            <img className="rounded-md" src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold lg:text-2xl lg:py-2">AIDS Vaccine</p>
            <img className="rounded-md" src={img8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Research;
