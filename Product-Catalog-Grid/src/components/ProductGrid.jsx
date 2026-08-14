import { PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  return (
    <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
