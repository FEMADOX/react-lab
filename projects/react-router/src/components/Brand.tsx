export function Brand() {
  return (
    <a
      className="group inline-flex items-center gap-3 text-white no-underline"
      href="/"
      aria-label="Mine Router, ir al inicio"
    >
      <span className="grid size-10 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/10 shadow-[0_0_24px_rgba(139,92,246,0.12)] transition-colors group-hover:border-violet-400/60">
        <svg
          aria-hidden="true"
          className="size-5 text-violet-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 6.75h10.5m-10.5 0v10.5m0-10.5 10.5 10.5M17.25 6.75v4.5m0 6v-1.5h-1.5"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-[-0.02em]">
        Mine<span className="text-violet-400">router</span>
      </span>
    </a>
  )
}
