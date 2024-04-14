import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Input, Button, Typography, Spinner } from "@material-tailwind/react";

const LoginForm = () => {
  const initialDetails = {
    email: '',
    password: ''
  };
  const [details, setDetails] = useState(initialDetails);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/v1/users/login/', {
        email: details.email,
        password: details.password
      });
      if (response.status === 200) {
        console.log("User logged in successfully");
        navigate('/home');
      }
    } catch (error) {
      console.log("Error occurred while logging in", error);
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  const isInvalidEmail = !details.email;
  const isInvalidPassword = !details.password;

  return (
    <Card color="gray" shadow={false} className='border-2 p-4 bg-black'>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" className={`-mb-3 ${isInvalidEmail || isInvalidPassword ? 'text-red-600' : 'text-gray-200'}`}>
            Your Email
          </Typography>
          <Input
            size="lg"
            color={isInvalidEmail || isInvalidPassword ? 'red' : 'blue'}
            label='Email'
            className='text-white'
            labelProps={{ className: 'text-blue-900' }}
            value={details.email} 
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          {isInvalidEmail && <Typography className="text-red-600">Email is required</Typography>}
          <Typography variant="h6" className={`-mb-3 ${isInvalidPassword || isInvalidEmail ? 'text-red-600' : 'text-gray-200'}`}>
            Password
          </Typography>
          <Input
            type="password"
            color={isInvalidPassword || isInvalidEmail ? 'red' : 'blue'}
            label='Password'
            size="lg"
            className='bg-blue-gray-50'
            value={details.password} 
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
          />
          {isInvalidPassword && <Typography className="text-red-600">Password is required</Typography>}
          {error && <Typography className="text-red-600">{error}</Typography>}
        </div>
        <Button 
          className="mt-6 bg-red-600" 
          fullWidth 
          onClick={handleLogin} 
          disabled={loading || isInvalidEmail || isInvalidPassword}
        >
          {loading ? (
            <Spinner color="white" size="sm" className="mr-2" />
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
