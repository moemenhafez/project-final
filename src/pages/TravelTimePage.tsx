import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

const travelTimes: Record<
  string,
  Record<
    string,
    {
      time: string
      distance: string
    }
  >
> = {
  Beirut: {
    Tripoli: {
      time: '1h 30m',
      distance: '85 km',
    },

    Batroun: {
      time: '1h',
      distance: '55 km',
    },
  },

  Tripoli: {
    Beirut: {
      time: '1h 30m',
      distance: '85 km',
    },

    Batroun: {
      time: '40m',
      distance: '30 km',
    },
  },
}

function TravelTimePage() {
  const [from, setFrom] =
    useState('Beirut')

  const [to, setTo] =
    useState('Tripoli')

  const result =
    travelTimes[from]?.[to]

  return (
    <MainLayout>
      <div
        className="
          bg-white
          rounded-3xl
          p-10
          shadow-sm
          max-w-4xl
          mx-auto
          space-y-8
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
            Travel Time Calculator
          </h1>

          <p
            className="
              text-gray-500
              mt-3
            "
          >
            Estimate travel durations
            between Lebanese regions.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          <select
            value={from}
            onChange={(event) =>
              setFrom(
                event.target.value
              )
            }
            className="
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          >
            <option>
              Beirut
            </option>

            <option>
              Tripoli
            </option>

            <option>
              Batroun
            </option>
          </select>

          <select
            value={to}
            onChange={(event) =>
              setTo(
                event.target.value
              )
            }
            className="
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          >
            <option>
              Beirut
            </option>

            <option>
              Tripoli
            </option>

            <option>
              Batroun
            </option>
          </select>
        </div>

        {result ? (
          <div
            className="
              bg-emerald-100
              rounded-3xl
              p-10
              space-y-5
            "
          >
            <div>
              <h2
                className="
                  text-2xl
                  font-bold
                  text-emerald-800
                "
              >
                Estimated Drive Time
              </h2>

              <div
                className="
                  text-5xl
                  font-bold
                  mt-4
                "
              >
                {result.time}
              </div>
            </div>

            <div>
              <h2
                className="
                  text-2xl
                  font-bold
                  text-emerald-800
                "
              >
                Distance
              </h2>

              <div
                className="
                  text-4xl
                  font-bold
                  mt-4
                "
              >
                {
                  result.distance
                }
              </div>
            </div>
          </div>
        ) : (
          <div
            className="
              bg-yellow-100
              rounded-3xl
              p-10
              text-yellow-800
              font-semibold
            "
          >
            No travel data available
            for this route yet.
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default TravelTimePage