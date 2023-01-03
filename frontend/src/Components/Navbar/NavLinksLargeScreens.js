import React from "react";
import { navLinks } from "./navLinksData";
import { FiChevronDown } from "react-icons/fi";

export const NavLinksLargeScreens = () => {
  return (
    <nav>
      <ul className="flex">
        {navLinks.map((link) => (
          <li className="group   p-2 ">
            <a
              href=""
              className="relative flex items-center text-sm text-gray-700 duration-200 group-hover:text-mainColor "
            >
              {link.name}
              <div className="absolute top-[30px] w-0 invisible  border  border-mainColor mt-2 duration-100 group-hover:visible group-hover:w-full"></div>
              {link.submenu && <FiChevronDown className="mr-1" />}
            </a>
            {/* border */}
            {link.submenu && (
              <div className="hidden absolute -bottom-[64.5px] w-full  bg-slate-200 text-white invisible opacity-0">
                sdadsa
                <br />
                <br />
                <br />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
