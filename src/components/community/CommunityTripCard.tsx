interface CommunityTripCardProps {
  title: string

  organizer: string

  gatheringPoint: string

  date: string

  price: number

  seats: number

  stops: string[]
}

function CommunityTripCard({
  title,
  organizer,
  gatheringPoint,
  date,
  price,
  seats,
  stops,
}: CommunityTripCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-xl
        transition
        duration-300
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <h2
            className="
              text-2xl
              font-bold
              text-gray-800
            "
          >
            {title}
          </h2>

          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Organized by {organizer}
          </p>
        </div>

        <div
          className="
            bg-emerald-100
            text-emerald-700
            px-4
            py-2
            rounded-full
            font-semibold
          "
        >
          ${price}
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-gray-700">
          📍 Gathering Point:
          {' '}
          {gatheringPoint}
        </p>

        <p className="text-gray-700">
          📅 Date:
          {' '}
          {date}
        </p>

        <p className="text-gray-700">
          🎟️ Available Seats:
          {' '}
          {seats}
        </p>
      </div>

      <div className="mt-6">
        <h3
          className="
            font-semibold
            text-gray-800
            mb-3
          "
        >
          Trip Stops
        </h3>

        <div className="space-y-2">
          {stops.map((stop) => (
            <div
              key={stop}
              className="
                bg-gray-100
                px-4
                py-2
                rounded-xl
                text-gray-700
              "
            >
              {stop}
            </div>
          ))}
        </div>
      </div>

      <button
        className="
          w-full
          mt-8
          bg-gray-900
          text-white
          py-3
          rounded-2xl
          hover:bg-black
          transition
        "
      >
        Join Trip
      </button>
    </div>
  )
}

export default CommunityTripCard