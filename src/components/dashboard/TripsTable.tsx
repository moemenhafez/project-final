import { useMemo } from 'react'

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

function TripsTable() {
    const modules = [
  AllCommunityModule,
]
  const rowData = [
    {
      destination: 'Paris',
      tourists: 120,
      status: 'Active',
    },
    {
      destination: 'Dubai',
      tourists: 95,
      status: 'Active',
    },
    {
      destination: 'Istanbul',
      tourists: 80,
      status: 'Pending',
    },
    {
      destination: 'Rome',
      tourists: 60,
      status: 'Completed',
    },
  ]

  const columnDefs = useMemo<
    ColDef[]
  >(
    () => [
      {
        field: 'destination',
      },
      {
        field: 'tourists',
      },
      {
        field: 'status',
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

export default TripsTable