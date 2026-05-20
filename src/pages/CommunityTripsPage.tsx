import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

import CommunityTripCard from '@/components/community/CommunityTripCard'

import {
  getStoredTrips,
} from '@/utils/communityTripsStorage'

import type {
  CommunityTrip,
} from '@/types/communityTrip'

function CommunityTripsPage() {
  const [
    storedTrips,
    setStoredTrips,
  ] = useState(
    getStoredTrips()
  )

  function refreshTrips() {
    setStoredTrips(
      getStoredTrips()
    )
  }

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
                  onTripJoined={
                    refreshTrips
                  }
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