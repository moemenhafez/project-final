import { useState } from 'react'

import {
  NavLink,
  useNavigate,
} from 'react-router-dom'

import {
  getCurrentRole,
  logoutUser,
} from '@/utils/authStorage'

function Sidebar() {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] =
    useState(false)

  const role =
    getCurrentRole()

  function handleLogout() {
    logoutUser()

    navigate('/login')
  }

  const travelerItems = [
    {
      label: 'Explore',
      path: '/dashboard',
      icon: '🌍',
    },

    {
      label: 'Favorites',
      path: '/favorites',
      icon: '❤️',
    },

    {
      label: 'Saved Places',
      path: '/saved-places',
      icon: '🔖',
    },

    {
      label: 'Community Trips',
      path:
        '/community-trips',
      icon: '🧳',
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

  const businessItems = [
    {
      label: 'My Business',
      path: '/admin-places',
      icon: '🏢',
    },

    {
      label: 'Advertise',
      path:
        '/sponsored-management',
      icon: '⭐',
    },

    {
      label: 'Business Analytics',
      path: '/analytics',
      icon: '📊',
    },
  ]

  const organizerItems = [
    {
      label: 'Create Trip',
      path: '/create-trip',
      icon: '➕',
    },

    {
      label: 'Manage Trips',
      path:
        '/community-trips',
      icon: '👥',
    },

    {
      label: 'Trip Revenue',
      path: '/analytics',
      icon: '💵',
    },
  ]

  const adminItems = [
    {
      label:
        'Platform Analytics',
      path: '/analytics',
      icon: '📊',
    },

    {
      label: 'Approve Places',
      path: '/admin-places',
      icon: '✅',
    },

    {
      label: 'Sponsors',
      path:
        '/sponsored-management',
      icon: '⭐',
    },

    {
      label: 'Users',
      path: '/profile',
      icon: '👤',
    },
  ]

  const roleMenus = {
    traveler:
      travelerItems,

    business:
      businessItems,

    organizer:
      organizerItems,

    admin: adminItems,
  }

  const currentMenu =
    roleMenus[role]

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
        shadow-xl
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
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-emerald-700
                text-white
                flex
                items-center
                justify-center
                text-2xl
                shadow-lg
              "
            >
              🇱🇧
            </div>

            {!collapsed && (
              <div>
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
                    text-sm
                    text-gray-500
                    capitalize
                  "
                >
                  {role} dashboard
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 space-y-3">
          {currentMenu.map(
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
                  transition-all
                  duration-300
                  font-medium
                  ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `
                }
              >
                <span className="text-2xl">
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
        </div>
      </div>

      <div
        className="
          p-4
          border-t
          border-gray-200
          space-y-3
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
            ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'hover:bg-gray-100'
            }
          `
          }
        >
          <span className="text-2xl">
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
            ${
              isActive
                ? 'bg-gray-900 text-white'
                : 'hover:bg-gray-100'
            }
          `
          }
        >
          <span className="text-2xl">
            ⚙️
          </span>

          {!collapsed && (
            <span>Settings</span>
          )}
        </NavLink>

        <button
          onClick={handleLogout}
          className="
            w-full
            flex
            items-center
            gap-4
            px-4
            py-4
            rounded-2xl
            transition
            hover:bg-red-100
            text-red-500
          "
        >
          <span className="text-2xl">
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