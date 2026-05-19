import { useMemo } from 'react'
import { placesData } from '@/data/placesData'
import {
  AgGridProvider,
  AgGridReact,
} from 'ag-grid-react'
import {
  AllCommunityModule,
} from 'ag-grid-community'
import type {
  ColDef,
} from 'ag-grid-community'

import 'ag-grid-community/styles/ag-grid.css'

import 'ag-grid-community/styles/ag-theme-alpine.css'

interface PlacesTableProps {
  places: typeof placesData
}

function PlacesTable({
  places,
}: PlacesTableProps) {
    const modules = [
  AllCommunityModule,
]
const rowData = places
  

  const columnDefs = useMemo<
    ColDef[]
  >(
    () => [
      {
        field: 'name',
      },
      {
        field: 'category',
      },
      {
        field: 'city',
      },
    ],
    []
  )

  return (
    <div
      className="
        ag-theme-alpine
        bg-white
        rounded-2xl
        shadow-md
        overflow-hidden
      "
      style={{
        height: 400,
        width: '100%',
      }}
    >
      <AgGridProvider
  modules={modules}
>
  <AgGridReact
  theme="legacy"
  rowData={rowData}
  columnDefs={columnDefs}
/>
</AgGridProvider>
    </div>
  )
}

export default PlacesTable