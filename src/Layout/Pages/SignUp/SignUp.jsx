import React, { useContext, useState } from 'react';
import './SignUp.css'
import { AuthContext } from '../../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const onSubmit = data => {
        createUser(data?.email, data?.password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                userProfileUpdate(data?.name, data?.photo)
                    .then(() => {
                        const savedUser = {name: data?.name, email: data?.email}
                        fetch('http://localhost:5000/users',{
                            method: "POST",
                            headers:{
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    setError('');
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your Acount successfully Create',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    setTimeout(() => { navigate('/') }, 2000)
                                }
                            })
                    })
                    .catch(error => {
                        setError(error.message);
                    });
            })
            .catch(error => {
                setError(error.message)
            })
    };

    return (
        <>
            <Helmet>
                <title>NISSAN BOSS|Sign Up</title>
            </Helmet>
            <div className='px-24 py-16 bg-image'>
                <div className="flex flex-col md:flex-row justify-center items-center  bg-image bg-shdow  gap-12 px-24 py-24">
                    <div className='w-full'>
                        <h1 className='text-center text-3xl font-bold font-sans'>Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="Type here" className='h-[50px] border-r-2 rounded-lg bg-white border pl-5' />
                                {errors.name && <span className='text-red-600 animate-pulse'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' {...register("photo", { required: true })} placeholder="Paste here phot link" className='h-[50px] border-r-2 rounded-lg bg-white border pl-5' />
                                {errors.photo && <span className='text-red-600 animate-pulse'>Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="Enter Your email" className='h-[50px] border-r-2 rounded-lg bg-white border pl-5' />
                                {errors.email && <span className='text-red-600 animate-pulse'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true, minLength: 6, maxLength: 18 })} placeholder="Enter your password" className='h-[50px] rounded-lg border-r-2 bg-white border pl-5 ' />
                                {errors.password && <span className='text-red-600 animate-pulse'>Password must be six charecters!</span>}
                            </div>
                            <div className="form-control mt-4">
                                <input type="submit" value="Signup" className="bg-[#D1A054] rounded-lg h-[50px] uppercase text-white text-xl text-bold" />
                            </div>
                        </form>
                        <h1 className='mt-3 text-error'>{error}</h1>
                    </div>
                    <div className='w-full'>
                        <img className='w-full' src="https://i.ibb.co/ZWF13Bc/authentication2-1.png" alt="logo" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;