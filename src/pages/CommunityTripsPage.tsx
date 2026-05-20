import MainLayout from '@/layouts/MainLayout'

function CommunityTripsPage() {
  return (
    <MainLayout>
      <div className="space-y-3">
        <h1
          className="
            text-4xl
            font-bold
            text-gray-800
          "
        >
          Community Trips
        </h1>

        <p
          className="
            text-gray-500
            text-lg
          "
        >
          Join organized outings and
          discover Lebanon together.
        </p>
      </div>
    </MainLayout>
  )
}

export default CommunityTripsPage