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
      'Place saved for future plans.'
    )
  }

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-sm
          hover:shadow-2xl
          transition
          duration-300
        "
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-64
              object-cover
            "
          />

          <button
            onClick={
              handleFavorite
            }
            className="
              absolute
              top-4
              right-4
              w-12
              h-12
              rounded-full
              bg-white
              shadow-lg
              text-2xl
              hover:scale-110
              transition
            "
          >
            {isFavorite
              ? '❤️'
              : '🤍'}
          </button>

          {promoted && (
            <div
              className="
                absolute
                top-4
                left-4
                bg-yellow-400
                text-black
                px-4
                py-2
                rounded-full
                text-sm
                font-bold
              "
            >
              ⭐ Sponsored
            </div>
          )}
        </div>

        <div className="p-6">
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
              "
            >
              {title}
            </h2>

            <div
              className="
                bg-gray-100
                px-3
                py-1
                rounded-full
                text-sm
              "
            >
              {category}
            </div>
          </div>

          <div
            className="
              mt-4
              flex
              gap-3
              flex-wrap
            "
          >
            <div
              className="
                bg-gray-100
                px-3
                py-1
                rounded-full
                text-sm
              "
            >
              📍 {region}
            </div>
          </div>

          <p
            className="
              text-gray-500
              mt-5
              leading-relaxed
            "
          >
            {description}
          </p>

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
                bg-gray-900
                text-white
                py-3
                rounded-2xl
                hover:bg-black
                hover:scale-[1.02]
                active:scale-[0.98]
                transition
              "
            >
              View Experience
            </button>

            <button
              onClick={
                handleSavePlace
              }
              className="
                px-5
                rounded-2xl
                bg-gray-100
                hover:bg-gray-200
                transition
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