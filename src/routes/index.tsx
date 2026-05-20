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

import TripBudgetPage from '@/pages/TripBudgetPage'

import TravelTimePage from '@/pages/TravelTimePage'

import AdminPlacesPage from '@/pages/AdminPlacesPage'

import ProtectedRoute from './ProtectedRoute'
import ProfilePage from '@/pages/ProfilePage'

import SettingsPage from '@/pages/SettingsPage'

import AdminLoginPage from '@/pages/AdminLoginPage'

import AdminRoute from './AdminRoute'

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

  {
    path: '/trip-budget',
    element: (
      <ProtectedRoute>
        <TripBudgetPage />
      </ProtectedRoute>
    ),
  },

  {
    path: '/travel-time',
    element: (
      <ProtectedRoute>
        <TravelTimePage />
      </ProtectedRoute>
    ),
  },

  {
    path: '/admin-places',
    element: (
      <ProtectedRoute>
        <AdminPlacesPage />
      </ProtectedRoute>
    ),
  },
  {
  path: '/profile',
  element: <ProfilePage />,
},

{
  path: '/settings',
  element: <SettingsPage />,
},
{
  path: '/analytics',

  element: (
    <AdminRoute>
      <AnalyticsPage />
    </AdminRoute>
  ),
},
{
  path: '/admin-login',
  element: <AdminLoginPage />,
}
])

export default router