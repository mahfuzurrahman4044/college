import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    fetch("https://college-server-dusky.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="lg:pt-10 bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="lg:py-0 py-4">
        <SectionTitle title={"Review"}></SectionTitle>
      </div>

      <div
        className="lg:w-1/2 mx-auto bg-gradient-to-r from-blue-600 to-cyan-400 rounded-md p-20"
        data-aos="fade-left" data-aos-duration="3000"
      >
        <div className="carousel-container">
          <div className="card">
            <h3>
              College:{" "}
              <span className="lg:text-2xl font-semibold">
                {currentReview?.college}
              </span>
            </h3>
            <h3>
              Rating:{" "}
              <span className="lg:text-2xl font-semibold">
                {currentReview?.rating}
              </span>{" "}
              out of 5
            </h3>
            <p>
              Review:{" "}
              <span className="lg:text-2xl font-semibold">
                {currentReview?.review}
              </span>
            </p>
          </div>
        </div>

        <div className="carousel-navigation">
          <button
            className="btn- btn-primary p-3 rounded-md my-2"
            onClick={handlePrevReview}
          >
            Previous
          </button>
          <button
            className="btn- btn-primary p-3 rounded-md my-2 ml-4 lg:ml-96"
            onClick={handleNextReview}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
