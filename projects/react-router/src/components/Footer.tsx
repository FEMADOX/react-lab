import { Brand } from './Brand'

export function Footer() {
  return (
    <footer className="relative border-t border-white/8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <Brand />
        <p className="max-w-md text-sm leading-6 text-zinc-500 md:text-right">
          Maquetación inspirada en el proyecto educativo de MineDev para crear
          un React Router desde cero.
        </p>
      </div>
    </footer>
  )
}
