export const AboutPage = () => (
  <main className="relative z-1 mx-auto grid min-h-[calc(100vh-10rem)] w-full max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute inset-8 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-violet-500/10 p-3 shadow-2xl shadow-black/40">
        <img
          className="aspect-square w-full rounded-[1.4rem] object-cover grayscale transition duration-500 hover:grayscale-0"
          src='/src/assets/MineDev.png'
          alt="MineDev"
        />
      </div>
    </div>

    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
        Sobre el proyecto
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
        Aprender creando las herramientas que usamos.
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
        ¡Hola! Me llamo Miguel Ángel y estoy creando un clon de React Router
        desde cero para entender cómo funciona la navegación de una SPA.
      </p>

      <div className="mt-9 grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border border-white/8 bg-white/3 p-5">
          <p className="text-sm font-semibold text-white">Objetivo</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Comprender rutas, enlaces y navegación construyendo cada pieza.
          </p>
        </article>
        <article className="rounded-2xl border border-white/8 bg-white/3 p-5">
          <p className="text-sm font-semibold text-white">Filosofía</p>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Menos magia, más fundamentos y decisiones visibles.
          </p>
        </article>
      </div>

      <a
        className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white no-underline transition-colors hover:bg-violet-500"
        href="/"
      >
        <svg
          aria-hidden="true"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Volver al inicio
      </a>
    </div>
  </main>
)
