import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  Input,
  Typography,
  Alert,
  Button
} from "@material-tailwind/react";


const RegisterForm = () => {
  const [open, setOpen] = useState(false);

  const initialDetails = {
    email: "",
    fullname: "",
    username: "",
    password: "",
  };
  const [avatar, setAvatar] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const [userDetails, setUserDetails] = useState(initialDetails)
  const handleRegistration = async () => {

    try {
      if (!userDetails.email || !userDetails.password) {
        console.error("Email and password are required.");
        return;
      }
      const formData = new FormData()
      Object.entries(userDetails).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (avatar) formData.append('avatar', avatar);
      if (coverImage) formData.append('coverImage', coverImage);

      const response = await axios.post("/api/v1/users/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setOpen(true)
        setUserDetails(initialDetails);
      } else {
        console.error("Registration failed. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  }

  return (

    <>
      <>

        <Alert
          open={open}
          onClose={() => setOpen(false)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          User Registered Succesfully
        </Alert>
      </>

      <Card color="" shadow={false} className=' p-4 border-2 bg-black'>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">

            {/* FULLNAME */}
            <Typography variant="h6" color="blue-gray" className="-mb-3 text-gray-300">
              Fullname
            </Typography>
            <Input
              color='blue'
              label='Fullname'
              size="lg"
              className=' text-white'
              value={userDetails.fullname} onChange={(e) => setUserDetails({ ...userDetails, fullname: e.target.value })}
            />

            {/* USERNAME */}
            <Typography variant="h6" color="blue-gray" className="-mb-3 text-gray-300">
              Username
            </Typography>
            <Input
              color='blue'
              label='Username'
              size="lg"
              className='text-white'
              value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
            />

            {/* EMAIL */}
            <Typography variant="h6" color="blue-gray" className="-mb-3 text-gray-300">
              Your Email
            </Typography>
            <Input
              size="lg"
              color='blue'
              className='text-white'
              label='Email'
              value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3 text-gray-300">
              Avatar
            </Typography>
            <Input
              type='file'
              size="lg"
              color='blue'
              className='text-white'
              label='avatar'
              onChange={(e) => { setAvatar(e.target.files[0]) }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3 text-gray-300">
              Cover-Image
            </Typography>
            <Input
              type='file'
              size="lg"
              color='blue'
              className='text-white'
              label='coveriamge'
              onChange={(e) => { setCoverImage(e.target.files[0]) }}
            />


            <Typography variant="h6" color="blue-gray" className="-mb-3 text-gray-300">
              Password
            </Typography>
            <Input
              size="lg"
              color='blue'
              className='text-white'
              label='Password'
              value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            />

          </div>

          <Button className="mt-6 bg-red-600" fullWidth onClick={handleRegistration} >
            sign up
          </Button>
        </form>
      </Card>

    </>

  );
};

export default RegisterForm;

