import { useMemo, useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

function TripBudgetPage() {
  const [
    peopleCount,
    setPeopleCount,
  ] = useState(2)

  const [
    transportationType,
    setTransportationType,
  ] = useState('Car')

  const [
    foodBudget,
    setFoodBudget,
  ] = useState(20)

  const transportationCost =
    transportationType === 'Car'
      ? 15
      : transportationType ===
          'Taxi'
        ? 40
        : 10

  const totalBudget = useMemo(
    () => {
      return (
        peopleCount *
          foodBudget +
        transportationCost
      )
    },
    [
      peopleCount,
      foodBudget,
      transportationCost,
    ]
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
            Trip Budget Planner
          </h1>

          <p
            className="
              text-lg
              text-gray-500
              mt-2
            "
          >
            Estimate your outing
            budget before organizing
            your trip.
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
          <div className="space-y-6">
            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                Number of People
              </label>

              <input
                type="number"
                value={peopleCount}
                onChange={(event) =>
                  setPeopleCount(
                    Number(
                      event.target.value
                    )
                  )
                }
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-gray-100
                  outline-none
                "
              />
            </div>

            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                Transportation Type
              </label>

              <select
                value={
                  transportationType
                }
                onChange={(event) =>
                  setTransportationType(
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
                <option value="Car">
                  Car
                </option>

                <option value="Taxi">
                  Taxi
                </option>

                <option value="Bus">
                  Bus
                </option>
              </select>
            </div>

            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                Estimated Food Budget
                Per Person
              </label>

              <input
                type="number"
                value={foodBudget}
                onChange={(event) =>
                  setFoodBudget(
                    Number(
                      event.target.value
                    )
                  )
                }
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-gray-100
                  outline-none
                "
              />
            </div>
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
              Budget Summary
            </h2>

            <div className="mt-6 space-y-4">
              <div
                className="
                  flex
                  justify-between
                "
              >
                <span className="text-gray-500">
                  Transportation
                </span>

                <span className="font-semibold">
                  ${transportationCost}
                </span>
              </div>

              <div
                className="
                  flex
                  justify-between
                "
              >
                <span className="text-gray-500">
                  Food Budget
                </span>

                <span className="font-semibold">
                  $
                  {peopleCount *
                    foodBudget}
                </span>
              </div>

              <div
                className="
                  flex
                  justify-between
                  text-xl
                  font-bold
                  pt-4
                  border-t
                "
              >
                <span>
                  Total Budget
                </span>

                <span>
                  ${totalBudget}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default TripBudgetPage