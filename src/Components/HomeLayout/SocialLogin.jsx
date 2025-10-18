import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold">Login With</h1>
      <div className=" space-y-3 mt-5">
        <button className="btn w-full outline border-none text-red-400">
          <FcGoogle size={24} />
          Login With Google
        </button>
        <button className="btn w-full outline border-none">
          <IoLogoGithub size={24} />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
