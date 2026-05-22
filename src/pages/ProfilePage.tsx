import Sidebar from '@/components/layout/Sidebar'

function ProfilePage() {
  const currentUser =
    localStorage.getItem(
      'currentUser'
    )

  const user =
    currentUser
      ? JSON.parse(
          currentUser
        )
      : null

  const role =
    localStorage.getItem(
      'role'
    )

  function logout() {
    localStorage.removeItem(
      'isAuthenticated'
    )

    localStorage.removeItem(
      'role'
    )

    localStorage.removeItem(
      'currentUser'
    )

    window.location.href =
      '/'
  }

  return (
    <div
      className="
        min-h-screen
        bg-[#f5f7f4]
        flex
      "
    >
      {/* SIDEBAR */}

      <Sidebar />

      {/* MAIN */}

      <main
        className="
          flex-1
          ml-[190px]
          xl:ml-[300px]
          p-6
          md:p-8
        "
      >
        {/* HERO */}

        <section
          className="
            bg-white
            rounded-[32px]
            p-6
            md:p-8
            shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >
          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-8
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                items-center
                gap-6
              "
            >
              {/* AVATAR */}

              <div
                className="
                  w-28
                  h-28
                  rounded-full
                  bg-gradient-to-br
                  from-emerald-700
                  to-emerald-500
                  flex
                  items-center
                  justify-center
                  text-5xl
                  text-white
                  shadow-lg
                "
              >
                👤
              </div>

              {/* INFO */}

              <div>
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-emerald-50
                    text-emerald-700
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                    mb-4
                  "
                >
                  ✨ Active Account
                </div>

                <h1
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-gray-900
                  "
                >
                  {user?.name ||
                    'Guest'}
                </h1>

                <p
                  className="
                    text-lg
                    text-gray-500
                    mt-3
                    capitalize
                  "
                >
                  {role} account
                </p>
              </div>
            </div>

            {/* LOGOUT */}

            <button
              onClick={logout}
              className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-8
                py-4
                rounded-2xl
                font-bold
                transition-all
                duration-300
                shadow-lg
              "
            >
              Logout
            </button>
          </div>
        </section>

        {/* PROFILE GRID */}

        <section
          className="
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
            mt-8
          "
        >
          {/* MAIN CARD */}

          <div
            className="
              xl:col-span-2
              bg-white
              rounded-[32px]
              p-6
              md:p-8
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2
              className="
                text-3xl
                font-black
                text-gray-900
              "
            >
              Personal Information
            </h2>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
                mt-8
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    text-gray-500
                    mb-3
                  "
                >
                  Full Name
                </p>

                <div
                  className="
                    bg-[#f5f7f4]
                    rounded-2xl
                    px-5
                    py-4
                    font-semibold
                  "
                >
                  {user?.name ||
                    'Unknown User'}
                </div>
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-gray-500
                    mb-3
                  "
                >
                  Role
                </p>

                <div
                  className="
                    bg-[#f5f7f4]
                    rounded-2xl
                    px-5
                    py-4
                    font-semibold
                    capitalize
                  "
                >
                  {role}
                </div>
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-gray-500
                    mb-3
                  "
                >
                  Email
                </p>

                <div
                  className="
                    bg-[#f5f7f4]
                    rounded-2xl
                    px-5
                    py-4
                    font-semibold
                  "
                >
                  {user?.email ||
                    'No email'}
                </div>
              </div>

              <div>
                <p
                  className="
                    text-sm
                    text-gray-500
                    mb-3
                  "
                >
                  Status
                </p>

                <div
                  className="
                    bg-[#f5f7f4]
                    rounded-2xl
                    px-5
                    py-4
                    font-semibold
                    text-emerald-700
                  "
                >
                  Active
                </div>
              </div>
            </div>
          </div>

          {/* SIDE CARD */}

          <div
            className="
              bg-white
              rounded-[32px]
              p-6
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2
              className="
                text-2xl
                font-black
              "
            >
              Account Stats
            </h2>

            <div
              className="
                space-y-5
                mt-8
              "
            >
              <div
                className="
                  bg-[#f5f7f4]
                  rounded-[24px]
                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  Saved Places
                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-3
                  "
                >
                  12
                </h3>
              </div>

              <div
                className="
                  bg-[#f5f7f4]
                  rounded-[24px]
                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  Trips Planned
                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-3
                  "
                >
                  4
                </h3>
              </div>

              <div
                className="
                  bg-[#f5f7f4]
                  rounded-[24px]
                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  Account Type
                </p>

                <h3
                  className="
                    text-3xl
                    font-black
                    mt-3
                    capitalize
                  "
                >
                  {role}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProfilePage