import React from "react";
import { AdsBanner } from "./Components/AdsBanner/AdsBanner";
import { AmazingOffers } from "./Components/AmazingOffers/AmazingOffers";
import { Articles } from "./Components/Articles/Articles";
import { FarsiKalaSections } from "./Components/FarsiKalaSections/FarsiKalaSections";
import { Footer } from "./Components/Footer/Footer";
import { HeroSlider } from "./Components/HeroSlider/HeroSlider";
import Navbar from "./Components/Navbar/Navbar";
import { Suggestions } from "./Components/Suggestions/Suggestions";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <FarsiKalaSections />
      <AmazingOffers />
      <Suggestions />
      <AdsBanner />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
