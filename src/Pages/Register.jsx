import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center mt-30">
      <title>Register</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-3xl text-center mt-5">Register Here</h1>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label text-semibold text-[16px]">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label text-semibold text-[16px]">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label text-semibold text-[16px]">
                PhotoURL
              </label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="PhotoURL"
              />
              <div className="relative">
                <label className="label text-semibold text-[16px]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input"
                />
                <span className="absolute right-6 top-9 cursor-pointer z-50"></span>
              </div>
              <div>
                <p className="flex flex-inline gap-4 font-semibold text-[14px]">
                  Already have an account?
                  <Link to="/auth/login" className="text-red-500 underline">
                    Login
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="btn btn-neutral mt-4 text-[16px] font-semibold hover:text-black hover:bg-gray-100 transition-colors"
              >
                Register
              </button>
            </fieldset>
          </form>
          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-black"></div>
            <span className="text-[16px] text-black">or continue with</span>
            <div className="h-px w-16 bg-black"></div>
          </div>

          {/* Google Signin */}
          <button
            type="button"
            className="flex items-center justify-center gap-3 btn btn-neutral mt-4 text-[16px] px-5 py-2 rounded-md w-full font-semibold hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
