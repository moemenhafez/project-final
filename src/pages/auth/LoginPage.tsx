import { useState } from 'react'

import Notification from '@/components/feedback/Notification'

import Button from '@/components/ui/Button'

import Input from '@/components/ui/Input'

function LoginPage() {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const [loading, setLoading] =
    useState(false)

  const [showNotification, setShowNotification] =
    useState(false)

  function handleLogin() {
    if (!email || !password) {
      setError('Please fill all fields')

      return
    }

    setError('')

    setLoading(true)

    setTimeout(() => {
      console.log({
        email,
        password,
      })

      setLoading(false)

      setShowNotification(true)

      setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    }, 2000)
  }

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-emerald-100
        p-4
      "
    >
      <Notification
        message="Login successful"
        show={showNotification}
      />

      <div
        className="
          w-full
          max-w-md
          bg-white
          p-8
          rounded-2xl
          shadow-xl
          space-y-6
        "
      >
        <h1
          className="
            text-3xl
            font-bold
            text-center
            text-emerald-700
          "
        >
          Login Page
        </h1>

        {error && (
          <div
            className="
              bg-red-100
              text-red-600
              px-4
              py-3
              rounded-xl
              text-sm
            "
          >
            {error}
          </div>
        )}

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <Button
          title="Login"
          onClick={handleLogin}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default LoginPage