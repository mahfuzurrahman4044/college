import { useContext, useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../Account/AuthProvider";
import Swal from "sweetalert2";

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
    <div>
      <div>
        <SectionTitle title={"My College"}></SectionTitle>
      </div>

      <div>
        <div className="lg:w-3/4 mx-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="text-2xl font-semibold text-black">
                  College ID
                </th>
                <th className="text-2xl font-semibold text-black">
                  Applied College
                </th>
                <th className="text-2xl font-semibold text-black">
                  Applied Subject
                </th>
                {/* <th className="text-2xl font-semibold text-black"></th> */}
              </tr>
            </thead>
            <tbody>
              {colleges.map((college) => (
                <tr key={college._id}>
                  <td>
                    <div className="flex space-x-3">
                      <div className="avatar">
                        {/* <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={college.college_image_link}
                            alt="College Avatar"
                          />
                        </div> */}
                      </div>
                      <div>
                        <div className="">{college._id}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{college.college}</div>
                  </td>
                  <td>{college.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold">Review</h2>

        <form className="hero" onSubmit={onSubmit}>
          <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
