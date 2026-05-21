import { useState } from 'react'

import {
  useNavigate,
  Link,
} from 'react-router-dom'

import toast from 'react-hot-toast'

import {
  loginUser,
} from '@/utils/authStorage'

function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault()

    const user = loginUser(
      email,
      password
    )

    if (!user) {
      toast.error(
        'Invalid credentials.'
      )

      return
    }

    toast.success(
      `Welcome back ${user.name}`
    )

    navigate('/dashboard')
  }

  return (
    <div
      className="
        min-h-screen
        bg-gray-100
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          bg-white
          rounded-3xl
          p-10
          shadow-xl
          w-full
          max-w-lg
        "
      >
        <div className="mb-8">
          <h1
            className="
              text-4xl
              font-bold
              text-gray-800
            "
          >
            Login
          </h1>

          <p
            className="
              text-gray-500
              mt-3
            "
          >
            Continue exploring
            Lebanon smarter.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) =>
              setEmail(
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

        <p
          className="
            text-center
            text-gray-500
            mt-6
          "
        >
          Don’t have an account?
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
        </p>
      </div>
    </div>
  )
}

export default LoginPage