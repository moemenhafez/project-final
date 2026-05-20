import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

import {
  saveTrip,
} from '@/utils/communityTripsStorage'

import type {
  CommunityTrip,
} from '@/types/communityTrip'

function CreateTripPage() {
  const [title, setTitle] =
    useState('')

  const [
    gatheringPoint,
    setGatheringPoint,
  ] = useState('')

  const [date, setDate] =
    useState('')

  const [price, setPrice] =
    useState('')

  const [seats, setSeats] =
    useState('')

  const [stops, setStops] =
    useState('')

  function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault()

    const newTrip: CommunityTrip =
      {
        title,

        organizer: 'Maya',

        gatheringPoint,

        date,

        price: Number(price),

        seats: Number(seats),

        stops: stops
          .split(',')
          .map((stop) =>
            stop.trim()
          ),
      }

    saveTrip(newTrip)

    alert(
      'Trip created successfully!'
    )

    setTitle('')
    setGatheringPoint('')
    setDate('')
    setPrice('')
    setSeats('')
    setStops('')
  }

  return (
    <MainLayout>
      <div
        className="
          max-w-3xl
          mx-auto
          bg-white
          p-8
          rounded-3xl
          shadow-sm
        "
      >
        <div className="mb-8">
          <h1
            className="
              text-4xl
              font-bold
              text-gray-800
            "
          >
            Create Community Trip
          </h1>

          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Organize your own
            Lebanese experience.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Trip Title"
            value={title}
            onChange={(event) =>
              setTitle(
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
          />

          <input
            type="text"
            placeholder="Gathering Point"
            value={gatheringPoint}
            onChange={(event) =>
              setGatheringPoint(
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
          />

          <input
            type="text"
            placeholder="Date & Time"
            value={date}
            onChange={(event) =>
              setDate(
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
          />

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >
            <input
              type="number"
              placeholder="Price Per Seat"
              value={price}
              onChange={(event) =>
                setPrice(
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
            />

            <input
              type="number"
              placeholder="Available Seats"
              value={seats}
              onChange={(event) =>
                setSeats(
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
            />
          </div>

          <textarea
            placeholder="
Trip Stops
(separate with commas)
            "
            value={stops}
            onChange={(event) =>
              setStops(
                event.target.value
              )
            }
            rows={5}
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
              resize-none
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-emerald-700
              text-white
              py-4
              rounded-2xl
              hover:bg-emerald-800
              transition
            "
          >
            Publish Trip
          </button>
        </form>
      </div>
    </MainLayout>
  )
}

export default CreateTripPage