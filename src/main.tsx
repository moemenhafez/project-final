import React from 'react'

import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import router from '@/routes'

import AuthProvider from '@/context/AuthProvider'

import './index.css'

ReactDOM.createRoot(
  document.getElementById(
    'root'
  ) as HTMLElement
).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster
        position="top-right"
      />

      <RouterProvider
        router={router}
      />
    </AuthProvider>
  </React.StrictMode>
)