import { useMemo, useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

const travelData: Record<
  string,
  {
    time: string
    distance: string
  }
> = {
  'Tripoli-Batroun': {
    time: '35 mins',
    distance: '32 km',
  },

  'Tripoli-Beirut': {
    time: '1 hr 25 mins',
    distance: '85 km',
  },

  'Beirut-Jbeil': {
    time: '45 mins',
    distance: '40 km',
  },

  'Batroun-Jbeil': {
    time: '20 mins',
    distance: '18 km',
  },

  'Beirut-Tyre': {
    time: '1 hr 40 mins',
    distance: '90 km',
  },
}

function TravelTimePage() {
  const [fromCity, setFromCity] =
    useState('Tripoli')

  const [toCity, setToCity] =
    useState('Batroun')

  const routeKey =
    `${fromCity}-${toCity}`

  const routeInfo = useMemo(
    () => {
      return (
        travelData[routeKey] || {
          time: 'Unknown',
          distance: 'Unknown',
        }
      )
    },
    [routeKey]
  )

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
            Travel Time Calculator
          </h1>

          <p
            className="
              text-lg
              text-gray-500
              mt-2
            "
          >
            Estimate travel duration
            between Lebanese cities.
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-3xl
            p-8
            shadow-sm
            max-w-3xl
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >
            <select
              value={fromCity}
              onChange={(event) =>
                setFromCity(
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
            >
              <option>
                Tripoli
              </option>

              <option>
                Beirut
              </option>

              <option>
                Batroun
              </option>

              <option>
                Jbeil
              </option>

              <option>
                Tyre
              </option>
            </select>

            <select
              value={toCity}
              onChange={(event) =>
                setToCity(
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
            >
              <option>
                Tripoli
              </option>

              <option>
                Beirut
              </option>

              <option>
                Batroun
              </option>

              <option>
                Jbeil
              </option>

              <option>
                Tyre
              </option>
            </select>
          </div>

          <div
            className="
              mt-10
              bg-emerald-50
              rounded-3xl
              p-8
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
              "
            >
              Route Information
            </h2>

            <div className="mt-6 space-y-4">
              <div
                className="
                  flex
                  justify-between
                "
              >
                <span className="text-gray-500">
                  Estimated Time
                </span>

                <span className="font-semibold">
                  {routeInfo.time}
                </span>
              </div>

              <div
                className="
                  flex
                  justify-between
                "
              >
                <span className="text-gray-500">
                  Distance
                </span>

                <span className="font-semibold">
                  {routeInfo.distance}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default TravelTimePage