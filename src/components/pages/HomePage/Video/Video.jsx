import ReactPlayer from 'react-player';
import VideoDetails from './VideoDetails';
function Video({ video }) {
    if (!video) {
        return null;
    }
    return (

        <div className="p-4 px-5 md:w-[50rem] md:h-[28rem] ">
            <ReactPlayer
                className=""
                url={video.videoFile}
                width="100%"
                height="100%"
                controls={true}
                playing={true}
            />
            {video && <VideoDetails videoDetail={video} />}
        </div>
    );
}

export default Video;

