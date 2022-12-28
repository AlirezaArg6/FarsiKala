import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { DigiBox } from "../DigiBox/DigiBox";

export const DigiPlusService = () => {
  return (
    <section id="digiplus">
      {/* container */}
      <div className="section-container ">
        {/* ackground */}
        <div className="bg-[#941B80] rounded-2xl p-4">
          {/* items */}
          <div className="grid md:grid-cols-3 gap-3">
            <div className="relative">
              <img src="plus-widget.png" alt="" className="w-full h-full" />
              {/* description oberlay */}
              <div className="absolute top-0 right-0">
                <h3 className="text-white text-2xl font-bold">FARSIPLUS</h3>
                <h3 className="text-white font-bold  mb-4">
                  خدمات ویژه برای اعضای دیجی‌پلاس{" "}
                </h3>
                <button className="flex items-center text-white border border-white rounded-md py-1 px-2">
                  عضویت
                  <BiChevronLeft className="mr-2" />
                </button>
              </div>
            </div>
            {/* box 1 */}
            <div>
              <DigiBox />
            </div>
            {/* box 2 */}
            <div>
              <DigiBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
