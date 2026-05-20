import type {
  ReactNode,
} from 'react'

import Sidebar from '@/components/layout/Sidebar'

import Topbar from '@/components/layout/Topbar'

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
        <Topbar />

        {children}
      </main>
    </div>
  )
}

export default MainLayout