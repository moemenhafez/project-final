export interface UserProfile {
  name: string

  bio: string

  avatar: string

  favoriteRegion: string
}

const PROFILE_KEY =
  'userProfile'

const defaultProfile: UserProfile =
  {
    name: 'Maya Khoury',

    bio: 'Passionate traveler exploring Lebanon.',

    avatar:
      'https://i.pravatar.cc/300',

    favoriteRegion:
      'Batroun',
  }

export function getProfile(): UserProfile {
  const storedProfile =
    localStorage.getItem(
      PROFILE_KEY
    )

  if (!storedProfile) {
    localStorage.setItem(
      PROFILE_KEY,
      JSON.stringify(
        defaultProfile
      )
    )

    return defaultProfile
  }

  return JSON.parse(
    storedProfile
  ) as UserProfile
}

export function saveProfile(
  profile: UserProfile
) {
  localStorage.setItem(
    PROFILE_KEY,
    JSON.stringify(profile)
  )
}