import { TbHttpDelete } from "react-icons/tb";
import { useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function Comment({ comment }) {
  return (
    <>

      <Card
        key={comment._id}
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
            src={comment.owner ? comment.owner.avatar : ""}
            alt="tania andrew"
          />
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                <span className="text-gray-400">@{comment.owner ? comment.owner.username : ""}</span>
                <TbHttpDelete
                  onClick={
                    async () => {
                      s++
                    try{ 
                      await axios.delete(`/api/v1/comments/c/${comment._id}`)
                    }
                    catch(e){
                      console.log(e)
                    }
                  }}
                  className="text-red-300 text-2xl cursor-pointer"
                />
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 md:w-96">
          <Typography>{comment.content}</Typography>
        </CardBody>
      </Card>
    </>
  )
}

export default Comment