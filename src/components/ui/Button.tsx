interface ButtonProps {
  title: string

  onClick: () => void
}

function Button({
  title,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        bg-emerald-600
        text-white
        px-6
        py-3
        rounded-xl
        hover:bg-emerald-700
        transition
      "
    >
      {title}
    </button>
  )
}

export default Button