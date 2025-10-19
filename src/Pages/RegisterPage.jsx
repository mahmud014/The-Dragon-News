import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const RegisterPage = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
        });
        navigate("/");
        alert("Account create success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h1 className="text-3xl font-bold text-center">
          Register Your Account
        </h1>
        <div className="divider"></div>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input bg-base-200"
                placeholder="Enter Your Name"
                name="name"
                required
              />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input bg-base-200"
                placeholder="Photo URL"
                name="photo"
                required
              />
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
              <div className="mt-2">
                <label className="label">
                  <input type="checkbox" className="checkbox" />
                  Accept Terms & Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <div className="divider">or</div>
          <div className=" space-y-2">
            <button className="btn w-full">
              <FcGoogle size={24} />
              Login with Google
            </button>
            <button className="btn w-full">
              <FaGithub size={24} />
              Login with Github
            </button>
          </div>
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
