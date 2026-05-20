
const STORAGE_KEY =
  'communityTrips'

export function getStoredTrips() {
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
  trip: unknown
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
