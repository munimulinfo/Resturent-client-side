import React from 'react';
import { useContext } from 'react';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const SosialLogin = () => {
    const { singInWithGoogle, singInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                const savedUser = {name: loggedUser?.displayName, email: loggedUser?.email}
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then( () => {
                            Swal.fire({
                                icon: 'success',
                                title: 'login succesfull',
                                showConfirmButton: false,
                                timer: 2000
                            })
                            navigate(from, { replace: true });
                    })
            })
            .catch(err => {
                console.log(err);
            })
    };
    const handleGithubSignIn = () => {
        singInWithGithub()
            .then(result => {
                const logUser = result.user;
                console.log(logUser);
                Swal.fire({
                    icon: 'success',
                    title: 'login succesfull',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='flex justify-center items-center gap-12'>
            <button className='text-4xl border border-black rounded-full p-2 text-blue-500'><FaFacebookF></FaFacebookF></button>
            <button onClick={handleGoogleSignIn} className='text-4xl border border-black rounded-full p-2 text-lime-500 '><FaGoogle></FaGoogle></button>
            <button onClick={handleGithubSignIn} className='text-4xl border border-black rounded-full p-2 text-gray-600 '><FaGithub></FaGithub></button>
        </div>
    );
};

export default SosialLogin;