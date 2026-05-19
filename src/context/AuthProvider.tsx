import {
 
  useState,
} from 'react'

import type { ReactNode } from 'react'

import {
  getToken,
  removeToken,
  saveToken,
} from '@/services/storageService'

import { AuthContext } from '@/context/AuthContext'

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({
  children,
}: AuthProviderProps) {
 const [token, setToken] =
  useState<string | null>(() =>
    getToken()
  )

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