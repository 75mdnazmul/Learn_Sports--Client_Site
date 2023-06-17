import React, { useContext, useState } from 'react';
import registerImg from "../../assets/Login & resister/register.webp"
import { useForm } from "react-hook-form";
import usePageTitleName from '../../Hook/PageTitleName/PageTitleName';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Registration = () => {
    usePageTitleName('Registration page')
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();


    const { createUser, updateUserProfile } = useContext(AuthContext)

    // -------------------- login with email and password -------------------------//
    const password = watch("password");
    const onSubmit = (data) => {
        console.log(data.name);
        createUser(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);

            // updateUserProfile(data.name, data.photoURL);
            updateUserProfile(data.name, data.photoURL).then(() => {
                const saveUser = { name: data.name, email: data.email, photo: data.photoURL, role: 'student' };
                console.log(saveUser);
                fetch("https://learn-sports-server-site-75mdnazmul.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(saveUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            reset();
                            // Sweet Alert
                            Swal.fire(
                                'Welcome!',
                                'Your Registation Succesfull !',
                                'success'
                            )
                            navigate("/");
                        }
                    })
                    .catch((error) => console.log(error));
            });
        });
    };

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
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 card shadow-2xl max-w-lg  bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" name='name' placeholder="Write your Name" className="input input-bordered" required />
                            {errors.name && (
                                <span className="font-bold text-lg text-red-500 text-center">Name is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} name='email' type="text" placeholder="Write your email" className="input input-bordered" required />{" "}
                            {errors.email && (
                                <span className="font-bold text-lg text-red-500 text-center">Email is required</span>
                            )}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern:
                                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                })}
                                name='password' type={(open === false) ? 'password' : 'text'} placeholder=" Write your password" className="input input-bordered" required />
                            {errors.password?.type === "required" && (
                                <p className="font-bold text-lg text-red-500 text-center">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="font-bold text-lg text-red-500 text-center">
                                    Password must be 6 characters
                                </p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="font-bold text-lg text-red-500 text-center">
                                    Password must be less than 20 characters
                                </p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="font-bold text-lg text-red-500 text-center">
                                    Password must have one Uppercase one lower case, one
                                    number and one special character.
                                </p>
                            )}
                            <span className='absolute right-4 bottom-3 text-xl cursor-pointer' onClick={handleTogglePass}>{
                                (open === false) ? <FaEye /> : <FaEyeSlash />
                            }</span>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                })} name='confirmPassword' type={(open2 === false) ? 'password' : 'text'} placeholder="Again Write your password" className="input input-bordered" required />
                            {errors.confirmPassword?.type && (
                                <span className="font-bold text-lg text-red-500 text-center">
                                    {errors.confirmPassword.message}
                                </span>
                            )}
                            <span className='absolute right-4 bottom-3 text-xl cursor-pointer' onClick={handleToggleConPass}>{
                                (open2 === false) ? <FaEye /> : <FaEyeSlash />
                            }</span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photoURL", { required: true })} name='photoURL' type="text" placeholder="Enter your Photo URL" className="input input-bordered" required />
                            {errors.photoURL && (
                                <span className="font-bold text-lg text-red-500 text-center">Photo URL is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <button type="submit" className="btn btn-primary hover:bg-[#F7B501] hover:rounded-full">Submit</button>
                        </div>
                        <h2 className='text-center pt-3'>Or Register with</h2>
                        <SocialLogin></SocialLogin>
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
}

export default Registration;