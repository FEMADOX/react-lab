type SearchInputProps = {
  value: string
  onValueChange: (value: string) => void
}

export const SearchInput = ({ value, onValueChange }: SearchInputProps) => (
  <input
    className="w-full min-w-0 border-0 bg-transparent px-3.5 py-3.75 text-sm text-ink outline-0 placeholder:text-[#9a958d] max-[560px]:py-3.5"
    id="movie-search"
    name="movie"
    type="search"
    placeholder="Ej. Interestelar, El padrino..."
    required
    value={value}
    onChange={e => onValueChange(e.target.value)}
  />
)
