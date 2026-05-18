import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import LoginPage from '../pages/auth/LoginPage'

import RegisterPage from '../pages/auth/RegisterPage'

import HomePage from '../pages/HomePage'

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
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes