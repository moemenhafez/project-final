import {
  NavLink,
} from 'react-router-dom'

import {
  useAuth,
} from '@/hooks/useAuth'

function Sidebar() {
  const { role, logout } =
    useAuth()

  const userSections = [
    {
      title: 'DISCOVER',

      items: [
        {
          label: 'Explore',
          path: '/dashboard',
        },

        {
          label: 'Community Trips',
          path:
            '/community-trips',
        },

        {
          label: 'Create Trip',
          path: '/create-trip',
        },

        {
          label: 'Saved Plans',
          path: '/saved-plans',
        },

        {
          label: 'Trip Budget',
          path: '/trip-budget',
        },

        {
          label: 'Travel Time',
          path: '/travel-time',
        },
      ],
    },
  ]

  const adminSections = [
    {
      title: 'ADMIN',

      items: [
        {
          label: 'Analytics',
          path: '/analytics',
        },

        {
          label: 'Admin Places',
          path: '/admin-places',
        },
      ],
    },
  ]

  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-white
        border-r
        border-gray-200
        flex
        flex-col
        justify-between
        p-6
      "
    >
      <div>
        <div className="mb-10">
          <h1
            className="
              text-3xl
              font-bold
              text-emerald-700
            "
          >
            LebGuide
          </h1>

          <p
            className="
              text-gray-500
              mt-2
              text-sm
            "
          >
            Discover Lebanon smarter.
          </p>
        </div>

        <div className="space-y-8">
          {userSections.map(
            (section) => (
              <div
                key={section.title}
              >
                <h2
                  className="
                    text-xs
                    font-semibold
                    text-gray-400
                    mb-4
                    tracking-widest
                  "
                >
                  {section.title}
                </h2>

                <div className="space-y-2">
                  {section.items.map(
                    (item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({
                          isActive,
                        }) =>
                          `
                          flex
                          items-center
                          px-4
                          py-3
                          rounded-2xl
                          transition
                          font-medium
                          ${
                            isActive
                              ? 'bg-emerald-700 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }
                        `
                        }
                      >
                        {item.label}
                      </NavLink>
                    )
                  )}
                </div>
              </div>
            )
          )}

          {role === 'admin' &&
            adminSections.map(
              (section) => (
                <div
                  key={
                    section.title
                  }
                >
                  <h2
                    className="
                      text-xs
                      font-semibold
                      text-gray-400
                      mb-4
                      tracking-widest
                    "
                  >
                    {section.title}
                  </h2>

                  <div className="space-y-2">
                    {section.items.map(
                      (item) => (
                        <NavLink
                          key={
                            item.path
                          }
                          to={item.path}
                          className={({
                            isActive,
                          }) =>
                            `
                            flex
                            items-center
                            px-4
                            py-3
                            rounded-2xl
                            transition
                            font-medium
                            ${
                              isActive
                                ? 'bg-black text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }
                          `
                          }
                        >
                          {item.label}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
              )
            )}
        </div>
      </div>

      <div
        className="
          border-t
          border-gray-200
          pt-6
        "
      >
        <div className="mb-4">
          <p
            className="
              text-sm
              text-gray-500
            "
          >
            Logged in as
          </p>

          <h3
            className="
              font-semibold
              text-gray-800
              capitalize
            "
          >
            {role}
          </h3>
        </div>

        <button
          onClick={logout}
          className="
            w-full
            bg-red-500
            text-white
            py-3
            rounded-2xl
            hover:bg-red-600
            transition
          "
        >
          Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar