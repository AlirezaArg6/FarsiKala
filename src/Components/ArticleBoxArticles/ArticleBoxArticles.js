import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiArticleLine } from "react-icons/ri";

export const ArticleBoxArticles = () => {
  return (
    // container
    <div className="max-w-[500px]  shadow-lg mx-auto">
      {/* image container */}
      <div>
        <img
          src="/assets/images/articles/ie_83321-600x381-1.jpg"
          alt=""
          className="w-full h-full mx-auto object-fit"
        />
      </div>
      <div className="p-5 space-y-4 mt-4">
        <h6 className="text-gray-700 text-md font-bold">
          گزیده نقدهای فیلم «پروژه آدام»؛ تظاهر به جاه‌طلبی
        </h6>
        <p className="paragraph line-clamp-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
          با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <button className="bg-mainColor/90 text-white duration-200 flex items-center p-2 px-3 mr-auto rounded text-[14px] hover:bg-mainColor hover:-translate-y-1 hover:shadow-xl">
          ادامه مطلب <HiOutlineArrowNarrowLeft className="mr-2" />
        </button>
      </div>
      {/* border */}
      <div className="border my-3"></div>
      {/* bottom part */}
      <div className="p-5">
        <ul className="flex">
          <li className="flex items-center  text-[12px] text-gray-700">
            <FaUserCircle className="ml-2" size={24} />
            نویسنده سایت &nbsp;/
          </li>

          <li className="flex items-center mr-3 text-[12px] text-gray-700">
            <RiArticleLine className="ml-2" size={14} />
            وبلاگ &nbsp;/
          </li>
          <li className="flex items-center mr-3 text-[12px] text-gray-700">
            <AiOutlineClockCircle className="ml-2" size={14} />
            دی 6 , 1400
          </li>
        </ul>
      </div>
    </div>
  );
};
