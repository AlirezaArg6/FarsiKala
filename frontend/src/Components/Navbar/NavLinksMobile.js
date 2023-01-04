import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinksData";

export const NavLinksMobile = () => {
  const [navbarItems, setNavbarItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/navbar")
      .then((res) => res.json())
      .then((navbarData) => setNavbarItems(navbarData));
  }, []);
  return (
    <>
      <nav>
        <ul className="flex flex-col py-14">
          {navbarItems.map((nav) => (
            <li className="py-4 border-b">
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  `relative flex items-center text-sm ${
                    isActive ? "text-mainColor" : "text-gray-700"
                  } duration-200 group-hover:text-mainColor`
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
