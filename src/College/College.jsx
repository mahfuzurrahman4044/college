import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const College = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("https://college-server-dusky.vercel.app/collegeInfo")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  });

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="lg:pt-0 pt-48 lg:py-0 py-5">
        <SectionTitle title={"List of Colleges"}></SectionTitle>
      </div>
      <div
        className="grid lg:grid-cols-3 gap-6 lg:pl-5 px-5 lg:px-0"

      >
        {colleges.map((college) => (
          <div key={college._id} className="card lg:w-96 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-lg" data-aos="flip-left"
          data-aos-duration="2500">
            <figure className="px-10 pt-10">
              <img
                src={college.college_image_link}
                alt="Shoes"
                className="rounded-xl card-img"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{college.college_name}</h2>
              <p>
                Admission Date:{" "}
                <span className="bg-blue-500 p-2 rounded-md font-semibold">
                  {college.admission_date}
                </span>
              </p>
              <div className="card-actions">
                <Link to={`/colleges/details/${college._id}`}>
                  <button className="btn btn-primary mt-10">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default College;
