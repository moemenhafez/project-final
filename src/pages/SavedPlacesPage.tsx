import MainLayout from '@/layouts/MainLayout'

import PlaceCard from '@/components/places/PlaceCard'

import {
  getSavedPlaces,
} from '@/utils/savedPlacesStorage'

function SavedPlacesPage() {
  const savedPlaces =
    getSavedPlaces()

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1
            className="
              text-4xl
              font-bold
              text-gray-800
            "
          >
            Saved Places
          </h1>

          <p
            className="
              text-gray-500
              mt-3
            "
          >
            Keep experiences for future
            travel planning.
          </p>
        </div>

        {savedPlaces.length ===
        0 ? (
          <div
            className="
              bg-white
              rounded-3xl
              p-10
              text-center
            "
          >
            <div className="text-6xl">
              🔖
            </div>

            <h2
              className="
                text-2xl
                font-bold
                mt-4
              "
            >
              No Saved Places
            </h2>

            <p
              className="
                text-gray-500
                mt-3
              "
            >
              Save experiences for your
              future plans.
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
            {savedPlaces.map(
              (place) => (
                <PlaceCard
                  key={place.id}
                  {...place}
                />
              )
            )}
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default SavedPlacesPage