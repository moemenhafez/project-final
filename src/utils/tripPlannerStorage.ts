import type {
  Place,
} from '@/types/place'

const STORAGE_KEY =
  'trip-planner'

export function getTripPlaces(): Place[] {
  const data =
    localStorage.getItem(
      STORAGE_KEY
    )

  return data
    ? JSON.parse(data)
    : []
}

export function addPlaceToPlanner(
  place: Place
) {
  const places =
    getTripPlaces()

  const exists =
    places.some(
      (item) =>
        item.id === place.id
    )

  if (exists) {
    return
  }

  const updated = [
    ...places,
    place,
  ]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  )
}

export function removePlannerPlace(
  id: number
) {
  const places =
    getTripPlaces()

  const updated =
    places.filter(
      (place) =>
        place.id !== id
    )

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  )
}

export function clearPlanner() {
  localStorage.removeItem(
    STORAGE_KEY
  )
}