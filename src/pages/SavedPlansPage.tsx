import MainLayout from '@/layouts/MainLayout'

import CommunityTripCard from '@/components/community/CommunityTripCard'

import {
  getJoinedTrips,
} from '@/utils/communityTripsStorage'

import type {
  CommunityTrip,
} from '@/types/communityTrip'

function SavedPlansPage() {
  const joinedTrips =
    getJoinedTrips()

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
            Saved Plans
          </h1>

          <p
            className="
              text-lg
              text-gray-500
              mt-2
            "
          >
            Your joined trips and
            upcoming Lebanese outings.
          </p>
        </div>

        {joinedTrips.length === 0 ? (
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
              No Saved Trips Yet
            </h2>

            <p
              className="
                text-gray-500
                mt-3
              "
            >
              Join community trips to
              see them here.
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
            {joinedTrips.map(
              (
                trip: CommunityTrip
              ) => (
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
                  region={
                    trip.region
                  }
                  partnerType={
                    trip.partnerType
                  }
                  date={trip.date}
                  price={trip.price}
                  seats={trip.seats}
                  stops={trip.stops}
                  onTripJoined={() => {}}
                />
              )
            )}
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default SavedPlansPage