interface InputProps {
  type: string

  placeholder: string
}

function Input({
  type,
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        px-4
        py-3
        border
        border-gray-300
        rounded-xl
        outline-none
        focus:border-emerald-600
        transition
      "
    />
  )
}

export default Input