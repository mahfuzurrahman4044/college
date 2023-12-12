import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [colleges, setColleges] = useState([]);
  console.log(colleges);

  useEffect(() => {
    fetch("https://college-server-dusky.vercel.app/collegeInfo")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  const [searchText, setSearchText] = useState(null);
  console.log(searchText);

  const handleSearch = (event) => {
    event.preventDefault();
    const college = event.target.college.value.trim().toLowerCase();
    setSearchText(college);
  };

  const filteredColleges = searchText
    ? colleges.filter((college) =>
        college.college_name.toLowerCase().includes(searchText)
      )
    : [];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 lg:pt-0 pt-52">
      <div>
        <SectionTitle title={"Search"}></SectionTitle>
      </div>

      <div data-aos="fade-up-right" data-aos-duration="1500">
        <div className="hero">
          <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg">
              <form
                className="card-body bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"
                onSubmit={handleSearch}
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">College</span>
                  </label>
                  <input
                    type="text"
                    placeholder="college"
                    className="input input-bordered"
                    name="college"
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {searchText && filteredColleges.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-6 lg:pt-5 lg:pl-20">
          {filteredColleges.map((college) => (
            <div
              key={college._id}
              className="card lg:w-96 bg-gradient-to-r from-blue-600 to-cyan-400 shadow-lg"
            >
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
      ) : null}
    </div>
  );
};

export default Search;
