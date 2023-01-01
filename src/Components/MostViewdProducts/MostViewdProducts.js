import React from "react";
import { ProductBox } from "../ProductBox/ProductBox";

export const MostViewdProducts = () => {
  return (
    <section id="mostViewd">
      {/* container */}
      <div className="section-container">
        <h5 className="text-xl font-bold text-gray-700">
          پر بازدیدترین محصولات
        </h5>
        {/* border */}
        <div className="border-b my-4"></div>
        {/* products container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {/* product 1 */}
          <div className="border">
            <ProductBox>
              <button className="border border-gray-400 p-2 px-4 text-gray-500 text-sm rounded-md duration-200 hover:border-mainColor hover:-translate-y-1 hover:text-mainColor">
                انتخاب گزینه ها
              </button>
            </ProductBox>
          </div>
          {/* product 2 */}
          <div className="border">
            <ProductBox>
              <button className="border border-gray-400 p-2 px-4 text-gray-500 text-sm rounded-md duration-200 hover:border-mainColor hover:-translate-y-1 hover:text-mainColor">
                انتخاب گزینه ها
              </button>
            </ProductBox>
          </div>
          {/* product 3 */}
          <div className="border">
            <ProductBox>
              <button className="border border-gray-400 p-2 px-4 text-gray-500 text-sm rounded-md duration-200 hover:border-mainColor hover:-translate-y-1 hover:text-mainColor">
                انتخاب گزینه ها
              </button>
            </ProductBox>
          </div>
          {/* product 4 */}
          <div className="border">
            <ProductBox>
              <button className="border border-gray-400 p-2 px-4 text-gray-500 text-sm rounded-md duration-200 hover:border-mainColor hover:-translate-y-1 hover:text-mainColor">
                انتخاب گزینه ها
              </button>
            </ProductBox>
          </div>
          {/* product 5 */}
          <div className="border">
            <ProductBox>
              <button className="border border-gray-400 p-2 px-4 text-gray-500 text-sm rounded-md duration-200 hover:border-mainColor hover:-translate-y-1 hover:text-mainColor">
                انتخاب گزینه ها
              </button>
            </ProductBox>
          </div>
          {/* product 6 */}
          <div className="border">
            <ProductBox>
              <button className="border border-gray-400 p-2 px-4 text-gray-500 text-sm rounded-md duration-200 hover:border-mainColor hover:-translate-y-1 hover:text-mainColor">
                انتخاب گزینه ها
              </button>
            </ProductBox>
          </div>
        </div>
      </div>
    </section>
  );
};
