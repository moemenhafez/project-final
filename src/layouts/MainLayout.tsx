import type {
  ReactNode,
} from 'react'

import Sidebar from '@/components/layout/Sidebar'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div
      className="
        min-h-screen
        bg-[#f5f7f4]
        flex
      "
    >
      <Sidebar />

      <main
        className="
          flex-1
          ml-24
          xl:ml-72
          transition-all
          duration-300
          min-h-screen
        "
      >
        <div
          className="
            p-6
            xl:p-10
            space-y-8
          "
        >
          {/* TOPBAR */}

          <div
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-white/30
              rounded-[32px]
              px-8
              py-5
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              flex
              flex-col
              xl:flex-row
              xl:items-center
              xl:justify-between
              gap-6
              sticky
              top-6
              z-40
            "
          >
            <div>
              <h1
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  text-gray-900
                "
              >
                Plan smarter.
              </h1>

              <p
                className="
                  text-gray-500
                  mt-2
                  text-lg
                "
              >
                Build personalized
                tourism experiences
                across Lebanon.
              </p>
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
                  bg-[#f5f7f4]
                  rounded-2xl
                  px-5
                  py-4
                  min-w-[280px]
                  flex
                  items-center
                  gap-3
                  border
                  border-gray-100
                "
              >
                <span className="text-xl">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search places, cities, restaurants..."
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-gray-700
                    placeholder:text-gray-400
                  "
                />
              </div>

              <button
                className="
                  bg-emerald-700
                  hover:bg-emerald-800
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  transition
                  shadow-lg
                  font-medium
                "
              >
                + New Plan
              </button>
            </div>
          </div>

          {/* WORKSPACE */}

          <div
            className="
              grid
              grid-cols-1
              2xl:grid-cols-[1fr_380px]
              gap-8
              items-start
            "
          >
            {/* MAIN CONTENT */}

            <div className="space-y-8">
              {children}
            </div>

            {/* RIGHT PANEL */}

            <aside
              className="
                hidden
                2xl:flex
                flex-col
                gap-6
                sticky
                top-36
              "
            >
              {/* QUICK STATS */}

              <div
                className="
                  bg-gradient-to-br
                  from-emerald-950
                  to-emerald-800
                  rounded-[32px]
                  p-8
                  text-white
                  shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div>
                    <p
                      className="
                        text-emerald-200
                      "
                    >
                      Active Trip
                    </p>

                    <h2
                      className="
                        text-3xl
                        font-bold
                        mt-2
                      "
                    >
                      Lebanon North
                    </h2>
                  </div>

                  <div className="text-5xl">
                    🇱🇧
                  </div>
                </div>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-4
                    mt-8
                  "
                >
                  <div
                    className="
                      bg-white/10
                      rounded-2xl
                      p-4
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-emerald-200
                      "
                    >
                      Stops
                    </p>

                    <h3
                      className="
                        text-3xl
                        font-bold
                        mt-2
                      "
                    >
                      4
                    </h3>
                  </div>

                  <div
                    className="
                      bg-white/10
                      rounded-2xl
                      p-4
                    "
                  >
                    <p
                      className="
                        text-sm
                        text-emerald-200
                      "
                    >
                      Budget
                    </p>

                    <h3
                      className="
                        text-3xl
                        font-bold
                        mt-2
                      "
                    >
                      $120
                    </h3>
                  </div>
                </div>
              </div>

              {/* QUICK NOTES */}

              <div
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-gray-900
                    "
                  >
                    Trip Notes
                  </h2>

                  <span className="text-2xl">
                    📝
                  </span>
                </div>

                <textarea
                  placeholder="Add trip reminders, bookings, restaurant reservations..."
                  rows={8}
                  className="
                    w-full
                    mt-6
                    bg-[#f5f7f4]
                    rounded-3xl
                    p-5
                    resize-none
                    outline-none
                    text-gray-700
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* QUICK ACTIONS */}

              <div
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  space-y-4
                "
              >
                <button
                  className="
                    w-full
                    bg-emerald-700
                    hover:bg-emerald-800
                    text-white
                    py-4
                    rounded-2xl
                    transition
                    font-medium
                  "
                >
                  Save Current Plan
                </button>

                <button
                  className="
                    w-full
                    bg-[#f5f7f4]
                    hover:bg-gray-200
                    text-gray-800
                    py-4
                    rounded-2xl
                    transition
                    font-medium
                  "
                >
                  Open Navigation
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MainLayout