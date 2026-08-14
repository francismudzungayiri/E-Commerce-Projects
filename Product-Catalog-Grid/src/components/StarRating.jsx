import { StarIcon } from './Icons'

export default function StarRating({ rating, size = 'h-3.5 w-3.5' }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          filled={i < rating}
          className={`${size} ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
        />
      ))}
    </div>
  )
}
