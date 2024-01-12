import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import "./CollegeDetails.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CollegeDetails = () => {
  const loadCollege = useLoaderData();
  const {
    college_image_link,
    college_name,
    college_rating,
    admission_date,
    number_of_research,
    admission_logo,
    admission_process,
    event_logo,
    events_details,
    research_logo,
    research_works,
    sports_logo,
    sports_categories,
  } = loadCollege;

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="lg:pt-0 pt-48 lg:py-0 py-5">
        <SectionTitle title={"College Details"}></SectionTitle>
      </div>
      <div>
        <div
          className="flex justify-center college-img"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img className="rounded-lg" src={college_image_link} alt="" />
        </div>
        <h2 className="text-center text-3xl font-bold lg:mt-6 mt-2">
          {college_name}
        </h2>
        <div className="lg:flex justify-around bg-gradient-to-r from-blue-600 to-cyan-400 p-5 my-5 lg:w-1/2 w-5/6 rounded-lg mx-auto">
          <div>
            Number of Research:{" "}
            <span className="bg-blue-600 p-2 rounded-md font-semibold">
              {number_of_research}
            </span>
          </div>
          <div className="my-3 lg:my-0">
            Ratings:{" "}
            <span className="bg-blue-500 p-2 rounded-md font-semibold">
              {college_rating}
            </span>
          </div>
          <div>
            Admission Date:{" "}
            <span className="bg-blue-500 p-2 rounded-md font-semibold">
              {admission_date}
            </span>
          </div>
        </div>

        <div
          className="lg:flex justify-center items-center my-10"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="px-5 lg:px-0">
            <img className="lg:w-2/3 lg:h-1/2" src={admission_logo} alt="" />
          </div>
          <div className="lg:w-1/3 px-5 lg:px-0 text-justify">
            <span className="text-2xl font-semibold">Admission Process</span>
            <br />
            {admission_process}
          </div>
        </div>

        <div className="lg:my-32" data-aos="fade-left" data-aos-duration="3000">
          <div className="flex justify-center">
            <img
              className="lg:w-1/4 px-5 lg:px-0 rounded-lg"
              src={event_logo}
              alt=""
            />
          </div>
          <div className="lg:w-1/4 mx-auto text-justify mt-5 px-5 lg:px-0">
            <span className="event-heading text-2xl font-semibold">Events</span>
            <br />
            {events_details}
          </div>
        </div>

        <div
          className="lg:flex justify-center items-center mt-10"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="">
            <img
              className="lg:w-2/3 lg:h-1/2 px-5 lg:px-0"
              src={research_logo}
              alt=""
            />
          </div>
          <div className="lg:w-1/3 text-justify px-5 lg:px-0">
            <span className="text-2xl font-semibold">Research</span>
            <br />
            {research_works}
          </div>
        </div>

        <div className="lg:mt-32" data-aos="fade-left" data-aos-duration="3000">
          <div className="flex justify-center mt-10">
            <img
              className="lg:w-1/4 rounded-lg px-5 lg:px-0"
              src={sports_logo}
              alt=""
            />
          </div>
          <div className="text-center mt-5">
            <span className="sports-heading text-2xl font-semibold">
              Sports
            </span>
            <br />
            <ol className="ordered-center-list">
              {sports_categories.map((category, index) => (
                <li key={index}>
                  {index + 1}
                  {". "}
                  {category}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
