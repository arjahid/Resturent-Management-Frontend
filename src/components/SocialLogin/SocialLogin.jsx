import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiousPublic from '../../Hooks/useAxiousPublic';

const SocialLogin = () => {
    const {googleSignIn}=useAuth()
    const navigate=useNavigate()

    const axiousPublic=useAxiousPublic()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const userInfo={
                    email:result.user?.email,
                    name:result.user?.displayName,
                }
                axiousPublic.post('/users',userInfo)
                .then(res=>{
                    console.log(res.data);
                    alert("User Login Successfully");
                navigate('/');
                })
                
                // Handle successful login here (e.g., navigate to a different page)
            })
            .catch((error) => {
                console.error("Error during Google sign-in:", error);
                // Handle error here (e.g., show an error message)
            });
    }
     return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-neutral w-full bg-green-800'>
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;