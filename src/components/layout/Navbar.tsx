import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

function Navbar() {
  const navigate = useNavigate()

  const { logout } = useAuth()

  function handleLogout() {
    logout()

    navigate('/login')
  }

  return (
    <header
      className="
        bg-white/80
        backdrop-blur-md
        border
        border-gray-100
        rounded-3xl
        px-6
        py-4
        flex
        items-center
        justify-between
        shadow-sm
      "
    >
      <div>
        <h1
          className="
            text-3xl
            font-bold
            text-gray-800
          "
        >
          Discover Lebanon
        </h1>

        <p
          className="
            text-gray-500
            text-sm
            mt-1
          "
        >
          Explore restaurants, cafés
          and unforgettable places
        </p>
      </div>

      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            hidden
            sm:flex
            items-center
            gap-3
          "
        >
          <div
            className="
              w-11
              h-11
              rounded-full
              bg-emerald-100
              flex
              items-center
              justify-center
              text-emerald-700
              font-bold
            "
          >
            M
          </div>

          <div>
            <p
              className="
                font-semibold
                text-gray-700
              "
            >
              moemen
            </p>

            <p
              className="
                text-sm
                text-gray-400
              "
            >
              Explorer
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            bg-gray-900
            text-white
            px-5
            py-2.5
            rounded-2xl
            hover:bg-black
            transition
          "
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Navbar