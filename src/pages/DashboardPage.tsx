import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

import { dashboardStats } from '@/data/dashboardStats'

import { placesData } from '@/data/placesData'

import StatCard from '@/components/dashboard/StatCard'

import CategoryFilter from '@/components/dashboard/CategoryFilter'

import PlacesTable from '@/components/dashboard/PlacesTable'

function DashboardPage() {
  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState('All')

  const filteredPlaces =
    selectedCategory === 'All'
      ? placesData
      : placesData.filter(
          (place) =>
            place.category ===
            selectedCategory
        )

  return (
    <MainLayout>
      <CategoryFilter
        selectedCategory={
          selectedCategory
        }
        onSelectCategory={
          setSelectedCategory
        }
      />

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        "
      >
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      <PlacesTable
        places={filteredPlaces}
      />
    </MainLayout>
  )
}

export default DashboardPage