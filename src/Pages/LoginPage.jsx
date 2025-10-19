import React from "react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-3xl font-bold text-center">Login Your Account</h1>
        <div className="card-body">
          <form onSubmit={() => {}}>
            <fieldset className="fieldset">
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
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="text-center mt-4">
            Don't Have an Account?{" "}
            <Link to={"/auth/register"}>
              <span className="text-red-500 underline cursor-pointer font-semibold">
                Register
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
