import React from "react";

export const ProductBox = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden px-3 h-full items-center justify-between  py-4 flex flex-col space-y-8 text-center">
      <img
        src="assets/images/products/6.jpg"
        alt=""
        className="w-[250px] h-2/3 lg:h-[250px] lg:w-64"
      />
      {/* product infos */}
      <div>
        <span className="block text-sm text-gray-500">گوشی iPhone 13 Pro</span>
        <span className="block text-sm mt-2 text-gray-700">
          1.400.000تومان{" "}
        </span>
      </div>
    </div>
  );
};
