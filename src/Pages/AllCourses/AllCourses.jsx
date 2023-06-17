import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container/Container';
import { Link } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const AllCourses = () => {
    // Popular courses information form DataBase
    const [courses, setcourses] = useState([])
    useEffect(() => {
        fetch('https://learn-sports-server-site-75mdnazmul.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setcourses(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    // For Loading
    if (courses.length === 0) {
        return (
            <div className="flex items-center justify-center h-[100vh]">
                <span className="loading loading-spinner w-[50px] text-warning"></span>
            </div>
        );
    }
    // Sort and get the top 6 courses based on the number of students
    const sortedcourses = courses.sort((a, b) => b.num_students - a.num_students);

    return (
        <Container>
            <div className='mt-40 mb-40'>
                <h2 className='text-[42px] text-center my-12 text-slate-800 font-bold'>Popular Sports Courses</h2>
                <div className="grid grid-cols-3 gap-5">
                    {sortedcourses.map(course => (
                        <SingleCourse key={course._id} course={course}></SingleCourse>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AllCourses;