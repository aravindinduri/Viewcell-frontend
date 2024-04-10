import React from 'react'

import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Importing Components
import LandingPage from './components/pages/LandingPage/LandingPage.jsx'
import Home from './components/pages/HomePage/Home.jsx'
import Profile from './components/pages/HomePage/profiles/Profile.jsx'
import UserProfile from './components/pages/HomePage/profiles/userprofile/UserProfile.jsx'
import LikedVideos from './components/pages/HomePage/LikedVideos.jsx'
import WatchHistory from './components/pages/HomePage/WatchHistory.jsx'
import Tweets from './components/pages/HomePage/Tweets/Tweets.jsx'
import UserVideos from './components/pages/HomePage/UserVideos.jsx'
import WatchScreen from './components/pages/HomePage/watchScreen/WatchScreen.jsx'
import HomeScreen from './components/pages/HomePage/Screens/HomeScreen.jsx'
import Settings from './components/pages/HomePage/settings/Settings.jsx'

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
        element: <HomeScreen />,
      },
      {
        path: '/home/profile',
        element: <Profile />,
        children: [
          {
              path : '/home/profile/videos',
              element : <UserVideos/>
          },
          {
            path : '/home/profile/tweets',
            element : < Tweets/>
        }
        ]
      },
      {
        path: '/home/watchscreen/:videoId',
        element: <WatchScreen />
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
        path : '/home/userprofile',
        element : <UserProfile/>
      },
      {
        path: '/home/settings/',
        element: <Settings/>
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
