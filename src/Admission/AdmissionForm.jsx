import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../Account/AuthProvider";
import Swal from "sweetalert2";

const AdmissionForm = () => {
  const collegeInfo = useLoaderData();
  const { college_name } = collegeInfo;
  const { user } = useContext(AuthContext);
  //   console.log(user);

  const btnSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const address = form.address.value;
    const date = form.date.value;
    const college = form.college.value;
    const subject = form.subject.value;

    const addCollege = {
      image,
      name,
      phone,
      email,
      address,
      date,
      college,
      subject,
    };
    //     console.log(addCollege);

    fetch("http://localhost:5000/addCollege", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCollege),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "The college has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div>
        <SectionTitle title={"Admission Form"}></SectionTitle>
      </div>

      <div>
        <div className="">
          <div className="hero min-h-screen">
            <div className="hero-content">
              <form className="card-body text-center" onSubmit={btnSubmit}>
                <div className="grid lg:grid-cols-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Candidate Image:</span>
                    </label>
                    <input
                      type="url"
                      placeholder="image"
                      name="image"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Candidate Name:</span>
                    </label>
                    <input
                      value={user?.displayName}
                      name="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone:</span>
                    </label>
                    <input
                      placeholder="phone"
                      name="phone"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email:</span>
                    </label>
                    <input
                      name="email"
                      value={user?.email}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="address"
                      name="address"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date of Birth:</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">College:</span>
                    </label>
                    <input
                      value={college_name}
                      name="college"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Subject:</span>
                    </label>
                    <input
                      type="text"
                      placeholder="subject"
                      name="subject"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <button className="btn btn-primary my-5">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
