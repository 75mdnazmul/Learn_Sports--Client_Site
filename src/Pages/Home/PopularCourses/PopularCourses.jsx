import React, { useEffect, useState } from 'react';
import Container from '../../Shared/Container/Container';
import { Link } from 'react-router-dom';

const PopularCourses = () => {
    // Popular Courses information form DataBase
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    // Sort and get the top 6 classes based on the number of students
    const sortedCourses = courses.sort((a, b) => b.students - a.students).slice(0, 6);
    return (
        <Container>
            <div className='mt-20 mb-40'>
                <h2 className='text-[42px] text-center my-12 text-slate-800 font-bold'>Popular Courses</h2>
                <div className="grid grid-cols-3 gap-5">
                    {sortedCourses.map(course => (
                        <div key={course._id} className="card w-96 text-black shadow-2xl">
                            <figure><img className='h-[250px] w-full' src={course.image} alt="Shoes" /></figure>
                            <div className="card-body relative">
                                <h2 className="card-title text-3xl font-bold">{course.name}</h2>
                                <p className='font-bold pt-5'>Instructor : <span className='text-xl text-[#5616c5]'>{course.instructor}</span></p>
                                <p className='font-bold'>Number of Students : <span className='text-lg text-[#5616c5]'>{course.num_students}</span></p>
                                <p className='font-bold'>Available Seats : <span className='text-lg text-[#5616c5]'>{course.available_seats}</span></p>
                                <p className='absolute top-10 right-5 text-white rounded-xl font-bold py-1 px-2 bg-[#f7b919]'>Course Fee : <span className='text-xl'>{course.price}</span>$</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary hover:rounded-full active:bg-[#F7B919] border-0">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-16'>
                    <Link to='/courses'>
                        <button className='py-2 px-3 rounded-lg hover:rounded-full bg-[#F7B919] text-white font-bold text-xl active:bg-[#5616c5]'>Show more</button>
                    </Link>
                </div>
            </div>

        </Container>
    );
};

export default PopularCourses;


{/* <div key={cls.name} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img className="w-full" src={cls.image} alt={cls.name} />
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{cls.name}</div>
        <p className="text-gray-700 text-base">Number of Students: {cls.students}</p>
    </div>
</div> */}