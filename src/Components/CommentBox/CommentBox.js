import React from "react";

export const CommentBox = () => {
  return (
    <div className="shadow-commentBox rounded-lg p-8 border">
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
        <textarea
          name=""
          id=""
          cols={20}
          className="border border-gray-300 rounded-md md:col-span-2 px-3 py-2 focus:border-mainColor outline-none resize-none"
        ></textarea>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 focus:border-mainColor outline-none"
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 focus:border-mainColor outline-none"
        />
        {/* remember */}
        <div className="md:col-span-2 flex items-center">
          <input type="checkbox" name="" id="" className="ml-3" />
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
