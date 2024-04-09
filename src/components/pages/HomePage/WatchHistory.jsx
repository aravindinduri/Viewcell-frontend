import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from './Video/VideoCard'
function WatchHistory() {
  const [history, setHistory] = useState([])
  const fetchUserWatchHistory = async () => {
    try {
      const res = await axios.get('/api/v1/users/history')
      setHistory(res.data.data);
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchUserWatchHistory()
  }, [])
  return (
    <>
      <div className=' mt-7 md:ml-20 lg:ml-60 '>
        <h2 className="text-lg font-serif mb-4 -ml-3">User Watch History</h2>
        <div className=' flex'>  


          {
            history.map((video) => (
              <VideoCard video={video} />
            ))
          }
        </div>
      </div >
    </>
  )
}

export default WatchHistory