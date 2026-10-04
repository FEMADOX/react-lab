export const Header = () => (
  <header className="grid min-h-20.5 grid-cols-[1fr_auto_1fr] items-center gap-8 border-line border-b px-[max(5vw,calc((100vw-1180px)/2))] max-[900px]:grid-cols-[1fr_auto] max-[560px]:min-h-17">
    <a
      className="inline-flex w-max items-center gap-2.5 font-display text-[21px] font-bold text-ink no-underline max-[560px]:text-lg"
      href="#top"
      aria-label="Cinebuscador, inicio"
    >
      <span
        className="grid size-8.5 place-items-center rounded-full bg-orange pl-0.5 font-sans text-xs leading-none text-white max-[560px]:size-7.5"
        aria-hidden="true"
      >
        ▶
      </span>
      <span>Cinebuscador</span>
    </a>

    <nav
      className="flex items-center gap-8.5 max-[900px]:hidden"
      aria-label="Navegación principal"
    >
      <a
        className="relative text-sm font-semibold text-ink no-underline after:absolute after:right-0 after:-bottom-7.75 after:left-0 after:h-0.5 after:bg-orange after:content-[''] hover:text-orange focus-visible:text-orange"
        href="#peliculas"
      >
        Películas
      </a>
      <a
        className="relative text-sm font-semibold text-muted no-underline hover:text-orange focus-visible:text-orange"
        href="#generos"
      >
        Géneros
      </a>
      <a
        className="relative text-sm font-semibold text-muted no-underline hover:text-orange focus-visible:text-orange"
        href="#populares"
      >
        Populares
      </a>
    </nav>

    <a
      className="flex items-center justify-self-end gap-1.5 text-sm font-semibold text-muted no-underline hover:text-orange focus-visible:text-orange max-[560px]:text-xs"
      href="#mi-lista"
    >
      <span aria-hidden="true">＋</span> Mi lista
    </a>
  </header>
)
