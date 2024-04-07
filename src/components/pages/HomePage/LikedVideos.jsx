import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import VideoCard from './Video/VideoCard'
import axios from 'axios'

function LikedVideos() {
  let [videos, setVideos] = useState([])
  const [owner ,setowner] = useState({})
  const fetchLikesVideos = async () =>{
    try{
      const user = await axios.get(`/api/v1/users/current-user`)
      setowner(user.data.data)
      const res = await axios.get(`/api/v1/likes/videos`)
      setVideos(res.data.data)
      console.log(videos)

    }
    catch(e){
      console.log(e)
    }
  }
  useEffect( () => {
  fetchLikesVideos()
  },[])
  return (
    <>
      <div  className=' ml-7 lg:ml-60'>
        <h3 className=" text-3xl sm:text-2xl font-serif">Liked Videos</h3>
        <div className=" flex flex-wrap ">
          {console.log(videos)}
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

export default LikedVideos