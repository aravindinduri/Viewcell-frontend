
import React, { useState } from 'react';
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";


const LoginForm = () => {
  const initialDetails = {
    email: '',
    password: ''
  }
  const [details, setDetails] = useState(initialDetails)
  const [isLogin, setisLogin] = useState(false)
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {

      const response = await axios.post('/api/v1/users/login/', {
        "email": details.email,
        "password": details.password
      })
      if (response.status === 200) {
        console.log("user logged in Succesfully")
        setDetails(initialDetails)
        setisLogin(true)
        navigate('/home')
      }
    }
    catch (error) {
      console.log("Erroe Occured while login", error)
    }
  }

  return (

    <Card color="gray" shadow={false} className=' border-2 p-4  bg-black'>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className="-mb-3 text-gray-200 ">
            Your Email
          </Typography>

          <Input
            size="lg"
            color='blue'
            label='Email'
            className=' text-white'
            labelProps={{ className: ' text-blue-900' }}
            value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <Typography variant="h6" className="-mb-3 text-gray-200">
            Password
          </Typography>
          <Input
            type="password"
            color='blue'
            label='Password'
            size="lg"
            className=' bg-blue-gray-50'

            value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })}
          />

        </div>

        <Button className="mt-6 bg-red-600" fullWidth onClick={handleLogin} >
          sign in
        </Button>
      </form>
    </Card>
  );
};



export default LoginForm;
