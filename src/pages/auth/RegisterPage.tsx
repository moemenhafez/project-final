import { useState } from 'react'

import {
  useNavigate,
  Link,
} from 'react-router-dom'

import toast from 'react-hot-toast'

import {
  registerUser,
} from '@/utils/authStorage'

import type {
  UserRole,
} from '@/types/userRole'

function RegisterPage() {
  const navigate = useNavigate()

  const [name, setName] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [role, setRole] =
    useState<UserRole>(
      'traveler'
    )

  function handleRegister(
    event: React.FormEvent
  ) {
    event.preventDefault()

    registerUser({
      id: Date.now(),

      name,

      email,

      password,

      role,
    })

    toast.success(
      'Account created successfully.'
    )

    navigate('/login')
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
            Create Account
          </h1>

          <p
            className="
              text-gray-500
              mt-3
            "
          >
            Join Lebanon’s tourism
            marketplace platform.
          </p>
        </div>

        <form
          onSubmit={
            handleRegister
          }
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(event) =>
              setName(
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

          <select
            value={role}
            onChange={(event) =>
              setRole(
                event.target
                  .value as UserRole
              )
            }
            className="
              w-full
              p-4
              rounded-2xl
              bg-gray-100
              outline-none
            "
          >
            <option value="traveler">
              Traveler
            </option>

            <option value="business">
              Business
            </option>

            <option value="organizer">
              Organizer
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

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
            Register
          </button>
        </form>

        <p
          className="
            text-center
            text-gray-500
            mt-6
          "
        >
          Already have an account?
          {' '}

          <Link
            to="/login"
            className="
              text-emerald-700
              font-semibold
            "
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage