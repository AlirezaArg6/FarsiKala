import React, { useEffect, useState } from "react";
import { navLinks } from "./navLinksData";
import { FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export const NavLinksLargeScreens = () => {
  const [navbarItems, setNavbarItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/navbar")
      .then((res) => res.json())
      .then((navbarData) => setNavbarItems(navbarData));
  }, []);

  return (
    <nav>
      <ul className="flex">
        {navbarItems.map((nav) => (
          <li className="group   p-2 ">
            <NavLink
              to={nav.to}
              className={({ isActive }) =>
                `relative flex items-center text-sm ${
                  isActive ? "text-mainColor" : "text-gray-700"
                } duration-200 group-hover:text-mainColor`
              }
            >
              {nav.title}
              {/* border */}
              <div className="absolute top-[30px] w-0 invisible  border  border-mainColor mt-2 duration-100 group-hover:visible group-hover:w-full"></div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
