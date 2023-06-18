import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container/Container';
import { Link } from 'react-router-dom';
import SingleCourse from '../../AllCourses/SingleCourse';

const PopularCourses = () => {
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

    // for loading
    if (courses.length === 0) {
        return (
          <div className="flex items-center justify-center h-[100vh]">
            <span className="loading loading-spinner w-[50px] text-warning"></span>
          </div>
        );
      }
    //   // Eroll Now Button implement
    //   const handleEnrollNow = (course) => {
    //     console.log(course);
    //   }

    // Sort and get the top 6 courses based on the number of students
    const sortedcourses = courses.sort((a, b) => b.num_students - a.num_students).slice(0, 6);
    return (
        <Container>
            <div className='mt-20 mb-40'>
                <h2 className='text-[42px] text-center my-12 text-slate-800 font-bold'>Popular Sports Courses</h2>
                <div className="grid grid-cols-3 gap-5">
                    {sortedcourses.map(course => (
                        <SingleCourse key={course._id} course={course}></SingleCourse>
                    ))}
                </div>
                <div className='text-center mt-16'>
                    <Link to='/allCourses'>
                        <button className='py-2 px-3 rounded-lg hover:rounded-full bg-[#F7B919] text-white font-bold text-xl active:bg-[#5616c5]'>Show more</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default PopularCourses;