import {
  createContext,
  useState,
} from 'react'

import type {
  ReactNode,
} from 'react'

interface AuthContextType {
  isAuthenticated: boolean

  login: () => void

  logout: () => void
}

export const AuthContext =
  createContext<
    AuthContextType | undefined
  >(undefined)

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

  function login() {
    localStorage.setItem(
      'isAuthenticated',
      'true'
    )

    setIsAuthenticated(true)
  }

  function logout() {
    localStorage.removeItem(
      'isAuthenticated'
    )

    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider