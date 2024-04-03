import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TbHttpDelete } from "react-icons/tb";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

export default function Tweets() {
  const data = useOutletContext()
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const usertweets = await axios.get(`/api/v1/tweets/user/${data.userId}`);
        setTweets(usertweets.data.data);
      } catch (e) {
        console.log(e);
      }
    };

    if (tweets.length === 0) {
      fetchTweets();
    }
  }, [tweets.length, data.userId]);

  const addTweet = async () => {
    try {
      const tweet = document.getElementById("content").value;
      document.getElementById("content").value = "";
      await axios.post("/api/v1/tweets/", {
        content: tweet,
      });
      setTweets([...tweets, { content: tweet }]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-6">
          <label htmlFor="content" className="font-Oswald text-lg">
            Add New Tweet
          </label>
          <input
            type="text"
            id="content"
            placeholder="Enter Your Content"
            className="bg-transparent outline-none border-gray-100/10 border-2 w-full md:w-96 h-10 text-gray-500 pl-2 rounded-md"
          />
          <button
            onClick={addTweet}
            className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent w-28 h-10 rounded-lg"
          >
            Add
          </button>
        </div>
        {tweets.map((item) => (
          <Card
            key={item._id}
            color="transparent"
            shadow={false}
            className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mt-6"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar
                size="md"
                variant="circular"
                src={item.owner ? item.owner.avatar : ""}
                alt="tania andrew"
              />
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    <span className="text-gray-300">@{item.owner ? item.owner.username : ""}</span>
                    <TbHttpDelete
                      onClick={async () => {
                        await axios.delete(`/api/v1/tweets/${item._id}`);
                        setTweets(tweets.filter((tweet) => tweet._id !== item._id));
                      }}
                      className="text-red-300 text-2xl cursor-pointer"
                    />
                  </Typography>
                </div>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0 md:w-96">
              <Typography>&quot;{item.content}&quot;</Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
