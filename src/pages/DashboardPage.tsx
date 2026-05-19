import MainLayout from '@/layouts/MainLayout'
import TripsTable from '@/components/dashboard/TripsTable'
function DashboardPage() {
  return (
    <MainLayout>
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        "
      >
        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-gray-600
            "
          >
            Total Trips
          </h2>

          <p
            className="
              text-4xl
              font-bold
              text-emerald-700
              mt-4
            "
          >
            128
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-gray-600
            "
          >
            Active Bookings
          </h2>

          <p
            className="
              text-4xl
              font-bold
              text-emerald-700
              mt-4
            "
          >
            342
          </p>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-gray-600
            "
          >
            Registered Users
          </h2>

          <p
            className="
              text-4xl
              font-bold
              text-emerald-700
              mt-4
            "
          >
            1,245
          </p>
        </div>
      </div>
      <TripsTable />
    </MainLayout>
  )
}

export default DashboardPage