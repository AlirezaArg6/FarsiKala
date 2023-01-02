import React from "react";

export const CommentBox = () => {
  return (
    <div className=" rounded-lg p-8 border my-8 ">
      <h5 className="text-gray-700 font-bold text-lg">نقد و بررسی‌ها</h5>
      <p className="paragraph text-[12px] mt-5 mb-7">
        هیچ دیدگاهی برای این محصول نوشته نشده است.
      </p>
      <h5 className="text-gray-700 font-bold text-lg">
        اولین کسی باشید که دیدگاهی می نویسد “کفش پیاده روی مردانه آدیداس”
      </h5>

      {/* form */}
      <form action="" className="grid md:grid-cols-2 gap-4">
        <p htmlFor="" className="paragraph text-[12px] my-5 md:col-span-2">
          نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
          <span className="requierd">*</span>
        </p>
        {/* score */}
        <div className=" md:col-span-2">
          <label htmlFor="" className="paragraph text-[12px]">
            امتیاز شما
            <span className="requierd">*</span>
          </label>
        </div>
        {/* text area form field */}
        <div className="md:col-span-2 ">
          <label htmlFor="" className="  paragraph text-sm ">
            دیدگاه شما
            <span className="requierd">*</span>
          </label>
          <textarea
            name=""
            id=""
            rows={8}
            className="border border-gray-300 w-full rounded-md mt-3  px-3 py-2 focus:border-mainColor outline-none resize-none"
          ></textarea>
        </div>
        {/* input form field */}
        <div>
          <label htmlFor="" className="paragraph text-sm">
            نام <span className="requierd">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 w-full mt-3 rounded-md px-3 py-2 focus:border-mainColor outline-none"
          />
        </div>
        {/* input form field */}
        <div>
          <label htmlFor="" className="paragraph text-sm">
            پست الکترونیک <span className="requierd">*</span>
          </label>
          <input
            type="text"
            className="border border-gray-300 w-full mt-3 rounded-md px-3 py-2 focus:border-mainColor outline-none"
          />
        </div>
        {/* remember */}
        <div className="md:col-span-2 flex items-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="ml-3 accent-mainColor/90"
          />
          <span className="paragraph text-[12px]">
            ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
            می‌نویسم.
          </span>
        </div>
        <button className="p-2 bg-mainColor/90 text-white w-20 duration-200 rounded-md hover:-translate-y-1 hover:shadow-2xl hover:bg-mainColor">
          ثبت
        </button>
      </form>
    </div>
  );
};
