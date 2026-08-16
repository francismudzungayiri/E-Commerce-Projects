import { useState } from "react";
import Navbar from "./components/navbar";
import ProductHero from "./components/productHero";

const App = () => {
  const [wishesNum, setWishesNum] = useState(0);
  return (
    <div className="w-full min-h-screen bg-gray-100 py-7 px-10">
      <Navbar num_of_wishes={wishesNum} />
      <ProductHero setWishes={setWishesNum} />
    </div>
  );
};

export default App;
