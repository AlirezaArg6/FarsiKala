import React from "react";
import { AdsBanner } from "./Components/AdsBanner/AdsBanner";
import { AmazingOffers } from "./Components/AmazingOffers/AmazingOffers";
import { Articles } from "./Components/Articles/Articles";
import { Categories } from "./Components/Categories/Categories";
import { DigiPlusService } from "./Components/DigiPlusService/DigiPlusService";
import { FarsiKalaSections } from "./Components/FarsiKalaSections/FarsiKalaSections";
import { Footer } from "./Components/Footer/Footer";
import { HeroSlider } from "./Components/HeroSlider/HeroSlider";
import Navbar from "./Components/Navbar/Navbar";
import { PopularBrands } from "./Components/PopularBrands/PopularBrands";
import { Suggestions } from "./Components/Suggestions/Suggestions";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <FarsiKalaSections />
      <AmazingOffers />
      <Categories />
      <AdsBanner />
      <Suggestions />
      <PopularBrands />
      <DigiPlusService />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
