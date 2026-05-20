import MainLayout from '@/layouts/MainLayout'

import CommunityTripCard from '@/components/community/CommunityTripCard'

import {
  getStoredTrips,
} from '@/utils/communityTripsStorage'

function CommunityTripsPage() {
  const storedTrips =
    getStoredTrips()

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
            Community Trips
          </h1>

          <p
            className="
              text-lg
              text-gray-500
              mt-2
            "
          >
            Join organized outings and
            discover Lebanon together.
          </p>
        </div>

        {storedTrips.length === 0 ? (
          <div
            className="
              bg-white
              rounded-3xl
              p-10
              text-center
              shadow-sm
              mt-10
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
              "
            >
              No Community Trips Yet
            </h2>

            <p
              className="
                text-gray-500
                mt-3
              "
            >
              Be the first to create a
              Lebanese experience.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-2
              gap-8
              mt-10
            "
          >
            {storedTrips.map(
              (trip: any) => (
                <CommunityTripCard
                  key={trip.title}
                  title={trip.title}
                  organizer={
                    trip.organizer ||
                    'Maya'
                  }
                  gatheringPoint={
                    trip.gatheringPoint
                  }
                  date={trip.date}
                  price={Number(
                    trip.price
                  )}
                  seats={Number(
                    trip.seats
                  )}
                  stops={trip.stops}
                />
              )
            )}
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default CommunityTripsPage