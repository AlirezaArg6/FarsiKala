import React from "react";

export const ProductBox = () => {
  return (
    <div className="bg-white rounded-lg  overflow-hidden   items-center justify-between  py-4 flex flex-col space-y-8 text-center md:max-w-auto">
      <img
        src="assets/images/products/6.jpg"
        alt=""
        className="w-[212px] h-[212px]"
      />
      {/* product infos */}
      <div>
        <span className="block text-sm text-gray-500">گوشی iPhone 13 Pro</span>
        <span className="block text-sm mt-2 text-gray-700">1.400.000تومان</span>
      </div>
    </div>
  );
};
