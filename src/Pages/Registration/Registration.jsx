import React, { useState } from 'react';
import loginImg from "../../assets/Login & resister/register.webp"
import usePageTitleName from '../../Hook/PageTitleName/PageTitleName';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Registration = () => {
    usePageTitleName('Registration page')
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleTogglePass = () =>{
        setOpen(!open)
    }
    const handleToggleConPass = () =>{
        setOpen2(!open2)
    }
    return (
            <div className="hero py-10">
                <div className="hero-content flex-col justify-around lg:flex-row-reverse">
                    <div className="w-1/2 card  max-w-lg  bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Write your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Write your email" className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={(open === false) ? 'password' : 'text'} placeholder=" Write your password" className="input input-bordered" />
                                <span className='absolute right-4 bottom-3 text-xl cursor-pointer' onClick={handleTogglePass}>{
                                    (open === false) ? <FaEye/> : <FaEyeSlash/>
                                }</span>
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={(open2 === false) ? 'password' : 'text'} placeholder="Again Write your password" className="input input-bordered" />
                                <span className='absolute right-4 bottom-3 text-xl cursor-pointer' onClick={handleToggleConPass}>{
                                    (open2 === false) ? <FaEye/> : <FaEyeSlash/>
                                }</span>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" placeholder="Enter your Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary hover:bg-[#F7B501]">submit</button>
                            </div>
                            <h2 className='text-center pt-3'>Or Register with</h2>                            <div className='text-center'>
                                <button className='p-3 text-white text-5xl mx-auto border-0 flex items-center'><FaGoogle/><span className='text-xl'>oogle</span></button>
                            </div>
                            <p className='text-center pt-3 mb-0 text-lg'>Already have an account ? Then <Link to="/login" className='underline font-bold hover:text-[#F7B501]'>Login</Link></p>
                        </div>
                    </div>
                    <div className="w-1/2 text-center ps-20">
                        <h1 className="text-5xl pb-10 text-slate-700 font-bold">Register now!</h1>
                        <img src={loginImg} alt="Logo Image" />
                    </div>
                </div>
            </div>
    );
};

export default Registration;