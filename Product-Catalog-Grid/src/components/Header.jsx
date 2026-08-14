import { useState } from "react";
import Logo from "./Logo";
import { SearchIcon, HeartIcon, CartIcon } from "./Icons";

const NAV_ITEMS = ["Home", "Products", "Shop", "About Us"];

export default function Header() {
  const [active, setActive] = useState("Products");

  return (
    <header className="flex flex-wrap items-center justify-between gap-6 border-b border-gray-100 pb-6">
      <Logo />

      <nav className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              active === item
                ? "text-neutral-900 underline underline-offset-8 decoration-1"
                : "text-gray-500 hover:text-neutral-900"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Search"
          className="text-neutral-800 hover:text-neutral-900"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Wishlist"
          className="text-neutral-800 hover:text-neutral-900"
        >
          <HeartIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Cart"
          className="text-neutral-800 hover:text-neutral-900"
        >
          <CartIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="ml-2 rounded-full border border-neutral-900 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
        >
          Log In
        </button>
      </div>
    </header>
  );
}
