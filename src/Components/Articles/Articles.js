import React from "react";
import ArtilceBox from "../ArtilceBox/ArtilceBox";

export const Articles = () => {
  return (
    <section id="articles">
      {/* container */}
      <div className="section-container pb-8 px-0">
        {/* title */}
        <h3 className="text-xl text-gray-600 mb-4">خواندنی ها</h3>
        {/* article box */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          <ArtilceBox />
          <ArtilceBox />
          <ArtilceBox />
          <ArtilceBox />
        </div>
      </div>
    </section>
  );
};
