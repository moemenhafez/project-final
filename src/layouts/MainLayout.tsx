import type {
  ReactNode,
} from 'react'

import Sidebar from '@/components/layout/Sidebar'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div
      className="
        bg-gray-100
        min-h-screen
      "
    >
      <Sidebar />

      <main
        className="
          ml-24
          p-8
        "
      >
        {children}
      </main>
    </div>
  )
}

export default MainLayout