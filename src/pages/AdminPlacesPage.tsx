import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

import {
  getPlaces,
  savePlace,
  deletePlace,
} from '@/utils/placesStorage'

import type {
  Place,
} from '@/types/place'

function AdminPlacesPage() {
  const [
    places,
    setPlaces,
  ] = useState(getPlaces())

  const [
    title,
    setTitle,
  ] = useState('')

  const [
    category,
    setCategory,
  ] = useState('')

  const [
    region,
    setRegion,
  ] = useState('')

  const [
    image,
    setImage,
  ] = useState('')

  const [
    description,
    setDescription,
  ] = useState('')

  function handleAddPlace() {
    if (
      !title ||
      !category ||
      !region ||
      !image ||
      !description
    ) {
      return
    }

    const newPlace: Place =
      {
        id: Date.now(),

        title,

        category,

        region,

        image,

        description,

        promoted: false,

        recommendedFor: [
          'Friends',
          'Family',
        ],
      }

    savePlace(newPlace)

    setPlaces(getPlaces())

    setTitle('')
    setCategory('')
    setRegion('')
    setImage('')
    setDescription('')
  }

  function handleDelete(
    id: number
  ) {
    deletePlace(id)

    setPlaces(getPlaces())
  }

  return (
    <MainLayout>
      <div className="space-y-8 pb-28">
        {/* HEADER */}

        <div
          className="
            bg-white
            rounded-[32px]
            p-6
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >
          <h1
            className="
              text-4xl
              font-black
              text-gray-900
            "
          >
            Admin Places
          </h1>

          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Add and manage tourism
            destinations.
          </p>
        </div>

        {/* FORM */}

        <div
          className="
            bg-white
            rounded-[32px]
            p-6
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]

            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
          "
        >
          <input
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            placeholder="Place title"
            className="
              bg-[#f5f7f4]
              p-4
              rounded-2xl
              outline-none
            "
          />

          <input
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            placeholder="Category"
            className="
              bg-[#f5f7f4]
              p-4
              rounded-2xl
              outline-none
            "
          />

          <input
            value={region}
            onChange={(e) =>
              setRegion(
                e.target.value
              )
            }
            placeholder="Region"
            className="
              bg-[#f5f7f4]
              p-4
              rounded-2xl
              outline-none
            "
          />

          <input
            value={image}
            onChange={(e) =>
              setImage(
                e.target.value
              )
            }
            placeholder="Image URL"
            className="
              bg-[#f5f7f4]
              p-4
              rounded-2xl
              outline-none
            "
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            placeholder="Description"
            rows={5}
            className="
              bg-[#f5f7f4]
              p-4
              rounded-2xl
              outline-none

              md:col-span-2
            "
          />

          <button
            onClick={
              handleAddPlace
            }
            className="
              bg-emerald-700
              hover:bg-emerald-800

              text-white

              px-6
              py-4

              rounded-2xl

              font-semibold

              transition

              md:col-span-2
            "
          >
            Add Place
          </button>
        </div>

        {/* PLACES */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {places.map((place) => (
            <div
              key={place.id}
              className="
                bg-white
                rounded-[28px]
                overflow-hidden
                shadow-[0_10px_35px_rgba(0,0,0,0.05)]
              "
            >
              <img
                src={place.image}
                alt={place.title}
                className="
                  w-full
                  h-[220px]
                  object-cover
                "
              />

              <div className="p-5">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >
                  <h2
                    className="
                      text-2xl
                      font-black
                    "
                  >
                    {place.title}
                  </h2>

                  <div
                    className="
                      bg-[#f5f7f4]
                      px-3
                      py-2
                      rounded-xl
                      text-sm
                    "
                  >
                    {
                      place.category
                    }
                  </div>
                </div>

                <p
                  className="
                    text-gray-500
                    mt-4
                    line-clamp-3
                  "
                >
                  {
                    place.description
                  }
                </p>

                <button
                  onClick={() =>
                    handleDelete(
                      place.id
                    )
                  }
                  className="
                    mt-6
                    w-full

                    bg-red-500
                    hover:bg-red-600

                    text-white

                    py-4

                    rounded-2xl

                    transition
                  "
                >
                  Delete Place
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default AdminPlacesPage