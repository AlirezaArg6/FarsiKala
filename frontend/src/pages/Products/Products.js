import React, { useState } from "react";
import { AiFillFilter, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { ProductBoxProductsPage } from "../../Components/ProductBoxProductsPage/ProductBoxProductsPage";

export const Products = () => {
  const [isSidebarShowing, setIsSidebarShowing] = useState(false);
  return (
    <>
      <Navbar />
      {/* container */}
      <div className="section-container">
        {/* main content */}
        <div className="relative lg:flex ">
          {/* right side */}
          {/* overlay */}
          {isSidebarShowing && (
            <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/70 z-40 lg:hidden"></div>
          )}
          <div
            className={`fixed overflow-y-auto duration-200 p-10  bg-white w-[70%] z-50 top-0 ${
              isSidebarShowing ? "right-0" : "-right-[100%]"
            } h-screen md:w-[54%]  lg:block lg:bg-transparent lg:p-0 lg:overflow-hidden lg:w-[16%] lg:sticky lg:top-5  lg:h-screen`}
          >
            {/* filters */}
            {/* container */}
            <div className="flex justify-between mb-8 text-gray-700 font-bold lg:hidden ">
              <h5 className="text-lg">فیلتر های موجود</h5>
              <AiOutlineClose
                size={24}
                onClick={() => setIsSidebarShowing(false)}
              />
            </div>
            <div className="flex flex-col space-y-6 ">
              {/* category filter */}
              <div>
                <h5 className="filter-header">دسته بندی</h5>
                <ul className="space-y-2 cursor-pointer">
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">پرینتر</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">تبلت</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">ساعت هوشمند</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">لپ تاپ</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">مد و پوشاک</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">موبایل</a>
                  </li>
                </ul>
              </div>
              {/* color filter */}
              <div>
                <h5 className="filter-header">رنگ بندی</h5>
                {/* color box container */}
                <div className="flex ">
                  {/* color blue */}
                  <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
                    <div className="w-7 h-7 bg-blue-400 rounded-full duration-200 hover:scale-110"></div>
                    <span className="text-gray-500 text-[10px]">آبی</span>
                  </div>
                  {/* color green */}
                  <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer mr-2">
                    <div className="w-7 h-7 bg-green-500 rounded-full duration-200 hover:scale-110"></div>
                    <span className="text-gray-500 text-[10px]">سبز</span>
                  </div>
                  {/* color black */}
                  <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer mr-2">
                    <div className="w-7 h-7 bg-black rounded-full duration-200 hover:scale-110"></div>
                    <span className="text-gray-500 text-[10px]">سیاه</span>
                  </div>
                  {/* color red */}
                  <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer mr-2">
                    <div className="w-7 h-7 bg-red-500 rounded-full duration-200 hover:scale-110"></div>
                    <span className="text-gray-500 text-[10px]">قرمز</span>
                  </div>
                </div>
              </div>
              {/* cpu  */}
              <div>
                <h5 className="filter-header">پردازنده</h5>
                <ul className="space-y-2 cursor-pointer">
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">پرینتر</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">تبلت</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">ساعت هوشمند</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">لپ تاپ</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">مد و پوشاک</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">موبایل</a>
                  </li>
                </ul>
              </div>
              {/* ram */}
              <div>
                <h5 className="filter-header">حافظه داخلی</h5>
                <ul className="space-y-2 cursor-pointer">
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">پرینتر</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">تبلت</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">ساعت هوشمند</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">لپ تاپ</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">مد و پوشاک</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">موبایل</a>
                  </li>
                </ul>
              </div>
              {/* size */}
              <div>
                <h5 className="filter-header"> اندازه</h5>
                <ul className="space-y-2 cursor-pointer">
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">پرینتر</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">تبلت</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">ساعت هوشمند</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">لپ تاپ</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">مد و پوشاک</a>
                  </li>
                  <li className="text-gray-500 text-sm duration-200 hover:text-mainColor">
                    <a href="">موبایل</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* left side */}
          <div className="w-full lg:w-[84%]">
            {/* titel */}
            <h5 className="section-header text-right pt-[100px] md:pt-0">
              فروشگاه
            </h5>
            {/* breadcrumb */}
            <div>
              <nav>
                <Link to={"/"} className="text-sm text-mainColor/90">
                  صفحه اصلی &nbsp; <span className="text-black">/</span>
                </Link>
                <Link to={"/products/1"} className="text-sm">
                  &nbsp; فروشگاه
                </Link>
              </nav>
            </div>
            <div className="flex flex-col space-y-4 justify-between mt-14 items-center md:flex-row md:space-y-0">
              <div className="flex flex-col space-y-4 items-center md:flex-row md:space-y-0">
                <span
                  className="flex items-center ml-4 text-gray-900 text-[12px] border p-2 rounded lg:hidden"
                  onClick={() => setIsSidebarShowing(true)}
                >
                  <AiFillFilter className="ml-2" />
                  فیلتر کنید
                </span>
                <span className="text-gray-500 text-[12px]">
                  نمایش 1–16 از 28 نتیجه
                </span>
              </div>
              <select
                name=""
                id=""
                className="p-2 border text-gray-700 text-sm focus:border-mainColor"
              >
                <option value="">یک گرینه را انتخاب کنید</option>
                <option value="">مرتب سازی بر اساس محبوبیت</option>
                <option value="">مرتب سازی بر اساس امتیاز</option>
                <option value="">مرتب سازی بر اساس آخرین </option>
                <option value="">مرتب سازی بر اساس ارزانترین</option>
                <option value="">مرتب سازی بر اساس گرانترین</option>
              </select>
            </div>
            {/* products container */}
            <div className="grid mt-6 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
              <ProductBoxProductsPage />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
