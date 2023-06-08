import React, { useState } from 'react';
import loginImg from "../../assets/Login & resister/login.webp"
import usePageTitleName from '../../Hook/PageTitleName/PageTitleName';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';


const Login = () => {
    usePageTitleName('Login Page')
    const [open, setOpen] = useState(false);

    const handleToggle = () =>{
        setOpen(!open)
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col justify-around lg:flex-row-reverse">
                    <div className="w-1/2 text-center ps-20">
                        <h1 className="text-5xl pb-10 text-slate-700 font-bold">Login now!</h1>
                        <img src={loginImg} alt="Logo Image" />
                    </div>
                    <div className="w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <label className="label ">
                                    <span className="label-text">Password</span>                                    
                                </label>
                                <input type='' placeholder="password" className="input input-bordered " />
                                <span className='absolute right-4 bottom-3 text-xl cursor-pointer' onClick={handleToggle}>{
                                    (open === false) ? <FaEye/> : <FaEyeSlash/>
                                }</span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary hover:bg-[#F7B501]">Login</button>
                            </div>
                            <h2 className='text-center pt-3'>Or Login with</h2>
                            <div className='text-center'>
                                <button className='p-3 text-white text-5xl mx-auto border-0 flex items-center'><FaGoogle/><span className='text-xl'>oogle</span></button>
                            </div>
                            <p className='text-center pt-3 mb-0 text-lg'>Do not have an account ? Then <Link to="/registration" className='underline font-bold hover:text-[#F7B501]'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;