import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
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
      console.log(userDetails)
      const formData = new FormData()
      Object.entries(userDetails).forEach(([key, value]) => {
        formData.append(key, value);
      });
      console.log(formData)
      if (avatar) formData.append('avatar', avatar);
      if (coverImage) formData.append('coverImage', coverImage);



      const response = await axios.post("/api/v1/users/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log("User registered successfully!");
        setUserDetails(initialDetails);
      } else {
        console.error("Registration failed. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
    }
  }

  return (
    <div className='transition-all  backdrop-blur-sm'>
      <div className='flex flex-col text-white gap-6 justify-center items-center border-2 w-auto h-auto rounded-lg p-4 '>
        <h2 className='text-3xl font-Poppins '>Sign Up</h2>
        {/*email */}
        <input type="text" required id='email' placeholder="  Enter your Email" className=' h-10 text-black rounded-lg' value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
        {/* full name */}
        <input type="text" required id='fullname' placeholder=' Enter Your Fullname' className=' h-10 text-black rounded-lg' value={userDetails.fullname} onChange={(e) => setUserDetails({ ...userDetails, fullname: e.target.value })} />
        {/* Username */}
        <input type="text" required id='username' placeholder=' Enter Your Username' className=' h-10 text-black rounded-lg' value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
        {/* Avatar */}
        <div className='flex gap-4'>
          <label className='text-lg font-mono pl-4'>Profile</label>
          {/* <input type="file" id='avatar' required className='text-white rounded-lg' onChange={(e) => setUserDetails({ ...userDetails, avatar: e.target.files[0] })} /> */}
          <input type="file" id='avatar' required className='text-white rounded-lg' onChange={(e) => { setAvatar(e.target.files[0]) }} />

        </div>
        {/* Thumbnail */}
        <div className="flex gap-4">
          <label htmlFor="coverImage" className='text-lg font-mono pl-4 '>Cover Image</label>
          {/* <input type="file" id='coverImage' className=' h-10 text-white rounded-lg' onChange={(e) => setUserDetails({ ...userDetails, coverImage: e.target.files[0] })} /> */}
          <input type="file" id='coverImage' className=' h-10 text-white rounded-lg' onChange={(e) => setCoverImage(e.target.files[0])} />

        </div>
        {/*Password  */}
        <input type="password" id='password' required placeholder="  Enter Your Password" className='h-10 text-black rounded-lg' value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
        <button onClick={handleRegistration} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-lg'>Sign up</button>
      </div>
    </div>
  );
};

export default RegisterForm;


