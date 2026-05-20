import {
  createBrowserRouter,
} from 'react-router-dom'
import CreateTripPage from '@/pages/CreateTripPage'
import LoginPage from '@/pages/auth/LoginPage'

import RegisterPage from '@/pages/auth/RegisterPage'

import DashboardPage from '@/pages/DashboardPage'

import CommunityTripsPage from '@/pages/CommunityTripsPage'

import ProtectedRoute from '@/routes/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
  path: '/create-trip',
  element: (
    <ProtectedRoute>
      <CreateTripPage />
    </ProtectedRoute>
  ),
},

  {
    path: '/register',
    element: <RegisterPage />,
  },

  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },

  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },

  {
    path: '/community-trips',
    element: (
      <ProtectedRoute>
        <CommunityTripsPage />
      </ProtectedRoute>
    ),
  },
])

export default router