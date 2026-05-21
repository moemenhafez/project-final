import { useMemo, useState } from 'react'

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

  const filteredPlaces =
    useMemo(() => {
      return places.filter(
        (place) => {
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
    ])

  return (
    <PageWrapper>
      <MainLayout>
        <div className="space-y-8 pb-28 md:pb-10">
          {/* TOPBAR */}

          <div
            className="
              bg-white
              rounded-[32px]
              p-5
              md:p-6
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
                gap-5
              "
            >
              <div>
                <h1
                  className="
                    text-3xl
                    md:text-4xl
                    font-black
                    text-gray-900
                  "
                >
                  Explore smarter.
                </h1>

                <p
                  className="
                    text-gray-500
                    mt-2
                  "
                >
                  Build personalized
                  travel experiences
                  across Lebanon.
                </p>
              </div>

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                "
              >
                <div
                  className="
                    bg-[#f5f7f4]
                    rounded-2xl
                    px-5
                    py-4
                    flex
                    items-center
                    gap-3
                    w-full
                    sm:min-w-[260px]
                  "
                >
                  <span>🔍</span>

                  <input
                    type="text"
                    placeholder="Search destinations..."
                    className="
                      bg-transparent
                      outline-none
                      w-full
                    "
                  />
                </div>

                <button
                  className="
                    bg-emerald-700
                    hover:bg-emerald-800
                    text-white
                    px-6
                    py-4
                    rounded-2xl
                    font-semibold
                    transition
                  "
                >
                  + New Plan
                </button>
              </div>
            </div>
          </div>

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
                xl:grid-cols-4
                gap-4
              "
            >
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
                  Saida
                </option>

                <option>
                  Zahle
                </option>
              </select>

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
                  Shopping
                </option>
              </select>

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

              <button
                className="
                  bg-emerald-700
                  hover:bg-emerald-800
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  font-semibold
                  transition
                "
              >
                Apply Filters
              </button>
            </div>
          </section>

          {/* PLACES */}

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
        </div>
      </MainLayout>
    </PageWrapper>
  )
}

export default DashboardPage