import React from "react";

export const AdsBanner = () => {
  return (
    <section id="add">
      {/* container */}
      <div className="section-container mt-4">
        <div className="rounded-lg overflow-hidden h-[170px] max-w-auto">
          <img
            src="assets/images/adds/ad1.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
