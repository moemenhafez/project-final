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
              attractions and authentic
              Lebanese experiences.
            </p>
          </div>

          <div
            className="
              bg-emerald-100
              text-emerald-700
              px-5
              py-3
              rounded-2xl
              font-semibold
              text-sm
            "
          >
            Featured places appear
            first
          </div>
        </div>

        {sortedPlaces.length ===
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
              No Places Added Yet
            </h2>

            <p
              className="
                text-gray-500
                mt-3
              "
            >
              Admin-added places will
              appear here automatically.
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
            {sortedPlaces.map(
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