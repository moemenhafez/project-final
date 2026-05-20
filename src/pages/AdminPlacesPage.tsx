import { useState } from 'react'

import toast from 'react-hot-toast'

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

    if (
      !title.trim() ||
      !image.trim() ||
      !description.trim()
    ) {
      toast.error(
        'Please fill all fields.'
      )

      return
    }

    if (
      description.length < 20
    ) {
      toast.error(
        'Description must be at least 20 characters.'
      )

      return
    }

    if (
      !image.startsWith('http')
    ) {
      toast.error(
        'Please enter a valid image URL.'
      )

      return
    }

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

    toast.success(
      'Place added successfully!'
    )

    setTitle('')

    setCategory('Restaurant')

    setRegion('Tripoli')

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
            attractions and featured
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
              <option value="Restaurant">
                Restaurant
              </option>

              <option value="Café">
                Café
              </option>

              <option value="Attraction">
                Attraction
              </option>

              <option value="Nightlife">
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
              <option value="Tripoli">
                Tripoli
              </option>

              <option value="Beirut">
                Beirut
              </option>

              <option value="Batroun">
                Batroun
              </option>

              <option value="Jbeil">
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