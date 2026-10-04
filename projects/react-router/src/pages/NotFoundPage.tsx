export const NotFoundPage = () => (
  <main className="relative z-1 grid min-h-[calc(100vh-10rem)] place-items-center px-5 py-20 text-center">
    <div className="max-w-2xl">
      <div className="relative mx-auto grid size-48 place-items-center sm:size-56">
        <div className="absolute inset-0 rounded-full border border-violet-400/20 bg-violet-500/8 shadow-[0_0_80px_rgba(109,40,217,0.2)]" />
        <span className="relative text-7xl font-semibold tracking-[-0.08em] text-white sm:text-8xl">
          404
        </span>
        <span className="absolute -right-2 top-8 rotate-12 rounded-full border border-white/10 bg-[#171220] px-3 py-1.5 font-mono text-xs text-violet-300">
          route?
        </span>
      </div>

      <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
        This is not fine
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
        Esta ruta se perdió.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-500">
        La dirección que buscas no coincide con ninguna de las vistas del
        proyecto. Siempre puedes regresar al punto de partida.
      </p>
      <a
        className="mt-8 inline-flex h-12 items-center rounded-full bg-violet-600 px-6 text-sm font-semibold text-white no-underline transition-colors hover:bg-violet-500"
        href="/"
      >
        Volver a la Home
      </a>
    </div>
  </main>
)
