"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          {/* <Image className="w-10 h-10 mr-3" src="https://i.imghippo.com/files/yV7re1706583976.png" alt="logo" /> */}
          Admin Tabungan
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign In
            </h1>
            <form autoComplete="off" className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-base font-medium text-gray-900">
                  User/Email
                </label>
                <input
                  type="text"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="user/name"
                  required
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-base font-medium text-gray-900">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="•••••••••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                  <div className="flex justify-end absolute top-0 right-0">
                    <button onClick={showPass} className="p-3">
                      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="/dashboard"
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700  w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
        {/* <div className="text-xl text-gray-700">
        { dataSatu.map((item, index) => { return( <div className="text-xl text-gray-700" key={index+1}> {item.nama}</div> ) } ) }
      </div> */}
      </div>
    </section>
  );
}
