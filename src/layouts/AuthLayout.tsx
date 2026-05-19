import type { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode

  title: string
}

function AuthLayout({
  children,
  title,
}: AuthLayoutProps) {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-emerald-100
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          bg-white
          p-8
          rounded-2xl
          shadow-xl
          space-y-6
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-center
            text-emerald-700
          "
        >
          {title}
        </h1>

        {children}
      </div>
    </div>
  )
}

export default AuthLayout