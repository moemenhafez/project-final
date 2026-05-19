import MainLayout from '@/layouts/MainLayout'
import { dashboardStats } from '@/data/dashboardStats'
import StatCard from '@/components/dashboard/StatCard'
import TripsTable from '@/components/dashboard/PlacesTable'
function DashboardPage() {
  return (
    <MainLayout>
   {dashboardStats.map((stat) => (
  <StatCard
    key={stat.title}
    title={stat.title}
    value={stat.value}
  />
))}
        
      <TripsTable />
    </MainLayout>
  )
}

export default DashboardPage