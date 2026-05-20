function Topbar() {
  return (
    <div
      className="
        sticky
        top-0
        z-40
        mb-8
      "
    >
      <div
        className="
          bg-white/80
          backdrop-blur-xl
          border
          border-white/30
          rounded-3xl
          px-8
          py-5
          shadow-sm
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-6
            flex-wrap
          "
        >
          <div>
            <p
              className="
                text-gray-500
                text-sm
              "
            >
              Welcome back 👋
            </p>

            <h1
              className="
                text-2xl
                font-bold
                text-gray-800
              "
            >
              Maya Khoury
            </h1>
          </div>

          <div
            className="
              flex
              items-center
              gap-4
              flex-wrap
            "
          >
            <div
              className="
                hidden
                md:flex
                items-center
                gap-3
                bg-gray-100
                px-5
                py-3
                rounded-2xl
                min-w-[260px]
              "
            >
              <span>🔍</span>

              <input
                type="text"
                placeholder="Quick search..."
                className="
                  bg-transparent
                  outline-none
                  w-full
                "
              />
            </div>

            <button
              className="
                relative
                w-14
                h-14
                rounded-2xl
                bg-gray-100
                text-xl
                hover:bg-gray-200
                transition
              "
            >
              🔔

              <div
                className="
                  absolute
                  top-2
                  right-2
                  w-3
                  h-3
                  bg-red-500
                  rounded-full
                "
              />
            </button>

            <div
              className="
                flex
                items-center
                gap-4
                bg-gray-100
                px-4
                py-2
                rounded-2xl
              "
            >
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150"
                  alt="User"
                  className="
                    w-12
                    h-12
                    rounded-xl
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-4
                    h-4
                    bg-emerald-500
                    border-2
                    border-white
                    rounded-full
                  "
                />
              </div>

              <div className="hidden md:block">
                <div
                  className="
                    font-semibold
                    text-gray-800
                  "
                >
                  Maya
                </div>

                <div
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  Traveler
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar