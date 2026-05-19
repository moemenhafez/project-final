import axiosInstance from '@/api/axios'

interface LoginData {
  username: string

  password: string
}

export async function loginUser(
  data: LoginData
) {
  const response =
    await axiosInstance.post(
      '/auth/login',
      data
    )

  return response.data
}