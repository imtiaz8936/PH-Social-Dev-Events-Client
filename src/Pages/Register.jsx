import React, { useState } from "react";
import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, updateProfileFunc, setUser, userSignInWithGoogle } =
    use(AuthContext);
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name?.value;
    const photoURL = form.photoURL?.value;
    const email = form.email.value;
    const password = form.password.value;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            console.log(userCredential.user);
            setUser(null);
            toast.success("You Successfully Registered");
            navigate("/auth-login");
          })
          .catch((error) => {
            toast.error(error);
          });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleGoogleSignin = () => {
    userSignInWithGoogle()
      .then((userCredential) => {
        toast.success("You Successfully Logged In");
        console.log(userCredential.user);
        setUser(userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center mt-10 mb-20">
      <title>Register</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-bold text-3xl text-center mt-5">Sign Up Here</h1>
        <div className="card-body">
          <form onSubmit={handleCreateUser}>
            <fieldset className="fieldset">
              <label className="label text-semibold text-[16px]">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label text-semibold text-[16px]">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label text-semibold text-[16px]">
                PhotoURL
              </label>
              <input
                type="url"
                name="photoURL"
                className="input"
                placeholder="PhotoURL"
                required
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
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-6 top-9 cursor-pointer z-50"
                >
                  {show ? <IoEyeOff size={20} /> : <FaEye size={20} />}
                </span>
              </div>
              <div>
                <p className="flex flex-inline gap-4 font-semibold text-[14px]">
                  Already have an account?
                  <Link to="/auth-login" className="text-red-500 underline">
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

          <div className="flex items-center justify-center gap-2 my-2">
            <div className="h-px w-16 bg-blue-700"></div>
            <span className="text-[16px] text-blue-700">or continue with</span>
            <div className="h-px w-16 bg-blue-700"></div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignin}
            className="flex items-center justify-center gap-3 btn btn-neutral mt-2 text-[16px] px-5 py-2 rounded-md w-full font-semibold hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FcGoogle size={20}></FcGoogle> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
