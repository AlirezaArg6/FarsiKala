import React, { useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { ImShuffle } from "react-icons/im";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BsShopWindow } from "react-icons/bs";
import { RiFileCopy2Line, RiErrorWarningLine } from "react-icons/ri";
import { VscCopy } from "react-icons/vsc";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLinksMobile } from "./NavLinksMobile";
import { NavLinksLargeScreens } from "./NavLinksLargeScreens";

export default function Navbar() {
  const [shouldSerachInputBgChange, setShouldSerachInputBgChange] =
    useState(false);

  const [shouldMenuExpanded, setShouldMenuExpanded] = useState(false);

  return (
    <>
      {/* top bar */}
      <div className="shadow-lg  ">
        <div className="fixed right-0 left-0 top-0 bg-white shadow-xl lg:shadow-none z-20 lg:relative">
          <div className="flex  justify-between items-center  section-container my-0 ">
            {/* right side */}
            <div className="flex items-center">
              <RxHamburgerMenu
                size={30}
                className="lg:hidden"
                onClick={() => setShouldMenuExpanded(true)}
              />
              <a href="" className="flex items-center" className="mr-2">
                <img src="/icon.png" alt="" className="w-36 lg:w-44 md:w-40 " />
              </a>
              {/* search input */}
              <div
                className={`hidden w-[460px] items-center ${
                  shouldSerachInputBgChange ? "bg-white" : "bg-zinc-200"
                } duration-300 mr-3 border-2 bborder-zinc-200  p-2 rounded-lg lg:flex`}
              >
                <input
                  className="w-full bg-transparent placeholder:text-zinc-600 focus:outline-none"
                  type="text"
                  placeholder="جستجو"
                  onFocus={() => setShouldSerachInputBgChange(true)}
                  onBlur={() => setShouldSerachInputBgChange(false)}
                />
                <BiSearch size={22} className="ml-2 text-gray-500" />
              </div>
            </div>
            {/* left side */}
            <div className="flex items-center">
              <BiShoppingBag size={28} className="mr-2 " />
              <ImShuffle size={28} className="mr-2 " />
              <HiOutlineHeart size={28} className="mr-2 " />
              <FaRegUserCircle size={28} className="mr-2 " />
            </div>
          </div>
          <div className="border-b border-gray-300"></div>
          {/* large screen menus and submenus */}
          {/* container */}
          <div className="hidden container mx-auto px-8 p-3 items-center justify-between relative lg:flex lg:px-2 ">
            <NavLinksLargeScreens />
            <p className="text-sm text-gray-600">
              ارسال رایگان برای سفارش های بالا 200 هزار تومان
            </p>
          </div>
        </div>
      </div>
      {/* mobile menu start */}
      {/* over lay*/}
      {/* {shouldMenuExpanded && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )} */}
      {/* menu */}
      <div
        className={`fixed top-0 ${
          shouldMenuExpanded ? "right-0" : "-right-[100%]"
        }  w-[70%] p-10 h-screen bg-white shadow-2xl z-50 duration-300 md:w-[60%] lg:hidden`}
      >
        {/* close btn */}
        <div className="flex justify-between w-full">
          {" "}
          <a href="" className="flex items-center" className="mr-2">
            <img src="/icon.png" alt="" className="w-36 lg:w-44 md:w-40 " />
          </a>
          <button className="border p-1 rounded-lg border-black  ">
            <AiOutlineClose
              size={24}
              onClick={() => setShouldMenuExpanded(false)}
            />
          </button>
        </div>
        <NavLinksMobile />
      </div>
    </>
  );
}
