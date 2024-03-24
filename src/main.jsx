import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path : '',
    element : <LandingPage/>
  },
  {
    path : '/home',
    element: <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
