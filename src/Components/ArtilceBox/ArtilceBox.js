import React from "react";

export default function ArtilceBox() {
  return (
    <article className="shadow-xl max-w-full overflow-hidden rounded-xl duration-200 hover:shadow-2xl">
      {/* img */}
      <div className="max-w-full h-[240px] ">
        <img
          src="assets/images/articles/malooliat.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="px-6 py-4">
        {/* title */}
        <h5 className="text-mainColor text-sm mb-3">
          در آستانه روز جهانی افراد دارای معلولیت
        </h5>
        {/* description */}
        <p className="text-sm text-gray-500">
          اسنپ از اقدامات خود برای حمایت از افراد دارای معلولیت می‌گویداسنپ،
          همزمان با روز جهانی افراد دارای معلولیت، از سه
        </p>
      </div>
    </article>
  );
}
