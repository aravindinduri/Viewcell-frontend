import axios from 'axios'

export default function UserVideos() {
  
const videoUplaod = async () =>{
       try{
       const res = await axios.post('/api/v1/videos/',{
          title : document.getElementById('video-title').value,
          description : document.getElementById('video-description').value,
          videoFile : document.getElementById('video-file').files[0]
        })
        console.log(res)

        }
        catch(e){
          console.log(e)
        }
  }
   
  
  return (
    <>
      <div>
        <form action className='flex flex-col self-center w-80 gap-2 ml-96 mt-12'>
          <label htmlFor="" className=' text-xl font-serif'>Video Title</label>
          <input type="text" id='video-title' required className=' bg-transparent pl-4  border-gray-500 border-2 w-96' placeholder=' Enter the Title' />
          <label htmlFor="" className='text-xl font-serif'>Video Description </label>
          <input type="text" id='video-description' required className=' border-gray-500 border-2 outline-0 bg-transparent pl-4 h-auto' placeholder=' Enter the Description of Video' />
          <label htmlFor="" className='font-serif text-xl'>Choose the video</label>
          <input type="file" id='video-file' required className='' />
          <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white  border border-red-500 hover:border-transparent w-28 h-10 rounded-lg mt-3 'onClick={()=>{videoUplaod()}} >Submit</button>
        </form>
      </div>
      <div>
        <h3 className='ml-24 text-2xl font-serif'>Uploded Videos</h3>
      </div>
    </>
  )
}
