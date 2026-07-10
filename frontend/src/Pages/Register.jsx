import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl bg-[#FFFDF9] rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}

        <div className="hidden md:flex flex-col justify-center bg-[#D9E5D6] p-10">

          <h1 className="text-4xl font-bold text-[#2F3A32]">
            Join GrowthPilot AI 🚀
          </h1>

          <p className="mt-5 text-lg text-gray-700 leading-8">
            Create your account and start analyzing your business
            using AI-powered insights, predictions, and smart
            recommendations.
          </p>

          <img
            src="https://illustrations.popsy.co/gray/business-plan.svg"
            alt="Register"
            className="mt-10"
          />

        </div>

        {/* Right Section */}

        <div className="p-10">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-[#2F3A32]">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Register your business account
            </p>

          </div>

          <form className="space-y-5 mt-8">

            {/* Full Name */}

            <div>

              <label className="font-medium">
                Full Name
              </label>

              <div className="flex items-center border border-[#E5DDD3] rounded-xl px-4 py-3 mt-2">

                <FaUser className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="ml-3 w-full outline-none bg-transparent"
                />

              </div>

            </div>

            {/* Business */}

            <div>

              <label className="font-medium">
                Business Name
              </label>

              <div className="flex items-center border border-[#E5DDD3] rounded-xl px-4 py-3 mt-2">

                <FaBuilding className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Business Name"
                  className="ml-3 w-full outline-none bg-transparent"
                />

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="font-medium">
                Email
              </label>

              <div className="flex items-center border border-[#E5DDD3] rounded-xl px-4 py-3 mt-2">

                <FaEnvelope className="text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter email"
                  className="ml-3 w-full outline-none bg-transparent"
                />

              </div>

            </div>

            {/* Phone */}

            <div>

              <label className="font-medium">
                Phone Number
              </label>

              <div className="flex items-center border border-[#E5DDD3] rounded-xl px-4 py-3 mt-2">

                <FaPhone className="text-gray-400" />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="ml-3 w-full outline-none bg-transparent"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="font-medium">
                Password
              </label>

              <div className="flex items-center border border-[#E5DDD3] rounded-xl px-4 py-3 mt-2">

                <FaLock className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="ml-3 w-full outline-none bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Confirm Password */}

            <div>

              <label className="font-medium">
                Confirm Password
              </label>

              <div className="flex items-center border border-[#E5DDD3] rounded-xl px-4 py-3 mt-2">

                <FaLock className="text-gray-400" />

                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="ml-3 w-full outline-none bg-transparent"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Terms */}

            <label className="flex items-center gap-3">

              <input type="checkbox" />

              <span className="text-sm text-gray-600">
                I agree to the Terms & Conditions
              </span>

            </label>

            {/* Register */}

            <button
              className="w-full bg-[#A3B18A] text-white py-3 rounded-xl hover:opacity-90 transition"
            >
              Create Account
            </button>

            {/* Login */}

            <p className="text-center text-gray-600">

              Already have an account?

              <Link
                to="/login"
                className="ml-2 text-[#A3B18A] font-semibold"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Register;