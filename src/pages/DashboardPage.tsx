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
      <div className="space-y-6">
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
          "
        >
          <div>
            <h1
              className="
                text-4xl
                font-bold
                text-gray-800
              "
            >
              Explore Lebanon
            </h1>

            <p
              className="
                text-lg
                text-gray-500
                mt-2
              "
            >
              Discover restaurants,
              cafés, attractions and
              authentic Lebanese
              experiences.
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

        <div
          className="
            bg-white
            rounded-3xl
            p-6
            shadow-sm
            space-y-4
          "
        >
          <input
            type="text"
            placeholder="Search places..."
            value={searchQuery}
            onChange={(event) =>
              setSearchQuery(
                event.target.value
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
              md:grid-cols-3
              gap-4
            "
          >
            <select
              value={
                selectedCategory
              }
              onChange={(event) =>
                setSelectedCategory(
                  event.target.value
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
              value={selectedRegion}
              onChange={(event) =>
                setSelectedRegion(
                  event.target.value
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
            </select>

            <label
              className="
                flex
                items-center
                gap-3
                bg-gray-100
                rounded-2xl
                px-4
              "
            >
              <input
                type="checkbox"
                checked={
                  sponsoredOnly
                }
                onChange={(event) =>
                  setSponsoredOnly(
                    event.target.checked
                  )
                }
              />

              <span>
                Sponsored Only
              </span>
            </label>
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
            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
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
              (place: Place) => (
                <PlaceCard
                  key={place.id}
                  title={place.title}
                  category={
                    place.category
                  }
                  region={
                    place.region
                  }
                  image={place.image}
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