import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiAtSign,
  FiLock,
  FiCheck,
  FiLogOut
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MyAccount() {
  const { user, changePassword, logout  } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!password) {
      setError("Please enter a new password.");
      return;
    }

    try {
      await changePassword(password);

      setPassword("");
      setMessage("Password changed successfully.");
    } catch (error) {
      setError(
        error.response?.data?.error ||
        "Unable to change password."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f4efe3] px-6 py-14">

      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-[#a9473d] font-semibold">
            Personal space
          </p>

          <h1 className="text-5xl font-black mt-2">
            My Account
          </h1>
        </div>



        <div className="grid md:grid-cols-2 gap-7">

          {/* User information */}
          <div className="bg-[#fffdf5] border border-[#ddd3bf] rounded-2xl p-8 shadow-[4px_6px_15px_rgba(80,65,45,0.07)]">

            <h2 className="text-xl font-bold mb-7">
              About me
            </h2>

            <div className="space-y-5">

              <Info
                icon={<FiUser />}
                label="Name"
                value={user?.name}
              />

              <Info
                icon={<FiAtSign />}
                label="Nickname"
                value={user?.nickname}
              />

              <Info
                icon={<FiMail />}
                label="Email"
                value={user?.email}
              />

            </div>

          </div>

          {/* Password */}
          <div className="bg-[#fffdf5] border border-[#ddd3bf] rounded-2xl p-8 shadow-[4px_6px_15px_rgba(80,65,45,0.07)]">

            <div className="flex items-center gap-3 mb-7">

              <div className="w-11 h-11 rounded-xl bg-[#e9e0cf] flex items-center justify-center">
                <FiLock />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Change password
                </h2>

                <p className="text-xs text-[#8a7d6a]">
                  Keep your account secure.
                </p>
              </div>

            </div>

            <form
              onSubmit={handlePasswordChange}
              className="space-y-4"
            >

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
                className="w-full h-12 bg-[#faf7ee] border border-[#d9cfbb] rounded-xl px-4 outline-none focus:border-[#8c7657]"
              />

              <button
                type="submit"
                className="w-full h-12 bg-[#40382d] text-white rounded-xl font-semibold hover:bg-[#574b3c] transition"
              >
                Update password
              </button>

            </form>

            {message && (
              <p className="flex items-center gap-2 text-sm text-green-700 mt-4">
                <FiCheck />
                {message}
              </p>
            )}

            {error && (
              <p className="text-sm text-red-700 mt-4">
                {error}
              </p>
            )}

          </div>

        </div>
        <div className="bg-[#fffdf5] border border-[#ddd3bf] rounded-2xl my-5 p-8 shadow-[4px_6px_15px_rgba(80,65,45,0.07)]">
        <p>See You Soon Your Movies are here ....</p>
        <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 my-5 rounded-xl bg-red-500 max-h-10 text-sm text-[##eee7d8] hover:bg-red-300"
                >
                <FiLogOut />
                Logout
              </button>
        </div>

      </div>

    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">

      <div className="w-11 h-11 bg-[#eee6d5] rounded-xl flex items-center justify-center text-[#695a45]">
        {icon}
      </div>

      <div>
        <p className="text-xs text-[#9b8e7b]">
          {label}
        </p>

        <p className="font-semibold text-[#40382d]">
          {value}
        </p>
      </div>

    </div>
  );
}