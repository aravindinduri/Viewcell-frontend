import { useState } from "react";
import {
  MdThumbUpOffAlt,
  MdThumbDownOffAlt,
  MdThumbUp,
  MdThumbDown,
} from "react-icons/md";

const VideoDetails = ({ videoDetail }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  return (
    <div>
      <p className="text-xl font-semibold py-2">{videoDetail.Title}</p>
        <p className="text-gray-600 "> {videoDetail.Description}</p>
      <div className="flex flex-col md:flex-row gap-1 justify-start md:items-center md:justify-between py-2">
        <div className="flex gap-5">
        <img src={videoDetail.owner.avatar} className="w-10 rounded-full " alt="avatar" />
        <p className="font-bold text-gray-500"> @ {videoDetail.owner.username}</p>
        </div>
        <div className="flex items-center justify-between gap-1 py-2">
          <div className="flex items-center mr-4">
            <button
              onClick={() => {
                setIsLiked(!isLiked);
                setIsDisliked(false);
              }}
              className="bg-transparent  hover:bg-red-600 border-red-700 text-white rounded-l-full py-2 px-5 "
            >
              {isLiked ? (
                <MdThumbUp size="1.5rem" />
              ) : (
                <MdThumbUpOffAlt size="1.5rem" />
              )}
            </button>

            <button
              onClick={() => {
                setIsDisliked(!isDisliked);
                setIsLiked(false);
              }}
              className="  bg-transparent hover:bg-red-600 text-white rounded-r-full py-2 px-5"
            >
              {isDisliked ? (
                <MdThumbDown size="1.5rem" />
              ) : (
                <MdThumbDownOffAlt size="1.5rem" />
              )}
            </button>
          </div>

          <button
            onClick={() => setSubscribed(!subscribed)}
            className="bg-slate-700 text-white rounded-full py-2 font-serif px-5 cursor-pointer bg-transparent border-red-800 border-2 hover:bg-red-600"
          >
            {subscribed ? "UnSubscribe" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;