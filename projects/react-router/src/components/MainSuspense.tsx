import { Spinner } from './ui/spinner'

export const MainSuspense = () => (
  <div className="min-h-[calc(90vh-5rem)] text-center text-white/40 flex flex-col items-center justify-center gap-4">
    <Spinner className="h-16 w-16" />
    <p className="text-md">Loading...</p>
  </div>
)
