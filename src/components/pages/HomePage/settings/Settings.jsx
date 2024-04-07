import React, { useState } from 'react'

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import axios from 'axios';

export default function Settings() {
    let initialUserDetails = {
        username: '',
        fullname: '',
        email: ''
    }
    let intialPasswords = {
        oldPassword: '',
        newPassword: ''

    }
    let intialFiles = {
        avatar: null,
        coverImage: null
    }
    const [userdetails, setuserdetails] = useState(initialUserDetails)
    const [passwords, setPasswords] = useState(intialPasswords)
    const [files, setFiles] = useState(intialFiles)

    function updateUserDetails() {

        const formData = new FormData()

        Object.entries(userdetails).forEach(([key, value]) => {
            formData.append(key, value)
        })

        const updateDetails = async () => {
            try {

                const detailsResponse = await axios.patch(`/api/v1/users/update-account`, {
                    formData
                })
                if (detailsResponse.data.status === 200) {
                    document.getElementById('detail-responce').innerHTML = 'Details updated succesfully'
                }
                else {
                    document.getElementById('detail-responce').style.color = 'red'
                    document.getElementById('detail-responce').innerHTML = 'Failed to update details'
                }
            }
            catch (e) {
                console.log(e)
            }
        }
        updateDetails()

    }

    function updateUserPassword() {
        const updatePassword = async () => {

            const formData = new FormData()
            Object.entries(passwords).forEach(([key, value]) => {
                formData.append(key, value)
            })
            try {
                const passwordResponce = await axios.patch('/api/v1/users/change-password', {
                    formData
                })
                if (passwordResponce.data.status === 200) {
                    document.getElementById('password-responce').innerHTML = 'updated password succesfully'
                }
                else {
                    document.getElementById('password-responce').style.color = 'red'
                    document.getElementById('password-responce').innerHTML = 'Failed to update password'
                }
            }
            catch (e) {

            }
        }
        updatePassword()
    }

    const updateAvatar = async () => {
        const formData = new FormData()
        Object.entries(files.avatar).formData.append(key, value)

        try {
            const avatarResponsce = await axios.patch('/api/v1/users/avatar', {
                formData
            })
            if (avatarResponsce.data.status === 200) {
                document.getElementById('avatar-responce').innerHTML = 'updated password succesfully'
            }
            else {
                document.getElementById('avatar-responce').style.color = 'red'
                document.getElementById('avatar-responce').innerHTML = 'Failed to update password'
            }
        }
        catch (e) {
            console.log(e)
        }
    }


    const coverImageUpdate = async () => {
        const formData = new FormData()
        Object.entries(files.avatar).formData.append(key, value)

        try {
            const avatarResponsce = await axios.patch('/api/v1/users/cover-image', {
                formData
            })
            if (avatarResponsce.data.status === 200) {
                document.getElementById('cover-responce').innerHTML = 'updated password succesfully'
            }
            else {
                document.getElementById('cover-responce').style.color = 'red'
                document.getElementById('cover-responce').innerHTML = 'Failed to update password'
            }
        }
        catch (e) {
            console.log(e)
        }
    }



    return (
        <div className=' flex justify-center content-center w-lvw '>

            <Card color="transparent" shadow={false} >

                {/* DETAILS_UPDATE */}
                <Typography variant="h4" className=' text-gray-200'>
                    Update Account Details
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="indigo" className="-mb-3  text-blue-100">
                            Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="xyz@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-300"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => { setuserdetails({ ...userdetails, email: e.target.value }) }}
                        />
                        <Typography variant="h6" color="" className="-mb-3 text-blue-100">
                            Username
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Enter your Username"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  text-gray-300"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => { setuserdetails({ ...userdetails, username: e.target.value }) }}

                        />
                        <Typography variant="h6" color="indigo" className="-mb-3  text-blue-100">
                            Fullname
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Enter your fullname"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  text-gray-300"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => { setuserdetails({ ...userdetails, fullname: e.target.value }) }}
                        />

                        <span id='detail-responce' className=' text-green-200 '> </span>
                        <Button className="mt-6" fullWidth onClick={updateUserDetails}>
                            Submit
                        </Button>


                        {/* PASSWORD_UPDATE */}
                        <Typography variant="h4" color='' className=' text-gray-200'>
                            Update User Password
                        </Typography>
                        <Typography variant="h6" color="blue-gray" className="-mb-3  text-blue-100">
                            Old Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="Enter Your new Password"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  text-gray-300 "
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => { setPasswords({ ...passwords, oldPassword: e.target.value }) }}

                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3  text-blue-100">
                            New Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="Enter Your new Password"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900  text-gray-300 "
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => { setPasswords({ ...passwords, newPassword: e.target.value }) }}

                        />
                        <span id='detail-responce' className=' text-green-200 '> </span>
                    </div>

                    <span id='password-responce' className=' text-green-200 '> </span>
                    <Button className="mt-6" fullWidth onClick={updateUserPassword}>
                        Update Password
                    </Button>

                    {/* FILES_UPDATE */}
                    <div className=' mt-12'>

                        <Typography variant="h4" color="orange" className=' text-gray-200'>
                            Update Avatar
                        </Typography>

                        <Input
                            type="file"
                            size="lg"
                            placeholder="Enter Your new Password"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => setFiles({ ...files, avatar: e.target.files[0] })}

                        />
                        <span id='avatar-responce' className=' text-green-200 '> </span>
                        <Button className="mt-6" fullWidth onClick={updateAvatar}>
                            Upload
                        </Button>

                        <Typography variant="h4" color="orange" className=' text-gray-200'>
                            Update Cover-Image
                        </Typography>
                        <Input
                            type="file"
                            size="lg"
                            placeholder="Enter Your new Password"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => setFiles({ ...files, coverImage: e.target.files[0] })}

                        />
                        <span id='cover-responce' className=' text-green-200 '> </span>
                        <Button className="mt-6" fullWidth onClick={coverImageUpdate}>
                            Upload
                        </Button>
                    </div>
                </form>

            </Card>
        </div>

    );
}