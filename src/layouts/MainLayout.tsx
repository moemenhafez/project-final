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
        min-h-screen
        bg-[#f5f7f4]
      "
    >
      {/* SIDEBAR */}

      <Sidebar />

      {/* PAGE */}

      <main
        className="
          transition-all
          duration-300

          pl-0
          md:pl-[100px]
          xl:pl-[320px]

          pr-0
          md:pr-6
          xl:pr-10

          pt-[90px]
          md:pt-6

          pb-6
        "
      >
        <div
          className="
            px-4
            sm:px-5
            md:px-0
          "
        >
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout