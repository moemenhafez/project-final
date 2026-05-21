import type {
  User,
} from '@/types/user'

import type {
  UserRole,
} from '@/types/userRole'

const USERS_KEY = 'users'

const CURRENT_USER_KEY =
  'currentUser'

export function getUsers(): User[] {
  const storedUsers =
    localStorage.getItem(
      USERS_KEY
    )

  if (!storedUsers) {
    return []
  }

  return JSON.parse(
    storedUsers
  ) as User[]
}

export function registerUser(
  user: User
) {
  const users = getUsers()

  const updatedUsers = [
    ...users,
    user,
  ]

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(
      updatedUsers
    )
  )
}

export function loginUser(
  email: string,
  password: string
) {
  const users = getUsers()

  const foundUser = users.find(
    (user) =>
      user.email === email &&
      user.password ===
        password
  )

  if (!foundUser) {
    return null
  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(foundUser)
  )

  return foundUser
}

export function getCurrentUser() {
  const currentUser =
    localStorage.getItem(
      CURRENT_USER_KEY
    )

  if (!currentUser) {
    return null
  }

  return JSON.parse(
    currentUser
  ) as User
}

export function logoutUser() {
  localStorage.removeItem(
    CURRENT_USER_KEY
  )
}

export function getCurrentRole(): UserRole {
  const currentUser =
    getCurrentUser()

  return (
    currentUser?.role ||
    'traveler'
  )
}