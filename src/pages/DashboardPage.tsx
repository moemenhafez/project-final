import MainLayout from '@/layouts/MainLayout'

import PageWrapper from '@/components/animations/PageWrapper'

import StaggerContainer from '@/components/animations/StaggerContainer'

import StaggerItem from '@/components/animations/StaggerItem'

import PlaceCard from '@/components/places/PlaceCard'

import {
  getPlaces,
} from '@/utils/placesStorage'

function DashboardPage() {
  const places = getPlaces()

  const featuredPlaces =
    places.slice(0, 3)

  return (
    <PageWrapper>
      <MainLayout>
        <div className="space-y-10">
          {/* HERO */}

          <section
            className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-gradient-to-br
              from-[#0f3d2e]
              via-[#14532d]
              to-[#1b5e20]
              text-white
              p-10
              xl:p-16
              min-h-[420px]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
          >
            <div
              className="
                absolute
                top-0
                right-0
                w-[500px]
                h-[500px]
                bg-white/10
                rounded-full
                blur-3xl
              "
            />

            <div
              className="
                relative
                z-10
                max-w-4xl
              "
            >
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
                ✨ Smart Tourism Planner
              </div>

              <h1
                className="
                  text-6xl
                  xl:text-7xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                "
              >
                Discover Lebanon
                smarter than ever.
              </h1>

              <p
                className="
                  text-emerald-100
                  text-xl
                  leading-relaxed
                  mt-8
                  max-w-2xl
                "
              >
                Plan routes, save
                places, optimize
                budgets and build
                unforgettable tourism
                experiences across
                Lebanon.
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-5
                  mt-10
                "
              >
                <button
                  className="
                    bg-white
                    text-emerald-900
                    px-8
                    py-5
                    rounded-3xl
                    font-bold
                    hover:scale-105
                    transition
                  "
                >
                  Start Planning
                </button>

                <button
                  className="
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/20
                    px-8
                    py-5
                    rounded-3xl
                    font-semibold
                    hover:bg-white/20
                    transition
                  "
                >
                  Explore Experiences
                </button>
              </div>
            </div>
          </section>

          {/* QUICK STATS */}

          <StaggerContainer
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >
            {[
              {
                title:
                  'Saved Places',
                value: '12',
                icon: '🔖',
              },

              {
                title:
                  'Planned Routes',
                value: '4',
                icon: '🛣️',
              },

              {
                title:
                  'Budget Saved',
                value: '$320',
                icon: '💰',
              },

              {
                title:
                  'Destinations',
                value: '24',
                icon: '📍',
              },
            ].map((item) => (
              <StaggerItem
                key={item.title}
              >
                <div
                  className="
                    bg-white
                    rounded-[32px]
                    p-8
                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          text-gray-400
                        "
                      >
                        {item.title}
                      </p>

                      <h2
                        className="
                          text-5xl
                          font-black
                          mt-3
                          text-gray-900
                        "
                      >
                        {item.value}
                      </h2>
                    </div>

                    <div className="text-5xl">
                      {item.icon}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* FEATURED */}

          <section className="space-y-8">
            <div
              className="
                flex
                items-end
                justify-between
                gap-6
                flex-wrap
              "
            >
              <div>
                <p
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-emerald-700
                    text-sm
                    font-bold
                  "
                >
                  Featured Experiences
                </p>

                <h2
                  className="
                    text-5xl
                    font-black
                    text-gray-900
                    mt-3
                  "
                >
                  Trending Destinations
                </h2>
              </div>
            </div>

            <StaggerContainer
              className="
                grid
                grid-cols-1
                xl:grid-cols-3
                gap-8
              "
            >
              {featuredPlaces.map(
                (place) => (
                  <StaggerItem
                    key={place.id}
                  >
                    <PlaceCard
                      {...place}
                    />
                  </StaggerItem>
                )
              )}
            </StaggerContainer>
          </section>

          {/* DISCOVER */}

          <section
            className="
              bg-white
              rounded-[40px]
              p-10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-6
                flex-wrap
                mb-10
              "
            >
              <div>
                <p
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-yellow-500
                    text-sm
                    font-bold
                  "
                >
                  Explore Lebanon
                </p>

                <h2
                  className="
                    text-5xl
                    font-black
                    text-gray-900
                    mt-3
                  "
                >
                  Curated Experiences
                </h2>
              </div>
            </div>

            <StaggerContainer
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
              "
            >
              {places.map((place) => (
                <StaggerItem
                  key={place.id}
                >
                  <PlaceCard
                    {...place}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </div>
      </MainLayout>
    </PageWrapper>
  )
}

export default DashboardPage