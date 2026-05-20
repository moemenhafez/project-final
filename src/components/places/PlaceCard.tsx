import { useState } from 'react'

import PlaceDetailsModal from './PlaceDetailsModal'

interface PlaceCardProps {
  title: string

  category: string

  region: string

  image: string

  description: string

  promoted: boolean
}

function PlaceCard({
  title,
  category,
  region,
  image,
  description,
  promoted,
}: PlaceCardProps) {
  const [isOpen, setIsOpen] =
    useState(false)

  return (
    <>
      <div
        className="
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-sm
          hover:shadow-2xl
          hover:-translate-y-2
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

          <button
            onClick={() =>
              setIsOpen(true)
            }
            className="
              w-full
              mt-8
              bg-gray-900
              text-white
              py-3
              rounded-2xl
              hover:bg-black
              transition
            "
          >
            View Experience
          </button>
        </div>
      </div>

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