import type {
  Place,
} from '@/types/place'

const STORAGE_KEY = 'places'

const defaultPlaces: Place[] = [
  {
    id: 1,

    title:
      'Batroun Sunset Rooftop',

    category: 'Nightlife',

    region: 'Batroun',

    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',

    description:
      'A premium rooftop overlooking the Mediterranean sea with music, cocktails and unforgettable sunset views.',

    promoted: true,
  },

  {
    id: 2,

    title:
      'Beirut Gourmet Hub',

    category: 'Restaurant',

    region: 'Beirut',

    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',

    description:
      'Modern Lebanese fine dining experience located in the heart of Beirut.',

    promoted: true,
  },

  {
    id: 3,

    title:
      'Jbeil Old Souk Café',

    category: 'Café',

    region: 'Jbeil',

    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',

    description:
      'A cozy café inside the historical streets of Byblos old souk.',

    promoted: false,
  },

  {
    id: 4,

    title:
      'Tripoli Castle Tour',

    category: 'Attraction',

    region: 'Tripoli',

    image:
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2',

    description:
      'Discover the ancient Tripoli citadel and panoramic city views.',

    promoted: false,
  },

  {
    id: 5,

    title:
      'Cedars Mountain Escape',

    category: 'Attraction',

    region: 'Bsharri',

    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',

    description:
      'Explore Lebanon’s iconic cedar forests and snowy mountain scenery.',

    promoted: true,
  },

  {
    id: 6,

    title:
      'Tyre Beach Lounge',

    category: 'Nightlife',

    region: 'Tyre',

    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',

    description:
      'Luxury beach lounge with live DJs, seafood and sunset parties.',

    promoted: true,
  },

  {
    id: 7,

    title:
      'Saida Seafood Harbor',

    category: 'Restaurant',

    region: 'Saida',

    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de',

    description:
      'Fresh seafood experience directly beside Saida’s historical harbor.',

    promoted: false,
  },

  {
    id: 8,

    title:
      'Faraya Ski Resort',

    category: 'Attraction',

    region: 'Faraya',

    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',

    description:
      'One of Lebanon’s top winter destinations for skiing and mountain adventures.',

    promoted: true,
  },

  {
    id: 9,

    title:
      'Hamra Art Café',

    category: 'Café',

    region: 'Beirut',

    image:
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814',

    description:
      'Creative café space combining local art exhibitions with specialty coffee.',

    promoted: false,
  },

  {
    id: 10,

    title:
      'Anfeh Sea View',

    category: 'Attraction',

    region: 'Anfeh',

    image:
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98',

    description:
      'Relaxing Mediterranean coastline famous for crystal-clear waters and salt fields.',

    promoted: false,
  },

  {
    id: 11,

    title:
      'Baalbek Roman Temples',

    category: 'Attraction',

    region: 'Baalbek',

    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',

    description:
      'Explore one of the largest and most impressive Roman temple complexes in the world.',

    promoted: true,
  },
]

export function getPlaces(): Place[] {
  const storedPlaces =
    localStorage.getItem(
      STORAGE_KEY
    )

  if (!storedPlaces) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultPlaces)
    )

    return defaultPlaces
  }

  return JSON.parse(
    storedPlaces
  ) as Place[]
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
    JSON.stringify(updatedPlaces)
  )
}