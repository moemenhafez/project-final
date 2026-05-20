import type {
  CommunityTrip,
} from '@/types/communityTrip'

const STORAGE_KEY =
  'communityTrips'

const JOINED_TRIPS_KEY =
  'joinedTrips'

export function getStoredTrips():
  CommunityTrip[] {
  const storedTrips =
    localStorage.getItem(
      STORAGE_KEY
    )

  if (!storedTrips) {
    return []
  }

  return JSON.parse(storedTrips)
}

export function saveTrip(
  trip: CommunityTrip
) {
  const currentTrips =
    getStoredTrips()

  const updatedTrips = [
    ...currentTrips,
    trip,
  ]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedTrips)
  )
}

export function joinTrip(
  tripTitle: string
) {
  const currentTrips =
    getStoredTrips()

  const joinedTrips =
    getJoinedTrips()

  const selectedTrip =
    currentTrips.find(
      (trip) =>
        trip.title ===
        tripTitle
    )

  const updatedTrips =
    currentTrips.map(
      (trip: CommunityTrip) => {
        if (
          trip.title ===
            tripTitle &&
          trip.seats > 0
        ) {
          return {
            ...trip,
            seats:
              trip.seats - 1,
          }
        }

        return trip
      }
    )

  if (selectedTrip) {
    localStorage.setItem(
      JOINED_TRIPS_KEY,
      JSON.stringify([
        ...joinedTrips,
        selectedTrip,
      ])
    )
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedTrips)
  )
}

export function getJoinedTrips():
  CommunityTrip[] {
  const joinedTrips =
    localStorage.getItem(
      JOINED_TRIPS_KEY
    )

  if (!joinedTrips) {
    return []
  }

  return JSON.parse(joinedTrips)
}