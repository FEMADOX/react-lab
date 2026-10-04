export const Footer = () => (
  <footer className="grid min-h-[130px] grid-cols-[1fr_auto_1fr] items-center gap-6 border-line border-t bg-paper-deep px-[max(5vw,calc((100vw-1180px)/2))] text-xs text-muted max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:justify-items-center max-[560px]:py-7 max-[560px]:text-center">
    <a
      className="inline-flex w-max items-center gap-2.5 font-display text-[21px] font-bold text-ink no-underline max-[560px]:text-lg"
      href="#top"
    >
      <span
        className="grid size-[34px] place-items-center rounded-full bg-orange pl-0.5 font-sans text-xs leading-none text-white max-[560px]:size-[30px]"
        aria-hidden="true"
      >
        ▶
      </span>
      <span>Cinebuscador</span>
    </a>
    <p className="max-[900px]:hidden">
      Tu guía para encontrar la próxima gran película.
    </p>
    <p className="justify-self-end max-[560px]:justify-self-center">
      © 2026 Cinebuscador
    </p>
  </footer>
)
