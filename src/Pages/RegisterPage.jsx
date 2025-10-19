import React from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-3xl font-bold text-center">
          Register Your Account
        </h1>
        <div className="divider"></div>
        <div className="card-body">
          <form onSubmit={() => {}}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input bg-base-200"
                placeholder="Enter Your Name"
                name="name"
              />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input bg-base-200"
                placeholder="Photo URL"
                name="photo"
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input bg-base-200"
                placeholder="Email"
                name="email"
              />
              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input bg-base-200"
                placeholder="Password"
                name="password"
              />
              <div>
                <label className="label">
                  <input type="checkbox" className="checkbox" />
                  Accept Terms & Conditions
                </label>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to={"/auth/login"}>
              <span className="text-red-500 underline cursor-pointer font-semibold">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
