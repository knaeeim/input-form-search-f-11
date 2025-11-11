import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Components/Router.jsx'
import ContextProvider from './Context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
