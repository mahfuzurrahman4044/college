import { useContext, useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../Account/AuthProvider";
import Swal from "sweetalert2";

import Aos from "aos";
import "aos/dist/aos.css";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  console.log(colleges);

  useEffect(() => {
    fetch(`https://college-server-dusky.vercel.app/myCollege/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setLoading(false); // Data fetched, set loading to false
      });
  }, [user?.email]);

  useEffect(() => {
    Aos.init();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const college = form.college.value;
    const rating = form.rating.value;
    const review = form.review.value;
    const postReview = { college, rating, review };
    // console.log(postReview);

    fetch("https://college-server-dusky.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "The review has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500">
      <div className="lg:pt-0 pt-48 lg:py-0 py-5">
        <SectionTitle title={"My College"}></SectionTitle>
      </div>

      <div>
        <div
          className="lg:w-3/4 mx-auto bg-gradient-to-r from-blue-600 to-cyan-400"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <table className="table">
            <thead>
              <tr>
                <th className="border text-center text-2xl font-semibold text-black">
                  College ID
                </th>
                <th className="border text-center text-2xl font-semibold text-black">
                  Applied College
                </th>
                <th className="border text-center text-2xl font-semibold text-black">
                  Applied Subject
                </th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college) => (
                <tr key={college._id}>
                  <td className="border">
                    <div>
                      <div>
                        <div className="text-center">{college._id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="border text-center">
                    <div>{college.college}</div>
                  </td>
                  <td className="border text-center">{college.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold">Review</h2>

        <form
          className="hero"
          onSubmit={onSubmit}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-blue-600 to-cyan-400">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">College Name:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="college"
                    name="college"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating:</span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="5"
                    placeholder="rating"
                    name="rating"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Review:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="review"
                    name="review"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyClass;
