import MainLayout from '@/layouts/MainLayout'

import PlaceCard from '@/components/places/PlaceCard'

import {
  getSavedPlaces,
} from '@/utils/savedPlacesStorage'

function SavedPlacesPage() {
  const savedPlaces =
    getSavedPlaces()

  const estimatedBudget =
    savedPlaces.length * 45

  const estimatedTime =
    savedPlaces.length * 2

  return (
    <MainLayout>
      <div className="space-y-10">
        {/* HERO */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-[#111827]
            via-[#1f2937]
            to-[#374151]
            text-white
            p-10
            xl:p-14
            shadow-[0_20px_60px_rgba(0,0,0,0.14)]
          "
        >
          <div
            className="
              absolute
              top-0
              right-0
              w-[420px]
              h-[420px]
              bg-white/10
              rounded-full
              blur-3xl
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
              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    bg-white/10
                    backdrop-blur-xl
                    px-5
                    py-3
                    rounded-2xl
                    text-sm
                    mb-8
                  "
                >
                  🔖 Saved Planner
                </div>

                <h1
                  className="
                    text-6xl
                    font-black
                    leading-tight
                  "
                >
                  Your Travel
                  Collection
                </h1>

                <p
                  className="
                    text-gray-300
                    text-xl
                    leading-relaxed
                    mt-6
                    max-w-2xl
                  "
                >
                  Organize destinations,
                  prepare routes and build
                  smart tourism plans
                  across Lebanon.
                </p>
              </div>

              {/* QUICK INFO */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-5
                  min-w-[340px]
                "
              >
                <div
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-6
                  "
                >
                  <p className="text-gray-300">
                    Saved Places
                  </p>

                  <h2
                    className="
                      text-5xl
                      font-black
                      mt-3
                    "
                  >
                    {
                      savedPlaces.length
                    }
                  </h2>
                </div>

                <div
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-6
                  "
                >
                  <p className="text-gray-300">
                    Est. Budget
                  </p>

                  <h2
                    className="
                      text-5xl
                      font-black
                      mt-3
                    "
                  >
                    $
                    {
                      estimatedBudget
                    }
                  </h2>
                </div>

                <div
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-6
                  "
                >
                  <p className="text-gray-300">
                    Duration
                  </p>

                  <h2
                    className="
                      text-5xl
                      font-black
                      mt-3
                    "
                  >
                    {estimatedTime}h
                  </h2>
                </div>

                <div
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-6
                  "
                >
                  <p className="text-gray-300">
                    Routes
                  </p>

                  <h2
                    className="
                      text-5xl
                      font-black
                      mt-3
                    "
                  >
                    4
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACTION BAR */}

        <section
          className="
            bg-white
            rounded-[36px]
            p-6
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            flex
            flex-col
            xl:flex-row
            xl:items-center
            xl:justify-between
            gap-6
          "
        >
          <div
            className="
              flex
              flex-wrap
              gap-4
            "
          >
            {[
              'All',
              'Restaurants',
              'Nature',
              'Historical',
              'Luxury',
            ].map((item) => (
              <button
                key={item}
                className="
                  px-6
                  py-4
                  rounded-3xl
                  bg-[#f5f7f4]
                  hover:bg-emerald-700
                  hover:text-white
                  transition
                  font-medium
                "
              >
                {item}
              </button>
            ))}
          </div>

          <div
            className="
              flex
              gap-4
              flex-wrap
            "
          >
            <button
              className="
                bg-[#f5f7f4]
                hover:bg-gray-200
                px-6
                py-4
                rounded-3xl
                transition
                font-medium
              "
            >
              Export Plan
            </button>

            <button
              className="
                bg-emerald-700
                hover:bg-emerald-800
                text-white
                px-8
                py-4
                rounded-3xl
                transition
                font-semibold
                shadow-lg
              "
            >
              Open Trip Planner
            </button>
          </div>
        </section>

        {/* SAVED GRID */}

        {savedPlaces.length ===
        0 ? (
          <section
            className="
              bg-white
              rounded-[40px]
              p-20
              text-center
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <div className="text-8xl">
              🧳
            </div>

            <h2
              className="
                text-5xl
                font-black
                mt-8
                text-gray-900
              "
            >
              No Saved Experiences
            </h2>

            <p
              className="
                text-gray-500
                text-xl
                mt-6
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Save destinations from
              Explore page to build your
              intelligent tourism route
              and personalized travel
              plans.
            </p>
          </section>
        ) : (
          <section
            className="
              grid
              grid-cols-1
              xl:grid-cols-2
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
          </section>
        )}
      </div>
    </MainLayout>
  )
}

export default SavedPlacesPage