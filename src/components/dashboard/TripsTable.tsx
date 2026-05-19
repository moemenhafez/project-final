import { useMemo } from 'react'

import {
  AgGridReact,
} from 'ag-grid-react'

import type {
  ColDef,
} from 'ag-grid-community'

import 'ag-grid-community/styles/ag-grid.css'

import 'ag-grid-community/styles/ag-theme-alpine.css'

function TripsTable() {
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
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  )
}

export default TripsTable