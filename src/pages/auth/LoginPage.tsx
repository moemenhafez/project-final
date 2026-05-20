import { useState } from 'react'

import {
  Link,
  useNavigate,
} from 'react-router-dom'

import {
  useAuth,
} from '@/hooks/useAuth'

function LoginPage() {
  const [username, setUsername] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [isAdmin, setIsAdmin] =
    useState(false)

  const navigate = useNavigate()

  const { login } = useAuth()

  function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault()

    if (
      isAdmin &&
      username === 'admin' &&
      password === 'admin123'
    ) {
      login('admin')

      navigate('/dashboard')

      return
    }

    if (
      username === 'emilys' &&
      password === 'emilyspass'
    ) {
      login('user')

      navigate('/dashboard')

      return
    }

    alert(
      'Invalid credentials'
    )
  }

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
        p-6
      "
    >
      <div
        className="
          bg-white
          p-10
          rounded-3xl
          shadow-sm
          w-full
          max-w-md
        "
      >
        <h1
          className="
            text-4xl
            font-bold
            text-center
            text-gray-800
          "
        >
          Welcome Back
        </h1>

        <p
          className="
            text-gray-500
            text-center
            mt-3
          "
        >
          Login to continue exploring
          Lebanon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-8"
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) =>
              setUsername(
                event.target.value
              )
            }
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(
                event.target.value
              )
            }
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          />

          <label
            className="
              flex
              items-center
              gap-3
            "
          >
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(event) =>
                setIsAdmin(
                  event.target.checked
                )
              }
            />

            <span>
              Login as Admin
            </span>
          </label>

          <button
            type="submit"
            className="
              w-full
              bg-emerald-700
              text-white
              py-4
              rounded-2xl
              hover:bg-emerald-800
              transition
            "
          >
            Login
          </button>
        </form>

        <div
          className="
            mt-6
            text-center
            text-sm
            text-gray-500
          "
        >
          Don&apos;t have an
          account?
          {' '}
          <Link
            to="/register"
            className="
              text-emerald-700
              font-semibold
            "
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage