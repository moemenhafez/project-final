import { useState } from 'react'

import MainLayout from '@/layouts/MainLayout'



import { placesData } from '@/data/placesData'




import CategoryFilter from '@/components/dashboard/CategoryFilter'

import PlacesGrid from '@/components/places/PlacesGrid'
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

     
<PlacesGrid
  places={filteredPlaces}
/>
      
    </MainLayout>
  )
}

export default DashboardPage