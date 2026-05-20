import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

function AdminLoginPage() {
  const navigate = useNavigate()

  const [username, setUsername] =
    useState('')

  const [password, setPassword] =
    useState('')

  function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault()

    if (
      username === 'admin' &&
      password === 'admin123'
    ) {
      localStorage.setItem(
        'role',
        'admin'
      )

      toast.success(
        'Admin login successful.'
      )

      navigate('/analytics')

      return
    }

    toast.error(
      'Invalid admin credentials.'
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
          rounded-3xl
          p-10
          shadow-xl
          w-full
          max-w-md
        "
      >
        <div className="mb-8 text-center">
          <h1
            className="
              text-4xl
              font-bold
              text-gray-800
            "
          >
            Admin Portal
          </h1>

          <p
            className="
              text-gray-500
              mt-3
            "
          >
            Restricted platform
            management access.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Admin Username"
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

          <button
            type="submit"
            className="
              w-full
              bg-black
              text-white
              py-4
              rounded-2xl
              hover:bg-gray-900
              transition
            "
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLoginPage