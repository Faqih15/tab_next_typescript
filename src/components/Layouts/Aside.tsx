"use client";

import React, { useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
// import WarningSignout from "./components/Modal/Signout/Warning";
import WarningSignout from "./../Modal/Signout/Warning";

import {
  MdOutlineDashboard,
  MdListAlt,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdAttachMoney,
  MdFacebook,
  MdShoppingBag,
} from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";
import { LuUsers, LuListPlus } from "react-icons/lu";
import { AiOutlineTransaction, AiOutlineDribbble } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbMailbox } from "react-icons/tb";
import { PiUsersFill, PiNotePencilBold } from "react-icons/pi";
import CollapsibleDemo from "./MenuList";

export default function AsideAndTop({ children }: any) {
  // const [isShow, setIsShow] = useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  // const showMenu = () => {
  //   if (isShow === false) {
  //     console.log(isShow, "isShow status");
  //     setIsShow(true);
  //   } else {
  //     console.log("else isShow");
  //     setIsShow(false);
  //   }
  // };
  
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
        // className="fixed top-0 left-0 z-40 w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
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
            {/* <li>
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
                  <MdKeyboardArrowRight className="w-7 h-7 text-gray-500 transition duration-75 group-hover:text-blue-500" />
                ) : (
                  <MdKeyboardArrowDown className="w-7 h-7 text-blue-500 transition duration-75" />
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
            </li> */}
            <li>
              <Collapsible.Root open={open} onOpenChange={setOpen}>
                <Collapsible.Trigger asChild>
                  <button
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <MdListAlt className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-black" />
                    <span className="flex-1 ms-3 text-lg text-left font-semibold rtl:text-right whitespace-nowrap">
                      Table of Data
                    </span>
                    {!open ? (
                      <MdKeyboardArrowRight className="w-7 h-7 text-gray-500 transition duration-75 group-hover:text-blue-500" />
                    ) : (
                      <MdKeyboardArrowDown className="w-7 h-7 text-blue-500 transition duration-75" />
                    )}
                  </button>
                </Collapsible.Trigger>
                <Collapsible.Content className="CollapsibleContent" >
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
                </Collapsible.Content>
              </Collapsible.Root>
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
                <TbMailbox />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  3
                </span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <PiUsersFill />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <MdShoppingBag />
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <PiNotePencilBold />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li> */}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-72">
        <div className="p-4 mt-2 mb-5 border-2 border-gray-200 border-dashed rounded-lg">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400 ">
                <LuListPlus />
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400 ">
                <LuListPlus />
              </p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400 ">
                <LuListPlus />
              </p>
            </div>
          </div>
        </div>
          {children}
        <footer className="bg-blue-200">
          <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
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
