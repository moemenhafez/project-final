export interface AppNotification {
  id: number

  title: string

  message: string

  createdAt: string
}

const STORAGE_KEY =
  'notifications'

export function getNotifications(): AppNotification[] {
  const data =
    localStorage.getItem(
      STORAGE_KEY
    )

  return data
    ? JSON.parse(data)
    : []
}

export function addNotification(
  notification: AppNotification
) {
  const notifications =
    getNotifications()

  const updated = [
    notification,
    ...notifications,
  ]

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  )

  window.dispatchEvent(
    new Event(
      'notificationsUpdated'
    )
  )
}