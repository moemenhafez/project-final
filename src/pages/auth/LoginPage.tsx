import { useNavigate } from 'react-router-dom'

import {
  motion,
} from 'framer-motion'

import {
  setRole,
} from '@/utils/authStorage'

function LoginPage() {
  const navigate = useNavigate()

  function handleLogin(
    role:
      | 'traveler'
      | 'business'
      | 'organizer'
      | 'admin'
  ) {
    setRole(role)

    navigate('/dashboard')
  }

  const roles = [
    {
      title: 'Traveler',
      description:
        'Explore and plan amazing trips across Lebanon.',
      emoji: '🌍',
      role: 'traveler',
    },

    {
      title: 'Business',
      description:
        'Promote your restaurant, café or tourism business.',
      emoji: '🏢',
      role: 'business',
    },

    {
      title: 'Organizer',
      description:
        'Create and manage community trips and events.',
      emoji: '🧳',
      role: 'organizer',
    },

    {
      title: 'Admin',
      description:
        'Manage the tourism marketplace platform.',
      emoji: '⚙️',
      role: 'admin',
    },
  ]

  return (
    <div
      className="
        min-h-screen
        bg-gray-100
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div className="max-w-7xl w-full">
        <div className="text-center mb-14">
          <h1
            className="
              text-6xl
              font-bold
              text-gray-800
            "
          >
            LebGuide
          </h1>

          <p
            className="
              text-xl
              text-gray-500
              mt-5
            "
          >
            Lebanon’s Smart Tourism
            Marketplace
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >
          {roles.map((item) => (
            <motion.div
              key={item.role}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-2xl
                transition
              "
            >
              <div className="text-6xl">
                {item.emoji}
              </div>

              <h2
                className="
                  text-3xl
                  font-bold
                  mt-6
                  text-gray-800
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  text-gray-500
                  mt-4
                  leading-relaxed
                "
              >
                {
                  item.description
                }
              </p>

              <button
                onClick={() =>
                  handleLogin(
                    item.role as
                      | 'traveler'
                      | 'business'
                      | 'organizer'
                      | 'admin'
                  )
                }
                className="
                  w-full
                  mt-8
                  bg-emerald-700
                  text-white
                  py-4
                  rounded-2xl
                  hover:bg-emerald-800
                  transition
                "
              >
                Continue
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoginPage