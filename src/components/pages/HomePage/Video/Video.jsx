import ReactPlayer from 'react-player';

function Video({ video }) {
    if (!video) {
        return null;
    }
    return (
        <div >
            <ReactPlayer
                className='w-full md:w-1/3 md:max-h-56'
                url={video.videoFile}
                playing
                controls
                light={video.Thumbnail}
            />

        </div>
    );
}

export default Video;
