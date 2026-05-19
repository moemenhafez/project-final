import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

import Notification from '@/components/feedback/Notification'

import Button from '@/components/ui/Button'

import Input from '@/components/ui/Input'

import AuthLayout from '@/layouts/AuthLayout'

import { loginUser } from '@/api/auth'

function LoginPage() {
  const navigate = useNavigate()

const { login } = useAuth()
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const [loading, setLoading] =
    useState(false)

  const [showNotification, setShowNotification] =
    useState(false)

  async function handleLogin() {
  if (!email || !password) {
    setError('Please fill all fields')

    return
  }

  try {
    setError('')

    setLoading(true)

    const response = await loginUser({
      username: email,
      password,
    })

   login(response.accessToken)

navigate('/dashboard')

    setShowNotification(true)

    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  } catch {
    setError('Invalid credentials')
  } finally {
    setLoading(false)
  }
}

  return (
    <>
      <Notification
        message="Login successful"
        show={showNotification}
      />

      <AuthLayout title="Login">
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
      </AuthLayout>
    </>
  )
}

export default LoginPage