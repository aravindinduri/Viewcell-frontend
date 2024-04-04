import React from 'react'
import ReactPlayer from 'react-player'
function VideoCard({video}) {
    if (!video) {
        return null;
    }
    return (
        <div className='flex flex-col md:flex-row bg-gray-900 bg-opacity-60 hover:bg-blue-gray-900 hover:bg-opacity-30 gap-4 w-full pl-10 pt-3 pb-3 rounded-md overflow-hidden'>
            <ReactPlayer
                className='w-full md:w-1/3 md:max-h-56'
                url={video.videoFile}
                playing
                controls
                light={video.Thumbnail}
            />
            <div className='flex flex-col md:w-2/3'>
                <div className='flex flex-col p-4'>
                    <span className='text-lg font-semibold text-white'>{video.Title}</span>
                    <p className='text-sm text-gray-400 mt-1'>{video.Description}</p>
                    <p className='text-sm text-gray-400 mt-1'>Views: {video.views}</p>
                </div>
                <div className='flex items-center p-4 border-t border-gray-800'>
                    <img src={video.owner.avatar} className='rounded-full w-10 mr-2' alt="" />
                    <span className='text-sm text-gray-400'>@{video.owner.username}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCard