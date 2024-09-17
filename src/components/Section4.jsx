import React from "react";

const Images = ["/Images/Banner/1.webp", "/Images/Banner/2.webp"];

function Section4() {
  return (
    <div className=" text-white min-h-screen">
      <div className="flex flex-col md:flex-row h-screen">
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={Images[0]}
            alt="Stylish man smoking cigar"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-end p-8">
            <button className="mb-4 w-48 bg-white text-black h-10 rounded-md">SHOP NOW</button>

            <h2 className="text-3xl font-bold">AK X EGM</h2>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={Images[1]}
            alt="Cigars and jewelry"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-end p-8">
            <button className="mb-4 w-48 bg-white text-black h-10 rounded-md">SHOP NOW</button>
            <h2 className="text-3xl font-bold">LIMITED EDITIONS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
