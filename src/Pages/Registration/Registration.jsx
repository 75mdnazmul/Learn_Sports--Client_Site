import React, { useContext, useEffect, useState } from 'react';
import registerImg from "../../assets/Login & resister/register.webp"
import usePageTitleName from '../../Hook/PageTitleName/PageTitleName';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Registration = () => {
    usePageTitleName('Registration page')

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    const [registerIn, setRegisterIn] = useState(false);

    const from = location.state?.from?.pathname || '/';

    const { loginWithGoogle, createUser, setName, setPhoto } = useContext(AuthContext)

    // --------------------------------- login with google --------------------------------//
    const handleGoogleSignUp = () => {
        loginWithGoogle()
            .then(result => {
                const google = result.user;
                console.log(google);
                navigate(from, { replace: true })
                setSuccess("Registration is successfully completed")
                setRegisterIn(true)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // ---------------------------- login with email and password ----------------------------//
    const handleFormData = event => {
        event.preventDefault();
        setSuccess('')
        setError("")
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;
        const photo = form.photo.value;
        console.log(confirmPass);

        if (password.length < 6) {
            setError('Password must be at least 6 cheracters.')
            return;
        }
        // else if(password !== confirmPass) {
        //     setError('Password does not match with Confirm password.')
        //     return;
        // }
        // else if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //     setError('Please add at least two uppercase letter.')
        //     return;
        // }
        // else if(!/(?=.*[!@#$&*])/.test(password)) {
        //     setError('Please add a special character or symbol.')
        //     return;
        // }


        createUser(email, password)
            .then(result => {
                const userLogged = result.user;
                console.log(userLogged);
                form.reset();
                navigate(from, { replace: true })
                setSuccess("Registration is successfully completed")
                setRegisterIn(true)
                setName(name)
                setPhoto(photo)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // Sweet Alert
    useEffect(() => {
        if (registerIn) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registration is successfully completed',
                showConfirmButton: false,
                timer: 3000
              })
        }
      }, [registerIn]);

    // Password Toggle handle
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleTogglePass = () => {
        setOpen(!open)
    }
    const handleToggleConPass = () => {
        setOpen2(!open2)
    }
    return (
        <div className="hero py-32">
            <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                <form onSubmit={handleFormData} className="w-1/2 card shadow-2xl max-w-lg  bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Write your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="Write your email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type={(open === false) ? 'password' : 'text'} placeholder=" Write your password" className="input input-bordered" required/>
                            <span className='absolute right-4 bottom-3 text-xl cursor-pointer' onClick={handleTogglePass}>{
                                (open === false) ? <FaEye /> : <FaEyeSlash />
                            }</span>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name='confirmPass' type={(open2 === false) ? 'password' : 'text'} placeholder="Again Write your password" className="input input-bordered" required/>
                            <span className='absolute right-4 bottom-3 text-xl cursor-pointer' onClick={handleToggleConPass}>{
                                (open2 === false) ? <FaEye /> : <FaEyeSlash />
                            }</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="url" placeholder="Enter your Photo URL" className="input input-bordered" required/>
                        </div>
                        <p className='font-bold text-lg text-red-500 text-center'>{error}</p>
                        <p className='font-bold text-lg text-[#F7B501] text-center'>{success}</p>
                        <div className="form-control">
                            <button type="submit" className="btn btn-primary hover:bg-[#F7B501] hover:rounded-full">Submit</button>
                        </div>
                        <h2 className='text-center pt-3'>Or Register with</h2>                            <div className='text-center'>
                            <button onClick={handleGoogleSignUp} className='p-3 text-white text-5xl mx-auto border-0 flex items-center'><FaGoogle /><span className='text-xl'>oogle</span></button>
                        </div>
                        <p className='text-center pt-3 mb-0 text-lg'>Already have an account ? Then <Link to="/login" className='underline font-bold hover:text-[#F7B501]'>Login</Link></p>
                    </div>
                </form>
                <div className="w-1/2 text-center ps-20">
                    <h1 className="text-5xl text-slate-700 font-bold">Register now!</h1>
                    <img className='w-[1000px] h-[700px]' src={registerImg} alt="Logo Image" />
                </div>
            </div>
        </div>
    );
};

export default Registration;