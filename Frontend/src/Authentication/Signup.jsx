import React, { useState } from "react";
import { FaStore, FaEnvelope, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../contentStore/authStore";
function Signup() {
  const {signup}=useAuthStore()
  const [shopname, setShopname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      shopname: shopname,
      email: email,
      password: password,
    };
    console.log("Data-->", formData);
    signup(formData)
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-700 to-green-700">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-green-700">
            🍏 Smart Inventory
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Manage your grocery shop efficiently!
          </p>

          {/* {errors && <p className="text-red-500 text-center mt-2">{errors}</p>} */}
          <div className=" flex justify-center text-2xl font-bold text-red-400">
            vendor
          </div>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaStore className="text-gray-400" />
              <input
                type="text"
                name="shopName"
                placeholder="Shop Name"
                value={shopname}
                onChange={(e) => setShopname(e.target.value)}
                className="ml-2 w-full bg-transparent outline-none"
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ml-2 w-full bg-transparent outline-none"
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ml-2 w-full bg-transparent outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <NavLink to="/signin" className="text-green-600 font-semibold">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
