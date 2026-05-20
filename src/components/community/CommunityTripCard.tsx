import { useState } from 'react'

import {
  joinTrip,
} from '@/utils/communityTripsStorage'

interface CommunityTripCardProps {
  title: string

  organizer: string

  gatheringPoint: string

  date: string

  price: number

  seats: number

  stops: string[]

  onTripJoined: () => void
}

function CommunityTripCard({
  title,
  organizer,
  gatheringPoint,
  date,
  price,
  seats,
  stops,
  onTripJoined,
}: CommunityTripCardProps) {
  const [
    isBookingOpen,
    setIsBookingOpen,
  ] = useState(false)

  function handleBooking() {
    joinTrip(title)

    onTripJoined()

    setIsBookingOpen(false)

    alert(
      'Booking confirmed successfully!'
    )
  }

  return (
    <>
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
          onClick={() => {
            if (seats === 0) {
              return
            }

            setIsBookingOpen(true)
          }}
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
          {seats === 0
            ? 'Sold Out'
            : 'Join Trip'}
        </button>
      </div>

      {isBookingOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            z-50
            p-4
          "
        >
          <div
            className="
              bg-white
              rounded-3xl
              p-8
              w-full
              max-w-md
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                text-gray-800
              "
            >
              Confirm Booking
            </h2>

            <div className="mt-6 space-y-4">
              <div
                className="
                  flex
                  justify-between
                "
              >
                <span className="text-gray-500">
                  Trip
                </span>

                <span className="font-semibold">
                  {title}
                </span>
              </div>

              <div
                className="
                  flex
                  justify-between
                "
              >
                <span className="text-gray-500">
                  Price
                </span>

                <span className="font-semibold">
                  ${price}
                </span>
              </div>

              <div
                className="
                  flex
                  justify-between
                "
              >
                <span className="text-gray-500">
                  Remaining Seats
                </span>

                <span className="font-semibold">
                  {seats}
                </span>
              </div>
            </div>

            <div
              className="
                flex
                gap-4
                mt-8
              "
            >
              <button
                onClick={() =>
                  setIsBookingOpen(
                    false
                  )
                }
                className="
                  flex-1
                  py-3
                  rounded-2xl
                  bg-gray-100
                "
              >
                Cancel
              </button>

              <button
                onClick={handleBooking}
                className="
                  flex-1
                  py-3
                  rounded-2xl
                  bg-emerald-700
                  text-white
                "
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CommunityTripCard