import {
  Link,
  useLocation,
} from 'react-router-dom'

const navigationItems = [
  {
    title: 'DISCOVER',
    items: [
      {
        label: 'Explore',
        path: '/dashboard',
      },
      {
        label: 'Trip Organizer',
        path: '/organizer',
      },
      {
        label: 'Saved Plans',
        path: '/saved-plans',
      },
      {
        label: 'Favorites',
        path: '/favorites',
      },
    ],
  },
  {
    title: 'MANAGEMENT',
    items: [
      {
        label: 'Add Place',
        path: '/add-place',
      },
      {
        label: 'Featured Places',
        path: '/featured-places',
      },
      {
        label: 'Local Ads',
        path: '/local-ads',
      },
    ],
  },
]

function Sidebar() {
  const location = useLocation()

  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-white
        border-r
        border-gray-100
        px-5
        py-8
        hidden
        md:block
      "
    >
      <div className="mb-10">
        <h1
          className="
            text-3xl
            font-bold
            text-gray-800
          "
        >
          LebGuide
        </h1>

        <p
          className="
            text-sm
            text-gray-500
            mt-2
          "
        >
          Explore Lebanon differently
        </p>
      </div>

      <div className="space-y-10">
        {navigationItems.map(
          (section) => (
            <div key={section.title}>
              <h2
                className="
                  text-xs
                  font-bold
                  tracking-widest
                  text-gray-400
                  mb-4
                "
              >
                {section.title}
              </h2>

              <div className="space-y-2">
                {section.items.map(
                  (item) => {
                    const isActive =
                      location.pathname ===
                      item.path

                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        className={`
                          flex
                          items-center
                          px-4
                          py-3
                          rounded-2xl
                          transition
                          ${
                            isActive
                              ? 'bg-emerald-700 text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    )
                  }
                )}
              </div>
            </div>
          )
        )}
      </div>
    </aside>
  )
}

export default Sidebar