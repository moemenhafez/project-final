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

  return (
    <MainLayout>
      <div className="space-y-6">
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

        {places.length === 0 ? (
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
            {places.map(
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