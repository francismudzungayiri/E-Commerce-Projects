import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";

function App() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-full rounded-3xl bg-white p-6 shadow-xl sm:p-10">
        <Header />
        <div className="flex flex-col gap-8 pt-8 lg:flex-row">
          <Sidebar />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
