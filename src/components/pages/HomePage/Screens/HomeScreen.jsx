import React, { useState } from 'react'
import VideoScreen from './VideoScreen'

function HomeScreen() {
  const [queryString,setqueryString] = useState('')
  
  return (
    <>
    <div className=' ml-7 md:ml-20 lg:ml-60 flex flex-wrap'>
    <VideoScreen query ={queryString}/>
    </div>
    </>
  )
}

export default HomeScreen