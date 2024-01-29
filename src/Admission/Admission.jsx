import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://college-server-dusky.vercel.app/collegeInfo")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="lg:pt-0 pt-48 lg:py-0 py-5">
        <SectionTitle title={"Admission"}></SectionTitle>
      </div>

      <div>
        <div className="lg:w-4/5 mx-auto overflow-auto lg:px-0 px-5">
          <table className="table border">
            <thead>
              <tr>
                <th className="border text-center text-2xl font-semibold text-black">
                  College Name
                </th>
                <th className="border text-center text-2xl font-semibold text-black">Ratings</th>
                <th className="border text-center text-2xl font-semibold text-black">
                  Admission Date
                </th>
                <th className="border text-center text-2xl font-semibold text-black">Action</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college) => (
                <tr key={college._id}>
                  <td className="border">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={college.college_image_link}
                            alt="College Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">
                          {college.college_name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border text-center">
                    <div>{college.college_rating}</div>
                  </td>
                  <td className="border text-center">{college.admission_date}</td>
                  <th className="border text-center">
                    <Link to={`/admission/form/${college._id}`}>
                      <button className="btn btn-primary">Apply</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admission;
