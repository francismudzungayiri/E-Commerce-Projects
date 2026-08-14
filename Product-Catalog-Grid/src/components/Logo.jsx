export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="h-9 w-9">
        <g transform="translate(12 12)">
          <path d="M0 0 C 1.8 -3.2 1.8 -7 0 -10 C -1.8 -7 -1.8 -3.2 0 0 Z" fill="#171412" />
          <path d="M0 0 C 1.8 -3.2 1.8 -7 0 -10 C -1.8 -7 -1.8 -3.2 0 0 Z" fill="#b8823a" transform="rotate(90)" />
          <path d="M0 0 C 1.8 -3.2 1.8 -7 0 -10 C -1.8 -7 -1.8 -3.2 0 0 Z" fill="#171412" transform="rotate(180)" />
          <path d="M0 0 C 1.8 -3.2 1.8 -7 0 -10 C -1.8 -7 -1.8 -3.2 0 0 Z" fill="#b8823a" transform="rotate(270)" />
        </g>
      </svg>
      <span className="text-xl font-bold tracking-wide text-neutral-900">TRADEZ</span>
    </div>
  )
}
