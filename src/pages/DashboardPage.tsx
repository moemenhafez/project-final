import { useAuth } from '@/hooks/useAuth'

function DashboardPage() {
  const { logout } = useAuth()

  function handleLogout() {
    logout()
  }

  return (
    <div
      className="
        min-h-screen
        bg-emerald-100
        p-8
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          bg-white
          rounded-2xl
          shadow-xl
          p-8
          space-y-6
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <h1
            className="
              text-3xl
              font-bold
              text-emerald-700
            "
          >
            Dashboard
          </h1>

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
        </div>

        <div
          className="
            bg-emerald-50
            rounded-xl
            p-6
          "
        >
          <h2
            className="
              text-2xl
              font-semibold
              text-emerald-700
            "
          >
            Welcome to the Tourism Dashboard
          </h2>

          <p
            className="
              text-gray-600
              mt-2
            "
          >
            Authentication system is now
            working successfully.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage