import Spinner from '@/components/ui/Spinner'

import { colors } from '@/theme/colors'

interface ButtonProps {
  title: string

  onClick: () => void

  loading?: boolean
}

function Button({
  title,
  onClick,
  loading = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`
        w-full
        bg-${colors.primary}
        text-${colors.white}
        px-6
        py-3
        rounded-xl
        hover:bg-${colors.primaryHover}
        transition
        disabled:bg-${colors.gray}
        disabled:cursor-not-allowed
      `}
    >
      {loading ? (
        <Spinner />
      ) : (
        title
      )}
    </button>
  )
}

export default Button