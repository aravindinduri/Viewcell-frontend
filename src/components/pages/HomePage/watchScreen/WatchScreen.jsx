// import React from 'react'

// function WatchScreen() {
//   return (
//     <div>WatchScreen</div>
//   )
// }

// export default WatchScreen

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../Video/Video';
function WatchScreen({ videoUrl }) {
    const {videoId} = useParams()
    const [videoData, setVideoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (videoId) {
            const fetchVideoData = async () => {
                try {
                    const response = await axios.get(`/api/v1/videos/${videoId}`)
                    console.log(response)
                    setVideoData(response.data.data);
                    setLoading(false);
                } catch (error) {
                    setError('Failed to fetch video data.');
                    setLoading(false);
                }
            };

            fetchVideoData();
        }
    }, [videoId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!videoData) {
        return null;
    }

    return (
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
            <div className="lg:w-3/4 lg:pr-8">
                {/* Video player */}
                <Video video={videoData}/>
                
                {/* Video details */}
                <div className="mt-4">
                    <h1 className="text-xl font-semibold">{videoData.title}</h1>
                    <p className="text-sm text-gray-600">{videoData.description}</p>
                </div>

                {/* Comments section */}
                <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">Comments</h2>
                    {/* Add comments component */}
                </div>
            </div>

            {/* Related videos */}
            <div className="lg:w-1/4 mt-8 lg:mt-0">
                <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
                {/* Add related videos component */}
            </div>
        </div>
    );
}

export default WatchScreen;
