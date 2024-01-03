import { useContext } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../AuthProvider";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-400 pb-5">
      <div className="lg:py-0 py-4">
        <SectionTitle title={"Profile"}></SectionTitle>
      </div>

      <div className="text-center">
        <div className="flex justify-center">
          <img
            className="lg:w-36 w-20 lg:h-36 h-20 rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <div className="lg:text-4xl text-2xl font-semibold mt-6">
          {user?.displayName}
        </div>
        <p>
          Email: <span className="lg:text-3xl">{user?.email}</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
