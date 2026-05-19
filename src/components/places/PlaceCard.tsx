interface PlaceCardProps {
  name: string

  category: string

  city: string

  rating: number

  timeAway: string

  image: string
}

function PlaceCard({
  name,
  category,
  city,
  rating,
  timeAway,
  image,
}: PlaceCardProps) {
  return (
    <div
      className="
        group
        bg-white
        rounded-[32px]
        overflow-hidden
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-2
      "
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="
            w-full
            h-72
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        <div
          className="
            absolute
            top-4
            left-4
            bg-white/90
            backdrop-blur-md
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            text-gray-800
          "
        >
          {category}
        </div>

        <div
          className="
            absolute
            bottom-5
            left-5
            text-white
          "
        >
          <h2
            className="
              text-3xl
              font-bold
            "
          >
            {name}
          </h2>

          <p
            className="
              text-white/80
              mt-1
            "
          >
            {city}
          </p>
        </div>
      </div>

      <div
        className="
          p-5
          flex
          items-center
          justify-between
        "
      >
        <div>
          <p
            className="
              text-yellow-500
              font-semibold
              text-lg
            "
          >
            ⭐ {rating}
          </p>

          <p
            className="
              text-gray-500
              text-sm
              mt-1
            "
          >
            {timeAway} away
          </p>
        </div>

        <button
          className="
            bg-gray-900
            text-white
            px-5
            py-2.5
            rounded-2xl
            hover:bg-black
            transition
          "
        >
          Explore
        </button>
      </div>
    </div>
  )
}

export default PlaceCard