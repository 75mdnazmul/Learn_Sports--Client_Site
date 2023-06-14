import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../public/logo.webp'
import usePageTitleName from '../Hook/PageTitleName/PageTitleName';

const Dashboard = () => {
    usePageTitleName('Dashboard')
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden sm:my-40 md:my-40 my-40">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <Link to='/' className='flex items-center pb-10 p-5'>
                        <img className='w-[50px]' src={logo} alt="" />
                        <h3 className='font-bold text-2xl text-white'>Learn Sports</h3>
                    </Link>
                    {/* Sidebar content here */}
                    <li><Link to="mycourses">My courses</Link></li>
                    <li><Link to="mycourses">My courses</Link></li>
                    <li><Link to="mycourses">My courses</Link></li>
                    <li><Link to="mycourses">My courses</Link></li>
                    <div className='divider'></div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/instructors'>Instructors</Link></li>
                    <li><Link to='/courses'>courses</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;