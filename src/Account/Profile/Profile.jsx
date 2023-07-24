import { useContext } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AuthContext } from "../AuthProvider";
import "./Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <SectionTitle title={"Profile"}></SectionTitle>
      </div>

      <div>
        <div className="flex justify-center profile">
          <img src={user?.photoURL} alt="" />
        </div>
        <h2 className="text-2xl font-semibold flex justify-center">
          {user?.displayName}
        </h2>
        <h3 className="flex justify-center">{user?.email}</h3>
      </div>
    </div>
  );
};

export default Profile;
