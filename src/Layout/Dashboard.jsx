import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../public/logo.webp'
import { FaBookOpen, FaBookReader, FaHome, FaUsers } from "react-icons/fa";
import usePageTitleName from '../Hook/PageTitleName/PageTitleName';
import useAdmin from '../Hook/useAdmin';
import useInstructor from '../Hook/useInstructors';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {
    usePageTitleName('Dashboard')
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    // const [isInstructor] = useInstructor()
    const isInstructor = false;

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
                    <li>
                        <NavLink to="/">
                            <span className="text-lg font-bold hover:text-white active:text-[#F7B919] flex gap-x-2 items-center"><FaHome></FaHome> Home </span>
                        </NavLink>
                    </li>
                    <div className="divider "></div>
                    {/* Sidebar content here */}
                    {user && isAdmin ? (
                        <>
                            <li>
                                <img className="w-24 rounded-full" src={user.photoURL} alt="" />
                            </li>
                            <li className="text-xl my-5">{user.email}</li>
                            <li className="text-2xl font-bold text-white">Admin</li> <br />
                            <li>
                                <Link to="manage-class">
                                    <span className="font-bold hover:text-white active:text-[#F7B919] flex gap-x-2 items-center"><FaBookReader></FaBookReader> Manage Courses </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="allusers">
                                    <span className="font-bold hover:text-white active:text-[#F7B919] flex gap-x-2 items-center"><FaUsers></FaUsers> Manage Users </span>
                                </Link>
                            </li>
                        </>
                    ) : user && isInstructor ? (
                        <>
                            <li>
                                <img className="w-24 rounded-full" src={user.photoURL} alt="" />
                            </li>
                            <li className="text-xl my-5">{user.email}</li>
                            <li className="text-2xl font-bold text-white">Instructor </li> <br />
                            <li>
                                <Link to="addCourses">
                                    <span className="font-bold hover:text-white active:text-[#F7B919] flex gap-x-2 items-center"><FaBookReader></FaBookReader> Add A Courses </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="myCourses">
                                    <span className="font-bold hover:text-white active:text-[#F7B919] flex gap-x-2 items-center"><FaBookOpen></FaBookOpen> My Courses </span>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <img className="w-24 rounded-full" src={user.photoURL} alt="" />
                            </li>
                            <li className="text-xl my-5">{user.email}</li>
                            <li className="text-2xl font-bold text-white">Student</li><br />
                            <li>
                                <Link to="selectedCourse">
                                    <span className="font-bold hover:text-white active:text-[#F7B919] flex gap-x-2 items-center "><FaBookReader></FaBookReader> My Selected Courses</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="enrolledCourse">
                                    <span className="font-bold hover:text-white active:text-[#F7B919] flex gap-x-2 items-center"><FaUsers></FaUsers> My Enrolled Courses</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="paymentHistory">
                                    <span className="font-bold hover:text-white active:text-[#F7B919] flex gap-x-2 items-center"><FaUsers></FaUsers> Payment History</span>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;