import { useState } from 'react'

import {
  NavLink,
  useNavigate,
} from 'react-router-dom'

import {
  motion,
} from 'framer-motion'

import {
  getCurrentRole,
  logoutUser,
} from '@/utils/authStorage'

function Sidebar() {
  const navigate = useNavigate()

  const role =
    getCurrentRole()

  const [expanded, setExpanded] =
    useState(false)

  function handleLogout() {
    logoutUser()

    navigate('/login')
  }

  const menuItems = [
    {
      label: 'Explore',
      icon: '🌍',
      path: '/dashboard',
    },

    {
      label: 'Favorites',
      icon: '❤️',
      path: '/favorites',
    },

    {
      label: 'Saved Places',
      icon: '🔖',
      path: '/saved-places',
    },

    {
      label: 'Trip Planner',
      icon: '🧳',
      path: '/trip-planner',
    },

    {
      label: 'Community',
      icon: '👥',
      path:
        '/community-trips',
    },
  ]

  const adminItems = [
    {
      label: 'Analytics',
      icon: '📊',
      path: '/analytics',
    },

    {
      label: 'Manage Places',
      icon: '🏢',
      path: '/admin-places',
    },
  ]

  const businessItems = [
    {
      label: 'My Business',
      icon: '🏨',
      path: '/business',
    },
  ]

  const organizerItems = [
    {
      label: 'Create Trip',
      icon: '➕',
      path: '/create-trip',
    },
  ]

  let roleItems: typeof menuItems =
    []

  if (role === 'admin') {
    roleItems = adminItems
  }

  if (role === 'business') {
    roleItems =
      businessItems
  }

  if (role === 'organizer') {
    roleItems =
      organizerItems
  }

  return (
    <motion.aside
      animate={{
        width: expanded
          ? 290
          : 100,
      }}
      transition={{
        duration: 0.3,
      }}
      onMouseEnter={() =>
        setExpanded(true)
      }
      onMouseLeave={() =>
        setExpanded(false)
      }
      className="
        fixed
        left-5
        top-5
        bottom-5
        z-50
        bg-white/80
        backdrop-blur-2xl
        border
        border-white/30
        rounded-[36px]
        shadow-[0_10px_50px_rgba(0,0,0,0.08)]
        flex
        flex-col
        justify-between
        overflow-hidden
      "
    >
      {/* TOP */}

      <div>
        {/* LOGO */}

        <div
          className="
            p-6
            flex
            items-center
            gap-5
          "
        >
          <div
            className="
              min-w-[60px]
              h-[60px]
              rounded-[24px]
              bg-gradient-to-br
              from-emerald-700
              to-emerald-500
              flex
              items-center
              justify-center
              text-3xl
              text-white
              shadow-lg
            "
          >
            🇱🇧
          </div>

          {expanded && (
            <motion.div
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
            >
              <h1
                className="
                  text-2xl
                  font-black
                  text-gray-900
                "
              >
                LebGuide
              </h1>

              <p
                className="
                  text-gray-400
                  text-sm
                  capitalize
                "
              >
                {role} workspace
              </p>
            </motion.div>
          )}
        </div>

        {/* MENU */}

        <div
          className="
            px-4
            mt-6
            space-y-3
          "
        >
          {menuItems.map(
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
                    gap-5
                    px-5
                    py-5
                    rounded-[28px]
                    transition-all
                    duration-300
                    group
                    ${
                      isActive
                        ? 'bg-emerald-700 text-white shadow-lg'
                        : 'hover:bg-[#f5f7f4] text-gray-700'
                    }
                  `
                }
              >
                <span className="text-2xl">
                  {item.icon}
                </span>

                {expanded && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="
                      font-semibold
                      whitespace-nowrap
                    "
                  >
                    {item.label}
                  </motion.span>
                )}
              </NavLink>
            )
          )}

          {roleItems.length >
            0 && (
            <div className="pt-6">
              {expanded && (
                <p
                  className="
                    px-4
                    mb-4
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-gray-400
                    font-bold
                  "
                >
                  Workspace
                </p>
              )}

              <div className="space-y-3">
                {roleItems.map(
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
                          gap-5
                          px-5
                          py-5
                          rounded-[28px]
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? 'bg-black text-white'
                              : 'hover:bg-[#f5f7f4] text-gray-700'
                          }
                        `
                      }
                    >
                      <span className="text-2xl">
                        {
                          item.icon
                        }
                      </span>

                      {expanded && (
                        <motion.span
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          className="
                            font-semibold
                            whitespace-nowrap
                          "
                        >
                          {
                            item.label
                          }
                        </motion.span>
                      )}
                    </NavLink>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM */}

      <div className="p-4">
        <div className="space-y-3">
          <NavLink
            to="/profile"
            className={({
              isActive,
            }) =>
              `
                flex
                items-center
                gap-5
                px-5
                py-5
                rounded-[28px]
                transition-all
                duration-300
                ${
                  isActive
                    ? 'bg-[#111827] text-white'
                    : 'hover:bg-[#f5f7f4] text-gray-700'
                }
              `
            }
          >
            <span className="text-2xl">
              👤
            </span>

            {expanded && (
              <motion.span
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="
                  font-semibold
                  whitespace-nowrap
                "
              >
                Profile
              </motion.span>
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
                gap-5
                px-5
                py-5
                rounded-[28px]
                transition-all
                duration-300
                ${
                  isActive
                    ? 'bg-[#111827] text-white'
                    : 'hover:bg-[#f5f7f4] text-gray-700'
                }
              `
            }
          >
            <span className="text-2xl">
              ⚙️
            </span>

            {expanded && (
              <motion.span
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="
                  font-semibold
                  whitespace-nowrap
                "
              >
                Settings
              </motion.span>
            )}
          </NavLink>

          <button
            onClick={handleLogout}
            className="
              w-full
              flex
              items-center
              gap-5
              px-5
              py-5
              rounded-[28px]
              hover:bg-red-50
              text-red-500
              transition-all
              duration-300
            "
          >
            <span className="text-2xl">
              🚪
            </span>

            {expanded && (
              <motion.span
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="
                  font-semibold
                "
              >
                Logout
              </motion.span>
            )}
          </button>
        </div>
      </div>
    </motion.aside>
  )
}

export default Sidebar