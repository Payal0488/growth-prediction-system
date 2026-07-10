import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center px-4">

      <div className="w-full max-w-5xl bg-[#FFFDF9] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-[#D9E5D6] p-10">

          <h1 className="text-4xl font-bold text-[#2F3A32]">
            Welcome Back 👋
          </h1>

          <p className="mt-5 text-lg text-gray-700 leading-8">
            Login to access your AI-powered business dashboard,
            predictions, reports, and growth insights.
          </p>

          <img
            src="https://illustrations.popsy.co/gray/business-deal.svg"
            alt="Business"
            className="mt-10"
          />

        </div>

        {/* Right Side */}

        <div className="p-10">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-[#2F3A32]">
              Login
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to your account
            </p>

          </div>

          <form className="mt-10 space-y-6">

            {/* Email */}

            <div>

              <label className="font-medium text-[#2F3A32]">
                Email
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4 py-3 border-[#E5DDD3]">

                <FaEnvelope className="text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="ml-3 w-full outline-none bg-transparent"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="font-medium text-[#2F3A32]">
                Password
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-4 py-3 border-[#E5DDD3]">

                <FaLock className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="ml-3 w-full outline-none bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >

                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}

                </button>

              </div>

            </div>

            {/* Remember */}

            <div className="flex justify-between items-center">

              <label className="flex items-center gap-2">

                <input type="checkbox" />

                <span className="text-sm">
                  Remember me
                </span>

              </label>

              <Link
                to="/forgot-password"
                className="text-[#A3B18A] text-sm hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Button */}

            <button
              className="w-full bg-[#A3B18A] text-white py-3 rounded-xl hover:opacity-90 transition"
            >
              Login
            </button>

            {/* Divider */}

            <div className="flex items-center">

              <hr className="flex-1" />

              <span className="mx-3 text-gray-400">
                OR
              </span>

              <hr className="flex-1" />

            </div>

            {/* Google */}

            <button
              type="button"
              className="w-full border border-[#E5DDD3] py-3 rounded-xl hover:bg-[#F7F3EE]"
            >
              Continue with Google
            </button>

            {/* Register */}

            <p className="text-center">

              Don't have an account?

              <Link
                to="/register"
                className="text-[#A3B18A] ml-2 font-semibold"
              >
                Register
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;