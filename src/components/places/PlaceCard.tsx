import { useState } from 'react'

import { motion } from 'framer-motion'

import toast from 'react-hot-toast'

import PlaceDetailsModal from './PlaceDetailsModal'

import {
  addFavoritePlace,
  isFavoritePlace,
  removeFavoritePlace,
} from '@/utils/favoritesStorage'

import {
  savePlaceForLater,
} from '@/utils/savedPlacesStorage'

import type {
  Place,
} from '@/types/place'

type PlaceCardProps = Place

function PlaceCard({
  id,
  title,
  category,
  region,
  image,
  description,
  promoted,
}: PlaceCardProps) {
  const [isOpen, setIsOpen] =
    useState(false)

  const [
    isFavorite,
    setIsFavorite,
  ] = useState(
    isFavoritePlace(id)
  )

  const currentPlace: Place = {
    id,
    title,
    category,
    region,
    image,
    description,
    promoted,
  }

  function handleFavorite() {
    if (isFavorite) {
      removeFavoritePlace(id)

      toast.success(
        'Removed from favorites.'
      )

      setIsFavorite(false)

      return
    }

    addFavoritePlace(currentPlace)

    toast.success(
      'Added to favorites.'
    )

    setIsFavorite(true)
  }

  function handleSavePlace() {
    savePlaceForLater(
      currentPlace
    )

    toast.success(
      'Place added to planner.'
    )
  }

  return (
    <>
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          bg-white
          rounded-[36px]
          overflow-hidden
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          border
          border-white
          relative
        "
      >
        {/* IMAGE */}

        <div className="relative">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-[320px]
              object-cover
            "
          />

          {/* OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-black/10
              to-transparent
            "
          />

          {/* TOP ACTIONS */}

          <div
            className="
              absolute
              top-5
              left-5
              right-5
              flex
              justify-between
              items-start
            "
          >
            {promoted && (
              <div
                className="
                  bg-yellow-400
                  text-black
                  px-4
                  py-2
                  rounded-2xl
                  font-semibold
                  text-sm
                  shadow-lg
                "
              >
                ⭐ Sponsored
              </div>
            )}

            <button
              onClick={
                handleFavorite
              }
              className="
                ml-auto
                w-14
                h-14
                rounded-2xl
                bg-white/90
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-2xl
                shadow-lg
                hover:scale-110
                transition
              "
            >
              {isFavorite
                ? '❤️'
                : '🤍'}
            </button>
          </div>

          {/* LOCATION */}

          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              flex
              items-end
              justify-between
              gap-6
            "
          >
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-white/20
                  backdrop-blur-xl
                  text-white
                  px-4
                  py-2
                  rounded-2xl
                  text-sm
                  mb-4
                "
              >
                📍 {region}
              </div>

              <h2
                className="
                  text-4xl
                  font-black
                  text-white
                  leading-tight
                "
              >
                {title}
              </h2>
            </div>
          </div>
        </div>

        {/* CONTENT */}

        <div className="p-8">
          {/* CATEGORY */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              flex-wrap
            "
          >
            <div
              className="
                bg-[#f5f7f4]
                px-5
                py-3
                rounded-2xl
                text-sm
                font-semibold
                text-gray-700
              "
            >
              {category}
            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-yellow-500
                font-semibold
              "
            >
              ⭐ 4.8
            </div>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              text-gray-500
              leading-relaxed
              mt-6
              text-lg
            "
          >
            {description}
          </p>

          {/* STATS */}

          <div
            className="
              grid
              grid-cols-3
              gap-4
              mt-8
            "
          >
            <div
              className="
                bg-[#f5f7f4]
                rounded-3xl
                p-4
              "
            >
              <p
                className="
                  text-gray-400
                  text-sm
                "
              >
                Drive
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  mt-2
                "
              >
                35m
              </h3>
            </div>

            <div
              className="
                bg-[#f5f7f4]
                rounded-3xl
                p-4
              "
            >
              <p
                className="
                  text-gray-400
                  text-sm
                "
              >
                Budget
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  mt-2
                "
              >
                $25
              </h3>
            </div>

            <div
              className="
                bg-[#f5f7f4]
                rounded-3xl
                p-4
              "
            >
              <p
                className="
                  text-gray-400
                  text-sm
                "
              >
                Visit
              </p>

              <h3
                className="
                  text-xl
                  font-bold
                  mt-2
                "
              >
                2h
              </h3>
            </div>
          </div>

          {/* ACTIONS */}

          <div
            className="
              flex
              gap-4
              mt-8
            "
          >
            <button
              onClick={() =>
                setIsOpen(true)
              }
              className="
                flex-1
                bg-emerald-700
                hover:bg-emerald-800
                text-white
                py-5
                rounded-3xl
                transition
                font-semibold
                shadow-lg
              "
            >
              Explore Experience
            </button>

            <button
              onClick={
                handleSavePlace
              }
              className="
                px-8
                rounded-3xl
                bg-[#f5f7f4]
                hover:bg-gray-200
                transition
                text-2xl
              "
            >
              🔖
            </button>
          </div>
        </div>
      </motion.div>

      <PlaceDetailsModal
        isOpen={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
        title={title}
        image={image}
        description={description}
        category={category}
        region={region}
        promoted={promoted}
      />
    </>
  )
}

export default PlaceCard