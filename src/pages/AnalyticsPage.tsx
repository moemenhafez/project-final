import MainLayout from '@/layouts/MainLayout'

import {
  getStoredTrips,
  getJoinedTrips,
} from '@/utils/communityTripsStorage'

function AnalyticsPage() {
  const storedTrips =
    getStoredTrips()

  const joinedTrips =
    getJoinedTrips()

  const totalTrips =
    storedTrips.length

  const totalBookings =
    joinedTrips.length

  const totalSeatsSold =
    joinedTrips.length

  const mostPopularTrip =
    joinedTrips.length > 0
      ? joinedTrips[0].title
      : 'No trips yet'

  const analyticsCards = [
    {
      title:
        'Total Community Trips',

      value: totalTrips,
    },

    {
      title:
        'Total Bookings',

      value: totalBookings,
    },

    {
      title:
        'Seats Sold',

      value: totalSeatsSold,
    },

    {
      title:
        'Most Popular Trip',

      value: mostPopularTrip,
    },
  ]

  return (
    <MainLayout>
      <div className="space-y-4">
        <div>
          <h1
            className="
              text-4xl
              font-bold
              text-gray-800
            "
          >
            Business Analytics
          </h1>

          <p
            className="
              text-lg
              text-gray-500
              mt-2
            "
          >
            Monitor platform activity
            and trip performance.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
            mt-10
          "
        >
          {analyticsCards.map(
            (card) => (
              <div
                key={card.title}
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-sm
                "
              >
                <p
                  className="
                    text-gray-500
                    text-sm
                  "
                >
                  {card.title}
                </p>

                <h2
                  className="
                    text-3xl
                    font-bold
                    text-gray-800
                    mt-4
                  "
                >
                  {card.value}
                </h2>
              </div>
            )
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default AnalyticsPage