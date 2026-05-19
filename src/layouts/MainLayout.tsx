import {
  useState,
} from 'react'

import type { ReactNode } from 'react'

import Navbar from '@/components/layout/Navbar'

import Sidebar from '@/components/layout/Sidebar'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({
  children,
}: MainLayoutProps) {
  const [
    isSidebarOpen,
    setIsSidebarOpen,
  ] = useState(false)

  return (
    <div
      className="
        min-h-screen
        bg-gray-100
      "
    >
      <div className="flex">
        {(isSidebarOpen ||
          window.innerWidth >= 768) && (
          <Sidebar />
        )}

        <main
          className="
            flex-1
            p-6
          "
        >
          <div className="space-y-6">
            <div
              className="
                flex
                items-center
                justify-between
                md:hidden
              "
            >
              <button
                onClick={() =>
                  setIsSidebarOpen(
                    !isSidebarOpen
                  )
                }
                className="
                  bg-emerald-700
                  text-white
                  px-4
                  py-2
                  rounded-xl
                "
              >
                Menu
              </button>

              <h1
                className="
                  text-xl
                  font-bold
                  text-emerald-700
                "
              >
                Tourism App
              </h1>
            </div>

            <Navbar />

            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout