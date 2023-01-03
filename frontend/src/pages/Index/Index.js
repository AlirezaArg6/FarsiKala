import React from "react";
import { AdsBanner } from "../../Components/AdsBanner/AdsBanner";
import { AmazingOffers } from "../../Components/AmazingOffers/AmazingOffers";
import { Articles } from "../../Components/Articles/Articles";
import { Categories } from "../../Components/Categories/Categories";
import { DigiPlusService } from "../../Components/DigiPlusService/DigiPlusService";
import { FarsiKalaSections } from "../../Components/FarsiKalaSections/FarsiKalaSections";
import { Footer } from "../../Components/Footer/Footer";
import { HeroSlider } from "../../Components/HeroSlider/HeroSlider";
import Navbar from "../../Components/Navbar/Navbar";
import { PopularBrands } from "../../Components/PopularBrands/PopularBrands";
import { Suggestions } from "../../Components/Suggestions/Suggestions";

export const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <FarsiKalaSections />
      <AmazingOffers />
      <div className="grid  section-container gap-5 md:grid-cols-4">
        <div className=" rounded-lg overflow-hidden">
          <img
            src="/assets/images/adds/100.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className=" rounded-lg overflow-hidden">
          <img
            src="/assets/images/adds/400.gif"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className=" rounded-lg overflow-hidden">
          <img
            src="/assets/images/adds/200.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className=" rounded-lg overflow-hidden">
          <img
            src="/assets/images/adds/300.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
      <Categories />
      <div className="flex flex-col space-y-5  section-container md:space-y-0 md:gap-5 md:flex-row">
        <div className=" rounded-lg overflow-hidden">
          <img
            src="/assets/images/adds/003.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className=" rounded-lg overflow-hidden">
          <img
            src="/assets/images/adds/004.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
      <Suggestions />
      <AdsBanner />
      <PopularBrands />
      <DigiPlusService />
      <Articles />
      <Footer />
    </>
  );
};
