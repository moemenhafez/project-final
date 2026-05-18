import Spinner from '@/components/ui/Spinner'

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
      className="
        w-full
        bg-emerald-600
        text-white
        px-6
        py-3
        rounded-xl
        hover:bg-emerald-700
        transition
        disabled:bg-gray-400
        disabled:cursor-not-allowed
      "
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