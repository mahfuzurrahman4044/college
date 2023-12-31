import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Account/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    // console.log("Clicked");
    logOut();
  };
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content lg:mt-3 z-[1] lg:p-2 shadow bg-gradient-to-r from-blue-500 to-cyan-500 rounded-box w-52 opacity-90"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/colleges">Colleges</Link>
              </li>
              <li>
                <Link to="/admission">Admission</Link>
              </li>
              <li>
                <Link to="/myClass">My College</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/profile">
                      <div className="userImg">
                        <img src={user.photoURL} alt="" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/colleges">Colleges</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>
              <Link to="/myClass">My College</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile">
                    <div className="userImg">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
