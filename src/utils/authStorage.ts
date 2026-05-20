import type {
  UserRole,
} from '@/types/userRole'

const ROLE_KEY = 'role'

export function setRole(
  role: UserRole
) {
  localStorage.setItem(
    ROLE_KEY,
    role
  )
}

export function getRole(): UserRole {
  return (
    (localStorage.getItem(
      ROLE_KEY
    ) as UserRole) ||
    'traveler'
  )
}

export function logout() {
  localStorage.removeItem(
    ROLE_KEY
  )
}