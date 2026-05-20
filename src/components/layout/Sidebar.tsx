import { useState } from 'react'

import {
  NavLink,
  useNavigate,
} from 'react-router-dom'

import {
  getRole,
  logout,
} from '@/utils/authStorage'

function Sidebar() {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] =
    useState(false)

  const role = getRole()

  function handleLogout() {
    logout()

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
      label: 'Trips',
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
      label: 'Advertisements',
      path:
        '/sponsored-management',
      icon: '⭐',
    },

    {
      label: 'Analytics',
      path: '/analytics',
      icon: '📊',
    },
  ]

  const organizerItems = [
    {
      label: 'Create Trip',
      path: '/create-trip',
      icon: '🧳',
    },

    {
      label: 'Manage Trips',
      path:
        '/community-trips',
      icon: '👥',
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
                capitalize
              "
            >
              {role} dashboard
            </p>
          )}
        </div>

        <div className="p-4 space-y-2">
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
                  transition
                  font-medium
                  ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'hover:bg-gray-100'
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
          className="
            flex
            items-center
            gap-4
            px-4
            py-4
            rounded-2xl
            hover:bg-gray-100
          "
        >
          <span>👤</span>

          {!collapsed && (
            <span>Profile</span>
          )}
        </NavLink>

        <NavLink
          to="/settings"
          className="
            flex
            items-center
            gap-4
            px-4
            py-4
            rounded-2xl
            hover:bg-gray-100
          "
        >
          <span>⚙️</span>

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
            hover:bg-red-100
            text-red-500
          "
        >
          <span>🚪</span>

          {!collapsed && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar