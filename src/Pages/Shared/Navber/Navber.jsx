import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.webp'

const Navber = () => {
    return (
        <div className=" navbar bg-base-100 py-3">
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
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/classes'>Classes</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='btn text-white text-lg font-bold'>Login</Link>
                </div>
            </div>

        </div>
    );
};

export default Navber;