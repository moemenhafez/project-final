import { useState } from 'react'

import Notification from '@/components/feedback/Notification'

import PasswordInput from '@/pages/auth/PasswordInput'

import Button from '@/components/ui/Button'

import Input from '@/components/ui/Input'

import AuthLayout from '@/layouts/AuthLayout'

function RegisterPage() {
  const [username, setUsername] =
    useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] =
    useState('')

  const [error, setError] = useState('')

  const [loading, setLoading] =
    useState(false)

  const [showNotification, setShowNotification] =
    useState(false)

  function handleRegister() {
    if (
      !username ||
      !email ||
      !password
    ) {
      setError('Please fill all fields')

      return
    }

    setError('')

    setLoading(true)

    setTimeout(() => {
      console.log({
        username,
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
    <>
      <Notification
        message="Registration successful"
        show={showNotification}
      />

      <AuthLayout title="Register">
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
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(
  event: React.ChangeEvent<HTMLInputElement>
) =>
  setUsername(event.target.value)
          }
        />

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(
  event: React.ChangeEvent<HTMLInputElement>
) =>
  setEmail(event.target.value)}
        />

        <PasswordInput
          value={password}
          onChange={(
  event: React.ChangeEvent<HTMLInputElement>
) =>
  setPassword(event.target.value)
          }
        />

        <Button
          title="Register"
          onClick={handleRegister}
          loading={loading}
        />
      </AuthLayout>
    </>
  )
}

export default RegisterPage