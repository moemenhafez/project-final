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

  const [
    selectedRegion,
    setSelectedRegion,
  ] = useState('All')

  const [
    selectedPartnerType,
    setSelectedPartnerType,
  ] = useState('All')

  function refreshTrips() {
    setStoredTrips(
      getStoredTrips()
    )
  }

  const filteredTrips =
    storedTrips.filter(
      (trip: CommunityTrip) => {
        const matchesRegion =
          selectedRegion ===
            'All' ||
          trip.region ===
            selectedRegion

        const matchesPartner =
          selectedPartnerType ===
            'All' ||
          trip.partnerType ===
            selectedPartnerType

        return (
          matchesRegion &&
          matchesPartner
        )
      }
    )

  return (
    <MainLayout>
      <div className="space-y-6">
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

        <div
          className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            flex
            flex-col
            md:flex-row
            gap-4
          "
        >
          <select
            value={selectedRegion}
            onChange={(event) =>
              setSelectedRegion(
                event.target.value
              )
            }
            className="
              flex-1
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          >
            <option value="All">
              All Regions
            </option>

            <option value="Tripoli">
              Tripoli
            </option>

            <option value="Beirut">
              Beirut
            </option>

            <option value="Batroun">
              Batroun
            </option>

            <option value="Jbeil">
              Jbeil
            </option>

            <option value="Tyre">
              Tyre
            </option>
          </select>

          <select
            value={
              selectedPartnerType
            }
            onChange={(event) =>
              setSelectedPartnerType(
                event.target.value
              )
            }
            className="
              flex-1
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          >
            <option value="All">
              All Experiences
            </option>

            <option value="Friends">
              Friends
            </option>

            <option value="Couple">
              Couple
            </option>

            <option value="Family Gathering">
              Family Gathering
            </option>

            <option value="Business Meeting">
              Business Meeting
            </option>
          </select>
        </div>

        {filteredTrips.length ===
        0 ? (
          <div
            className="
              bg-white
              rounded-3xl
              p-10
              text-center
              shadow-sm
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
              "
            >
              No Matching Trips
            </h2>

            <p
              className="
                text-gray-500
                mt-3
              "
            >
              Try changing your
              filters to discover more
              experiences.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              xl:grid-cols-2
              gap-8
            "
          >
            {filteredTrips.map(
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