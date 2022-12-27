import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "./navLinksData";

export const NavLinksMobile = () => {
  const iconname = "RxHamburgerMenu";

  return (
    <>
      <nav>
        <ul className="flex flex-col py-14">
          {navLinks.map((link) => (
            <li className="py-4 border-b">
              <a href="" className="flex items-center">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
