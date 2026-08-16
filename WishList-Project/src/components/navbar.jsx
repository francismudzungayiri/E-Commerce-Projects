import { useState } from "react";
import { Heart, User } from "lucide-react";

const navlinks = ["products", "story", "manufacturing", "packaging"];

const Navbar = ({ num_of_wishes }) => {
  const [activeLink, setActiveLink] = useState(navlinks[0]);
  return (
    <nav className="w-full flex items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-700">Hoodie</h1>
      <ul className="flex items-center gap-8">
        {navlinks.map((link) => (
          <li
            onClick={() => setActiveLink(link)}
            key={link}
            className={`text-gray-500 hover:text-gray-700 pb-4 px-4 cursor-pointer 
            ${activeLink === link ? "border-b-2 border-orange-300" : ""}`}
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-10">
        <div className="relative cursor-pointer">
          {num_of_wishes > 0 && (
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {num_of_wishes}
            </span>
          )}
          <Heart size={20} className="text-gray-500 hover:text-gray-700" />
        </div>
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 cursor-pointer">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
