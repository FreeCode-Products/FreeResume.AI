import React from 'react'
// import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Public() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   signIn("credentials", { email, password, callbackUrl: "/" });
  // };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">
          Welcome to Resume.AI
        </h2>

        {/* Google Sign In */}
        <button
          // onClick={() => signIn("keycloak")}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
        >
          <span>Sign in with Google</span>
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="text-gray-400 mx-2">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <form 
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>

        {/* Forgot Password & Sign Up */}
        <div className="text-center mt-3">
          <a href="#" className="text-blue-400 text-sm">
            Forgot password?
          </a>
          <span className="text-gray-400 mx-2">|</span>
          <a href="#" className="text-blue-400 text-sm">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
