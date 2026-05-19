import PlaceCard from '@/components/places/PlaceCard'

import { placesData } from '@/data/placesData'

interface PlacesGridProps {
  places: typeof placesData
}

function PlacesGrid({
  places,
}: PlacesGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
    >
      {places.map((place) => (
        <PlaceCard
          key={place.name}
          name={place.name}
          category={place.category}
          city={place.city}
          rating={place.rating}
          timeAway={place.timeAway}
          image={place.image}
        />
      ))}
    </div>
  )
}

export default PlacesGrid