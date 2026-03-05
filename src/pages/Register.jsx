import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import RegisterImg from "../assets/asset 40.png";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <section className="min-h-screen bg-[#f6f1ec] flex items-center justify-center px-4">
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">

          {/* LEFT IMAGE SECTION */}
          <div className="hidden lg:block relative">
            <img
              src={RegisterImg}
              alt="clinic"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-4xl font-serif text-center px-10 leading-snug">
                Enhance Your Beauty With Professional Care
              </h2>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl font-serif text-[#3c1f16] mb-2">
              Create Account
            </h2>
            <p className="text-gray-500 mb-8">
              Join us today for premium aesthetic treatments
            </p>

            <form className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b36b3f]"
                />
              </div>

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

              {/* Confirm Password */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b36b3f]"
                />
              </div>

              {/* Terms */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="accent-[#b36b3f]" />
                <span>
                  I agree to the <span className="text-[#b36b3f] cursor-pointer">Terms & Conditions</span>
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#b36b3f] text-white py-3 rounded-lg hover:bg-[#8c4e2c] transition duration-300 font-medium"
              >
                Register Now
              </button>

              {/* Login Redirect */}
              <p className="text-sm text-gray-600 text-center mt-4">
                Already have an account?{" "}
                <span className="text-[#b36b3f] cursor-pointer font-medium">
                  <Link to="/login">Login Here</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Register;