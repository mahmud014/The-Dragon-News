import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className=" bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
