import axios from 'axios'
import { useState } from 'react'

export default function UserVideos() {
  const initialVideoDetails = {
    title: '',
    description: '',
    videoFile: null,
    thumbnail: null

  }
  const [videodetails, setvideodetails] = useState(initialVideoDetails)

  const videoUplaod = async () => {
    console.log(videodetails)
    const formData = new FormData()
    Object.entries(videodetails).forEach(([key, value]) => {
      formData.append(key, value);
    })
    try {
      const res = await axios.post('/api/v1/videos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      
      )
      console.log(res)

    }
    catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      <div>
        < div className='flex flex-col self-center w-80 gap-2 ml-96 mt-12'>
          <label htmlFor="" className=' text-xl font-serif'>Video Title</label>
          <input type="text" id='video-title' required className=' bg-transparent pl-4  border-gray-500 border-2 w-96' placeholder=' Enter the Title' value={videodetails.title} onChange={(e) => setvideodetails({ ...videodetails, title: e.target.value })} />
          <label htmlFor="" className='text-xl font-serif'>Video Description </label>
          <input type="text" id='video-description' required className=' border-gray-500 border-2 outline-0 bg-transparent pl-4 h-auto' placeholder=' Enter the Description of Video' value={videodetails.description} onChange={(e) => setvideodetails({ ...videodetails, description: e.target.value })} />
          <label htmlFor="" className='font-serif text-xl'>Choose the video</label>
          <input type="file" id='video-file' required onChange={(e) => setvideodetails({ ...videodetails, videoFile: e.target.files[0] })} />
          <label htmlFor="" className='font-serif text-xl'>Choose Thunmbanil</label>
          <input type="file" id='thumbnail-file' onChange={(e) => setvideodetails({ ...videodetails, thumbnail: e.target.files[0] })} />
          <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white  border border-red-500 hover:border-transparent w-28 h-10 rounded-lg mt-3 ' onClick={() => { videoUplaod() }} >Submit</button>
        </div>
      </div>
      <div>
        <h3 className='ml-24 text-2xl font-serif'>Uploded Videos</h3>
      </div>
    </>
  )
}
