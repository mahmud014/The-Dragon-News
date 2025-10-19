import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handeleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className=" flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex items-center gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className=" login-btn flex items-center gap-2">
        <img
          className="w-12 h-12 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
        {user ? (
          <button
            onClick={handeleLogOut}
            className="btn bg-black/70 text-white px-10"
          >
            LogOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn bg-black/70 text-white px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
