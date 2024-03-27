import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage/LandingPage.jsx'
import Home from './components/pages/HomePage/Home.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
       path :'/home',
       element : <>Home</>
      },
      {
        path : '/home/likedVideos',
        element : <>liked</>
      },
      {
        path : '/home/history/',
        element : <>History</>
      },
      {
        path : '/home/myVideos/',
        element : <>Myvideos</>
      },
      {
        path : '/home/myCollections/',
        element : <>Collections</>
      },
      {
        path : '/home/subcribers/',
        element : <>Subscribers</>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
