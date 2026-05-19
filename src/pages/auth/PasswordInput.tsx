import { useState } from 'react'

import { FiEye, FiEyeOff } from 'react-icons/fi'

interface PasswordInputProps {
  value: string

  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void
}

function PasswordInput({
  value,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] =
    useState(false)

  return (
    <div className="relative">
      <input
        type={
          showPassword
            ? 'text'
            : 'password'
        }
        placeholder="Enter your password"
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

      <button
        type="button"
        onClick={() =>
          setShowPassword(!showPassword)
        }
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-gray-500
        "
      >
        {showPassword ? (
          <FiEyeOff size={20} />
        ) : (
          <FiEye size={20} />
        )}
      </button>
    </div>
  )
}

export default PasswordInput