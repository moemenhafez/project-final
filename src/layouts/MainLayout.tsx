import type { ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'

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
        <aside
          className="
            hidden
            md:flex
            w-64
            min-h-screen
            bg-emerald-700
            text-white
            p-6
            flex-col
          "
        >
          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Tourism App
          </h2>

          <nav
            className="
              mt-10
              space-y-4
            "
          >
            <p>Dashboard</p>

            <p>Trips</p>

            <p>Bookings</p>

            <p>Profile</p>
          </nav>
        </aside>

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