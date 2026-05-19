import {
  createContext,
  useState,
  useEffect,
} from 'react'

import type { ReactNode } from 'react'

import {
  getToken,
  removeToken,
  saveToken,
} from '@/services/storageService'

interface AuthContextType {
  token: string | null

  login: (token: string) => void

  logout: () => void
}

export const AuthContext =
  createContext<AuthContextType | null>(
    null
  )

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({
  children,
}: AuthProviderProps) {
  const [token, setToken] =
    useState<string | null>(null)

  useEffect(() => {
    const savedToken = getToken()

    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  function login(token: string) {
    saveToken(token)

    setToken(token)
  }

  function logout() {
    removeToken()

    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider