import React from "react";
import { SuggestionBox } from "../SuggestionBox/SuggestionBox";

export const Suggestions = () => {
  return (
    <section id="suggest">
      {/* container */}
      <div className="section-container">
        {/* title */}
        <h3 className="text-2xl text-gray-600 mb-6 text-center">
          پیشنهاد فارسی کالا
        </h3>
        {/* suggest boxes container */}
        <div className="grid md:grid-cols-4 gap-6">
          <SuggestionBox />
          <SuggestionBox />
          <SuggestionBox />
          <SuggestionBox />
        </div>
      </div>
    </section>
  );
};
