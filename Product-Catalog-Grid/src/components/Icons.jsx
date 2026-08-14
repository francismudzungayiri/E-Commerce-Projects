export function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export function HeartIcon({ filled = false, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 21s-6.7-4.35-9.3-8.2C.8 9.9 1.6 6.2 4.7 4.9c2.3-1 4.7-.2 6 1.7.4.6.7 1 1.3 1 .6 0 .9-.4 1.3-1 1.3-1.9 3.7-2.7 6-1.7 3.1 1.3 3.9 5 2 7.9C18.7 16.65 12 21 12 21Z" />
    </svg>
  )
}

export function CartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M1.5 2h2.4l2.3 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 6.5H5.1" />
    </svg>
  )
}

export function StarIcon({ filled = false, half = false, ...props }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" {...props}>
      <path d="M10 1.6 12.6 7l5.9.9-4.3 4.1 1 5.9L10 15.1l-5.2 2.8 1-5.9L1.5 7.9 7.4 7 10 1.6Z" />
    </svg>
  )
}
