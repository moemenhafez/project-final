import type {
  ReactNode,
} from 'react'

import {
  Navigate,
} from 'react-router-dom'

interface AdminRouteProps {
  children: ReactNode
}

function AdminRoute({
  children,
}: AdminRouteProps) {
  const role =
    localStorage.getItem(
      'role'
    )

  if (role !== 'admin') {
    return (
      <Navigate
        to="/admin-login"
        replace
      />
    )
  }

  return children
}

export default AdminRoute