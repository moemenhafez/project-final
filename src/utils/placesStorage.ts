import type {
  Place,
} from '@/types/place'

const STORAGE_KEY = 'places'

const defaultPlaces: Place[] =
  [
    {
      id: 1,

      title:
        'Batroun Beach',

      category: 'Beach',

      region: 'Batroun',

      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',

      description:
        'Beautiful beach destination perfect for sunsets and relaxing vibes.',

      promoted: true,

      recommendedFor: [
        'Friends',
        'Couple',
      ],

      minimumBudget: 10,

      recommendedBudget: 35,

      openTime: '08:00',

      closeTime: '23:00',

      menu: [],
    },

    {
      id: 2,

      title: 'Byblos Port',

      category:
        'Historical',

      region: 'Byblos',

      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156',

      description:
        'Ancient Lebanese harbor filled with restaurants and culture.',

      promoted: false,

      recommendedFor: [
        'Family',
        'Couple',
      ],

      minimumBudget: 5,

      recommendedBudget: 20,

      openTime: '09:00',

      closeTime: '22:00',

      menu: [],
    },

    {
      id: 3,

      title:
        'Faraya Mountains',

      category:
        'Mountains',

      region: 'Faraya',

      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',

      description:
        'Snow activities and mountain adventures during winter season.',

      promoted: true,

      recommendedFor: [
        'Friends',
        'Family',
      ],

      minimumBudget: 25,

      recommendedBudget: 70,

      openTime: '07:00',

      closeTime: '20:00',

      menu: [],
    },
  ]

function initializePlaces() {
  const existing =
    localStorage.getItem(
      STORAGE_KEY
    )

  if (!existing) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        defaultPlaces
      )
    )

    return
  }

  const parsed: Place[] =
    JSON.parse(existing)

  const normalized =
    parsed.map((place) => ({
      ...place,

      recommendedFor:
        place.recommendedFor ||
        [],

      minimumBudget:
        place.minimumBudget ||
        0,

      recommendedBudget:
        place.recommendedBudget ||
        0,

      openTime:
        place.openTime ||
        '09:00',

      closeTime:
        place.closeTime ||
        '22:00',

      menu: place.menu || [],
    }))

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      normalized
    )
  )
}

initializePlaces()

export function getPlaces(): Place[] {
  const data =
    localStorage.getItem(
      STORAGE_KEY
    )

  if (!data) {
    return []
  }

  return JSON.parse(data)
}

export function savePlace(
  place: Place
) {
  const places = getPlaces()

  const updatedPlaces = [
    place,
    ...places,
  ]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      updatedPlaces
    )
  )
}

export function deletePlace(
  id: number
) {
  const places = getPlaces()

  const updatedPlaces =
    places.filter(
      (place) =>
        place.id !== id
    )

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      updatedPlaces
    )
  )
}