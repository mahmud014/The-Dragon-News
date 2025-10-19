import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LoginPage = () => {
  const { loginUser, setUser } = use(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        alert("Login success");
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorMessage);
        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-3xl font-bold text-center">Login Your Account</h1>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input bg-base-200"
                placeholder="Email"
                name="email"
                required
              />
              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input bg-base-200"
                placeholder="Password"
                name="password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
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
