import MainLayout from '@/layouts/MainLayout'

import PlaceCard from '@/components/places/PlaceCard'

import {
  getFavoritePlaces,
} from '@/utils/favoritesStorage'

function FavoritesPage() {
  const favorites =
    getFavoritePlaces()

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
            Favorite Places
          </h1>

          <p
            className="
              text-gray-500
              mt-3
            "
          >
            Places you loved and want
            to remember for future
            adventures.
          </p>
        </div>

        {favorites.length ===
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
              ❤️
            </div>

            <h2
              className="
                text-2xl
                font-bold
                mt-4
              "
            >
              No Favorites Yet
            </h2>

            <p
              className="
                text-gray-500
                mt-3
              "
            >
              Start liking places to
              build your personal
              collection.
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
            {favorites.map(
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

export default FavoritesPage