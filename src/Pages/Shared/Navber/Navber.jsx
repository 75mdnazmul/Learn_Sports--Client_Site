import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.webp'
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navber = () => {
    const { user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
        Swal.fire({
            position: 'top right',
            icon: 'success',
            title: 'Now you are logged out from this site.',
            showConfirmButton: false,
            timer: 3000
        })
    }

    return (
        <div className="fixed top-0 w-full z-10 shadow-xl navbar bg-base-100 bg-opacity-70 hover:bg-opacity-100">
            <div className='container mx-auto navbar'>
                <div className=" navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <Link to='/' className='flex items-center'>
                        <img className='w-[50px]' src={logo} alt="" />
                        <h3 className='font-bold text-2xl text-white'>Learn Sports</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white text-lg font-bold">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allCourses'>Courses</Link></li>
                        <li><Link to='/allInstructors'>Instructors</Link></li>
                        {
                            user?.email && <>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                            </>
                        }
                        <li><Link to='/error'>Error page</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <img
                                src={user?.photoURL}

                                title={user.displayName}
                                alt=""
                                className="w-20 h-16 rounded-full mr-4 "
                            />
                            <Link onClick={handleLogOut} to="/" className="btn">
                                Log Out
                            </Link> </>
                    ) : (
                        <Link to="/login" className="btn">
                            Login
                        </Link>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Navber;