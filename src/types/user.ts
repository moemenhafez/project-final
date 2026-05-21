import type {
  UserRole,
} from './userRole'

export interface User {
  id: number

  name: string

  email: string

  password: string

  role: UserRole
}