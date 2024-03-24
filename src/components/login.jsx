
import React, { useState } from 'react';
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const initialDetails = {
    email: '',
    password: ''
  }
  const [details, setDetails] = useState(initialDetails)
  const [isLogin , setisLogin] = useState(false)
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
    <div className='transition-all'>
      <div className='flex flex-col text-white gap-6 justify-center items-center border-2 w-96 h-96 rounded-lg'>
        <h2 className='text-3xl font-Poppins'>Login</h2>
        <input type="text" id='email' placeholder="  Enter your Email" required className=' h-10 text-black rounded-lg' value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
        <input type="password" id='password' placeholder="  Enter Your Password" required className='h-10 text-black rounded-lg' value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} />
        <button onClick={handleLogin} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-lg'>Sign in</button>
      </div>
    </div>
  );
};

export default LoginForm;
