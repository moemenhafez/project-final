import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

import {
  savePlace,
} from '@/utils/placesStorage'

import type {
  Place,
} from '@/types/place'

function AdminPlacesPage() {
  const [title, setTitle] =
    useState('')

  const [
    category,
    setCategory,
  ] = useState('Restaurant')

  const [region, setRegion] =
    useState('Tripoli')

  const [image, setImage] =
    useState('')

  const [
    description,
    setDescription,
  ] = useState('')

  const [
    promoted,
    setPromoted,
  ] = useState(false)

  function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault()

    const newPlace: Place = {
      id: Date.now(),

      title,

      category,

      region,

      image,

      description,

      promoted,
    }

    savePlace(newPlace)

    alert(
      'Place added successfully!'
    )

    setTitle('')
    setImage('')
    setDescription('')
    setPromoted(false)
  }

  return (
    <MainLayout>
      <div
        className="
          max-w-4xl
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
            Admin Place Manager
          </h1>

          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Add restaurants,
            attractions and promoted
            Lebanese experiences.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Place Title"
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

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
          >
            <select
              value={category}
              onChange={(event) =>
                setCategory(
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
                Restaurant
              </option>

              <option>
                Café
              </option>

              <option>
                Attraction
              </option>

              <option>
                Nightlife
              </option>
            </select>

            <select
              value={region}
              onChange={(event) =>
                setRegion(
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
            </select>
          </div>

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(event) =>
              setImage(
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

          <textarea
            placeholder="Description"
            value={description}
            onChange={(event) =>
              setDescription(
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

          <label
            className="
              flex
              items-center
              gap-3
            "
          >
            <input
              type="checkbox"
              checked={promoted}
              onChange={(event) =>
                setPromoted(
                  event.target.checked
                )
              }
            />

            <span>
              Featured Promotion
            </span>
          </label>

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
            Add Place
          </button>
        </form>
      </div>
    </MainLayout>
  )
}

export default AdminPlacesPage