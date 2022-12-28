import React from "react";
import { AmazingOffers } from "./Components/AmazingOffers/AmazingOffers";
import { FarsiKalaSections } from "./Components/FarsiKalaSections/FarsiKalaSections";
import { Footer } from "./Components/Footer/Footer";
import { HeroSlider } from "./Components/HeroSlider/HeroSlider";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <FarsiKalaSections />
      <AmazingOffers />
      <Footer />
    </>
  );
}

export default App;
