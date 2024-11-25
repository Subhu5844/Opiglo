import { useState } from "react";
import { MdPerson, MdLock } from "react-icons/md";
import log from "../../assets/img/Login.png";

function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="text-white bg-teal-700 h-[50px] flex justify-center items-center text-lg sm:text-2xl font-semibold">
        Admin Portal - Sign in
      </div>

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
              ADMIN LOGIN
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex items-center border-b border-gray-500 pb-2">
                <MdPerson className="text-teal-700 mr-2 text-2xl sm:text-4xl" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full focus:outline-none text-gray-700 text-sm sm:text-base"
                  required
                />
              </div>
              <div className="flex items-center border-b border-gray-500 pb-2 mb-8">
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
              <button
                type="submit"
                className="bg-teal-600 text-white rounded-lg px-5 py-1 mt-8 text-lg sm:text-md font-semibold hover:bg-teal-700"
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLoginPage;
