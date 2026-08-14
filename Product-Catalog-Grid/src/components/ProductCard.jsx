import { useState } from 'react'
import { HeartIcon } from './Icons'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false)
  const { name, image, rating, reviews, price, activeColor } = product

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt={name}
          className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          type="button"
          aria-label="Toggle wishlist"
          onClick={() => setWishlisted((w) => !w)}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-sm transition-colors hover:text-red-500"
        >
          <HeartIcon filled={wishlisted} className={`h-4 w-4 ${wishlisted ? 'text-red-500' : ''}`} />
        </button>
      </div>

      <div className="mt-3 space-y-1.5">
        <h3 className="font-medium text-neutral-900">{name}</h3>

        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === activeColor ? 'bg-amber-400' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <StarRating rating={rating} />
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>

        <p className="font-semibold text-neutral-900">${price}</p>
      </div>
    </div>
  )
}
