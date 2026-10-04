type RouteCardProps = {
  path: string
  title: string
  description: string
  icon: 'home' | 'user' | 'search' | 'error'
}

const icons = {
  home: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.95-8.95a1.13 1.13 0 0 1 1.6 0L21.75 12M4.5 9.75v9.38c0 .62.5 1.12 1.13 1.12H9.75v-4.88c0-.62.5-1.12 1.13-1.12h2.24c.63 0 1.13.5 1.13 1.12v4.88h4.12c.63 0 1.13-.5 1.13-1.12V9.75"
    />
  ),
  user: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.12a7.5 7.5 0 0 1 15 0A17.9 17.9 0 0 1 12 21.75a17.9 17.9 0 0 1-7.5-1.63Z"
    />
  ),
  search: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-4.35-4.35m0 0a7.5 7.5 0 1 0-10.6-10.6 7.5 7.5 0 0 0 10.6 10.6Z"
    />
  ),
  error: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9.3 3.38c.87 1.5-.22 3.37-1.95 3.37H4.65c-1.73 0-2.82-1.87-1.95-3.37L10.05 3.4c.86-1.5 3.04-1.5 3.9 0l7.35 12.73ZM12 16.5h.01v.01H12v-.01Z"
    />
  )
}

export function RouteCard({ path, title, description, icon }: RouteCardProps) {
  return (
    <article className="group rounded-3xl border border-white/8 bg-white/2.5 p-6 transition-colors hover:border-violet-400/25 hover:bg-violet-500/4.5">
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-2xl bg-violet-500/10 text-violet-300 ring-1 ring-inset ring-violet-400/20">
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {icons[icon]}
          </svg>
        </span>
        <code className="rounded-full border border-white/8 bg-black/30 px-3 py-1.5 text-xs text-zinc-400">
          {path}
        </code>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
    </article>
  )
}
