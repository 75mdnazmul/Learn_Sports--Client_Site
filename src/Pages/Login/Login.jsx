import React, { useContext, useEffect, useState } from 'react';
import loginImg from "../../assets/Login & resister/login.webp"
import usePageTitleName from '../../Hook/PageTitleName/PageTitleName';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    usePageTitleName('Login Page')
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    const [loggedIn, setLoggedIn] = useState(false);
    const from = location.state?.from?.pathname || '/';

    const { logIn, loginWithGoogle } = useContext(AuthContext)

    const handleLoginForm = event => {
        event.preventDefault();
        setSuccess("")
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    // ---------------------------- login with email and password ----------------------------//

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset()
                navigate(from, { replace: true })
                setSuccess("Login is successfully completed")
                setLoggedIn(true)
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    // --------------------------------- login with google --------------------------------//
    const handleGoogleLogIn = () => {
        loginWithGoogle()
            .then(result => {
                const Google = result.user
                console.log(Google);
                navigate(from, { replace: true })
                setSuccess("Google Login is successfully completed")
                setLoggedIn(true)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // Sweet Alert
    useEffect(() => {
        if (loggedIn) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login is successfully completed',
                showConfirmButton: false,
                timer: 3000
              })
        }
      }, [loggedIn]);

    // Password Show Hide Toggle handle
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className="hero min-h-screen py-32">
                <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
                    <div className="w-1/2 text-center ps-20">
                        <h1 className="text-5xl pb-10 text-slate-700 font-bold">Login now!</h1>
                        <img className='w-[1000px] h-[600px]' src={loginImg} alt="Logo Image" />
                    </div>
                    <form onSubmit={handleLoginForm} className="w-1/2 shadow-2xl card flex-shrink-0 max-w-sm bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control relative">
                                <label className="label ">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={(open === false) ? 'password' : 'text'} name='password'placeholder="password" className="input input-bordered " required/>
                                <span className='absolute right-4 bottom-3 text-xl cursor-pointer' onClick={handleToggle}>{
                                    (open === false) ? <FaEye /> : <FaEyeSlash />
                                }</span>
                            </div>
                            <p className='font-bold text-lg text-red-500 text-center'>{error}</p>
                            <p className='font-bold text-lg text-[#F7B501] text-center'>{success}</p>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary hover:bg-[#F7B501] hover:rounded-full">Login</button>
                            </div>
                            <h2 className='text-center pt-3'>Or Login with</h2>
                            <div className='text-center'>
                                <button onClick={handleGoogleLogIn} className='p-3 text-white text-5xl mx-auto border-0 flex items-center'><FaGoogle /><span className='text-xl'>oogle</span></button>
                            </div>
                            <p className='text-center pt-3 mb-0 text-lg'>Do not have an account ? Then <Link to="/registration" className='underline font-bold hover:text-[#F7B501]'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;