import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'
import ReactPlayer from 'react-player'



import Video from './Video/Video.jsx';
export default function UserVideos() {
  const initialVideoDetails = {
    title: '',
    description: '',
    videoFile: null,
    thumbnail: null
  }
  const [videoDetails, setVideoDetails] = useState(initialVideoDetails)
  const [videos, setVideos] = useState([])
  const videoUpload = async () => {
    const formData = new FormData()
    Object.entries(videoDetails).forEach(([key, value]) => {
      formData.append(key, value);
    })
    try {
      const res = await axios.post('/api/v1/videos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    const fetchVideos = async () => {
      try {

        const fetchvideos = await axios.get('/api/v1/videos/')
        setVideos(fetchvideos.data.data)
        console.log(fetchvideos)
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchVideos()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h3 className='font-serif text-2xl'>Upload a Video</h3>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col w-full gap-4 md:w-96">
          <label htmlFor="video-title" className="text-xl font-serif">Video Title</label>
          <input
            type="text"
            id="video-title"
            required
            className="input-field bg-transparent border-2 border-opacity-50 border-gray-500 outline-none rounded-md p-2"
            placeholder="Enter the Title"
            value={videoDetails.title}
            onChange={(e) => setVideoDetails({ ...videoDetails, title: e.target.value })}
          />
          <label htmlFor="video-description" className="text-xl font-serif">Video Description</label>
          <textarea
            type="text"
            id="video-description"
            required
            className="input-field bg-transparent border-2 border-opacity-50 border-gray-500 outline-none rounded-md p-2"
            placeholder="Enter the Description of Video"
            value={videoDetails.description}
            onChange={(e) => setVideoDetails({ ...videoDetails, description: e.target.value })}
          />
          <label htmlFor="video-file" className="text-xl font-serif">Choose the video</label>
          <input
            type="file"
            id="video-file"
            required
            onChange={(e) => setVideoDetails({ ...videoDetails, videoFile: e.target.files[0] })}
          />
          <label htmlFor="thumbnail-file" className="text-xl font-serif">Choose Thumbnail</label>
          <input
            type="file"
            id="thumbnail-file"
            onChange={(e) => setVideoDetails({ ...videoDetails, thumbnail: e.target.files[0] })}
          />
          <button
            className="button border-2 rounded-md p-2 border-red-500 text-red-200 hover:text-white font-serif hover:bg-red-500"
            onClick={videoUpload}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-12">
        <h3 className=" text-3xl sm:text-2xl font-serif">Uploaded Videos</h3>
        <div className="flex flex-wrap justify-center ">
          {/* <Video video={videos} /> */}
          <ReactPlayer className = 'w-32 h-24' url={videos.length > 0 ? videos[0].videoFile : ''} playing controls	light = {videos.length > 0 ? videos[0].Thumbnail : ''} 	/>

        
        </div>
      </div>
    </div>
  )
}
