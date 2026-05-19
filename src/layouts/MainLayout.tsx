import type { ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
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
        min-h-screen
        bg-gray-100
      "
    >
      <div
        className="
          flex
        "
      >
        <Sidebar />

        <main
          className="
            flex-1
            p-6
          "
        >
          <div className="space-y-6">
  <Navbar />

  {children}
</div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout