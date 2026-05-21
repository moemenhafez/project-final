import MainLayout from '@/layouts/MainLayout'

import {
  getSavedPlaces,
} from '@/utils/savedPlacesStorage'

function TripPlannerPage() {
  const savedPlaces =
    getSavedPlaces()

  const totalStops =
    savedPlaces.length

  const estimatedDistance =
    totalStops * 35

  const estimatedTravelTime =
    totalStops * 45

  const minimumBudget =
    totalStops * 25

  const recommendedBudget =
    totalStops * 60

  const premiumBudget =
    totalStops * 120

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* HERO */}

        <section
          className="
            bg-gradient-to-br
            from-emerald-950
            via-emerald-800
            to-emerald-700
            rounded-[40px]
            p-10
            text-white
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            overflow-hidden
            relative
          "
        >
          <div
            className="
              absolute
              right-0
              top-0
              w-72
              h-72
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
                <p
                  className="
                    uppercase
                    tracking-[0.3em]
                    text-emerald-200
                    text-sm
                  "
                >
                  Smart Planner
                </p>

                <h1
                  className="
                    text-5xl
                    font-black
                    mt-4
                    leading-tight
                  "
                >
                  Northern Lebanon
                  Adventure
                </h1>

                <p
                  className="
                    text-emerald-100
                    mt-5
                    max-w-2xl
                    text-lg
                    leading-relaxed
                  "
                >
                  Automatically generated
                  travel intelligence based
                  on your saved places,
                  routes and tourism
                  preferences.
                </p>
              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-4
                  min-w-[320px]
                "
              >
                <div
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-5
                  "
                >
                  <p
                    className="
                      text-emerald-200
                      text-sm
                    "
                  >
                    Stops
                  </p>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-2
                    "
                  >
                    {totalStops}
                  </h2>
                </div>

                <div
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-5
                  "
                >
                  <p
                    className="
                      text-emerald-200
                      text-sm
                    "
                  >
                    Distance
                  </p>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-2
                    "
                  >
                    {
                      estimatedDistance
                    }
                    km
                  </h2>
                </div>

                <div
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-5
                  "
                >
                  <p
                    className="
                      text-emerald-200
                      text-sm
                    "
                  >
                    Drive Time
                  </p>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-2
                    "
                  >
                    {
                      estimatedTravelTime
                    }
                    m
                  </h2>
                </div>

                <div
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    rounded-3xl
                    p-5
                  "
                >
                  <p
                    className="
                      text-emerald-200
                      text-sm
                    "
                  >
                    Recommended
                  </p>

                  <h2
                    className="
                      text-4xl
                      font-bold
                      mt-2
                    "
                  >
                    $
                    {
                      recommendedBudget
                    }
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN GRID */}

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1.1fr_0.9fr]
            gap-8
          "
        >
          {/* TIMELINE */}

          <div
            className="
              bg-white
              rounded-[40px]
              p-8
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                mb-10
              "
            >
              <div>
                <h2
                  className="
                    text-3xl
                    font-bold
                    text-gray-900
                  "
                >
                  Trip Timeline
                </h2>

                <p
                  className="
                    text-gray-500
                    mt-2
                  "
                >
                  Optimized tourism route
                  generated from your saved
                  destinations.
                </p>
              </div>

              <button
                className="
                  bg-[#f5f7f4]
                  px-5
                  py-3
                  rounded-2xl
                  hover:bg-gray-200
                  transition
                "
              >
                + Add Stop
              </button>
            </div>

            <div className="space-y-8">
              {savedPlaces.length ===
              0 ? (
                <div
                  className="
                    bg-[#f5f7f4]
                    rounded-[32px]
                    p-12
                    text-center
                  "
                >
                  <div className="text-6xl">
                    🧳
                  </div>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      mt-5
                    "
                  >
                    No Saved Places Yet
                  </h2>

                  <p
                    className="
                      text-gray-500
                      mt-4
                      max-w-lg
                      mx-auto
                    "
                  >
                    Save destinations from
                    Explore page to
                    automatically generate
                    your smart tourism
                    route.
                  </p>
                </div>
              ) : (
                savedPlaces.map(
                  (
                    place,
                    index
                  ) => (
                    <div
                      key={place.id}
                      className="
                        flex
                        gap-6
                        relative
                      "
                    >
                      {/* TIMELINE */}

                      <div
                        className="
                          flex
                          flex-col
                          items-center
                        "
                      >
                        <div
                          className="
                            w-16
                            h-16
                            rounded-3xl
                            bg-emerald-700
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-xl
                            shadow-lg
                          "
                        >
                          {index + 1}
                        </div>

                        {index !==
                          savedPlaces.length -
                            1 && (
                          <div
                            className="
                              w-1
                              flex-1
                              bg-gray-200
                              mt-4
                              rounded-full
                            "
                          />
                        )}
                      </div>

                      {/* CARD */}

                      <div
                        className="
                          flex-1
                          bg-[#f5f7f4]
                          rounded-[32px]
                          overflow-hidden
                        "
                      >
                        <img
                          src={
                            place.image
                          }
                          alt={
                            place.title
                          }
                          className="
                            w-full
                            h-64
                            object-cover
                          "
                        />

                        <div className="p-8">
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-6
                            "
                          >
                            <div>
                              <div
                                className="
                                  flex
                                  items-center
                                  gap-3
                                  flex-wrap
                                "
                              >
                                <div
                                  className="
                                    bg-white
                                    px-4
                                    py-2
                                    rounded-2xl
                                    text-sm
                                    font-medium
                                  "
                                >
                                  {
                                    place.category
                                  }
                                </div>

                                <div
                                  className="
                                    bg-white
                                    px-4
                                    py-2
                                    rounded-2xl
                                    text-sm
                                    font-medium
                                  "
                                >
                                  📍
                                  {
                                    place.region
                                  }
                                </div>
                              </div>

                              <h2
                                className="
                                  text-3xl
                                  font-bold
                                  text-gray-900
                                  mt-5
                                "
                              >
                                {
                                  place.title
                                }
                              </h2>

                              <p
                                className="
                                  text-gray-500
                                  mt-4
                                  leading-relaxed
                                "
                              >
                                {
                                  place.description
                                }
                              </p>
                            </div>

                            <div
                              className="
                                bg-white
                                rounded-3xl
                                p-5
                                min-w-[180px]
                              "
                            >
                              <p
                                className="
                                  text-gray-500
                                  text-sm
                                "
                              >
                                Estimated Cost
                              </p>

                              <h3
                                className="
                                  text-4xl
                                  font-bold
                                  mt-3
                                "
                              >
                                $
                                {(index +
                                  1) *
                                  25}
                              </h3>

                              <div
                                className="
                                  mt-5
                                  text-sm
                                  text-gray-500
                                  space-y-2
                                "
                              >
                                <div>
                                  ⏱️ 2-3 hrs
                                </div>

                                <div>
                                  🚗 35 mins
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">
            {/* MAP */}

            <div
              className="
                bg-white
                rounded-[40px]
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-6
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Route Map
                </h2>

                <div
                  className="
                    bg-emerald-100
                    text-emerald-700
                    px-4
                    py-2
                    rounded-2xl
                    font-medium
                  "
                >
                  Live Route
                </div>
              </div>

              <div
                className="
                  h-[500px]
                  rounded-[32px]
                  bg-gradient-to-br
                  from-[#dbe8d8]
                  to-[#c4d7bf]
                  relative
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent)]
                  "
                />

                <div
                  className="
                    absolute
                    top-20
                    left-20
                    w-8
                    h-8
                    rounded-full
                    bg-emerald-700
                    border-4
                    border-white
                  "
                />

                <div
                  className="
                    absolute
                    top-44
                    left-44
                    w-8
                    h-8
                    rounded-full
                    bg-emerald-700
                    border-4
                    border-white
                  "
                />

                <div
                  className="
                    absolute
                    bottom-24
                    right-24
                    w-8
                    h-8
                    rounded-full
                    bg-emerald-700
                    border-4
                    border-white
                  "
                />

                <svg
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                  "
                >
                  <path
                    d="
                      M90 90
                      C160 150,
                      200 200,
                      280 240

                      S380 360,
                      460 400
                    "
                    stroke="#065f46"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="16 12"
                  />
                </svg>
              </div>
            </div>

            {/* BUDGET */}

            <div
              className="
                bg-white
                rounded-[40px]
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-8
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Budget Summary
                </h2>

                <span className="text-3xl">
                  💰
                </span>
              </div>

              <div className="space-y-5">
                <div
                  className="
                    bg-[#f5f7f4]
                    rounded-3xl
                    p-5
                    flex
                    justify-between
                    items-center
                  "
                >
                  <span className="text-gray-500">
                    Minimum Budget
                  </span>

                  <span
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    $
                    {
                      minimumBudget
                    }
                  </span>
                </div>

                <div
                  className="
                    bg-yellow-50
                    rounded-3xl
                    p-5
                    flex
                    justify-between
                    items-center
                  "
                >
                  <span className="text-gray-500">
                    Recommended
                  </span>

                  <span
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    $
                    {
                      recommendedBudget
                    }
                  </span>
                </div>

                <div
                  className="
                    bg-emerald-50
                    rounded-3xl
                    p-5
                    flex
                    justify-between
                    items-center
                  "
                >
                  <span className="text-gray-500">
                    Premium Experience
                  </span>

                  <span
                    className="
                      text-2xl
                      font-bold
                    "
                  >
                    $
                    {premiumBudget}
                  </span>
                </div>
              </div>

              <button
                className="
                  w-full
                  mt-8
                  bg-emerald-700
                  hover:bg-emerald-800
                  text-white
                  py-5
                  rounded-3xl
                  transition
                  text-lg
                  font-semibold
                  shadow-lg
                "
              >
                Save Smart Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default TripPlannerPage