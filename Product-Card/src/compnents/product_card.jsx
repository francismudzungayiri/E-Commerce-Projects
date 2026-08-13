import { useState } from "react";
import shoeImg from "../assets/shoe2.png";

function ProductCard() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/10">
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-linear-to-br from-violet-400 via-violet-500 to-violet-800">
        <button
          type="button"
          onClick={() => setLiked((prev) => !prev)}
          aria-label="Add to wishlist"
          aria-pressed={liked}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur transition hover:bg-white/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.8}
            className={`h-5 w-5 transition-colors ${
              liked ? "text-rose-400" : "text-white"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.5s-7.5-4.6-9.8-9.1C.6 7.9 2.4 4.5 5.8 4c2.1-.3 4 .8 6.2 3 2.2-2.2 4.1-3.3 6.2-3 3.4.5 5.2 3.9 3.6 7.4-2.3 4.5-9.8 9.1-9.8 9.1Z"
            />
          </svg>
        </button>

        <img
          src={shoeImg}
          alt="Nike Running Shoe"
          className="h-3/4 w-3/4 -rotate-45 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold text-slate-900">Nike Running Shoe</h2>

        <div className="flex gap-2">
          <span className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600">
            EU38
          </span>
          <span className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600">
            BLACK/WHITE
          </span>
        </div>

        <p className="leading-relaxed text-slate-500">
          Crossing hardwood comfort with off-court flair. '80s-inspired
          construction, bold details and nothin'-but-net style.
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-slate-400">
              PRICE
            </p>
            <p className="text-2xl font-bold text-slate-900">$69.99</p>
          </div>
          <button
            type="button"
            className="rounded-xl bg-violet-800 px-6 py-3 font-semibold text-white transition hover:bg-violet-900 active:scale-95 cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
