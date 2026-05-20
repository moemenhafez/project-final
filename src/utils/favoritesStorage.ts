import type {
  Place,
} from '@/types/place'

const FAVORITES_KEY =
  'favoritePlaces'

export function getFavoritePlaces(): Place[] {
  const storedFavorites =
    localStorage.getItem(
      FAVORITES_KEY
    )

  if (!storedFavorites) {
    return []
  }

  return JSON.parse(
    storedFavorites
  ) as Place[]
}

export function addFavoritePlace(
  place: Place
) {
  const favorites =
    getFavoritePlaces()

  const alreadyExists =
    favorites.some(
      (favorite) =>
        favorite.id === place.id
    )

  if (alreadyExists) {
    return
  }

  const updatedFavorites = [
    place,
    ...favorites,
  ]

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(
      updatedFavorites
    )
  )
}

export function removeFavoritePlace(
  placeId: number
) {
  const favorites =
    getFavoritePlaces()

  const updatedFavorites =
    favorites.filter(
      (favorite) =>
        favorite.id !== placeId
    )

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(
      updatedFavorites
    )
  )
}

export function isFavoritePlace(
  placeId: number
) {
  const favorites =
    getFavoritePlaces()

  return favorites.some(
    (favorite) =>
      favorite.id === placeId
  )
}