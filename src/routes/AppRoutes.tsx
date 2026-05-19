import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import HomePage from '@/pages/HomePage'

import LoginPage from '@/pages/auth/LoginPage'

import RegisterPage from '@/pages/auth/RegisterPage'

import ProtectedRoute from '@/routes/ProtectedRoute'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <h1>Dashboard Page</h1>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes