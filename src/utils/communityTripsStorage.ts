import type {
  CommunityTrip,
} from '@/types/communityTrip'

const STORAGE_KEY =
  'communityTrips'

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

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedTrips)
  )
}