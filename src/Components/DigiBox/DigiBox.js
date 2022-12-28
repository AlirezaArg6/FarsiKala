import React from "react";
import { BiGift } from "react-icons/bi";

export const DigiBox = () => {
  return (
    <div>
      {/* top part */}
      <div className="flex flex-col justify-between bg-white pl-4 pr-2 py-3 rounded-md">
        <div className="flex justify-between mb-4">
          <span className="flex items-center text-sm text-[#941B80] font-bold">
            <BiGift className="ml-2" size={18} />
            هدیه نقدی
          </span>
          <span className="text-sm text-[#941B80] font-bold">
            <a href="">مشاهده همه</a>
          </span>
        </div>
        {/* items */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 my-2">
          {/* item 1 */}
          <div className="max-w-[330px] max-h-[330px]  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
            <img
              src="assets/images/products/2222.jpg"
              alt=""
              className="w-full h-full md:h-full md:max-h-[140px]"
            />
          </div>
          {/* item 2 */}
          <div className="max-w-[330px] max-h-[330px]  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
            <img
              src="assets/images/products/2222.jpg"
              alt=""
              className="w-full h-full md:h-full md:max-h-[140px]"
            />
          </div>
          {/* item 3 */}
          <div className="max-w-[330px] max-h-[330px]  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
            <img
              src="assets/images/products/2222.jpg"
              alt=""
              className="w-full h-full md:h-full md:max-h-[140px]"
            />
          </div>
          {/* item 4 */}
          <div className="max-w-[330px] max-h-[330px]  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
            <img
              src="assets/images/products/2222.jpg"
              alt=""
              className="w-full h-full md:h-full md:max-h-[140px]"
            />
          </div>
          {/* item 5 */}
          <div className="max-w-[330px] max-h-[330px]  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
            <img
              src="assets/images/products/2222.jpg"
              alt=""
              className="w-full h-full md:h-full md:max-h-[140px]"
            />
          </div>
          {/* item 6 */}
          <div className="max-w-[330px] max-h-[330px]  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
            <img
              src="assets/images/products/2222.jpg"
              alt=""
              className="w-full h-full md:h-full md:max-h-[140px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
