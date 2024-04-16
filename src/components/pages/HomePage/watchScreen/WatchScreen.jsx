import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../Video/Video';
import CommentScreen from '../Screens/CommentScreen';
import VideoScreen from '../Screens/VideoScreen';
import { TailSpin } from 'react-loader-spinner';

function WatchScreen() {
    const { videoId } = useParams();
    const [videoData, setVideoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await axios.get(`/api/v1/videos/${videoId}`);
                setVideoData(response.data.data);
            } catch (error) {
                console.error('Failed to fetch video data:', error);
                setError('Failed to fetch video data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (videoId) {
            fetchVideoData();
        }
    }, [videoId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <TailSpin
                    height={100}
                    width={100}
                    color="#FF5733" // Customize the color here
                    ariaLabel="loading"
                />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!videoData) {
        return null;
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 lg:flex">
            <div className="lg:w-3/4 lg:pr-8 xs:w-full ml-0 md:ml-52 lg:ml-60">
                <div className="relative aspect-w-16 aspect-h-9 bg-black">
                    <Video video={videoData} />
                </div>
                <div className="mt-8 sm:mt-32">
                    <h2 className="text-lg font-semibold mb-4 ml-2">Comments</h2>
                    <CommentScreen videoId={videoId} />
                </div>
            </div>
            <div className="lg:w-1/4 mt-8 lg:mt-0 lg:pl-8 xs:w-full">
                <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
                <VideoScreen />
            </div>
        </div>
    );
}

export default WatchScreen;
