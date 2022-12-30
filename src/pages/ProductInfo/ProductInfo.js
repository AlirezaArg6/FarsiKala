import React from "react";
import { BiPlus } from "react-icons/bi";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { CommentBox } from "../../Components/CommentBox/CommentBox";
import { Footer } from "../../Components/Footer/Footer";
import { MostViewdProducts } from "../../Components/MostViewdProducts/MostViewdProducts";
import Navbar from "../../Components/Navbar/Navbar";

export const ProductInfo = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, name: "خانه", to: "/" },
          { id: 2, name: "مد و پوشاک", to: "/" },
          { id: 3, name: "کفش آدیداس", to: "/" },
        ]}
      />
      <section id="product-info">
        {/* container */}
        <div className="section-container">
          {/* main details */}
          <div className="flex flex-col space-y-6 justify-center items-center lg:flex-row  lg:justify-between lg:space-y-0">
            {/* image */}
            <div className=" flex w-full">
              <img
                src="/assets/images/products/k-5-copy.jpg"
                alt=""
                className="w-72 h-full object-contain mx-auto"
              />
            </div>
            {/* details */}
            <div className="lg:mx-8 w-full">
              {/* title */}
              <h3 className="text-gray-700 text-lg">
                کفش پیاده روی مردانه آدیداس
              </h3>
              {/* product meta */}
              <div className="mt-4 border w-full">
                <div className="bg-[#f7f7f7] border-b p-2 ">
                  {/* product label */}
                  <span>شناسه:</span>
                  {/* product content */}
                  <span className="mr-4">N/A</span>
                </div>
                <div className="bg-[#f7f7f7]  p-2 ">
                  {/* product label */}
                  <span>دسته:</span>
                  {/* product content */}
                  <span className="mr-4 text-mainColor">مد و پوشاک</span>
                </div>
              </div>
              {/* features */}
              <ul className="list-disc py-3 px-8">
                <li className="text-gray-600 text-sm p-2">کفی: قابل تعویض</li>
                <li className="text-gray-600 text-sm p-2">
                  نحوه بسته شدن کفش: بندی
                </li>
                <li className="text-gray-600 text-sm p-2">
                  ویژگی‌های زیره: قابلیت ارتجاعی
                </li>
                <li className="text-gray-600 text-sm p-2">
                  ویژگی‌های تخصصی کفش: قابلیت گردش هوا
                </li>
              </ul>
            </div>
            {/* add to cart */}
            <div className="w-full lg:w-2/3">
              <div className="space-y-6 ">
                <h3 className="text-gray-700 text-lg text-center">
                  1.400.000 تومان
                </h3>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm text-gray-600"
                  >
                    اندازه
                  </label>
                  <select
                    name=""
                    id=""
                    className="text-sm text-gray-600 w-full border p-2 pl-6 focus:border-mainColor outline-none"
                  >
                    <option value="">یک گزینه را انتخاب کنید</option>
                    <option value="">چهل و چهار</option>
                    <option value="">چهل و سه</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm text-gray-600"
                  >
                    رنگ
                  </label>
                  <select
                    name=""
                    id=""
                    className="text-sm text-gray-600 w-full border p-2 pl-6 focus:border-mainColor outline-none"
                  >
                    <option value="">یک گزینه را انتخاب کنید</option>
                    <option value="">آبی </option>
                    <option value="">سبز </option>
                    <option value="">سفید </option>
                  </select>
                </div>
                {/* button container */}
                <div className="flex justify-between">
                  <div className="  ml-2 border border-mainColor py-2  px-2 rounded-lg text-sm flex items-center justify-between">
                    <span className="text-lg duration-200 cursor-pointer w-6 h-6 rounded-lg flex items-center justify-center p-3 hover:bg-mainColor hover:text-white">
                      +
                    </span>
                    <span className="w-6 h-6 rounded-lg flex items-center justify-center p-3">
                      1
                    </span>
                    <span className="text-3xl duration-200 cursor-pointer  w-6 h-6 rounded-lg flex items-center justify-center p-3 hover:bg-mainColor hover:text-white">
                      -
                    </span>
                  </div>
                  <button className="w-full bg-mainColor/90 py-2 duration-200 px-8 text-white text-sm rounded-lg hover:-translate-y-1 hover:shadow-2xl hover:bg-mainColor">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* delivery */}
        <div className="section-container ">
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row">
            {/* right side */}
            <div className="bg-[#f7f7f7] px-8 py-4 w-full border flex flex-col justify-between   items-center rounded-lg lg:flex-row lg:w-1/2 lg:py-0">
              <div>
                <h5 className="text-mainColor font-bold text-xl">
                  تحویل رایگان
                </h5>
                <p className="text-gray-700 text-[12px] mt-3">
                  با رعایت پروتکل های بهداشتی
                </p>
              </div>
              <div className="w-72">
                <img
                  src="/assets/images/delivery/delivery.png"
                  alt=""
                  className="w-full h-full object-fit mx-auto"
                />
              </div>
            </div>
            {/* left side */}
            <div className="bg-[#f7f7f7] p-4 w-full border flex flex-col justify-between  items-center px-8  rounded-lg lg:flex-row lg:w-1/2 lg:mr-4">
              <div>
                <h5 className="text-gray-700 font-bold text-center lg:text-right">
                  جشنواره کامنت میلیونی!
                </h5>
                <p className="text-gray-600 text-[12px] mt-3">
                  از ۲۱ تا ۲۹ هر ماه با ثبت نظر در صفحات کالاهای مختلف برنده یکی
                  از ۱۰ جایزه ۵ میلیون تومانی فارسی کالا شو.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* main */}
        <div className="section-container">
          <div className="flex flex-col lg:flex-row">
            {/* right side */}
            <div className="lg:w-[70%]">
              {/* table */}
              <h5 className="text-gray-700 mb-5  text-xl">ویژگی‌های محصول</h5>
              <table className=" border-collapse border border-slate-400 w-full">
                <tbody>
                  <tr>
                    <th className="border border-slate-300 text-sm font-normal text-gray-700 p-3">
                      اندازه
                    </th>
                    <td className="border border-slate-300 text-sm text-gray-700 px-10">
                      چهل و چهار, چهل و دو, چهل و سه, چهل و یک
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-300 text-sm font-normal text-gray-700 p-3">
                      رنگ
                    </th>
                    <td className="border border-slate-300 text-sm text-gray-700 px-10">
                      آبی, سبز, سفید, سیاه, قرمز
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* description */}
              <h5 className="text-gray-700 my-5 text-xl">توضیحات:</h5>
              <p className="paragraph tracking-wide leading-[20px]">
                اگر بخواهیم یک کفش را با توجه به نوع طراحی آن به بخش‌های مختلفی
                تقسیم کنیم می‌توانیم به رویه، زیره، لایه میانی و تودوزی اشاره
                کنیم. هر کفش بسته به نوع کاربردی که دارد، در هر یک از قسمت‌های
                نامبرده شده، ویژگی‌های خاصی خواهد داشت. کفش‌های مخصوص پیاده‌روی
                و دویدن با توجه به کاربردشان، ویژگی‌هایی دارند که با توجه بیشتر
                به آن‌ها می‌توان کفشی مناسب را انتخاب کرد.
              </p>
              <br />
              <p className="paragraph tracking-wide leading-[20px]">
                بی‌شک یکی از مهم‌ترین عوامل در انتخاب کفش‌های ورزشی، وزن آن‌ها
                است. این مسئله در کفش‌های پیاده‌روی و دویدن اهمیت بیشتری دارد.
                کفش پیاده‌روی و دویدن معمولا باید وزنی بسیار سبک داشته باشد تا
                قدم زدن یا دویدن را برای شما راحت‌تر کند. با توجه به اهمیت این
                موضوع در ساخت بیشتر این کفش‌ها از موادی استفاده می‌شود که سبک
                باشند. برای مثال بیشتر کفش‌های پیاده‌روی و دویدن رویه‌ای
                پارچه‌ای یا لایه‌ای میانی از جنس ماده شیمیایی EVA دارند که علاوه
                بر ویژگی‌های مختلف، به کم کردن وزن این کفش‌ها کمک زیادی خواهد
                کرد.
              </p>
              {/* images */}
              <div className="grid  lg:grid-cols-4 gap-4">
                <img
                  src="/assets/images/products/k-5-copy.jpg"
                  alt=""
                  className="w-56 object-fit mx-auto"
                />
                <img
                  src="/assets/images/products/k-5-copy.jpg"
                  alt=""
                  className="w-56 object-fit mx-auto"
                />
                <img
                  src="/assets/images/products/k-5-copy.jpg"
                  alt=""
                  className="w-56 object-fit mx-auto"
                />
                <img
                  src="/assets/images/products/k-5-copy.jpg"
                  alt=""
                  className="w-56 object-fit mx-auto"
                />
              </div>
              <p className="paragraph tracking-wide leading-[20px]">
                یکی دیگر از نکات بسیار مهم برای انتخاب کفش مناسب پیاده‌روی و
                دویدن، قابلیت تنفس در آن است. با توجه به این که در زمان
                فعالیت‌های ورزشی سوخت و ساز بدن و میزان گردش خون زیاد می‌شود،
                میزان دما در پا بالا خواهد رفت. به همین دلیل یکی از نکات بسیار
                مهم برای انتخاب کفش مناسب برای ورزش قابلیت تنفس در آن خواهد بود.
                تنفس خوب کفش با گردش هوای بیشتر در بخش داخلی، علاوه بر تعرق کمتر
                پا، به خنک ماندن سطح پوست کمک زیادی خواهد کرد. گردش هوا در
                کفش‌هایی که رویه‌ی پارچه‌ای دارند معمولا بیشتر از سایر کفش‌ها
                است. چرا که منافذ موجود بین الیاف باعث گردش هوای بیشتر در بخش
                داخلی خواهد شد.
              </p>
              <br />
              <p className="paragraph tracking-wide leading-[20px]">
                یکی دیگر از نکات بسیار مهم برای انتخاب کفش مناسب پیاده‌روی و
                دویدن، قابلیت تنفس در آن است. با توجه به این که در زمان
                فعالیت‌های ورزشی سوخت و ساز بدن و میزان گردش خون زیاد می‌شود،
                میزان دما در پا بالا خواهد رفت. به همین دلیل یکی از نکات بسیار
                مهم برای انتخاب کفش مناسب برای ورزش قابلیت تنفس در آن خواهد بود.
                تنفس خوب کفش با گردش هوای بیشتر در بخش داخلی، علاوه بر تعرق کمتر
                پا، به خنک ماندن سطح پوست کمک زیادی خواهد کرد. گردش هوا در
                کفش‌هایی که رویه‌ی پارچه‌ای دارند معمولا بیشتر از سایر کفش‌ها
                است. چرا که منافذ موجود بین الیاف باعث گردش هوای بیشتر در بخش
                داخلی خواهد شد.
              </p>
              <br />
              <p className="paragraph tracking-wide leading-[20px]">
                یکی دیگر از نکات بسیار مهم برای انتخاب کفش مناسب پیاده‌روی و
                دویدن، قابلیت تنفس در آن است. با توجه به این که در زمان
                فعالیت‌های ورزشی سوخت و ساز بدن و میزان گردش خون زیاد می‌شود،
                میزان دما در پا بالا خواهد رفت. به همین دلیل یکی از نکات بسیار
                مهم برای انتخاب کفش مناسب برای ورزش قابلیت تنفس در آن خواهد بود.
                تنفس خوب کفش با گردش هوای بیشتر در بخش داخلی، علاوه بر تعرق کمتر
                پا، به خنک ماندن سطح پوست کمک زیادی خواهد کرد. گردش هوا در
                کفش‌هایی که رویه‌ی پارچه‌ای دارند معمولا بیشتر از سایر کفش‌ها
                است. چرا که منافذ موجود بین الیاف باعث گردش هوای بیشتر در بخش
                داخلی خواهد شد.
              </p>
              <br />
              <p className="paragraph tracking-wide leading-[20px]">
                یکی دیگر از نکات بسیار مهم برای انتخاب کفش مناسب پیاده‌روی و
                دویدن، قابلیت تنفس در آن است. با توجه به این که در زمان
                فعالیت‌های ورزشی سوخت و ساز بدن و میزان گردش خون زیاد می‌شود،
                میزان دما در پا بالا خواهد رفت. به همین دلیل یکی از نکات بسیار
                مهم برای انتخاب کفش مناسب برای ورزش قابلیت تنفس در آن خواهد بود.
                تنفس خوب کفش با گردش هوای بیشتر در بخش داخلی، علاوه بر تعرق کمتر
                پا، به خنک ماندن سطح پوست کمک زیادی خواهد کرد. گردش هوا در
                کفش‌هایی که رویه‌ی پارچه‌ای دارند معمولا بیشتر از سایر کفش‌ها
                است. چرا که منافذ موجود بین الیاف باعث گردش هوای بیشتر در بخش
                داخلی خواهد شد.
              </p>
            </div>
            {/* left side */}
            <div className="lg:w-[30%] lg:mr-6">
              {/* benefits */}
              <div className="bg-[#f7f7f7] rounded-lg border p-6 mt-5 md:mt-0">
                <h5 className="text-lg font-bold text-gray-700">
                  مزایای خرید از فارسی کالا
                </h5>
                <ul className="space-y-2 mt-4">
                  <li className="text-gray-600 text-sm flex items-center">
                    <BiPlus size={22} className="ml-1 text-black font-bold" />{" "}
                    پشتیبانی کمتر از 24 ساعت
                  </li>
                  <li className="text-gray-600 text-sm flex items-center">
                    <BiPlus size={22} className="ml-1 text-black font-bold" />
                    امکان تحویل اکسپرس
                  </li>
                  <li className="text-gray-600 text-sm flex items-center">
                    <BiPlus size={22} className="ml-1 text-black font-bold" />۷
                    روز هفته ۲۴ ساعته
                  </li>
                  <li className="text-gray-600 text-sm flex items-center">
                    <BiPlus size={22} className="ml-1 text-black font-bold" />
                    امکان تحویل اکسپرس
                  </li>
                </ul>
              </div>
              {/* sticky add to cart */}
              <div className="bg-[#f7f7f7] rounded-lg border p-6 mt-6 lg:sticky lg:top-5">
                <h5>کفش پیاده روی مردانه آدیداس</h5>
                {/* features */}
                <ul className="list-disc py-3 px-8">
                  <li className="text-gray-600 text-sm p-2">کفی: قابل تعویض</li>
                  <li className="text-gray-600 text-sm p-2">
                    نحوه بسته شدن کفش: بندی
                  </li>
                  <li className="text-gray-600 text-sm p-2">
                    ویژگی‌های زیره: قابلیت ارتجاعی
                  </li>
                  <li className="text-gray-600 text-sm p-2">
                    ویژگی‌های تخصصی کفش: قابلیت گردش هوا
                  </li>
                </ul>
                {/* button container */}
                <div>
                  <div className="space-y-6 ">
                    <div>
                      <label
                        htmlFor=""
                        className="block mb-2 text-sm text-gray-600"
                      >
                        اندازه
                      </label>
                      <select
                        name=""
                        id=""
                        className="text-sm text-gray-600 w-full border p-2 pl-6 focus:border-mainColor outline-none"
                      >
                        <option value="">یک گزینه را انتخاب کنید</option>
                        <option value="">چهل و چهار</option>
                        <option value="">چهل و سه</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="block mb-2 text-sm text-gray-600"
                      >
                        رنگ
                      </label>
                      <select
                        name=""
                        id=""
                        className="text-sm text-gray-600 w-full border p-2 pl-6 focus:border-mainColor outline-none"
                      >
                        <option value="">یک گزینه را انتخاب کنید</option>
                        <option value="">آبی </option>
                        <option value="">سبز </option>
                        <option value="">سفید </option>
                      </select>
                    </div>
                    {/* button container */}
                    <div className="flex justify-between">
                      <div className="  ml-2 border border-mainColor py-2  px-2 rounded-lg text-sm flex items-center justify-between">
                        <span className="text-lg duration-200 cursor-pointer w-6 h-6 rounded-lg flex items-center justify-center p-3 hover:bg-mainColor hover:text-white">
                          +
                        </span>
                        <span className="w-6 h-6 rounded-lg flex items-center justify-center p-3">
                          1
                        </span>
                        <span className="text-3xl duration-200 cursor-pointer  w-6 h-6 rounded-lg flex items-center justify-center p-3 hover:bg-mainColor hover:text-white">
                          -
                        </span>
                      </div>
                      <button className="w-full bg-mainColor/90 py-2 duration-200 px-8 text-white text-sm rounded-lg hover:-translate-y-1 hover:shadow-2xl hover:bg-mainColor">
                        افزودن به سبد خرید
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* comment box */}
        <div className="section-container">
          <CommentBox />
        </div>
        <MostViewdProducts />
      </section>
      <Footer />
    </>
  );
};
