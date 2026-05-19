interface CategoryFilterProps {
  selectedCategory: string

  onSelectCategory: (
    category: string
  ) => void
}

const categories = [
  'All',
  'Restaurant',
  'Cafe',
  'Attraction',
  'Shopping',
]

function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            onSelectCategory(category)
          }
          className={`
            px-5
            py-2
            rounded-xl
            transition
            ${
              selectedCategory ===
              category
                ? 'bg-emerald-700 text-white'
                : 'bg-white text-gray-700 hover:bg-emerald-100'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter