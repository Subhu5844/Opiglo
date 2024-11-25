import { useState } from "react";
import { MdPerson, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import log from "../../assets/img/Login.png";

function LoginPage() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { emailOrMobile, password });
  };

  return (
    <>
      {/* Welcome banner at the very top */}
      <div className="text-white bg-teal-700 h-[50px] w-full flex justify-center items-center text-lg sm:text-2xl font-semibold">
        Welcome to OPIGLO - Sign in
      </div>

      {/* Main content area with padding to avoid overlap with the welcome banner */}
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${log})`,
        }}
      >
        <div className="flex justify-center items-center min-h-[55vh] w-full">
          <div className="bg-white border border-teal-500 rounded-3xl shadow-lg p-6 sm:p-8 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] text-center">
            <h2
              className="text-2xl sm:text-3xl font-normal text-teal-900 mb-6"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              USER LOGIN
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex items-center border-b border-gray-500 pb-2">
                <MdPerson className="text-teal-700 mr-2 text-2xl sm:text-4xl" />
                <input
                  type="text"
                  value={emailOrMobile}
                  onChange={(e) => setEmailOrMobile(e.target.value)}
                  placeholder="Mobile/Email"
                  className="w-full focus:outline-none text-gray-700 text-sm sm:text-base"
                  required
                />
              </div>
              <div className="flex items-center border-b border-gray-500 pb-2">
                <MdLock className="text-teal-700 mr-2 text-2xl sm:text-4xl" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full focus:outline-none text-gray-700 text-sm sm:text-base"
                  required
                />
              </div>
              <div className="text-right text-xs sm:text-sm text-teal-700 mt-2">
                <a href="#" className="hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white rounded-2xl px-5 py-1 mt-4 text-lg sm:text-md font-semibold hover:bg-teal-700"
              >
                LOG IN
              </button>
              <div className="text-xs sm:text-sm text-gray-500 mt-4">
                New to OPIGLO (Pty) LTD?
              </div>
              <div className="text-sm sm:text-md text-teal-700 font-semibold">
                <Link to="/register" className="underline">
                  REGISTER NOW
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
