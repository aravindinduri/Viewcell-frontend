import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './Video/VideoCard.jsx';
import { Audio } from 'react-loader-spinner'
import { useOutletContext } from 'react-router-dom';

export default function UserVideos() {
  const data = useOutletContext()
  const initialVideoDetails = {
    title: '',
    description: '',
    videoFile: null,
    thumbnail: null
  };
  const [videoDetails, setVideoDetails] = useState(initialVideoDetails);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const videoUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    Object.entries(videoDetails).forEach(([key, value]) => {
      formData.append(key, value);
    })
    try {
      const res = await axios.post('/api/v1/videos/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      setVideoDetails(initialVideoDetails)
      fetchVideos();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get('/api/v1/videos/',{
        params : {
          userId : data.userId
        }
      });
      setVideos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

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
          {loading && (
            <Audio
              height="100"
              width="100"
              color='grey'
              ariaLabel='loading'
            />

          )}
        </div>
      </div>
      <div>
        <h3 className=" text-3xl sm:text-2xl font-serif">Uploaded Videos</h3>
        <div className=" flex flex-wrap ">

          {videos.map((video) => (
            <Link to={`/home/watchscreen/${video._id}`}>
              <VideoCard video={video} />
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}
