import MainLayout from '@/layouts/MainLayout'
import CommunityTripCard from '@/components/community/CommunityTripCard'

import { communityTripsData } from '@/data/communityTripsData'
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
<div
  className="
    grid
    grid-cols-1
    xl:grid-cols-2
    gap-8
    mt-10
  "
>
  {communityTripsData.map((trip) => (
    <CommunityTripCard
      key={trip.title}
      title={trip.title}
      organizer={trip.organizer}
      gatheringPoint={trip.gatheringPoint}
      date={trip.date}
      price={trip.price}
      seats={trip.seats}
      stops={trip.stops}
    />
  ))}
</div>
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