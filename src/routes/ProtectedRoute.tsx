import type {
  ReactNode,
} from 'react'

import {
  Navigate,
} from 'react-router-dom'

import {
  getCurrentUser,
} from '@/utils/authStorage'

interface ProtectedRouteProps {
  children: ReactNode
}

function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const currentUser =
    getCurrentUser()

  if (!currentUser) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
  }

  return children
}

export default ProtectedRoute