import React from 'react'

import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from 'react-router-dom'

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
      <RouterProvider
        router={router}
      />
    </AuthProvider>
  </React.StrictMode>
)