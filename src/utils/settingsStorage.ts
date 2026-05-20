export interface UserSettings {
  darkMode: boolean

  notifications: boolean
}

const SETTINGS_KEY =
  'userSettings'

const defaultSettings: UserSettings =
  {
    darkMode: false,

    notifications: true,
  }

export function getSettings(): UserSettings {
  const storedSettings =
    localStorage.getItem(
      SETTINGS_KEY
    )

  if (!storedSettings) {
    localStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify(
        defaultSettings
      )
    )

    return defaultSettings
  }

  return JSON.parse(
    storedSettings
  ) as UserSettings
}

export function saveSettings(
  settings: UserSettings
) {
  localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify(
      settings
    )
  )
}