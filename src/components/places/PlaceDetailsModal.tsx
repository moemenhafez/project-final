import { motion } from 'framer-motion'

interface PlaceDetailsModalProps {
  isOpen: boolean

  onClose: () => void

  title: string

  image: string

  description: string

  category: string

  region: string

  promoted: boolean
}

function PlaceDetailsModal({
  isOpen,
  onClose,
  title,
  image,
  description,
  category,
  region,
  promoted,
}: PlaceDetailsModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/60
        z-50
        flex
        items-center
        justify-center
        p-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          bg-white
          w-full
          max-w-5xl
          rounded-3xl
          overflow-hidden
          shadow-2xl
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-[350px]
              object-cover
            "
          />

          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              bg-white
              w-12
              h-12
              rounded-full
              text-xl
              font-bold
              shadow-lg
            "
          >
            ✕
          </button>

          {promoted && (
            <div
              className="
                absolute
                top-5
                left-5
                bg-yellow-400
                text-black
                px-4
                py-2
                rounded-full
                font-bold
              "
            >
              ⭐ Sponsored
            </div>
          )}
        </div>

        <div className="p-8 space-y-8">
          <div>
            <div
              className="
                flex
                items-center
                gap-4
                flex-wrap
              "
            >
              <h1
                className="
                  text-4xl
                  font-bold
                  text-gray-800
                "
              >
                {title}
              </h1>

              <div
                className="
                  bg-emerald-100
                  text-emerald-700
                  px-4
                  py-2
                  rounded-full
                  font-semibold
                "
              >
                ⭐ 4.8
              </div>
            </div>

            <div
              className="
                flex
                gap-3
                mt-4
                flex-wrap
              "
            >
              <div
                className="
                  bg-gray-100
                  px-4
                  py-2
                  rounded-full
                "
              >
                📍 {region}
              </div>

              <div
                className="
                  bg-gray-100
                  px-4
                  py-2
                  rounded-full
                "
              >
                🍽️ {category}
              </div>

              <div
                className="
                  bg-green-100
                  text-green-700
                  px-4
                  py-2
                  rounded-full
                  font-semibold
                "
              >
                Open Now
              </div>

              <div
                className="
                  bg-gray-100
                  px-4
                  py-2
                  rounded-full
                "
              >
                $$$
              </div>
            </div>
          </div>

          <div>
            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
                mb-4
              "
            >
              About
            </h2>

            <p
              className="
                text-gray-600
                leading-relaxed
                text-lg
              "
            >
              {description}
            </p>
          </div>

          <div>
            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
                mb-4
              "
            >
              Gallery
            </h2>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-4
              "
            >
              <img
                src={image}
                className="
                  rounded-2xl
                  h-48
                  w-full
                  object-cover
                "
              />

              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
                className="
                  rounded-2xl
                  h-48
                  w-full
                  object-cover
                "
              />

              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                className="
                  rounded-2xl
                  h-48
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

          <div>
            <h2
              className="
                text-2xl
                font-bold
                text-gray-800
                mb-4
              "
            >
              Sample Menu
            </h2>

            <div className="space-y-4">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  bg-gray-100
                  p-4
                  rounded-2xl
                "
              >
                <span>
                  Lebanese Mezze
                </span>

                <span>$18</span>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  bg-gray-100
                  p-4
                  rounded-2xl
                "
              >
                <span>
                  Seafood Platter
                </span>

                <span>$32</span>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  bg-gray-100
                  p-4
                  rounded-2xl
                "
              >
                <span>
                  Signature Dessert
                </span>

                <span>$12</span>
              </div>
            </div>
          </div>

          <div
            className="
              flex
              gap-4
              flex-wrap
            "
          >
            <button
              className="
                bg-emerald-700
                text-white
                px-8
                py-4
                rounded-2xl
                hover:bg-emerald-800
                hover:scale-[1.02]
                active:scale-[0.98]
                transition
              "
            >
              Reserve Experience
            </button>

            <button
              className="
                bg-gray-200
                px-8
                py-4
                rounded-2xl
                hover:bg-gray-300
                hover:scale-[1.02]
                active:scale-[0.98]
                transition
              "
            >
              Save Place
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PlaceDetailsModal