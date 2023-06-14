import React, {useEffect, useState} from 'react';
import Container from '../Shared/Container/Container';

const AllCourses = () => {
    // Popular courses information form DataBase
    const [courses, setcourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
            .then(data => {
                setcourses(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    
    if (courses.length === 0) {
        return (
          <div className="flex items-center justify-center h-[100vh]">
            <span className="loading loading-spinner w-[50px] text-warning"></span>
          </div>
        );
      }
    return (
        <Container>
            <div className='mt-40 mb-40'>
                <h2 className='text-[42px] text-center my-12 text-slate-800 font-bold'>Popular Sports Courses</h2>
                <div className="grid grid-cols-3 gap-5">
                    {courses.map(course => (
                        <div key={course._id} className={`card w-96 text-black shadow-2xl ${course.available_seats === 0 ? 'bg-red-300' : ''}`}>
                            <figure><img className='h-[250px] w-full' src={course.image} alt="Shoes" /></figure>
                            <div className="card-body relative">
                                <h2 className="card-title text-3xl font-bold">{course.name}</h2>
                                <p className='font-bold pt-5'>Instructor : <span className='text-xl text-[#5616c5]'>{course.instructor}</span></p>
                                <p className='font-bold'>Number of Students : <span className='text-lg text-[#5616c5]'>{course.num_students}</span></p>
                                <p className='font-bold'>Available Seats :
                                    <span className='text-lg text-[#5616c5]'> {course.available_seats}  <span className='text-red-500 text-md'>
                                        {`${course.available_seats === 0 ? "( No seats available )" : ''}`}
                                    </span>
                                    </span>
                                </p>
                                <p className='absolute top-10 right-5 text-white rounded-xl font-bold py-1 px-2 bg-[#f7b919]'>Class Fee : <span className='text-xl'>{course.price}</span>$</p>
                                <div className="card-actions justify-end">
                                    <button
                                        className={`btn btn-primary hover:rounded-full active:bg-[#F7B919] border-0 ${course.available_seats === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Container>
    );
};

export default AllCourses;