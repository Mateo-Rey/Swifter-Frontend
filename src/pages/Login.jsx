import React from "react";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/DefaultLogo.png";
function Login() {
  const { googleLogin, currentUser } = useAuth();
  console.log(currentUser);
  return (
    <>
      <div className=" justify-center align-center flex h-[100vh] bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="bg-transparent w-[40vw] items-center justify-evenly flex flex-col h-[100vh]">
          <img className="md:h-96 rounded my-4 w-96" src={logo} />
          <h1 className="text-black my-2 self-center text-center text-3xl font-bold font-sans">
            Find what's new
          </h1>
          <button
            className="w-48 h-20 hover:bg-red-500 hover:scale-110 hover:translate-y-2 ease-in-out delay-150 self-center text-white font-bold text-2xl rounded-lg border-gray-300 border-4 bg-red-400 transition"
            onClick={googleLogin}
          >
            Login
          </button>
          <h2 className="text-2xl text-black mb-2 font-bold">Join Swifter</h2>
          
          
        </div>
      </div>
    </>
  );
}

export default Login;
