interface PlaceDetailsModalProps {
  isOpen: boolean

  onClose: () => void

  title: string

  image: string

  description: string

  category: string

  region: string

  promoted?: boolean
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
        z-[100]
        bg-black/60
        backdrop-blur-sm
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          bg-white
          w-full
          max-w-7xl
          rounded-[40px]
          overflow-hidden
          shadow-[0_20px_80px_rgba(0,0,0,0.2)]
          max-h-[95vh]
          overflow-y-auto
        "
      >
        {/* HERO */}

        <div className="relative">
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-[520px]
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
            "
          />

          {/* CLOSE */}

          <button
            onClick={onClose}
            className="
              absolute
              top-8
              right-8
              w-16
              h-16
              rounded-3xl
              bg-white/90
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-3xl
              shadow-lg
              hover:scale-110
              transition
            "
          >
            ✕
          </button>

          {/* CONTENT */}

          <div
            className="
              absolute
              bottom-10
              left-10
              right-10
              flex
              flex-col
              xl:flex-row
              xl:items-end
              xl:justify-between
              gap-10
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-3
                  flex-wrap
                  mb-6
                "
              >
                <div
                  className="
                    bg-white/20
                    backdrop-blur-xl
                    text-white
                    px-5
                    py-3
                    rounded-2xl
                    text-sm
                  "
                >
                  📍 {region}
                </div>

                <div
                  className="
                    bg-white/20
                    backdrop-blur-xl
                    text-white
                    px-5
                    py-3
                    rounded-2xl
                    text-sm
                  "
                >
                  {category}
                </div>

                {promoted && (
                  <div
                    className="
                      bg-yellow-400
                      text-black
                      px-5
                      py-3
                      rounded-2xl
                      text-sm
                      font-semibold
                    "
                  >
                    ⭐ Sponsored
                  </div>
                )}
              </div>

              <h1
                className="
                  text-6xl
                  font-black
                  text-white
                  leading-tight
                  max-w-4xl
                "
              >
                {title}
              </h1>
            </div>

            {/* QUICK INFO */}

            <div
              className="
                bg-white/10
                backdrop-blur-2xl
                rounded-[32px]
                p-8
                min-w-[320px]
                text-white
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  gap-5
                "
              >
                <div>
                  <p
                    className="
                      text-emerald-200
                      text-sm
                    "
                  >
                    Rating
                  </p>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      mt-2
                    "
                  >
                    ⭐ 4.8
                  </h2>
                </div>

                <div>
                  <p
                    className="
                      text-emerald-200
                      text-sm
                    "
                  >
                    Budget
                  </p>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      mt-2
                    "
                  >
                    $25
                  </h2>
                </div>

                <div>
                  <p
                    className="
                      text-emerald-200
                      text-sm
                    "
                  >
                    Duration
                  </p>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      mt-2
                    "
                  >
                    2h
                  </h2>
                </div>

                <div>
                  <p
                    className="
                      text-emerald-200
                      text-sm
                    "
                  >
                    Open
                  </p>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      mt-2
                    "
                  >
                    9AM
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BODY */}

        <div
          className="
            p-10
            grid
            grid-cols-1
            xl:grid-cols-[1fr_380px]
            gap-10
          "
        >
          {/* LEFT */}

          <div className="space-y-10">
            {/* ABOUT */}

            <section>
              <h2
                className="
                  text-4xl
                  font-bold
                  text-gray-900
                "
              >
                About Experience
              </h2>

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
            </section>

            {/* EXPERIENCE */}

            <section
              className="
                bg-[#f5f7f4]
                rounded-[32px]
                p-8
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-8
                "
              >
                <h2
                  className="
                    text-3xl
                    font-bold
                  "
                >
                  Experience Details
                </h2>

                <span className="text-4xl">
                  ✨
                </span>
              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-6
                "
              >
                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    Best Season
                  </h3>

                  <p
                    className="
                      text-gray-500
                      mt-3
                    "
                  >
                    Spring & Summer
                  </p>
                </div>

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    Recommended For
                  </h3>

                  <p
                    className="
                      text-gray-500
                      mt-3
                    "
                  >
                    Couples, Families,
                    Groups
                  </p>
                </div>

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    Opening Hours
                  </h3>

                  <p
                    className="
                      text-gray-500
                      mt-3
                    "
                  >
                    9:00 AM - 11:00 PM
                  </p>
                </div>

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-6
                  "
                >
                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    Estimated Visit
                  </h3>

                  <p
                    className="
                      text-gray-500
                      mt-3
                    "
                  >
                    2 - 4 Hours
                  </p>
                </div>
              </div>
            </section>

            {/* GALLERY */}

            <section>
              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-8
                "
              >
                <h2
                  className="
                    text-3xl
                    font-bold
                  "
                >
                  Gallery
                </h2>

                <button
                  className="
                    bg-[#f5f7f4]
                    px-5
                    py-3
                    rounded-2xl
                    hover:bg-gray-200
                    transition
                  "
                >
                  View All
                </button>
              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-5
                "
              >
                <img
                  src={image}
                  alt={title}
                  className="
                    h-56
                    w-full
                    object-cover
                    rounded-[28px]
                  "
                />

                <img
                  src={image}
                  alt={title}
                  className="
                    h-56
                    w-full
                    object-cover
                    rounded-[28px]
                  "
                />

                <img
                  src={image}
                  alt={title}
                  className="
                    h-56
                    w-full
                    object-cover
                    rounded-[28px]
                  "
                />

                <img
                  src={image}
                  alt={title}
                  className="
                    h-56
                    w-full
                    object-cover
                    rounded-[28px]
                  "
                />
              </div>
            </section>
          </div>

          {/* RIGHT PANEL */}

          <aside className="space-y-8">
            {/* MAP */}

            <div
              className="
                bg-[#f5f7f4]
                rounded-[32px]
                p-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-6
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Location
                </h2>

                <span className="text-3xl">
                  🗺️
                </span>
              </div>

              <div
                className="
                  h-[260px]
                  rounded-[28px]
                  bg-gradient-to-br
                  from-[#dbe8d8]
                  to-[#c4d7bf]
                  relative
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-12
                    h-12
                    rounded-full
                    bg-emerald-700
                    border-4
                    border-white
                  "
                />
              </div>
            </div>

            {/* ACTIONS */}

            <div
              className="
                bg-[#f5f7f4]
                rounded-[32px]
                p-8
                space-y-5
              "
            >
              <button
                className="
                  w-full
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
                Add To Planner
              </button>

              <button
                className="
                  w-full
                  bg-white
                  hover:bg-gray-100
                  py-5
                  rounded-3xl
                  transition
                  font-semibold
                "
              >
                Save For Later
              </button>

              <button
                className="
                  w-full
                  bg-white
                  hover:bg-gray-100
                  py-5
                  rounded-3xl
                  transition
                  font-semibold
                "
              >
                Share Experience
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailsModal