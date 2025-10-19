import React from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex items-center gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className=" login-btn flex items-center gap-2">
        <img src={user} alt="" />
        <Link to={"/auth/login"} className="btn bg-black/70 text-white px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
