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
import img5 from "../../assets/Research/download (5).jpeg";
import img6 from "../../assets/Research/download (6).jpeg";
import img7 from "../../assets/Research/download (7).jpeg";
import img8 from "../../assets/Research/download.jpeg";
import img9 from "../../assets/Research/images.jpeg";

const Research = () => {
  return (
    <div className="lg:mt-32">
      <div>
        <SectionTitle title={"Research"}></SectionTitle>
      </div>
      <div>
        <Swiper
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
            <p className="font-semibold">Powerful Chip</p>
            <img src={img1} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold">5G Network</p>
            <img src={img2} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold">New Topology</p>
            <img src={img3} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold">Cancer Cell</p>
            <img src={img4} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold">Web 3.0</p>
            <img src={img5} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold">Powerful CPU</p>
            <img src={img6} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold">Artificial Intelligence</p>
            <img src={img7} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold">AIDS Vaccine</p>
            <img src={img8} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
          <SwiperSlide className="swiper-img">
            <p className="font-semibold">Security</p>
            <img src={img9} alt="" />
            <p>
              <a href="https://techresearchonline.com/blog/ai-regulation-meet-at-white-house/">
                Link
              </a>
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Research;
