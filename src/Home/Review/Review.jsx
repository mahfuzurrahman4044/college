import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
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
    <div className="lg:mt-32">
      <div>
        <SectionTitle title={"Review"}></SectionTitle>
      </div>

      <div className="lg:w-1/2 mx-auto bg-base-200 rounded-md p-20">
        <div className="carousel-container">
          <div className="card">
            <h3>College: <span className="lg:text-2xl font-semibold">{currentReview?.college}</span></h3>
            <h3>Rating: <span className="lg:text-2xl font-semibold">{currentReview?.rating}</span> out of 5</h3>
            <p>Review: <span className="lg:text-2xl font-semibold">{currentReview?.review}</span></p>
          </div>
        </div>

        <div className="carousel-navigation">
          <button className="btn- btn-primary p-3 rounded-md my-2" onClick={handlePrevReview}>Previous</button>
          <button className="btn- btn-primary p-3 rounded-md my-2 ml-4 lg:ml-96" onClick={handleNextReview}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
