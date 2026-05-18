interface NotificationProps {
  message: string

  show: boolean
}

function Notification({
  message,
  show,
}: NotificationProps) {
  if (!show) {
    return null
  }

  return (
    <div
      className="
        fixed
        top-5
        right-5
        bg-emerald-600
        text-white
        px-6
        py-4
        rounded-xl
        shadow-2xl
        z-50
      "
    >
      {message}
    </div>
  )
}

export default Notification