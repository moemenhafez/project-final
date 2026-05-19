import {
  Link,
  useLocation,
} from 'react-router-dom'

function Sidebar() {
  const location = useLocation()

  const links = [
    {
      title: 'Dashboard',
      path: '/dashboard',
    },
    {
      title: 'Trips',
      path: '/trips',
    },
    {
      title: 'Bookings',
      path: '/bookings',
    },
    {
      title: 'Profile',
      path: '/profile',
    },
  ]

  return (
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
          space-y-3
        "
      >
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`
              block
              rounded-xl
              px-4
              py-3
              transition
              ${
                location.pathname ===
                link.path
                  ? 'bg-white text-emerald-700'
                  : 'hover:bg-emerald-600'
              }
            `}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar