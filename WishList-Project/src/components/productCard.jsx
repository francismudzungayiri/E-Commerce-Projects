import { Heart } from "lucide-react";
import { useState } from "react";

function ProductCard({ product, setWishesNum }) {
  const { name, image, price } = product;
  const [isWished, setIsWished] = useState(false);

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt={name}
          className="aspect-5/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={() => {
            setIsWished(!isWished);
            setWishesNum((prev) => (isWished ? prev - 1 : prev + 1));
          }}
          type="button"
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-sm transition-colors hover:text-red-500"
        >
          <Heart
            className={`h-4 w-4 ${
              isWished ? "fill-red-500 stroke-red-500" : ""
            }`}
          />
        </button>
      </div>

      <div className="mt-3 space-y-1.5">
        <h3 className="font-medium text-neutral-900">{name}</h3>
        <p className="font-semibold text-neutral-900">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
