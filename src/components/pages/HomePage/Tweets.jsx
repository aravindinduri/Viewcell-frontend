
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { TbHttpDelete } from "react-icons/tb";



import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import card from "@material-tailwind/react/theme/components/card";


export default function Tweets() {
  const data = useOutletContext()
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const usertweets = await axios.get(`/api/v1/tweets/user/${data.userId}`)
        console.log(usertweets.data.data)
        setTweets(usertweets.data.data)
      }
      catch (e) {
        console.log(e)
      }

    }
    console.log(tweets)
    tweets.length == 0 ? fetchTweets() : []
  }, [tweets,setTweets])

  function addTweet() {
    const createTweet = async () => {
      try {
        
        let tweet = document.getElementById('content').value
        document.getElementById('content').value = ''
        const responce = await axios.post('/api/v1/tweets/', {
          content: tweet
        })
      }
      catch (e) {
        console.log(e)
      }
    }
    createTweet()  
    setTweets(tweets)
  }
 
  return (

    <>
      <div className="flex flex-row justify-center mr-56 gap-5 mt-6">
        <label className="font-Oswald text-lg"> Add New Tweet  </label>
        <input type="text" id="content" placeholder="Enter Your Content" className="bg-transparent outline-none border-gray-100/10 border-2 w-96 h-10 text-gray-500 pl-2 rounded-md" />
        <button onClick={addTweet} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent w-28 h-10 rounded-lg  ">Add</button>
      </div>
      {
        tweets.map((item) => (
          <Card key={item._id} color="transparent" shadow={false} className="w-full pl-72">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar
                size="md"
                variant="circular"
                src={item ? item.owner.avatar : ''}
                alt="tania andrew"
              />

              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray" className="text-grey-300	flex gap-10">
                    @  {item ? item.owner.username : ''}

                    <TbHttpDelete onClick={async () => {
                     await axios.delete(`/api/v1/tweets/${item._id}`)
                      setTweets(tweets)
                    }} className="text-red-300 text-2xl cursor-pointer" />

                  </Typography>
                </div>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                &quot; {item.content} &quot;
              </Typography>
            </CardBody>
          </Card>

        ))
      }

    </>
  );
}