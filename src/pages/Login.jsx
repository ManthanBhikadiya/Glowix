import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import LoginImg from "../assets/asset 60.jpg";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <section className="min-h-screen bg-[#f6f1ec] flex items-center justify-center px-4">
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">

          {/* LEFT IMAGE SECTION */}
          <div className="hidden lg:block relative">
            <img
              src={LoginImg}
              alt="clinic"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-4xl font-serif text-center px-10 leading-snug">
                Welcome Back To Your Beauty Journey
              </h2>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl font-serif text-[#3c1f16] mb-2">
              Login Account
            </h2>
            <p className="text-gray-500 mb-8">
              Enter your credentials to access your account
            </p>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b36b3f]"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b36b3f]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[42px] text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Remember & Forgot */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#b36b3f]" />
                  Remember Me
                </label>
                <span className="text-[#b36b3f] cursor-pointer">
                  Forgot Password?
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#b36b3f] text-white py-3 rounded-lg hover:bg-[#8c4e2c] transition duration-300 font-medium"
              >
                Login Now
              </button>

              {/* Register Redirect */}
              <p className="text-sm text-gray-600 text-center mt-4">
                Don't have an account?{" "}
                <span className="text-[#b36b3f] cursor-pointer font-medium">
                  <Link to="/register">Register Here</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;