import {
  createBrowserRouter,
} from 'react-router-dom'

import LoginPage from '@/pages/auth/LoginPage'

import RegisterPage from '@/pages/auth/RegisterPage'

import DashboardPage from '@/pages/DashboardPage'

import CommunityTripsPage from '@/pages/CommunityTripsPage'

import CreateTripPage from '@/pages/CreateTripPage'

import SavedPlansPage from '@/pages/SavedPlansPage'

import AnalyticsPage from '@/pages/AnalyticsPage'

import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
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

  {
    path: '/create-trip',
    element: (
      <ProtectedRoute>
        <CreateTripPage />
      </ProtectedRoute>
    ),
  },

  {
    path: '/saved-plans',
    element: (
      <ProtectedRoute>
        <SavedPlansPage />
      </ProtectedRoute>
    ),
  },

  {
    path: '/analytics',
    element: (
      <ProtectedRoute>
        <AnalyticsPage />
      </ProtectedRoute>
    ),
  },
])

export default router