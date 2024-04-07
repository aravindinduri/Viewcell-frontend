import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import Comment from '../comments/Comment'

function CommentScreen({ videoId }) {
    const [comments, setcomments] = useState([])
    const [content, setContent] = useState('')

    useEffect(() => {
        const fetchComments = async () => {
            try {

                const res = await axios.get(`/api/v1/comments/v/${videoId}`)
                setcomments(res.data.data)
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchComments()
    }, [comments])

    return (
        <>
            <div>
                <input
                    type="text"
                    id="video-title"
                    required
                    className="input-field bg-transparent border-2 border-opacity-50 border-gray-500 outline-none rounded-md p-2"
                    placeholder="Enter the Comment"
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }}
                />
                <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white  w-24 h-10 border border-red-500 hover:border-transparent rounded-lg ml-2' onClick={async () => {
                    try {

                        await axios.post(`/api/v1/comments/v/${videoId}`, {
                            content: content
                        })
                        setContent('')
                    }
                    catch (e) {
                        console.log(e)
                    }

                }}> Add </button>
            </div>
            <div>
                {
                    comments.map((comment) => (<Comment comment={comment} />))
                }
            </div>
        </>
    )
}

export default CommentScreen