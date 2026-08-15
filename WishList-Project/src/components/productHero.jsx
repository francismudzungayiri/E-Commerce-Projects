import { useState } from "react";

const productlinks = [
  "Popular",
  "Hoodies",
  "Caps & Bags",
  "Outwers",
  "T-Shirts",
  "Accessories",
];

const ProductHero = () => {
  const [activeLink, setActiveLink] = useState(productlinks[0]);
  return (
    <section className="w-full flex flex-col items-center justify-center mt-20">
      <h1 className="text-6xl font-bold text-gray-700">Our Products</h1>
      <p className="text-gray-500 mt-4 max-w-3/4 text-center">
        Our company is dedicated to providing high-quality products that meet
        the needs of our customers. We believe in using sustainable materials
        and ethical manufacturing practices to create products that are not only
        stylish but also environmentally friendly.
      </p>

      <div className="w-full flex items-center justify-around mt-40">
        {productlinks.map((link) => {
          return (
            <button
              onClick={() => setActiveLink(link)}
              key={link}
              className={`w-30 h-50 border-2 border-gray-500 text-gray-500 hover:text-gray-700 
              cursor-pointer [writing-mode:vertical-rl] rotate-180 text-lg font-medium
             hover:border-gray-700 hover:border-green-700 transition-all duration-300
             ${activeLink === link ? "bg-green-700 text-white" : ""}
             `}
            >
              {link}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ProductHero;
