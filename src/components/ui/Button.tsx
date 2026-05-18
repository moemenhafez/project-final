interface ButtonProps {
  title: string
}

function Button({
  title,
}: ButtonProps) {
  return (
    <button
      className="
        bg-green-600
        text-white
        px-6
        py-3
        rounded-xl
      "
    >
      {title}
    </button>
  )
}

export default Button