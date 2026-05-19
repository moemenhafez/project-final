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
        bg-white
        shadow-md
        rounded-2xl
        px-6
        py-4
        flex
        items-center
        justify-between
      "
    >
      <div>
        <h1
          className="
            text-2xl
            font-bold
            text-emerald-700
          "
        >
          Tourism Dashboard
        </h1>

        <p
          className="
            text-gray-500
            text-sm
          "
        >
          Manage your tourism platform
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="
          bg-red-600
          text-white
          px-5
          py-2
          rounded-xl
          hover:bg-red-700
          transition
        "
      >
        Logout
      </button>
    </header>
  )
}

export default Navbar