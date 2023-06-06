import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import './Login.css'
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SosialLogin from '../Shared/SosialLogin/SosialLogin';
const Login = () => {
    const { createUser, singInWithGoogle, singInWithGithub, singIn } = useContext(AuthContext);
    const [diseble, setDiseble] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleDisble = () => {
        setDiseble(false);
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleFormClick = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password)
        singIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'bottom',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
                console.log(result.user);
                setError('');
                form.reset();
                // return;
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }
    const handleValidateCaptcha = (event) => {
        const captchaValue = event.target.value;
        if (validateCaptcha(captchaValue) == true) {
            Swal.fire({
                icon: 'success',
                title: 'validate succesfully not a robot',
            })
            setDiseble(false);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'cpatcha code is not write please type write code',
            })
        }
    }
    return (
        <>
            <Helmet>
                <title>NISSAN BOSS|SignIn</title>
            </Helmet>
            <div className='px-32 py-32 bg-image'>
                <div className="flex flex-col md:flex-row justify-center items-center  bg-image bg-shdow  gap-12 px-24 py-24">
                    <div className='w-full'>
                        <img className='w-full' src="https://i.ibb.co/ZWF13Bc/authentication2-1.png" alt="logo" />
                    </div>
                    <div className='w-full'>
                        <form onSubmit={handleFormClick}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Type here" className='h-[50px] border-r-2 rounded-lg bg-white border pl-5' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="Enter your password" className='h-[50px] rounded-lg border-r-2 bg-white border pl-5 ' />
                            </div>
                            <div className="form-control">
                                <label className='label'>
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="write the text above" className='h-[50px] rounded-lg border-r-2 bg-white border pl-5 ' />
                            </div>

                            <div className="form-control mt-4">
                                <input type="submit" value="Login" className={`${diseble === false ? "bg-[#D1A054] rounded-lg h-[50px] uppercase text-white text-xl text-bold" : 'btn btn-disabled'}`} />
                            </div>
                        </form>
                        <p className='text-lg text-center mt-4 text-success'><Link to='/singup' className='btn btn-link text-success'>New here?Create a New Account</Link></p>
                        <p className='text-lg text-center mt-2 mb-3 '>Or sign in with</p>
                         <SosialLogin></SosialLogin>
                        <h1 className='text-center text-2xl overflow-y-auto mt-6'>{error}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;