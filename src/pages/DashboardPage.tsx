import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'

import { dashboardStats } from '@/data/dashboardStats'

import { placesData } from '@/data/placesData'


import StatCard from '@/components/dashboard/StatCard'

import CategoryFilter from '@/components/dashboard/CategoryFilter'

import PlacesTable from '@/components/dashboard/PlacesTable'
import SearchBar from '@/components/dashboard/SearchBar'

function DashboardPage() {
    const [searchValue, setSearchValue] =
  useState('')
  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState('All')

  const filteredPlaces =
  placesData.filter((place) => {
    const matchesCategory =
      selectedCategory === 'All'
        ? true
        : place.category ===
          selectedCategory

    const matchesSearch =
      place.name
        .toLowerCase()
        .includes(
          searchValue.toLowerCase()
        )

    return (
      matchesCategory &&
      matchesSearch
    )
  })

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

      <SearchBar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
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