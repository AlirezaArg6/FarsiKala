import React from "react";
import { BiHeart, BiShuffle } from "react-icons/bi";

export const ProductBoxProductsPage = () => {
  return (
    <div className="group relative flex flex-col items-center justify-between shadow-lg p-10 rounded-md max-w-[370px] mx-auto">
      {/* image container */}
      <div className="">
        <img
          src="/assets/images/products/k-5-copy.jpg"
          alt=""
          className="img"
        />
      </div>
      {/* content */}
      <div className="flex flex-col items-center justify-center mt-8">
        <a
          href="#"
          className="text-gray-600 lg:text-[13px] text-center duration-200 group-hover:text-mainColor "
        >
          کفش پیاده روی مردانه آدیداس
        </a>
        <span className="text-gray-600  font-bold mt-2 mb-4">
          1.400.000 تومان
        </span>
        <button className="border border-gray-400 p-2 px-4 text-gray-500 text-sm rounded-md duration-200 hover:border-mainColor hover:text-mainColor hover:-translate-y-1">
          انتخاب گزینه ها
        </button>
      </div>
      {/* icons */}
      {/* icons container */}
      <div className="absolute top-5 left-4 flex flex-col space-y-2">
        {/* icon container */}
        <div className="flex justify-center items-center p-2 border rounded-full bg-gray-50 cursor-pointer duration-200  hover:bg-mainColor hover:text-white">
          <BiHeart size={18} />
        </div>
        <div className="flex justify-center items-center p-2 border rounded-full bg-gray-50 cursor-pointer duration-200  hover:bg-mainColor hover:text-white">
          <BiShuffle size={18} />
        </div>
      </div>
    </div>
  );
};
