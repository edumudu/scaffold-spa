import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'

import { router } from './router'
import { globalQueryClient } from './libs/react-query'

import './assets/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={globalQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
