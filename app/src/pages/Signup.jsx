import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4efe3] flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-md">

        {/* Paper */}
        <div className="relative bg-[#fffdf5] rounded-sm p-8 md:p-10 shadow-[8px_10px_0px_rgba(75,63,45,0.12)] border border-[#ded6c4] overflow-hidden">

          {/* Notebook lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, #cbd5e1 32px)",
            }}
          />

          {/* Notebook margin */}
          <div className="absolute top-0 bottom-0 left-10 border-l border-red-300/50" />

          <div className="relative z-10 ml-4">

            {/* Header */}
            <div className="text-center mb-7">
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-[#eadfc8] flex items-center justify-center text-[#63533d]">
                <FiBookOpen size={25} />
              </div>

              <p className="text-sm text-[#9a8b75] mb-1">
                Start something new ✦
              </p>

              <h1 className="text-4xl font-bold text-[#40382d]">
                Sign Up
              </h1>

              <p className="mt-2 text-sm text-[#817766]">
                Create your own little space.
              </p>
            </div>

            <form className="space-y-4">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#5e5447] mb-2">
                  Your name
                </label>

                <div className="relative">
                  <FiUser
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a29480]"
                    size={18}
                  />

                  <input
                    type="text"
                    placeholder="Alex"
                    className="w-full h-12 pl-11 pr-4 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#5e5447] mb-2">
                  Email
                </label>

                <div className="relative">
                  <FiMail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a29480]"
                    size={18}
                  />

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-12 pl-11 pr-4 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-[#5e5447] mb-2">
                  Password
                </label>

                <div className="relative">
                  <FiLock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a29480]"
                    size={18}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className="w-full h-12 pl-11 pr-12 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#958875]"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 text-xs text-[#817766] leading-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 accent-[#76644c]"
                />

                <span>
                  I agree to the{" "}
                  <a href="#" className="text-[#5f513e] underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#5f513e] underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-[#5f513e] text-white flex items-center justify-center gap-2 font-medium hover:bg-[#493e30] transition shadow-md"
              >
                Create Account
                <FiArrowRight size={18} />
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-[#817766] mt-6">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-semibold text-[#5f513e] hover:underline"
              >
                Sign in
              </a>
            </p>

          </div>
        </div>

        {/* Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-[#d8c69d]/70 rotate-[2deg]" />
      </div>
    </div>
  );
}