import {
  useEffect,
  useState,
} from 'react'

import {
  motion,
} from 'framer-motion'

import {
  useNavigate,
} from 'react-router-dom'

import toast from 'react-hot-toast'

interface UserAccount {
  id: number

  name: string

  email: string

  password: string

  role: 'user' | 'admin'
}

const STORAGE_LOCK_KEY =
  'auth_lock_until'

const STORAGE_ATTEMPTS_KEY =
  'auth_attempts'

function LoginPage() {
  const navigate =
    useNavigate()

  /* MODE */

  const [
    isRegister,
    setIsRegister,
  ] = useState(false)

  /* FORM */

  const [name, setName] =
    useState('')

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

  /* SECURITY */

  const [
    failedAttempts,
    setFailedAttempts,
  ] = useState<number>(() => {
    return Number(
      localStorage.getItem(
        STORAGE_ATTEMPTS_KEY
      ) || 0
    )
  })

  const [
    lockedUntil,
    setLockedUntil,
  ] = useState<number | null>(
    () => {
      const value =
        localStorage.getItem(
          STORAGE_LOCK_KEY
        )

      return value
        ? Number(value)
        : null
    }
  )

  const [
    remainingTime,
    setRemainingTime,
  ] = useState(0)

  /* TIMER */

  useEffect(() => {
    const interval =
      setInterval(() => {
        if (
          lockedUntil &&
          Date.now() <
            lockedUntil
        ) {
          const seconds =
            Math.ceil(
              (lockedUntil -
                Date.now()) /
                1000
            )

          setRemainingTime(
            seconds
          )
        } else {
          setRemainingTime(0)
        }
      }, 1000)

    return () =>
      clearInterval(
        interval
      )
  }, [lockedUntil])

  /* USERS */

  function getUsers(): UserAccount[] {
    const data =
      localStorage.getItem(
        'users'
      )

    return data
      ? JSON.parse(data)
      : []
  }

  function saveUsers(
    users: UserAccount[]
  ) {
    localStorage.setItem(
      'users',
      JSON.stringify(users)
    )
  }

  /* REGISTER */

  function handleRegister(
    event: React.FormEvent
  ) {
    event.preventDefault()

    if (
      !name ||
      !email ||
      !password
    ) {
      toast.error(
        'Please fill all fields.'
      )

      return
    }

    const users = getUsers()

    const existingUser =
      users.find(
        (user) =>
          user.email ===
          email
      )

    if (existingUser) {
      toast.error(
        'Email already exists.'
      )

      return
    }

    const newUser: UserAccount =
      {
        id: Date.now(),

        name,

        email,

        password,

        role,
      }

    saveUsers([
      ...users,
      newUser,
    ])

    toast.success(
      `${
        role === 'admin'
          ? 'Administrator'
          : 'User'
      } registered successfully.`
    )

    setIsRegister(false)

    setName('')
    setEmail('')
    setPassword('')
  }

  /* LOGIN */

  function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault()

    /* CHECK LOCK */

    if (
      lockedUntil &&
      Date.now() <
        lockedUntil
    ) {
      const remainingSeconds =
        Math.ceil(
          (lockedUntil -
            Date.now()) /
            1000
        )

      toast.error(
        `Too many failed attempts. Try again in ${remainingSeconds} seconds.`
      )

      return
    }

    const users = getUsers()

    const foundUser =
      users.find(
        (user) =>
          user.email ===
            email &&
          user.password ===
            password &&
          user.role === role
      )

    /* WRONG LOGIN */

    if (!foundUser) {
      const attempts =
        failedAttempts + 1

      setFailedAttempts(
        attempts
      )

      localStorage.setItem(
        STORAGE_ATTEMPTS_KEY,
        String(attempts)
      )

      /* LOCK */

      if (
        attempts >= 5
      ) {
        const lockDuration =
          role === 'admin'
            ? 120000
            : 30000

        const lockTime =
          Date.now() +
          lockDuration

        setLockedUntil(
          lockTime
        )

        localStorage.setItem(
          STORAGE_LOCK_KEY,
          String(lockTime)
        )

        setFailedAttempts(0)

        toast.error(
          role === 'admin'
            ? 'Administrator login locked for 2 minutes.'
            : 'Too many failed attempts. Login locked for 30 seconds.'
        )

        return
      }

      toast.error(
        `Invalid credentials. ${
          5 - attempts
        } attempts remaining.`
      )

      return
    }

    /* RESET SECURITY */

    setFailedAttempts(0)

    setLockedUntil(null)

    localStorage.removeItem(
      STORAGE_ATTEMPTS_KEY
    )

    localStorage.removeItem(
      STORAGE_LOCK_KEY
    )

    /* SAVE USER */

    localStorage.setItem(
      'currentUser',
      JSON.stringify(
        foundUser
      )
    )

    localStorage.setItem(
      'role',
      foundUser.role
    )

    /* SUCCESS */

    toast.success(
      `${
        foundUser.role ===
        'admin'
          ? 'Administrator'
          : 'User'
      } login successful.`
    )

    /* REDIRECT */

    if (
      foundUser.role ===
      'admin'
    ) {
      navigate(
        '/admin-places'
      )

      return
    }

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
          max-w-[560px]

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
            {isRegister
              ? 'Create Account'
              : 'Welcome Back'}
          </h1>

          <p
            className="
              text-gray-500

              mt-3
            "
          >
            {isRegister
              ? 'Create your tourism account.'
              : 'Login to continue your tourism experience.'}
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
            User
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

        {/* LOCK MESSAGE */}

        {remainingTime >
          0 && (
          <div
            className="
              mt-5

              bg-red-50

              border
              border-red-200

              text-red-600

              rounded-2xl

              p-4

              text-center

              font-semibold
            "
          >
            Login temporarily
            locked.

            <div className="mt-2 text-2xl font-black">
              {
                remainingTime
              }
              s
            </div>
          </div>
        )}

        {/* FORM */}

        <form
          onSubmit={
            isRegister
              ? handleRegister
              : handleLogin
          }
          className="
            mt-8

            space-y-5
          "
        >
          {/* NAME */}

          {isRegister && (
            <div>
              <label
                className="
                  text-sm
                  font-semibold
                "
              >
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                placeholder="Enter your full name"
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
          )}

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

          {/* BUTTON */}

          <button
            type="submit"
            disabled={
              remainingTime >
              0
            }
            className={`
              w-full

              py-4

              rounded-2xl

              text-white

              font-bold

              transition

              ${
                remainingTime >
                0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : role ===
                    'admin'
                  ? 'bg-black hover:bg-gray-900'
                  : 'bg-emerald-700 hover:bg-emerald-800'
              }
            `}
          >
            {isRegister
              ? role === 'admin'
                ? 'Register As Administrator'
                : 'Register'
              : role === 'admin'
              ? 'Login As Administrator'
              : 'Login'}
          </button>
        </form>

        {/* SWITCH */}

        <button
          type="button"
          onClick={() =>
            setIsRegister(
              !isRegister
            )
          }
          className="
            w-full

            mt-6

            text-sm

            text-gray-500

            hover:text-black

            transition
          "
        >
          {isRegister
            ? 'Already have an account? Login'
            : "Don't have an account? Register"}
        </button>
      </motion.div>
    </div>
  )
}

export default LoginPage