import ReactPlayer from 'react-player';

function Video({ video }) {
    if (!video) {
        return null;
    }
    return (
        <div className='  max-w-[300px]  max-h-96 : sm:max-w-fit'  >
            <ReactPlayer 
                url={video.videoFile}
                playing
                controls
                light={video.Thumbnail}
            />

        </div>
    );
}

export default Video;
