import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center mt-30">
      <title>Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-3xl text-center mt-5">
          Login Your Account
        </h1>
        <div className="card-body">
          <form>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
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
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn btn-neutral rounded-md mt-4 text-[16px] font-semibold hover:text-black hover:bg-gray-100 transition-colors"
              >
                Login
              </button>
              <p className="flex flex-inline gap-3 font-semibold text-[14px] mt-2">
                Don't have an account?
                <Link to="/auth/register" className="text-red-500 underline">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-black"></div>
            <span className="text-[16px] text-black">or continue with</span>
            <div className="h-px w-16 bg-black"></div>
          </div>
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

export default Login;
