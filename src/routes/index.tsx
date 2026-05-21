import {
  createBrowserRouter,
} from 'react-router-dom'

import DashboardPage from '@/pages/DashboardPage'

import FavoritesPage from '@/pages/FavoritesPage'

import SavedPlacesPage from '@/pages/SavedPlacesPage'

import TripPlannerPage from '@/pages/TripPlannerPage'

import ProfilePage from '@/pages/ProfilePage'

import SettingsPage from '@/pages/SettingsPage'

import AnalyticsPage from '@/pages/AnalyticsPage'

import AdminPlacesPage from '@/pages/AdminPlacesPage'

import LoginPage from '@/pages/auth/LoginPage'

import RegisterPage from '@/pages/auth/RegisterPage'

import ProtectedRoute from './ProtectedRoute'

const router =
  createBrowserRouter([
    {
      path: '/',

      element: <LoginPage />,
    },

    {
      path: '/login',

      element: <LoginPage />,
    },

    {
      path: '/register',

      element: <RegisterPage />,
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
      path: '/favorites',

      element: (
        <ProtectedRoute>
          <FavoritesPage />
        </ProtectedRoute>
      ),
    },

    {
      path:
        '/saved-places',

      element: (
        <ProtectedRoute>
          <SavedPlacesPage />
        </ProtectedRoute>
      ),
    },

    {
      path:
        '/trip-planner',

      element: (
        <ProtectedRoute>
          <TripPlannerPage />
        </ProtectedRoute>
      ),
    },

    {
      path: '/profile',

      element: (
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      ),
    },

    {
      path: '/settings',

      element: (
        <ProtectedRoute>
          <SettingsPage />
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
      path:
        '/admin-places',

      element: (
        <ProtectedRoute>
          <AdminPlacesPage />
        </ProtectedRoute>
      ),
    },
  ])

export default router