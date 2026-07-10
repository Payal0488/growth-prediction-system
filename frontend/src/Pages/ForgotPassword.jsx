import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl bg-[#FFFDF9] p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-[#2F3A32]">Reset your password</h1>
        <p className="mt-3 text-gray-600">
          Enter your email and we will send password reset instructions.
        </p>

        <div className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block font-medium text-[#2F3A32]">Email</span>
            <div className="flex items-center rounded-xl border border-[#E5DDD3] px-4 py-3">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </label>

          <button className="w-full rounded-xl bg-[#A3B18A] px-4 py-3 font-semibold text-white transition hover:opacity-90">
            Send Reset Link
          </button>

          <Link to="/login" className="block text-center text-sm text-[#A3B18A] hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
