import { useState } from 'react'

import {
  useNavigate,
} from 'react-router-dom'

import toast from 'react-hot-toast'

import {
  motion,
} from 'framer-motion'

function LoginPage() {
  const navigate =
    useNavigate()

  const [email, setEmail] =
    useState('')

  const [
    password,
    setPassword,
  ] = useState('')

  const [
    role,
    setRole,
  ] = useState<
    'user' | 'admin'
  >('user')

  function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault()

    /* ADMIN LOGIN */

    if (role === 'admin') {
      if (
        email ===
          'admin@tourism.com' &&
        password ===
          'admin123'
      ) {
        localStorage.setItem(
          'role',
          'admin'
        )

        toast.success(
          'Administrator login successful.'
        )

        navigate(
          '/admin-places'
        )

        return
      }

      toast.error(
        'Invalid administrator credentials.'
      )

      return
    }

    /* USER LOGIN */

    localStorage.setItem(
      'role',
      'user'
    )

    toast.success(
      'Login successful.'
    )

    navigate('/dashboard')
  }

  return (
    <div
      className="
        min-h-screen

        bg-[#f5f7f4]

        flex
        items-center
        justify-center

        p-5
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          bg-white

          w-full
          max-w-[520px]

          rounded-[36px]

          p-7
          md:p-10

          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        "
      >
        {/* TOP */}

        <div className="text-center">
          <div className="text-6xl">
            🌍
          </div>

          <h1
            className="
              text-4xl
              font-black

              mt-5
            "
          >
            Welcome Back
          </h1>

          <p
            className="
              text-gray-500

              mt-3
            "
          >
            Login to continue your
            tourism experience.
          </p>
        </div>

        {/* ROLE */}

        <div
          className="
            mt-8

            grid
            grid-cols-2

            gap-3
          "
        >
          <button
            type="button"
            onClick={() =>
              setRole('user')
            }
            className={`
              py-4

              rounded-2xl

              font-semibold

              transition

              ${
                role === 'user'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#f5f7f4]'
              }
            `}
          >
            User Login
          </button>

          <button
            type="button"
            onClick={() =>
              setRole('admin')
            }
            className={`
              py-4

              rounded-2xl

              font-semibold

              transition

              ${
                role === 'admin'
                  ? 'bg-black text-white'
                  : 'bg-[#f5f7f4]'
              }
            `}
          >
            Administrator
          </button>
        </div>

        {/* FORM */}

        <form
          onSubmit={
            handleLogin
          }
          className="
            mt-8

            space-y-5
          "
        >
          {/* EMAIL */}

          <div>
            <label
              className="
                text-sm
                font-semibold
              "
            >
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="Enter your email"
              className="
                w-full

                bg-[#f5f7f4]

                mt-2

                p-4

                rounded-2xl

                outline-none
              "
            />
          </div>

          {/* PASSWORD */}

          <div>
            <label
              className="
                text-sm
                font-semibold
              "
            >
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              placeholder="Enter your password"
              className="
                w-full

                bg-[#f5f7f4]

                mt-2

                p-4

                rounded-2xl

                outline-none
              "
            />
          </div>

          {/* ADMIN INFO */}

          {role === 'admin' && (
            <div
              className="
                bg-[#f5f7f4]

                rounded-2xl

                p-4

                text-sm

                text-gray-600
              "
            >
              <p>
                Admin Email:
              </p>

              <p className="font-bold">
                admin@tourism.com
              </p>

              <p className="mt-3">
                Admin Password:
              </p>

              <p className="font-bold">
                admin123
              </p>
            </div>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            className={`
              w-full

              py-4

              rounded-2xl

              text-white

              font-bold

              transition

              ${
                role === 'admin'
                  ? 'bg-black hover:bg-gray-900'
                  : 'bg-emerald-700 hover:bg-emerald-800'
              }
            `}
          >
            {role === 'admin'
              ? 'Login As Administrator'
              : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default LoginPage