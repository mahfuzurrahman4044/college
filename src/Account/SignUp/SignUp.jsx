import { useContext, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateInfo } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleForm = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Password doesn't matched");
    } else {
      createUser(data.email, data.password).then((res) => {
        // console.log(res.user);
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account has been created",
          showConfirmButton: false,
          timer: 1500,
        });
        updateInfo(data.name, data.photoURL)
          .then(() => {
            // console.log("User Updated")
            const user = { name: data.name, email: data.email };
            console.log(data.name, data.email);
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/");
      });
    }
  };
  return (
    <div>
      <div>
        <SectionTitle title={"Sign up"}></SectionTitle>
      </div>

      <div>
        <div className="hero min-h-screen">
          <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(handleForm)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  {errors.confirmPassword?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.confirmPassword?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be more than 6 character
                    </p>
                  )}
                  {errors.confirmPassword?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 character
                    </p>
                  )}
                  {errors.confirmPassword?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  <p className="text-red-600">{error}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
