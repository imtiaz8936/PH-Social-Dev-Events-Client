import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);
  const { userLogin, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((userCredential) => {
        toast.success("You Successfully Logged In");
        console.log(userCredential.user);
        setUser(userCredential.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center mt-10">
      <title>Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-3xl text-center mt-5">
          Login Your Account
        </h1>
        <div className="card-body">
          <form onSubmit={handleLogin}>
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
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-6 top-9 cursor-pointer z-50"
                >
                  {show ? <IoEyeOff size={20} /> : <FaEye size={20} />}
                </span>
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
                <Link to="/auth-register" className="text-red-500 underline">
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
            className="flex items-center justify-center gap-3 btn btn-neutral mt-2 text-[16px] px-5 py-2 rounded-md w-full font-semibold hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FcGoogle size={20}></FcGoogle> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
