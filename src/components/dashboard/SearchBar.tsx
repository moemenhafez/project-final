interface SearchBarProps {
  searchValue: string

  onSearchChange: (
    value: string
  ) => void
}

function SearchBar({
  searchValue,
  onSearchChange,
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search places..."
      value={searchValue}
      onChange={(event) =>
        onSearchChange(
          event.target.value
        )
      }
      className="
        w-full
        bg-white
        rounded-2xl
        px-5
        py-3
        shadow-md
        outline-none
        focus:ring-2
        focus:ring-emerald-500
      "
    />
  )
}

export default SearchBar