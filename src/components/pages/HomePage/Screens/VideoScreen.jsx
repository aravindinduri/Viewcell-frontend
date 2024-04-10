import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import VideoCard from '../Video/VideoCard';
function VideoScreen({ queryString }) {
  const [videos, setVideos] = useState([])

  const fetchVideos = async () => {
    try {
      const response = await axios.get('/api/v1/videos/', {
        params: {
          query: queryString
        }
      });
      setVideos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-wrap ">

          {videos.map((video) => (
            <Link to={`/home/watchscreen/${video._id}`}>
              <VideoCard video={video} />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default VideoScreen