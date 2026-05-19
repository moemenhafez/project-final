import MainLayout from '@/layouts/MainLayout'
import StatCard from '@/components/dashboard/StatCard'
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
  <StatCard
    title="Total Trips"
    value="128"
  />

  <StatCard
    title="Active Bookings"
    value="342"
  />

  <StatCard
    title="Registered Users"
    value="1,245"
  />
</div>
        
      <TripsTable />
    </MainLayout>
  )
}

export default DashboardPage