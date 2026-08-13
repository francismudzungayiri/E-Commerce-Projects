import React from "react";
import ProductCard from "./productCard";
import kallaxDrawers from "../assets/kallax-drawers.png";
import mammutChair from "../assets/mammut-chair.png";
import arkelstorpDesk from "../assets/arkelstorp-desk.png";

const FurnitureSale = () => {
  // Simulated database payload
  const inventory = [
    {
      id: "item_001",
      name: "KALLAX",
      price: 25.0,
      imageUrl: kallaxDrawers,
    },
    {
      id: "item_002",
      name: "MAMMUT",
      price: 12.0,
      imageUrl: mammutChair,
      originalPrice: 19.99,
    },
    {
      id: "item_003",
      name: "ARKELSTORP",
      price: 65.0,
      imageUrl: arkelstorpDesk,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 font-sans">
      <header className="text-center mb-12">
        <span className="block text-sm font-medium tracking-widest text-gray-800 uppercase mb-2">
          POPULAR
        </span>
        <h2 className="text-4xl font-normal text-black m-0">
          Furniture Sale Now On!
        </h2>
      </header>

      {/* Responsive Grid: 1 column on mobile, 2 on tablets, 3 on desktops */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {inventory.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            originalPrice={item.originalPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default FurnitureSale;
