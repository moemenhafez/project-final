import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

import PlaceCard from '@/components/places/PlaceCard'

import {
  getPlaces,
} from '@/utils/placesStorage'

import type {
  Place,
} from '@/types/place'

function DashboardPage() {
  const places = getPlaces()

  const [
    searchQuery,
    setSearchQuery,
  ] = useState('')

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState('All')

  const [
    selectedRegion,
    setSelectedRegion,
  ] = useState('All')

  const [
    sponsoredOnly,
    setSponsoredOnly,
  ] = useState(false)

  const sortedPlaces = [
    ...places,
  ].sort((a, b) => {
    if (
      a.promoted &&
      !b.promoted
    ) {
      return -1
    }

    if (
      !a.promoted &&
      b.promoted
    ) {
      return 1
    }

    return 0
  })

  const filteredPlaces =
    sortedPlaces.filter(
      (place: Place) => {
        const matchesSearch =
          place.title
            .toLowerCase()
            .includes(
              searchQuery.toLowerCase()
            )

        const matchesCategory =
          selectedCategory ===
            'All' ||
          place.category ===
            selectedCategory

        const matchesRegion =
          selectedRegion ===
            'All' ||
          place.region ===
            selectedRegion

        const matchesSponsored =
          !sponsoredOnly ||
          place.promoted

        return (
          matchesSearch &&
          matchesCategory &&
          matchesRegion &&
          matchesSponsored
        )
      }
    )

  return (
    <MainLayout>
      <div className="space-y-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-r
            from-emerald-700
            to-emerald-500
            p-10
            text-white
            shadow-xl
          "
        >
          <div
            className="
              absolute
              inset-0
              opacity-10
              bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]
              bg-cover
              bg-center
            "
          />

          <div className="relative z-10">
            <div
              className="
                flex
                flex-col
                xl:flex-row
                xl:items-center
                xl:justify-between
                gap-10
              "
            >
              <div className="max-w-2xl">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-white/20
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                    mb-6
                    backdrop-blur-lg
                  "
                >
                  🇱🇧 Explore Lebanon
                  Smarter
                </div>

                <h1
                  className="
                    text-5xl
                    font-bold
                    leading-tight
                  "
                >
                  Discover Lebanon’s
                  Hidden Experiences
                </h1>

                <p
                  className="
                    text-lg
                    text-white/80
                    mt-6
                    leading-relaxed
                  "
                >
                  Explore restaurants,
                  nightlife, attractions
                  and unforgettable
                  local adventures
                  across Lebanon.
                </p>

                <div
                  className="
                    flex
                    gap-6
                    mt-8
                    flex-wrap
                  "
                >
                  <div
                    className="
                      bg-white/20
                      backdrop-blur-lg
                      px-5
                      py-4
                      rounded-2xl
                    "
                  >
                    <div className="text-3xl font-bold">
                      120+
                    </div>

                    <div className="text-sm text-white/80">
                      Places
                    </div>
                  </div>

                  <div
                    className="
                      bg-white/20
                      backdrop-blur-lg
                      px-5
                      py-4
                      rounded-2xl
                    "
                  >
                    <div className="text-3xl font-bold">
                      18
                    </div>

                    <div className="text-sm text-white/80">
                      Regions
                    </div>
                  </div>

                  <div
                    className="
                      bg-white/20
                      backdrop-blur-lg
                      px-5
                      py-4
                      rounded-2xl
                    "
                  >
                    <div className="text-3xl font-bold">
                      4.9
                    </div>

                    <div className="text-sm text-white/80">
                      Rating
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-2xl
                  w-full
                  max-w-xl
                  text-gray-800
                  space-y-5
                "
              >
                <div>
                  <h2
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    Find Your Experience
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Search destinations,
                    restaurants and
                    attractions.
                  </p>
                </div>

                <input
                  type="text"
                  placeholder="Search places..."
                  value={searchQuery}
                  onChange={(
                    event
                  ) =>
                    setSearchQuery(
                      event.target
                        .value
                    )
                  }
                  className="
                    w-full
                    p-4
                    rounded-2xl
                    bg-gray-100
                    outline-none
                  "
                />

                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-4
                  "
                >
                  <select
                    value={
                      selectedCategory
                    }
                    onChange={(
                      event
                    ) =>
                      setSelectedCategory(
                        event
                          .target
                          .value
                      )
                    }
                    className="
                      p-4
                      rounded-2xl
                      bg-gray-100
                      outline-none
                    "
                  >
                    <option value="All">
                      All Categories
                    </option>

                    <option value="Restaurant">
                      Restaurant
                    </option>

                    <option value="Café">
                      Café
                    </option>

                    <option value="Attraction">
                      Attraction
                    </option>

                    <option value="Nightlife">
                      Nightlife
                    </option>
                  </select>

                  <select
                    value={
                      selectedRegion
                    }
                    onChange={(
                      event
                    ) =>
                      setSelectedRegion(
                        event
                          .target
                          .value
                      )
                    }
                    className="
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

                    <option value="Faraya">
                      Faraya
                    </option>
                  </select>
                </div>

                <label
                  className="
                    flex
                    items-center
                    gap-3
                    bg-gray-100
                    rounded-2xl
                    px-4
                    py-4
                  "
                >
                  <input
                    type="checkbox"
                    checked={
                      sponsoredOnly
                    }
                    onChange={(
                      event
                    ) =>
                      setSponsoredOnly(
                        event
                          .target
                          .checked
                      )
                    }
                  />

                  <span>
                    Sponsored Only
                  </span>
                </label>

                <button
                  className="
                    w-full
                    bg-emerald-700
                    text-white
                    py-4
                    rounded-2xl
                    hover:bg-emerald-800
                    transition
                    font-semibold
                  "
                >
                  Explore Experiences
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            flex
            items-center
            justify-between
            flex-wrap
            gap-4
          "
        >
          <div>
            <h2
              className="
                text-3xl
                font-bold
                text-gray-800
              "
            >
              Trending Experiences
            </h2>

            <p className="text-gray-500 mt-2">
              Discover Lebanon’s most
              popular destinations.
            </p>
          </div>

          <div
            className="
              bg-yellow-100
              text-yellow-800
              px-5
              py-3
              rounded-2xl
              font-semibold
              text-sm
            "
          >
            ⭐ Sponsored places appear
            first
          </div>
        </div>

        {filteredPlaces.length ===
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
            <div className="text-6xl">
              🔍
            </div>

            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
                mt-4
              "
            >
              No Matching Places
            </h2>

            <p
              className="
                text-gray-500
                mt-3
              "
            >
              Try changing your search
              or filters.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
          >
            {filteredPlaces.map(
              (
                place: Place
              ) => (
                <PlaceCard
                  key={place.id}
                  title={
                    place.title
                  }
                  category={
                    place.category
                  }
                  region={
                    place.region
                  }
                  image={
                    place.image
                  }
                  description={
                    place.description
                  }
                  promoted={
                    place.promoted
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

export default DashboardPage