import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/collegeInfo")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  return (
    <div>
      <div>
        <SectionTitle title={"Admission"}></SectionTitle>
      </div>

      <div>
        <div className="lg:w-4/5 mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="text-2xl font-semibold text-black">
                  College Name
                </th>
                <th className="text-2xl font-semibold text-black">Ratings</th>
                <th className="text-2xl font-semibold text-black">
                  Admission Date
                </th>
                <th className="text-2xl font-semibold text-black"></th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college) => (
                <tr key={college._id}>
                  <td>
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
                  <td>
                    <div>{college.college_rating}</div>
                  </td>
                  <td>{college.admission_date}</td>
                  <th>
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
