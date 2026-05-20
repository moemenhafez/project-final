import MainLayout from '@/layouts/MainLayout'

function ProfilePage() {
  return (
    <MainLayout>
      <div
        className="
          bg-white
          rounded-3xl
          p-10
          shadow-sm
          max-w-4xl
        "
      >
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-8
          "
        >
          <img
            src="https://i.pravatar.cc/300"
            alt="Profile"
            className="
              w-36
              h-36
              rounded-full
              object-cover
            "
          />

          <div>
            <h1
              className="
                text-4xl
                font-bold
                text-gray-800
              "
            >
              Maya Khoury
            </h1>

            <p
              className="
                text-gray-500
                mt-2
              "
            >
              Passionate traveler exploring
              Lebanon’s hidden gems.
            </p>

            <div
              className="
                flex
                gap-4
                mt-6
                flex-wrap
              "
            >
              <div
                className="
                  bg-gray-100
                  px-4
                  py-2
                  rounded-full
                "
              >
                📍 Beirut
              </div>

              <div
                className="
                  bg-gray-100
                  px-4
                  py-2
                  rounded-full
                "
              >
                ✈️ 18 Trips
              </div>

              <div
                className="
                  bg-gray-100
                  px-4
                  py-2
                  rounded-full
                "
              >
                ❤️ 42 Saved Places
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProfilePage