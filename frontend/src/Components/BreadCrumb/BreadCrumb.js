import React from "react";
import { Link } from "react-router-dom";

export const BreadCrumb = ({ links, padding }) => {
  return (
    <div className={`section-container ${padding && "pt-[100px]"}  md:pt-0`}>
      <nav className="bg-[#f7f7f7] rounded-lg px-6 py-4">
        {links.map((link) => (
          <Link
            to={link.to}
            key={link.id}
            className={`${
              link.id !== links.length && "text-mainColor/90"
            } text-sm`}
          >
            {link.name} &nbsp;{" "}
            {link.id !== links.length && <span className="text-black">/</span>}{" "}
            &nbsp;
          </Link>
        ))}
      </nav>
    </div>
  );
};
