import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        alert("plase enter all details .....");
        return;
      }
      const response = await api.post("/auth/signin", {
        email,
        password,
      });

      login(response.data);

      navigate("/movies");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4efe3] flex items-center justify-center px-4">
      <div className="relative w-full max-w-md">
        {/* Paper */}
        <div className=" relative bg-[#fffdf5] rounded-sm p-8 md:p-10 shadow-[8px_10px_0px_rgba(75,63,45,0.12)] border border-[#ded6c4] overflow-hidden">
          {/* Notebook lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 "
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, #cbd5e1 32px)",
            }}
          />

          {/* Red margin */}
          <div className="absolute top-0 bottom-0 left-10 border-l border-red-300/50" />

          <div className="relative z-10 ml-4">

            <div className="text-center mb-8">
              <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-[#eadfc8] flex items-center justify-center text-[#63533d]">
                <FiBookOpen size={25} />
              </div>

              <p className="text-sm text-[#9a8b75] mb-1">Welcome back ✦</p>

              <h1 className="text-4xl font-bold text-[#40382d]">Sign In</h1>

              <p className="mt-2 text-sm text-[#817766]">
                Continue your little journey.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full h-12 pl-11 pr-4 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] placeholder:text-[#aaa08f] focus:border-[#8f7b5d] transition"
                  />
                </div>
              </div>


              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#5e5447]">
                    Password
                  </label>
                </div>

                <div className="relative">
                  <FiLock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a29480]"
                    size={18}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-12 pl-11 pr-12 rounded-lg bg-[#faf7ee] border border-[#d9cfbb] outline-none text-[#40382d] focus:border-[#8f7b5d] transition"
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

              {/* Remember
              <label className="flex items-center gap-2 text-sm text-[#716655] cursor-pointer">
                <input type="checkbox" className="accent-[#76644c]" />
                Remember me
              </label> */}


              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-[#5f513e] text-white flex items-center justify-center gap-2 font-medium hover:bg-[#493e30] hover:scale-105 duration-150 transition shadow-md"
              >
                Sign In
                <FiArrowRight size={18} />
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-[#817766] mt-7">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-[#5f513e] hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>

        {/* Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-[#d8c69d]/70 rotate-[-2deg]" />
      </div>
    </div>
  );
}
