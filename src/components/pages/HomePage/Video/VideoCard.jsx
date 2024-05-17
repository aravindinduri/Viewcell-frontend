
import React from "react";
import moment from "moment";


const VideoCard = ({ video }) => {
    if (!video) {
        return null;
    }
    console.log(video)
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