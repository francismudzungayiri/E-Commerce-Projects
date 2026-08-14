import { CATEGORIES, BRANDS, RATINGS } from '../data/filters'
import StarRating from './StarRating'

function FilterCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5">
      <h3 className="mb-4 font-semibold text-neutral-900">{title}</h3>
      {children}
    </div>
  )
}

function CheckboxList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item}>
          <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 hover:text-neutral-900">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-neutral-900 focus:ring-neutral-900"
            />
            {item}
          </label>
        </li>
      ))}
    </ul>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-full shrink-0 space-y-6 lg:w-64">
      <FilterCard title="Product Categories">
        <CheckboxList items={CATEGORIES} />
      </FilterCard>

      <FilterCard title="Filter by Price">
        <input
          type="range"
          min="0"
          max="500"
          defaultValue="60"
          className="w-full accent-neutral-900"
        />
        <p className="mt-2 text-sm text-gray-500">$0 &ndash; $500</p>
      </FilterCard>

      <FilterCard title="Ratings">
        <ul className="space-y-3">
          {RATINGS.map(({ stars, count }) => (
            <li key={stars}>
              <button
                type="button"
                className="flex w-full items-center gap-2 text-sm text-gray-600 hover:text-neutral-900"
              >
                <StarRating rating={stars} size="h-4 w-4" />
                <span>({count})</span>
              </button>
            </li>
          ))}
        </ul>
      </FilterCard>

      <FilterCard title="Brands">
        <CheckboxList items={BRANDS} />
      </FilterCard>
    </aside>
  )
}
