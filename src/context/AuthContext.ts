import {
  createContext,
} from 'react'

export interface AuthContextType {
  isAuthenticated: boolean

  role: 'user' | 'admin'

  login: (
    role: 'user' | 'admin'
  ) => void

  logout: () => void
}

export const AuthContext =
  createContext<
    AuthContextType | undefined
  >(undefined)