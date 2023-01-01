import React from "react";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { ProductBoxProductsPage } from "../../Components/ProductBoxProductsPage/ProductBoxProductsPage";

export const Products = () => {
  return (
    <>
      <Navbar />
      {/* container */}
      <div className="section-container">
        {/* main content */}
        <div className="lg:flex ">
          {/* right side */}
          <div className="hidden lg:block lg:w-[16%] lg:sticky lg:top-[400px]">
            {/* filters */}
            {/* container */}
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
                <a href="" className="text-sm text-mainColor/90">
                  صفحه اصلی &nbsp; <span className="text-black">/</span>
                </a>
                <a href="" className="text-sm">
                  &nbsp; فروشگاه
                </a>
              </nav>
            </div>
            <div className="flex justify-between mt-14 items-center">
              <span className="text-gray-500 text-[12px]">
                نمایش 1–16 از 28 نتیجه
              </span>
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
