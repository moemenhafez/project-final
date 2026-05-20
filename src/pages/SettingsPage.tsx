import MainLayout from '@/layouts/MainLayout'

function SettingsPage() {
  return (
    <MainLayout>
      <div
        className="
          bg-white
          rounded-3xl
          p-10
          shadow-sm
          max-w-4xl
          space-y-8
        "
      >
        <div>
          <h1
            className="
              text-4xl
              font-bold
              text-gray-800
            "
          >
            Settings
          </h1>

          <p
            className="
              text-gray-500
              mt-2
            "
          >
            Manage your preferences and
            account settings.
          </p>
        </div>

        <div className="space-y-6">
          <div
            className="
              flex
              items-center
              justify-between
              bg-gray-100
              p-5
              rounded-2xl
            "
          >
            <div>
              <h2 className="font-semibold">
                Dark Mode
              </h2>

              <p className="text-sm text-gray-500">
                Enable dark appearance.
              </p>
            </div>

            <input type="checkbox" />
          </div>

          <div
            className="
              flex
              items-center
              justify-between
              bg-gray-100
              p-5
              rounded-2xl
            "
          >
            <div>
              <h2 className="font-semibold">
                Email Notifications
              </h2>

              <p className="text-sm text-gray-500">
                Receive trip updates.
              </p>
            </div>

            <input type="checkbox" checked />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default SettingsPage