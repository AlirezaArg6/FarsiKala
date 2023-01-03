import React from "react";
import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

export const Register = () => {
  return (
    <div className="section-container">
      <div className="mx-auto max-w-[550px]  translate-y-[10%]  border border-gray-400 p-12 rounded-lg space-y-5">
        <h1 className="font-bold text-center text-3xl text-mainColor">
          FARSIKALA
        </h1>
        <p className="text-gray-700 text-xl font-bold"> ثبت نام</p>
        {/* form group */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-gray-600 text-sm">
            نام کاربری
            <span className="requierd">*</span>{" "}
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded p-1 px-3 focus:outline-none focus:border-mainColor"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-gray-600 text-sm">
            ایمیل
            <span className="requierd">*</span>{" "}
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded p-1 px-3 focus:outline-none focus:border-mainColor"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-gray-600 text-sm">
            رمزعبور
            <span className="requierd">*</span>{" "}
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded p-1 px-3 focus:outline-none focus:border-mainColor"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="" className="text-gray-600 text-sm">
            تکرار رمز عبور<span className="requierd">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded p-1 px-3 focus:outline-none focus:border-mainColor max-w-[550px]"
          />
        </div>
        <div>
          <button className="bg-mainColor/90 text-white rounded w-full py-2 px-7 mt-8">
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
};
