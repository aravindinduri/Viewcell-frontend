
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";


export default function Tweets() {
  const data = useOutletContext()

  const [tweets, setTweets] = useState([])
  useEffect(() => {
    try {

      const fetchTweets = async () => {
        const usertweets = await axios.get(`api/v1/tweets/user/:65ff0a86cd7fbecfc74a0bda`)
        console.log(usertweets.data)
        setTweets(usertweets.data)

      }
      fetchTweets()
    }
    catch (e) {
      console.log(e)
    }
  }, [])
  function addTweet() {
    try {
      const createTweet = async () => {

        let tweet = document.getElementById('content').value
        const responce = await axios.post('/api/v1/tweets/', {
          content: tweet
        })
      }
      createTweet()
    }
    catch (e) {
      console.log(e)
    }
  }
  return (

    <>
      <div className="flex flex-row justify-center mr-56 gap-5 mt-6">
        <label className="font-Oswald"> Add New Tweet  </label>
        <input type="text" id="content" placeholder="Enter Your Content" className="bg-transparent outline-none border-gray-100/10 border-2 h-8 text-gray-500 pl-2 rounded-md" />
        <button onClick={addTweet} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent w-28 h-10 rounded-lg  ">Add</button>
      </div>
      {/* <Card color="transparent" shadow={false} className="w-full pl-72">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={data ? data.avatar : ''}
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray" className="text-orange-300	">
                {data ? data.username : ''}
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography>
            &quot;I found solution to all my design needs from Creative Tim. I use
            them as a freelancer in my hobby projects for fun! And its really
            affordable, very humble guys !!!&quot;
          </Typography>
        </CardBody>
      </Card> */}

      <ul>
        {[tweets].map( e =>{
          return(
            <li>{e}</li>
            )
        })}
      </ul>

    </>
  );
}