import React from "react";

export const BreadCrumb = ({ links }) => {
  return (
    <div className="section-container pt-[100px] md:pt-0">
      <nav className="bg-[#f7f7f7] rounded-lg px-6 py-4">
        {links.map((link) => (
          <a
            href=""
            key={link.id}
            className={`${
              link.id !== links.length && "text-mainColor/90"
            } text-sm`}
          >
            {link.name} &nbsp;{" "}
            {link.id !== links.length && <span className="text-black">/</span>}{" "}
            &nbsp;
          </a>
        ))}
      </nav>
    </div>
  );
};
