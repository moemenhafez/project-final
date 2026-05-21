import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import MainLayout from '@/layouts/MainLayout'

import PageWrapper from '@/components/animations/PageWrapper'

import StaggerContainer from '@/components/animations/StaggerContainer'

import StaggerItem from '@/components/animations/StaggerItem'

import PlaceCard from '@/components/places/PlaceCard'

import {
  getPlaces,
} from '@/utils/placesStorage'

import type {
  Place,
} from '@/types/place'

function DashboardPage() {
  const [
    places,
    setPlaces,
  ] = useState<Place[]>(
    []
  )

  const [
    selectedRegion,
    setSelectedRegion,
  ] = useState('All Regions')

  const [
    selectedType,
    setSelectedType,
  ] = useState('All Types')

  const [
    selectedGroup,
    setSelectedGroup,
  ] = useState('Everyone')

  const [
    search,
    setSearch,
  ] = useState('')

  /* LOAD PLACES */

  useEffect(() => {
    function loadPlaces() {
      const data =
        getPlaces()

      setPlaces(data)
    }

    loadPlaces()

    window.addEventListener(
      'placesUpdated',
      loadPlaces
    )

    return () => {
      window.removeEventListener(
        'placesUpdated',
        loadPlaces
      )
    }
  }, [])

  /* FILTERS */

  const filteredPlaces =
    useMemo(() => {
      return places.filter(
        (place) => {
          const matchesSearch =
            place.title
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            place.description
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )

          const matchesRegion =
            selectedRegion ===
              'All Regions' ||
            place.region ===
              selectedRegion

          const matchesType =
            selectedType ===
              'All Types' ||
            place.category ===
              selectedType

          const matchesGroup =
            selectedGroup ===
              'Everyone' ||
            place.recommendedFor.includes(
              selectedGroup
            )

          return (
            matchesSearch &&
            matchesRegion &&
            matchesType &&
            matchesGroup
          )
        }
      )
    }, [
      places,
      selectedRegion,
      selectedType,
      selectedGroup,
      search,
    ])

  return (
    <PageWrapper>
      <MainLayout>
        <div className="space-y-8 pb-28 md:pb-10">
          {/* HERO */}

          <section
            className="
              bg-white

              rounded-[32px]

              p-5
              md:p-7

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <div
              className="
                flex
                flex-col
                lg:flex-row

                lg:items-center
                lg:justify-between

                gap-6
              "
            >
              {/* TEXT */}

              <div className="max-w-2xl">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    bg-emerald-50

                    text-emerald-700

                    px-4
                    py-2

                    rounded-full

                    text-sm
                    font-semibold

                    mb-5
                  "
                >
                  ✨ Smart Tourism
                </div>

                <h1
                  className="
                    text-4xl
                    md:text-5xl
                    xl:text-6xl

                    font-black

                    leading-tight

                    text-gray-900
                  "
                >
                  Discover Lebanon
                  smarter than ever.
                </h1>

                <p
                  className="
                    text-gray-500

                    text-lg

                    mt-5

                    leading-relaxed
                  "
                >
                  Explore hidden gems,
                  restaurants, beaches,
                  mountains and create
                  personalized trips
                  with real budgets and
                  schedules.
                </p>
              </div>

              {/* SEARCH */}

              <div
                className="
                  bg-[#f5f7f4]

                  rounded-[28px]

                  p-4

                  w-full
                  lg:w-[380px]
                "
              >
                <div
                  className="
                    flex
                    items-center

                    gap-3

                    bg-white

                    rounded-2xl

                    px-5
                    py-4
                  "
                >
                  <span className="text-xl">
                    🔍
                  </span>

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(
                        e.target.value
                      )
                    }
                    type="text"
                    placeholder="Search places..."
                    className="
                      bg-transparent
                      outline-none
                      w-full
                    "
                  />
                </div>

                <div
                  className="
                    mt-4

                    grid
                    grid-cols-2

                    gap-3
                  "
                >
                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4

                      text-center
                    "
                  >
                    <h3
                      className="
                        text-2xl
                        font-black
                      "
                    >
                      {
                        places.length
                      }
                    </h3>

                    <p
                      className="
                        text-sm
                        text-gray-500
                        mt-1
                      "
                    >
                      Destinations
                    </p>
                  </div>

                  <div
                    className="
                      bg-white

                      rounded-2xl

                      p-4

                      text-center
                    "
                  >
                    <h3
                      className="
                        text-2xl
                        font-black
                      "
                    >
                      {
                        filteredPlaces.length
                      }
                    </h3>

                    <p
                      className="
                        text-sm
                        text-gray-500
                        mt-1
                      "
                    >
                      Results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FILTERS */}

          <section
            className="
              bg-white

              rounded-[32px]

              p-5

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3

                gap-4
              "
            >
              {/* REGION */}

              <select
                value={
                  selectedRegion
                }
                onChange={(e) =>
                  setSelectedRegion(
                    e.target.value
                  )
                }
                className="
                  bg-[#f5f7f4]

                  px-5
                  py-4

                  rounded-2xl

                  outline-none
                "
              >
                <option>
                  All Regions
                </option>

                <option>
                  Beirut
                </option>

                <option>
                  Batroun
                </option>

                <option>
                  Byblos
                </option>

                <option>
                  Tyre
                </option>

                <option>
                  Chouf
                </option>

                <option>
                  Tripoli
                </option>

                <option>
                  Faraya
                </option>
              </select>

              {/* TYPE */}

              <select
                value={
                  selectedType
                }
                onChange={(e) =>
                  setSelectedType(
                    e.target.value
                  )
                }
                className="
                  bg-[#f5f7f4]

                  px-5
                  py-4

                  rounded-2xl

                  outline-none
                "
              >
                <option>
                  All Types
                </option>

                <option>
                  Beach
                </option>

                <option>
                  Historical
                </option>

                <option>
                  Nature
                </option>

                <option>
                  Restaurant
                </option>

                <option>
                  Mountains
                </option>

                <option>
                  Café
                </option>

                <option>
                  Resort
                </option>
              </select>

              {/* GROUP */}

              <select
                value={
                  selectedGroup
                }
                onChange={(e) =>
                  setSelectedGroup(
                    e.target.value
                  )
                }
                className="
                  bg-[#f5f7f4]

                  px-5
                  py-4

                  rounded-2xl

                  outline-none
                "
              >
                <option>
                  Everyone
                </option>

                <option>
                  Friends
                </option>

                <option>
                  Family
                </option>

                <option>
                  Couple
                </option>

                <option>
                  Solo
                </option>
              </select>
            </div>
          </section>

          {/* CARDS */}

          {filteredPlaces.length >
          0 ? (
            <StaggerContainer
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3

                gap-6
              "
            >
              {filteredPlaces.map(
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
          ) : (
            <div
              className="
                bg-white

                rounded-[32px]

                p-16

                text-center

                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              "
            >
              <div className="text-6xl">
                🧭
              </div>

              <h2
                className="
                  text-3xl
                  font-black

                  mt-6
                "
              >
                No places found
              </h2>

              <p
                className="
                  text-gray-500

                  mt-3
                "
              >
                Try changing filters
                or search keywords.
              </p>
            </div>
          )}
        </div>
      </MainLayout>
    </PageWrapper>
  )
}

export default DashboardPage