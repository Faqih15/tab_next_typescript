"use client";

import React, { useState } from "react";
import Image from "next/image";
// import WarningSignout from "./components/Modal/Signout/Warning";
import WarningSignout from "./../Modal/Signout/Warning";

import {
  MdOutlineDashboard,
  MdListAlt,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdAttachMoney,
  MdFacebook,
  MdOutlineFacebook,
} from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";
import { LuUsers } from "react-icons/lu";
import { AiOutlineTransaction, AiOutlineDribbble } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function AsideAndTop({ children }: any) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const showMenu = () => {
    if (isShow === false) {
      console.log(isShow, "isShow status");
      setIsShow(true);
    } else {
      console.log("else isShow");
      setIsShow(false);
    }
  };
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        {/* <svg
          className="w-8 h-8"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg> */}
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <span>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <span className="ms-3 text-2xl font-bold">Dashboard</span>
            </a>
          </span>
          <ul className="space-y-4 font-medium mt-8">
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <MdOutlineDashboard className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="ms-3 text-lg font-semibold">Dashboard 123</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={showMenu}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <MdListAlt className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="flex-1 ms-3 text-lg text-left font-semibold rtl:text-right whitespace-nowrap">
                  Data
                </span>
                {!isShow ? (
                  <MdKeyboardArrowRight className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                ) : (
                  <MdKeyboardArrowDown className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-black" />
                )}
              </button>
              <div className={isShow === false ? "hidden" : "block"}>
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <a
                      href="/dashboard"
                      className="flex items-center w-full p-2 gap-3 font-semibold text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                    >
                      <LuUsers className="w-6 h-6 text-base text-gray-500 transition duration-75 group-hover:text-black" />
                      Santri
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dashboard/kelas"
                      className="flex items-center w-full p-2 gap-3 font-semibold text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                    >
                      <VscSymbolClass className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black" />
                      Kelas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dashboard/tabungan"
                      className="flex items-center w-full p-2 gap-3 font-semibold text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                    >
                      <MdAttachMoney className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black" />
                      Tabungan
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li>
							<a href="/auth" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
								<MdLogout className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-black"/>
								<span className="flex-1 ms-3 whitespace-nowrap  ">Sign Out</span>
							</a>
						</li> */}
            <li>
              <WarningSignout />
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <AiOutlineTransaction className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-black" />
                <span className="flex-1 ms-3 text-lg font-semibold whitespace-nowrap">Payment Page</span>
                <span className="inline-flex items-center justify-center px-2 py-1 ms-3 text-xs font-medium text-gray-100 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 rounded-full">
                  User
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-72">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400 ">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400 ">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400 ">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          {children}
        </div>
        <footer className="bg-white">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  {/* <Image
                    src={"./../../public/flowbite-logo.svg"}
                    width={40}
                    height={40}
                    className="w-8 h-8 me-3"
                    alt="FlowBite Logo"
                  /> */}
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">
                    Karamel.id
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Resources
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Follow us
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Legal
                  </h2>
                  <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">
                © 2024{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Karamel™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <MdFacebook />
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                  <SiDiscord />
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                  <FaSquareXTwitter />
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                  <IoLogoGithub />
                  <span className="sr-only">GitHub account</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                  <AiOutlineDribbble />
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
