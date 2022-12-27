import React from "react";
import { FarsiKalaSections } from "./Components/FarsiKalaSections/FarsiKalaSections";
import { HeroSlider } from "./Components/HeroSlider/HeroSlider";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <FarsiKalaSections />
    </>
  );
}

export default App;
