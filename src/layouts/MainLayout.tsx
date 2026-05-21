import type {
  ReactNode,
} from 'react'

import {
  motion,
} from 'framer-motion'

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
      "
    >
      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <main
        className="
          pl-[120px]
          xl:pl-[320px]
          pr-6
          xl:pr-10
          py-6
          min-h-screen
          transition-all
          duration-300
        "
      >
        <div className="space-y-8">
          {/* TOPBAR */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              sticky
              top-6
              z-40
            "
          >
            <div
              className="
                bg-white/70
                backdrop-blur-2xl
                border
                border-white/30
                rounded-[36px]
                px-8
                py-6
                shadow-[0_10px_50px_rgba(0,0,0,0.05)]
              "
            >
              <div
                className="
                  flex
                  flex-col
                  2xl:flex-row
                  2xl:items-center
                  2xl:justify-between
                  gap-6
                "
              >
                {/* LEFT */}

                <div>
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-3
                      bg-emerald-100
                      text-emerald-700
                      px-4
                      py-2
                      rounded-2xl
                      text-sm
                      font-semibold
                      mb-5
                    "
                  >
                    ✨ AI Travel Workspace
                  </div>

                  <h1
                    className="
                      text-5xl
                      font-black
                      text-gray-900
                      tracking-tight
                    "
                  >
                    Explore smarter.
                  </h1>

                  <p
                    className="
                      text-gray-500
                      text-lg
                      mt-3
                    "
                  >
                    Build personalized
                    travel experiences
                    across Lebanon.
                  </p>
                </div>

                {/* RIGHT */}

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-4
                  "
                >
                  {/* SEARCH */}

                  <div
                    className="
                      bg-[#f5f7f4]
                      rounded-[26px]
                      px-6
                      py-5
                      flex
                      items-center
                      gap-4
                      min-w-[320px]
                      border
                      border-transparent
                      focus-within:border-emerald-300
                      transition
                    "
                  >
                    <span className="text-2xl">
                      🔍
                    </span>

                    <input
                      type="text"
                      placeholder="Search places, beaches, restaurants..."
                      className="
                        bg-transparent
                        outline-none
                        w-full
                        text-gray-700
                        placeholder:text-gray-400
                      "
                    />
                  </div>

                  {/* QUICK ACTION */}

                  <button
                    className="
                      bg-emerald-700
                      hover:bg-emerald-800
                      text-white
                      px-7
                      py-5
                      rounded-[26px]
                      font-semibold
                      shadow-lg
                      transition
                      hover:scale-[1.02]
                    "
                  >
                    + New Plan
                  </button>

                  {/* NOTIFICATIONS */}

                  <button
                    className="
                      w-[64px]
                      h-[64px]
                      rounded-[26px]
                      bg-white
                      hover:bg-gray-100
                      flex
                      items-center
                      justify-center
                      shadow-[0_5px_20px_rgba(0,0,0,0.04)]
                      transition
                      text-2xl
                    "
                  >
                    🔔
                  </button>

                  {/* PROFILE */}

                  <button
                    className="
                      flex
                      items-center
                      gap-4
                      bg-white
                      hover:bg-gray-100
                      px-5
                      py-4
                      rounded-[26px]
                      shadow-[0_5px_20px_rgba(0,0,0,0.04)]
                      transition
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-gradient-to-br
                        from-emerald-700
                        to-emerald-500
                        flex
                        items-center
                        justify-center
                        text-white
                        font-bold
                      "
                    >
                      M
                    </div>

                    <div className="text-left">
                      <h3
                        className="
                          font-bold
                          text-gray-900
                        "
                      >
                        Maya
                      </h3>

                      <p
                        className="
                          text-sm
                          text-gray-400
                        "
                      >
                        Traveler
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* QUICK STATS */}

              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-4
                  mt-8
                "
              >
                {[
                  {
                    label:
                      'Saved Places',
                    value: '12',
                    icon: '🔖',
                  },

                  {
                    label:
                      'Planned Routes',
                    value: '4',
                    icon: '🛣️',
                  },

                  {
                    label:
                      'Travel Time',
                    value: '14h',
                    icon: '⏱️',
                  },

                  {
                    label:
                      'Budget',
                    value: '$420',
                    icon: '💰',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      bg-white/70
                      backdrop-blur-xl
                      rounded-[28px]
                      p-5
                      border
                      border-white/30
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
                            text-gray-400
                            text-sm
                          "
                        >
                          {
                            item.label
                          }
                        </p>

                        <h3
                          className="
                            text-3xl
                            font-black
                            mt-2
                            text-gray-900
                          "
                        >
                          {
                            item.value
                          }
                        </h3>
                      </div>

                      <div className="text-3xl">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}

          <div>{children}</div>
        </div>
      </main>
    </div>
  )
}

export default MainLayout