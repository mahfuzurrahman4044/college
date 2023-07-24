import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const College = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/collegeInfo")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  });
  return (
    <div>
      <div>
        <SectionTitle title={"List of Colleges"}></SectionTitle>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:pl-20">
        {colleges.map((college) => (
          <div key={college._id} className="card lg:w-96 bg-base-200 shadow-lg">
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
                <span className="bg-purple-200 p-2 rounded-md font-semibold">
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
