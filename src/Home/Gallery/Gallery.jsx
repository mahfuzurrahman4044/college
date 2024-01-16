import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./Gallery.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import img1 from "../../assets/Gallary/137-1657555606-lg.webp";
import img2 from "../../assets/Gallary/1512673749_3.jpg";
import img3 from "../../assets/Gallary/1538849533_4.jpg";
import img4 from "../../assets/Gallary/6379e0b39ce84463579715.jpg";
import img5 from "../../assets/Gallary/Bangladesh-2018.jpg";
import img6 from "../../assets/Gallary/cover_NL1A0912.jpeg";
import img7 from "../../assets/Gallary/Group-Photo-with-Ambassador-1140x684.jpg";
import img8 from "../../assets/Gallary/download.jpeg";
import img9 from "../../assets/Gallary/shutterstock_658847998.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="lg:pt-10 bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="lg:py-0 py-4">
        <SectionTitle title={"Gallery"}></SectionTitle>
      </div>

      <div
        className="mx-5"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <Carousel className="lg:px-80">
          <div className="slider-img">
            <img className="rounded-md" src={img1} />
          </div>
          <div className="slider-img">
            <img className="rounded-md" src={img2} />
          </div>
          <div className="slider-img">
            <img className="rounded-md" src={img3} />
          </div>
          <div className="slider-img">
            <img className="rounded-md" src={img4} />
          </div>
          <div className="slider-img">
            <img className="rounded-md" src={img5} />
          </div>
          <div className="slider-img">
            <img className="rounded-md" src={img6} />
          </div>
          <div className="slider-img">
            <img className="rounded-md" src={img7} />
          </div>
          <div className="slider-img">
            <img className="rounded-md" src={img8} />
          </div>
          <div className="slider-img">
            <img className="rounded-md" src={img9} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
