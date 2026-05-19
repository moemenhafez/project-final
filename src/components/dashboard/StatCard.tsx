interface StatCardProps {
  title: string

  value: string
}

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-md
        p-6
      "
    >
      <h2
        className="
          text-lg
          font-semibold
          text-gray-600
        "
      >
        {title}
      </h2>

      <p
        className="
          text-4xl
          font-bold
          text-emerald-700
          mt-4
        "
      >
        {value}
      </p>
    </div>
  )
}

export default StatCard