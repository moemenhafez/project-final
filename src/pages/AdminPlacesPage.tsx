import { useState } from 'react'

import toast from 'react-hot-toast'

import MainLayout from '@/layouts/MainLayout'

import {
  getPlaces,
  savePlace,
} from '@/utils/placesStorage'

import type {
  MenuItem,
  Place,
} from '@/types/place'

function AdminPlacesPage() {
  const [, setPlaces] =
    useState(getPlaces())

  const [
    title,
    setTitle,
  ] = useState('')

  const [
    category,
    setCategory,
  ] = useState('Restaurant')

  const [
    region,
    setRegion,
  ] = useState('Beirut')

  const [
    image,
    setImage,
  ] = useState('')

  const [
    description,
    setDescription,
  ] = useState('')

  const [
    minimumBudget,
    setMinimumBudget,
  ] = useState(10)

  const [
    recommendedBudget,
    setRecommendedBudget,
  ] = useState(25)

  const [
    openTime,
    setOpenTime,
  ] = useState('09:00')

  const [
    closeTime,
    setCloseTime,
  ] = useState('22:00')

  const [
    recommendedFor,
    setRecommendedFor,
  ] = useState<string[]>([
    'Friends',
  ])

  const [
    menu,
    setMenu,
  ] = useState<MenuItem[]>(
    []
  )

  const [
    menuName,
    setMenuName,
  ] = useState('')

  const [
    menuPrice,
    setMenuPrice,
  ] = useState(0)

  function handleAddMenu() {
    if (!menuName) {
      toast.error(
        'Please enter menu item name.'
      )

      return
    }

    const newItem: MenuItem =
      {
        name: menuName,

        price: menuPrice,
      }

    setMenu([
      ...menu,
      newItem,
    ])

    toast.success(
      `${menuName} added to menu.`
    )

    setMenuName('')
    setMenuPrice(0)
  }

  function toggleRecommended(
    value: string
  ) {
    if (
      recommendedFor.includes(
        value
      )
    ) {
      setRecommendedFor(
        recommendedFor.filter(
          (item) =>
            item !== value
        )
      )

      return
    }

    setRecommendedFor([
      ...recommendedFor,
      value,
    ])
  }

  function handleAddPlace() {
    if (
      !title ||
      !image ||
      !description
    ) {
      toast.error(
        'Please fill all required fields.'
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

      promoted: false,

      recommendedFor,

      minimumBudget,

      recommendedBudget,

      openTime,

      closeTime,

      menu,
    }

    /* SAVE PLACE */

    savePlace(newPlace)

    /* REFRESH DASHBOARD */

    window.dispatchEvent(
      new Event(
        'placesUpdated'
      )
    )

    /* SUCCESS POPUP */

    toast.success(
      `${title} added successfully!`
    )

    /* RESET FORM */

    setTitle('')
    setDescription('')
    setImage('')
    setMenu([])

    setMinimumBudget(10)

    setRecommendedBudget(25)

    setOpenTime('09:00')

    setCloseTime('22:00')

    setRecommendedFor([
      'Friends',
    ])

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
            "
          >
            Admin Places
          </h1>

          <p className="text-gray-500 mt-2">
            Create tourism places
            with full travel data.
          </p>
        </div>

        {/* FORM */}

        <div
          className="
            bg-white
            rounded-[32px]
            p-6

            grid
            grid-cols-1
            md:grid-cols-2

            gap-5

            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >
          {/* TITLE */}

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

          {/* CATEGORY */}

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            className="
              bg-[#f5f7f4]

              p-4

              rounded-2xl

              outline-none
            "
          >
            <option>
              Restaurant
            </option>

            <option>
              Nature
            </option>

            <option>
              Historical
            </option>

            <option>
              Beach
            </option>

            <option>
              Café
            </option>

            <option>
              Resort
            </option>

            <option>
              Mountains
            </option>
          </select>

          {/* REGION */}

          <select
            value={region}
            onChange={(e) =>
              setRegion(
                e.target.value
              )
            }
            className="
              bg-[#f5f7f4]

              p-4

              rounded-2xl

              outline-none
            "
          >
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
              Tripoli
            </option>

            <option>
              Tyre
            </option>

            <option>
              Chouf
            </option>

            <option>
              Faraya
            </option>
          </select>

          {/* IMAGE */}

          <div className="md:col-span-2">
            <p className="font-bold mb-3">
              Place Image
            </p>

            <label
              className="
                bg-[#f5f7f4]

                border-2
                border-dashed
                border-gray-300

                rounded-[28px]

                h-[260px]

                flex
                flex-col
                items-center
                justify-center

                cursor-pointer

                overflow-hidden

                transition

                hover:border-emerald-500
              "
            >
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              ) : (
                <>
                  <div className="text-5xl">
                    📸
                  </div>

                  <p
                    className="
                      mt-4
                      text-gray-500
                      font-medium
                    "
                  >
                    Click to upload image
                  </p>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(
                  event
                ) => {
                  const file =
                    event.target
                      .files?.[0]

                  if (!file) {
                    return
                  }

                  const reader =
                    new FileReader()

                  reader.onloadend =
                    () => {
                      setImage(
                        reader.result as string
                      )
                    }

                  reader.readAsDataURL(
                    file
                  )
                }}
              />
            </label>
          </div>

          {/* MINIMUM */}

          <input
            type="number"
            value={minimumBudget}
            onChange={(e) =>
              setMinimumBudget(
                Number(
                  e.target.value
                )
              )
            }
            placeholder="Minimum Budget"
            className="
              bg-[#f5f7f4]

              p-4

              rounded-2xl

              outline-none
            "
          />

          {/* RECOMMENDED */}

          <input
            type="number"
            value={
              recommendedBudget
            }
            onChange={(e) =>
              setRecommendedBudget(
                Number(
                  e.target.value
                )
              )
            }
            placeholder="Recommended Budget"
            className="
              bg-[#f5f7f4]

              p-4

              rounded-2xl

              outline-none
            "
          />

          {/* OPEN */}

          <input
            type="time"
            value={openTime}
            onChange={(e) =>
              setOpenTime(
                e.target.value
              )
            }
            className="
              bg-[#f5f7f4]

              p-4

              rounded-2xl

              outline-none
            "
          />

          {/* CLOSE */}

          <input
            type="time"
            value={closeTime}
            onChange={(e) =>
              setCloseTime(
                e.target.value
              )
            }
            className="
              bg-[#f5f7f4]

              p-4

              rounded-2xl

              outline-none
            "
          />

          {/* DESCRIPTION */}

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            rows={5}
            placeholder="Description"
            className="
              bg-[#f5f7f4]

              p-4

              rounded-2xl

              outline-none

              md:col-span-2
            "
          />

          {/* BEST WITH */}

          <div className="md:col-span-2">
            <p className="font-bold mb-3">
              Best With Who
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                'Friends',
                'Family',
                'Couple',
                'Solo',
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    toggleRecommended(
                      item
                    )
                  }
                  className={`
                    px-5
                    py-3

                    rounded-2xl

                    transition

                    ${
                      recommendedFor.includes(
                        item
                      )
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#f5f7f4]'
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* MENU */}

          <div className="md:col-span-2">
            <p className="font-bold mb-3">
              Menu
            </p>

            <div className="flex gap-3">
              <input
                value={menuName}
                onChange={(e) =>
                  setMenuName(
                    e.target.value
                  )
                }
                placeholder="Menu item"
                className="
                  flex-1

                  bg-[#f5f7f4]

                  p-4

                  rounded-2xl

                  outline-none
                "
              />

              <input
                type="number"
                value={menuPrice}
                onChange={(e) =>
                  setMenuPrice(
                    Number(
                      e.target.value
                    )
                  )
                }
                placeholder="Price"
                className="
                  w-[140px]

                  bg-[#f5f7f4]

                  p-4

                  rounded-2xl

                  outline-none
                "
              />

              <button
                type="button"
                onClick={
                  handleAddMenu
                }
                className="
                  bg-black
                  text-white

                  px-6

                  rounded-2xl
                "
              >
                Add
              </button>
            </div>

            {/* MENU LIST */}

            <div className="mt-4 space-y-3">
              {menu.map(
                (item, index) => (
                  <div
                    key={index}
                    className="
                      bg-[#f5f7f4]

                      p-4

                      rounded-2xl

                      flex
                      justify-between
                    "
                  >
                    <span>
                      {item.name}
                    </span>

                    <span>
                      $
                      {item.price}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* BUTTON */}

          <button
            onClick={
              handleAddPlace
            }
            className="
              md:col-span-2

              bg-emerald-700
              hover:bg-emerald-800

              text-white

              py-5

              rounded-2xl

              font-bold

              transition
            "
          >
            Add Place
          </button>
        </div>
      </div>
    </MainLayout>
  )
}

export default AdminPlacesPage