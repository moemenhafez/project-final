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
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        transition
        duration-300
      "
    >
      <img
        src={image}
        alt={name}
        className="
          w-full
          h-56
          object-cover
        "
      />

      <div className="p-5">
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <h2
            className="
              text-2xl
              font-bold
              text-gray-800
            "
          >
            {name}
          </h2>

          <span
            className="
              bg-emerald-100
              text-emerald-700
              px-3
              py-1
              rounded-full
              text-sm
              font-medium
            "
          >
            {category}
          </span>
        </div>

        <p
          className="
            text-gray-500
            mt-2
          "
        >
          {city}
        </p>

        <div
          className="
            flex
            items-center
            justify-between
            mt-5
          "
        >
          <div>
            <p
              className="
                text-yellow-500
                font-semibold
              "
            >
              ⭐ {rating}
            </p>

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              {timeAway} away
            </p>
          </div>

          <button
            className="
              bg-emerald-700
              text-white
              px-5
              py-2
              rounded-xl
              hover:bg-emerald-800
              transition
            "
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard