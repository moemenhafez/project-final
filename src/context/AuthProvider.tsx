import {
  useState,
} from 'react'

import type {
  ReactNode,
} from 'react'

import {
  AuthContext,
} from './AuthContext'

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({
  children,
}: AuthProviderProps) {
  const [
    isAuthenticated,
    setIsAuthenticated,
  ] = useState(
    localStorage.getItem(
      'isAuthenticated'
    ) === 'true'
  )

  const [role, setRole] =
    useState<'user' | 'admin'>(
      (
        localStorage.getItem(
          'role'
        ) as
          | 'user'
          | 'admin'
      ) || 'user'
    )

  function login(
    newRole:
      | 'user'
      | 'admin'
  ) {
    localStorage.setItem(
      'isAuthenticated',
      'true'
    )

    localStorage.setItem(
      'role',
      newRole
    )

    setRole(newRole)

    setIsAuthenticated(true)
  }

  function logout() {
    localStorage.removeItem(
      'isAuthenticated'
    )

    localStorage.removeItem(
      'role'
    )

    setIsAuthenticated(false)

    setRole('user')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider