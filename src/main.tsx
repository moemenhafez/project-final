import React from 'react'

import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from 'react-router-dom'

import {
  AnimatePresence,
} from 'framer-motion'

import { Toaster } from 'react-hot-toast'

import router from './routes'

import './index.css'

ReactDOM.createRoot(
  document.getElementById(
    'root'
  ) as HTMLElement
).render(
  <React.StrictMode>
    <AnimatePresence
      mode="wait"
    >
      <RouterProvider
        router={router}
      />
    </AnimatePresence>

    <Toaster
      position="top-right"
    />
  </React.StrictMode>
)