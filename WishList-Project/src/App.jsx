import Navbar from "./components/navbar";
import ProductHero from "./components/productHero";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-7 px-10">
      <Navbar />
      <ProductHero />
    </div>
  );
};

export default App;
