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

const Gallery = () => {
  return (
    <div className="lg:mt-32">
      <div>
        <SectionTitle title={"Gallery"}></SectionTitle>
      </div>
      {/* <div>
        <div className="carousel w-full">
          <div
            id="item1"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img1} className="w-full" />
          </div>
          <div
            id="item2"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img2} className="w-full" />
          </div>
          <div
            id="item3"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img3} className="w-full" />
          </div>
          <div
            id="item4"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img4} className="w-full" />
          </div>
          <div
            id="item5"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img5} className="w-full" />
          </div>
          <div
            id="item6"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img6} className="w-full" />
          </div>
          <div
            id="item7"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img7} className="w-full" />
          </div>
          <div
            id="item8"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img8} className="w-full" />
          </div>
          <div
            id="item9"
            className="carousel-img flex justify-center carousel-item w-full"
          >
            <img src={img9} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
          <a href="#item5" className="btn btn-xs">
            4
          </a>
          <a href="#item6" className="btn btn-xs">
            4
          </a>
          <a href="#item7" className="btn btn-xs">
            4
          </a>
          <a href="#item8" className="btn btn-xs">
            4
          </a>
          <a href="#item9" className="btn btn-xs">
            9
          </a>
        </div>
      </div> */}
      <div>
        <Carousel className="mx-5 slideRes" data-aos="fade-up">
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
