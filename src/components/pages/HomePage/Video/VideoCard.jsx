// import React from 'react'
// import ReactPlayer from 'react-player'
// function VideoCard({video}) {
//     if (!video) {
//         return null;
//     }
//     return (
//         <div className='flex flex-col  md:flex-row  bg-gray-900 bg-opacity-60 hover:bg-blue-gray-900 hover:bg-opacity-30 gap-4 w-full pl-10 pt-3 pb-3 rounded-md overflow-hidden'>
//             <ReactPlayer
//                 className='w-full md:w-1/3 md:max-h-56'
//                 url={video.videoFile}
//                 playing
//                 controls
//                 light={video.Thumbnail}
//             />
//             <div className='flex flex-col md:w-2/3'>
//                 <div className='flex flex-col p-4'>
//                     <span className='text-lg font-semibold text-white'>{video.Title}</span>
//                     <p className='text-sm text-gray-400 mt-1'>{video.Description}</p>
//                     <p className='text-sm text-gray-400 mt-1'>Views: {video.views} K</p>
//                 </div>
//                 <div className='flex items-center p-4 border-t border-gray-800'>
//                     <img src={video.owner.avatar} className='rounded-full w-10 mr-2' alt="" />
//                     <span className='text-sm text-gray-400'>@{video.owner.username}</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default VideoCard

import React from "react";
import moment from "moment";


const VideoCard = ({ video }) => {
    if (!video) {
        return null;
    }
    return (
        <div className="md:p-2 m-2 w-80 md:w-72 rounded">
            <img
                className="rounded-lg shadow-lg hover:scale-110 hover:ease-in-out duration-300"
                alt="thumnails"
                src={video.Thumbnail}
            />
            <div >
                <p className="font-bold line-clamp-2 my-2">{video.Title}</p>
                <div className="flex flex-row gap-3">
                <img src={video.owner.avatar} alt="avatar" className=" w-6 rounded-full" />
                <p className="font-medium text-sm"> @{video.owner.username}</p>
                </div>
            </div>
            <div className="flex items-center gap-1 py-1">
                <p className="text-sm text-gray-600 font-medium">
                    {video.views} views{" "}
                </p>
                <p className="text-gray-600">•</p>

                <p className="text-sm text-gray-600 font-medium ">
                    {moment(video.createdAt).fromNow()}
                </p>
            </div>
        </div>
    );
};

export default VideoCard;