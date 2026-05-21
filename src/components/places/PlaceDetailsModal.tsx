import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import {
  useNavigate,
} from 'react-router-dom'

import toast from 'react-hot-toast'

import {
  addPlaceToPlanner,
} from '@/utils/tripPlannerStorage'

import {
  savePlaceForLater,
} from '@/utils/savedPlacesStorage'

import type {
  Place,
} from '@/types/place'

interface PlaceDetailsModalProps
  extends Place {
  isOpen: boolean

  onClose: () => void
}

function PlaceDetailsModal({
  isOpen,
  onClose,

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
}: PlaceDetailsModalProps) {
  const navigate =
    useNavigate()

  const place: Place = {
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

  function handleAddPlanner() {
    addPlaceToPlanner(place)

    toast.success(
      'Added to planner.'
    )
  }

  function handleSaveLater() {
    savePlaceForLater(place)

    toast.success(
      'Saved for later.'
    )
  }

  async function handleShare() {
    try {
      await navigator.share({
        title,

        text: description,

        url:
          window.location.href,
      })
    } catch {
      toast.error(
        'Sharing cancelled.'
      )
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-[999]

            bg-black/50
            backdrop-blur-sm

            flex
            items-center
            justify-center

            p-4
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              bg-white

              w-full
              max-w-5xl

              rounded-[32px]

              overflow-hidden

              shadow-[0_20px_80px_rgba(0,0,0,0.2)]

              max-h-[95vh]

              overflow-y-auto
            "
          >
            {/* IMAGE */}

            <div className="relative">
              <img
                src={image}
                alt={title}
                className="
                  w-full
                  h-[280px]
                  md:h-[420px]
                  object-cover
                "
              />

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

              {/* CLOSE */}

              <button
                onClick={onClose}
                className="
                  absolute
                  top-5
                  right-5

                  w-[50px]
                  h-[50px]

                  rounded-2xl

                  bg-white/90

                  text-2xl

                  shadow-lg
                "
              >
                ✕
              </button>

              {/* INFO */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                "
              >
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    bg-white/20
                    backdrop-blur-xl

                    px-4
                    py-2

                    rounded-xl

                    text-white

                    text-sm

                    mb-4
                  "
                >
                  📍 {region}
                </div>

                <h1
                  className="
                    text-4xl
                    md:text-6xl

                    font-black

                    text-white

                    leading-tight
                  "
                >
                  {title}
                </h1>
              </div>
            </div>

            {/* CONTENT */}

            <div
              className="
                p-6
                md:p-10

                grid
                grid-cols-1
                xl:grid-cols-[1.2fr_420px]

                gap-10
              "
            >
              {/* LEFT */}

              <div>
                {/* CATEGORY */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    mb-6
                  "
                >
                  <div
                    className="
                      bg-[#f5f7f4]

                      px-4
                      py-2

                      rounded-xl

                      text-sm
                      font-semibold
                    "
                  >
                    {category}
                  </div>

                  {recommendedFor.map(
                    (item) => (
                      <div
                        key={item}
                        className="
                          bg-emerald-50
                          text-emerald-700

                          px-4
                          py-2

                          rounded-xl

                          text-sm
                          font-semibold
                        "
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    text-gray-600

                    leading-relaxed

                    text-lg
                  "
                >
                  {description}
                </p>

                {/* INFO CARDS */}

                <div
                  className="
                    mt-8

                    grid
                    grid-cols-2
                    md:grid-cols-4

                    gap-4
                  "
                >
                  <div
                    className="
                      bg-[#f8faf8]
                      p-5
                      rounded-2xl
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      Min Budget
                    </p>

                    <h3
                      className="
                        text-2xl
                        font-black
                        mt-2
                      "
                    >
                      $
                      {minimumBudget}
                    </h3>
                  </div>

                  <div
                    className="
                      bg-[#f8faf8]
                      p-5
                      rounded-2xl
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      Recommended
                    </p>

                    <h3
                      className="
                        text-2xl
                        font-black
                        mt-2
                      "
                    >
                      $
                      {
                        recommendedBudget
                      }
                    </h3>
                  </div>

                  <div
                    className="
                      bg-[#f8faf8]
                      p-5
                      rounded-2xl
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      Opens
                    </p>

                    <h3
                      className="
                        text-2xl
                        font-black
                        mt-2
                      "
                    >
                      {openTime}
                    </h3>
                  </div>

                  <div
                    className="
                      bg-[#f8faf8]
                      p-5
                      rounded-2xl
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                    >
                      Closes
                    </p>

                    <h3
                      className="
                        text-2xl
                        font-black
                        mt-2
                      "
                    >
                      {closeTime}
                    </h3>
                  </div>
                </div>

                {/* MENU */}

                {menu.length > 0 && (
                  <div className="mt-10">
                    <h2
                      className="
                        text-2xl
                        font-black
                        mb-5
                      "
                    >
                      Menu
                    </h2>

                    <div className="space-y-4">
                      {menu.map(
                        (
                          item,
                          index
                        ) => (
                          <div
                            key={index}
                            className="
                              bg-[#f8faf8]

                              p-5

                              rounded-2xl

                              flex
                              justify-between
                              items-center
                            "
                          >
                            <span
                              className="
                                font-semibold
                              "
                            >
                              {
                                item.name
                              }
                            </span>

                            <span
                              className="
                                text-emerald-700
                                font-black
                              "
                            >
                              $
                              {
                                item.price
                              }
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT */}

              <div
                className="
                  bg-[#f8faf8]

                  rounded-[28px]

                  p-5

                  space-y-4

                  h-fit
                "
              >
                <button
                  onClick={
                    handleAddPlanner
                  }
                  className="
                    w-full

                    bg-emerald-700
                    hover:bg-emerald-800

                    text-white

                    py-4

                    rounded-2xl

                    font-semibold

                    transition
                  "
                >
                  Add To Planner
                </button>

                <button
                  onClick={
                    handleSaveLater
                  }
                  className="
                    w-full

                    bg-white
                    hover:bg-gray-100

                    py-4

                    rounded-2xl

                    transition
                  "
                >
                  Save For Later
                </button>

                <button
                  onClick={
                    handleShare
                  }
                  className="
                    w-full

                    bg-white
                    hover:bg-gray-100

                    py-4

                    rounded-2xl

                    transition
                  "
                >
                  Share Experience
                </button>

                <button
                  onClick={() =>
                    navigate(
                      '/trip-planner'
                    )
                  }
                  className="
                    w-full

                    bg-black
                    hover:bg-gray-900

                    text-white

                    py-4

                    rounded-2xl

                    transition
                  "
                >
                  Open Trip Planner
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PlaceDetailsModal