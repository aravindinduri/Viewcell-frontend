import ReactPlayer from 'react-player';

function Video({ videos }) {
    console.log(videos);
    return (
        <div className='flex flex-col md:flex-row bg-gray-900 bg-opacity-60 hover:bg-blue-gray-900 hover:bg-opacity-30 gap-4 w-full pl-10 pt-3 pb-3 rounded-md overflow-hidden'>

            <ReactPlayer className='w-full md:w-1/3 h-auto md:h-56' url={videos ? videos[0].videoFile : ''} playing controls light = {videos ? videos[0].Thumbnail : ''} />
            <div className='flex flex-col md:w-2/3'>
                <div className='flex flex-col p-4'>
                    <span className='text-lg font-semibold text-white'>{videos ? videos[0].Title : ''}</span>
                    <p className='text-sm text-gray-400 mt-1'>{ videos ? videos[0].Description : '' }</p>
                </div>
                <div className='flex items-center p-4 border-t border-gray-800'>
                    <img src={videos ? videos[0].owner.avatar : ''} className='rounded-full w-10 mr-2' alt="" />
                    <span className='text-sm text-gray-400'>@{videos ? videos[0].owner.username : ''}</span>
                </div>
            </div>
        </div>
    );
}

export default Video;
