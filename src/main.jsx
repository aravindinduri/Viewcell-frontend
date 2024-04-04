import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Importing Components
import LandingPage from './components/pages/LandingPage/LandingPage.jsx'
import Home from './components/pages/HomePage/Home.jsx'
import Dashboard from './components/pages/HomePage/Dashboard.jsx'
import LikedVideos from './components/pages/HomePage/LikedVideos.jsx'
import WatchHistory from './components/pages/HomePage/WatchHistory.jsx'
import  Tweets from './components/pages/HomePage/Tweets/Tweets.jsx'
import UserVideos from './components/pages/HomePage/UserVideos.jsx'
import WatchScreen from './components/pages/HomePage/watchScreen/WatchScreen.jsx'

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
        path: '/home',
        element: <Dashboard />,
        children: [
          {
            path : '/home/uservideos',
            element : <UserVideos/>
          },
          {
            path : '/home/userplaylist',
            element : <>user Play list</>
          },
          {
            path : '/home/usertweets',
            element : <Tweets/>
          },
          {
            path : '/home/usersubcribers',
            element : <>User Subcribers</>
          }
        ]
      },
      {
        path : '/home/watchscreen/:videoId',
        element : <WatchScreen/>
      },
      {
        path: '/home/likedVideos',
        element: <LikedVideos />
      },
      {
        path: '/home/history/',
        element: <WatchHistory />
      },
      {
        path: '/home/myVideos/',
        element: <>Myvideos</>
      },
      {
        path: '/home/myCollections/',
        element: <>Collections</>
      },
      {
        path: '/home/subcribers/',
        element: <>Subscribers</>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
