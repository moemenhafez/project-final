import { useState } from 'react'

import {
  motion,
} from 'framer-motion'

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

  recommendedFor = [],

  minimumBudget,

  recommendedBudget,

  openTime,

  closeTime,

  menu = [],
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

    recommendedFor,

    minimumBudget,

    recommendedBudget,

    openTime,

    closeTime,

    menu,
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
          y: -6,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          bg-white
          rounded-[28px]
          md:rounded-[32px]
          overflow-hidden
          shadow-[0_10px_35px_rgba(0,0,0,0.05)]
          border
          border-white
          h-full
          flex
          flex-col
        "
      >
        {/* IMAGE */}

        <div className="relative">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-[220px]
              sm:h-[240px]
              object-cover
            "
          />

          {/* OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
            "
          />

          {/* TOP */}

          <div
            className="
              absolute
              top-3
              left-3
              right-3

              sm:top-4
              sm:left-4
              sm:right-4

              flex
              justify-between
              items-start
              gap-3
            "
          >
            {promoted && (
              <div
                className="
                  bg-yellow-400
                  text-black

                  px-3
                  py-2

                  rounded-xl

                  text-[10px]
                  sm:text-xs

                  font-bold

                  shadow-lg
                "
              >
                Sponsored
              </div>
            )}

            <button
              onClick={
                handleFavorite
              }
              className="
                ml-auto

                min-w-[46px]
                w-[46px]
                h-[46px]

                rounded-2xl

                bg-white/90
                backdrop-blur-xl

                flex
                items-center
                justify-center

                text-xl

                shadow-lg

                transition
              "
            >
              {isFavorite
                ? '❤️'
                : '🤍'}
            </button>
          </div>

          {/* TITLE */}

          <div
            className="
              absolute
              bottom-4
              left-4
              right-4

              sm:bottom-5
              sm:left-5
              sm:right-5
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2

                bg-white/20
                backdrop-blur-xl

                text-white

                px-3
                py-2

                rounded-xl

                text-[11px]
                sm:text-xs

                mb-3
              "
            >
              📍 {region}
            </div>

            <h2
              className="
                text-2xl
                sm:text-3xl

                font-black

                text-white

                leading-tight
                break-words
              "
            >
              {title}
            </h2>
          </div>
        </div>

        {/* CONTENT */}

        <div
          className="
            p-4
            sm:p-6

            flex
            flex-col
            flex-1
          "
        >
          {/* CATEGORY */}

          <div
            className="
              flex
              items-center
              justify-between

              gap-3
              flex-wrap
            "
          >
            <div
              className="
                bg-[#f5f7f4]

                px-4
                py-2

                rounded-xl

                text-xs
                sm:text-sm

                font-semibold

                text-gray-700
              "
            >
              {category}
            </div>

            <div
              className="
                text-yellow-500
                font-semibold
                text-sm
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

              mt-4

              text-sm

              line-clamp-3
            "
          >
            {description}
          </p>

          {/* INFO */}

          <div
            className="
              mt-5

              grid
              grid-cols-2

              gap-3
            "
          >
            <div
              className="
                bg-[#f5f7f4]
                p-3
                rounded-2xl
              "
            >
              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Min Budget
              </p>

              <h3 className="font-bold">
                $
                {minimumBudget}
              </h3>
            </div>

            <div
              className="
                bg-[#f5f7f4]
                p-3
                rounded-2xl
              "
            >
              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Recommended
              </p>

              <h3 className="font-bold">
                $
                {
                  recommendedBudget
                }
              </h3>
            </div>

            <div
              className="
                bg-[#f5f7f4]
                p-3
                rounded-2xl
              "
            >
              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Opens
              </p>

              <h3 className="font-bold">
                {openTime}
              </h3>
            </div>

            <div
              className="
                bg-[#f5f7f4]
                p-3
                rounded-2xl
              "
            >
              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Closes
              </p>

              <h3 className="font-bold">
                {closeTime}
              </h3>
            </div>
          </div>

          {/* RECOMMENDED */}

          {recommendedFor.length >
            0 && (
            <div
              className="
                flex
                flex-wrap
                gap-2
                mt-5
              "
            >
              {recommendedFor.map(
                (item) => (
                  <div
                    key={item}
                    className="
                      bg-emerald-50
                      text-emerald-700

                      px-3
                      py-2

                      rounded-xl

                      text-xs
                      font-semibold
                    "
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          )}

          {/* ACTIONS */}

          <div
            className="
              flex
              gap-3

              mt-auto
              pt-5
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

                py-3
                sm:py-4

                rounded-2xl

                transition

                font-semibold
                text-sm
              "
            >
              Explore
            </button>

            <button
              onClick={
                handleSavePlace
              }
              className="
                min-w-[54px]

                px-4
                sm:px-6

                rounded-2xl

                bg-[#f5f7f4]
                hover:bg-gray-200

                transition

                text-xl
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
        id={id}
        title={title}
        category={category}
        region={region}
        image={image}
        description={description}
        promoted={promoted}
        recommendedFor={
          recommendedFor
        }
        minimumBudget={
          minimumBudget
        }
        recommendedBudget={
          recommendedBudget
        }
        openTime={openTime}
        closeTime={closeTime}
        menu={menu}
      />
    </>
  )
}

export default PlaceCard