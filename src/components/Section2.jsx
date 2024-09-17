import React from "react";

const Images1 = [
  "/Images/Featured Images/1.webp",
  "/Images/Featured Images/2.webp",
  "/Images/Featured Images/3.webp",
];
const Images2 = [
  "/Images/Best/1.webp",
  "/Images/Best/2.webp",
  "/Images/Best/3.webp",
];
function Section2({ type }) {
  return (
    <div className=" text-white h-max my-10">
      <main className="container mx-auto px-4">
        <div className="relative py-12">
          <img src="" alt="" srcset="" className="mx-auto" />
        </div>

        <h2 className="text-4xl font-bold text-center mb-8">
          {type === "FEATURED" ? " FEATURED PRODUCTS" : "BEST SELLING PRODUCTS"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {type === "FEATURED"
            ? Images1.map((item) => (
                <div key={item} className="text-center">
                  <img src={item} alt="" srcset="" className="w-full mb-4" />
                  <h3 className="text-xl mb-2">LOREM IPSUM</h3>
                  <p className="text-2xl font-bold">$120</p>
                </div>
              ))
            : Images2.map((item) => (
                <div key={item} className="text-center">
                  <img src={item} alt="" srcset="" className="w-full mb-4" />
                  <h3 className="text-xl mb-2">LOREM IPSUM</h3>
                  <p className="text-2xl font-bold">$120</p>
                </div>
              ))}
        </div>
      </main>
    </div>
  );
}

export default Section2;
