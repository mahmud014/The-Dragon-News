import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <img src={logo} alt="" />
      <p className="my-2">Journalism without fear or favour</p>
      <p>{format(new Date(), "EEEE, MMMM do, yyyy")}</p>
    </div>
  );
};

export default Header;
