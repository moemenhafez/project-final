interface InputProps {
  type: string

  placeholder: string

  value: string

  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

function Input({
  type,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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