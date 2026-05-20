import type {
  Place,
} from '@/types/place'

const STORAGE_KEY = 'places'

export function getPlaces():
  Place[] {
  const storedPlaces =
    localStorage.getItem(
      STORAGE_KEY
    )

  if (!storedPlaces) {
    return []
  }

  return JSON.parse(storedPlaces)
}

export function savePlace(
  place: Place
) {
  const currentPlaces =
    getPlaces()

  const updatedPlaces = [
    ...currentPlaces,
    place,
  ]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedPlaces)
  )
}