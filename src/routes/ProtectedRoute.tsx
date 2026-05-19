import type { ReactNode } from 'react'

import {
  Navigate,
} from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

interface ProtectedRouteProps {
  children: ReactNode
}

function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const { token } = useAuth()

  if (!token) {
    return (
      <Navigate to="/login" />
    )
  }

  return children
}

export default ProtectedRoute