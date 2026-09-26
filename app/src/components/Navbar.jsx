import { Link, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiBookOpen,
  FiUser,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      
      <nav className="max-w-7xl mx-auto backdrop-blur-md bg-transparent border border-[#d8ccb5] shadow-[0_5px_20px_rgba(80,65,45,0.12)] rounded-2xl">
        <div className="h-16 sm:px-5 px-2 md:px-7 flex items-center justify-between">
          

          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 duration-150"
          >
            <div className="w-10 h-10 rounded-xl bg-[#40382d] text-[#fffdf5] flex items-center justify-center ">
              <BiSolidCameraMovie size={19} />
            </div>

            <div>
              <h1 className="font-black text-[#40382d] tracking-tight">
                CineDiary
              </h1>

              <p className=" text-[10px] text-[#9a8c77]">
                your movie journal
              </p>
            </div>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-2">

            {!user ? (
              <>
                <Link
                  to="/signin"
                  className="flex items-center px-4 py-2 text-sm text-[#665a49] hover:text-amber-900 hover:scale-110  duration-150"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="flex items-center gap-1 bg-[#40382d] text-white sm:px-4 px-2 py-2.5 rounded-xl text-sm hover:bg-[#574b3c] transition"
                >
                  <FiUserPlus />
                  Sign Up
                </Link>
              </>
            ) : (
              <>
              <Link
                to="/movies"
                className="flex items-center gap-1 text-sm text-[#756957] hover:text-amber-900 hover:scale-110 duration-150"
              >
                Movies
              </Link>

              <Link
                to="/account"
                className="flex items-center gap-1 text-sm text-[#756957] hover:text-amber-900 hover:scale-110 duration-150"
              >
                
                 {user.name.split(" ")[0]}
              </Link>
              
              </>
            )}

          </div>
        </div>
      </nav>
    </header>
  );
}