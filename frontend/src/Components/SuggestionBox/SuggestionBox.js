import React from "react";

export const SuggestionBox = () => {
  return (
    <div className="space-y-2">
      {/* title */}
      <h5 className="text-[18px] text-gray-700 md:text-sm">گوشی موبایل</h5>
      {/* subtitle */}
      <p className="text-sm text-gray-700 md:text-[12px]">
        بر اساس بازدیدهای شما
      </p>
      {/* images container*/}
      <div className="grid grid-cols-2 gap-1 ">
        {/* image 1 */}
        <div className="max-w-[330px] max-h-[330px] border flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
          <img
            src="assets/images/products/2222.jpg"
            alt=""
            className="w-full h-full md:h-full md:max-h-[140px]"
          />
        </div>
        {/* image 2 */}
        <div className="max-w-[330px] max-h-[330px] border flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
          <img
            src="assets/images/products/6.jpg"
            alt=""
            className="w-full h-full md:h-full md:max-h-[140px]"
          />
        </div>
        {/* image 3 */}
        <div className="max-w-[330px] max-h-[330px] border flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
          <img
            src="assets/images/products/6.jpg"
            alt=""
            className="w-full h-full  lg:max-h-[140px]"
          />
        </div>
        {/* image 4 */}
        <div className="max-w-[330px] max-h-[330px] border flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
          <img
            src="assets/images/products/2222.jpg"
            alt=""
            className="w-full h-full md:h-full md:max-h-[140px]"
          />
        </div>
      </div>
    </div>
  );
};
