import type {
  Place,
} from '@/types/place'

const SAVED_KEY =
  'savedPlaces'

export function getSavedPlaces(): Place[] {
  const storedPlaces =
    localStorage.getItem(
      SAVED_KEY
    )

  if (!storedPlaces) {
    return []
  }

  return JSON.parse(
    storedPlaces
  ) as Place[]
}

export function savePlaceForLater(
  place: Place
) {
  const savedPlaces =
    getSavedPlaces()

  const alreadyExists =
    savedPlaces.some(
      (savedPlace) =>
        savedPlace.id === place.id
    )

  if (alreadyExists) {
    return
  }

  const updatedPlaces = [
    place,
    ...savedPlaces,
  ]

  localStorage.setItem(
    SAVED_KEY,
    JSON.stringify(
      updatedPlaces
    )
  )
}

export function removeSavedPlace(
  placeId: number
) {
  const savedPlaces =
    getSavedPlaces()

  const updatedPlaces =
    savedPlaces.filter(
      (place) =>
        place.id !== placeId
    )

  localStorage.setItem(
    SAVED_KEY,
    JSON.stringify(
      updatedPlaces
    )
  )
}