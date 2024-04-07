
import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
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
    // <div className='transition-all backdrop-blur-sm'>
    //   <div className='flex flex-col text-white gap-6 justify-center items-center border-2 w-96 h-96 rounded-lg'>
    //     <h2 className='text-3xl font-Poppins'>Login</h2>
    //     <input type="text" id='email' placeholder="  Enter your Email" required className=' h-10 text-black rounded-lg' value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
    //     <input type="password" id='password' placeholder="  Enter Your Password" required className='h-10 text-black rounded-lg' value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} />
    //     <button onClick={handleLogin} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-lg'>Sign in</button>
    //   </div>
    // </div>
    <Card color="transparent" shadow={false} className=' border-2 p-4'>

    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6"  className="-mb-3 text-gray-200 ">
          Your Email
        </Typography>
        <Input
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-gray-200 focus:!border-t-gray-900 text-white"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
        <Typography variant="h6"  className="-mb-3 text-gray-200">
          Password
        </Typography>
        <Input
          type="password"
          size="lg"
          placeholder="Enter your Password"
          className=" !border-t-gray-200 focus:!border-t-gray-900 text-white"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
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


import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export function SimpleRegistrationForm() {
  return (
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
export default LoginForm;
