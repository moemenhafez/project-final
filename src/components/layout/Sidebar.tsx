import { useState } from 'react'

import {
  NavLink,
} from 'react-router-dom'

import {
  useAuth,
} from '@/hooks/useAuth'

function Sidebar() {
  const {
    role,
    logout,
  } = useAuth()

  const [collapsed, setCollapsed] =
    useState(false)

  const userItems = [
    {
      label: 'Explore',
      path: '/dashboard',
      icon: '🌍',
    },

    {
      label: 'Community Trips',
      path:
        '/community-trips',
      icon: '🧳',
    },

    {
      label: 'Saved Plans',
      path: '/saved-plans',
      icon: '❤️',
    },

    {
      label: 'Trip Budget',
      path: '/trip-budget',
      icon: '💰',
    },

    {
      label: 'Travel Time',
      path: '/travel-time',
      icon: '🛣️',
    },
  ]

  const adminItems = [
    {
      label: 'Analytics',
      path: '/analytics',
      icon: '📊',
    },

    {
      label: 'Admin Places',
      path: '/admin-places',
      icon: '🏢',
    },

    {
      label:
        'Sponsored Management',
      path:
        '/sponsored-management',
      icon: '⭐',
    },
  ]

  return (
    <aside
      onMouseEnter={() =>
        setCollapsed(false)
      }
      onMouseLeave={() =>
        setCollapsed(true)
      }
      className={`
        fixed
        left-0
        top-0
        h-screen
        z-50
        bg-white
        border-r
        border-gray-200
        flex
        flex-col
        justify-between
        transition-all
        duration-300
        shadow-sm
        ${
          collapsed
            ? 'w-24'
            : 'w-72'
        }
      `}
    >
      <div>
        <div
          className="
            p-6
            border-b
            border-gray-200
          "
        >
          <h1
            className="
              text-3xl
              font-bold
              text-emerald-700
              whitespace-nowrap
            "
          >
            {collapsed
              ? '🇱🇧'
              : 'LebGuide'}
          </h1>

          {!collapsed && (
            <p
              className="
                text-gray-500
                mt-2
                text-sm
              "
            >
              Discover Lebanon smarter.
            </p>
          )}
        </div>

        <div className="p-4 space-y-2">
          {userItems.map(
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
                  gap-4
                  px-4
                  py-4
                  rounded-2xl
                  transition
                  font-medium
                  whitespace-nowrap
                  ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `
                }
              >
                <span className="text-xl">
                  {item.icon}
                </span>

                {!collapsed && (
                  <span>
                    {item.label}
                  </span>
                )}
              </NavLink>
            )
          )}

          {role === 'admin' && (
            <>
              <div
                className={`
                  text-xs
                  text-gray-400
                  px-4
                  pt-6
                  pb-2
                  ${
                    collapsed
                      ? 'hidden'
                      : 'block'
                  }
                `}
              >
                ADMIN
              </div>

              {adminItems.map(
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
                      gap-4
                      px-4
                      py-4
                      rounded-2xl
                      transition
                      font-medium
                      whitespace-nowrap
                      ${
                        isActive
                          ? 'bg-black text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }
                    `
                    }
                  >
                    <span className="text-xl">
                      {item.icon}
                    </span>

                    {!collapsed && (
                      <span>
                        {
                          item.label
                        }
                      </span>
                    )}
                  </NavLink>
                )
              )}
            </>
          )}
        </div>
      </div>

      <div
        className="
          p-4
          border-t
          border-gray-200
          space-y-2
        "
      >
        <NavLink
          to="/profile"
          className={({
            isActive,
          }) =>
            `
            flex
            items-center
            gap-4
            px-4
            py-4
            rounded-2xl
            transition
            font-medium
            ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'hover:bg-gray-100'
            }
          `
          }
        >
          <span className="text-xl">
            👤
          </span>

          {!collapsed && (
            <span>Profile</span>
          )}
        </NavLink>

        <NavLink
          to="/settings"
          className={({
            isActive,
          }) =>
            `
            flex
            items-center
            gap-4
            px-4
            py-4
            rounded-2xl
            transition
            font-medium
            ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'hover:bg-gray-100'
            }
          `
          }
        >
          <span className="text-xl">
            ⚙️
          </span>

          {!collapsed && (
            <span>Settings</span>
          )}
        </NavLink>

        <button
          onClick={logout}
          className="
            w-full
            flex
            items-center
            gap-4
            px-4
            py-4
            rounded-2xl
            transition
            font-medium
            hover:bg-red-100
            text-red-500
          "
        >
          <span className="text-xl">
            🚪
          </span>

          {!collapsed && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar