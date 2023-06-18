import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container/Container';

const AllInstructors = () => {
    // Popular instructors information form DataBase
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('https://learn-sports-server-site-75mdnazmul.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    // For loading
    if (instructors.length === 0) {
        return (
            <div className="flex items-center justify-center h-[100vh]">
                <span className="loading loading-spinner w-[50px] text-warning"></span>
            </div>
        );
    }
    // Sort and get the top 6 courses based on the number of students
    const sortedInstructors = instructors.sort((a, b) => b.num_students - a.num_students);
    return (
        <Container>
            <div className='mt-40 mb-40'>
                <h2 className='text-[42px] text-center my-12 text-slate-800 font-bold'>All Sports Instructors</h2>
                <div className="grid grid-cols-3 gap-5">
                    {sortedInstructors.map(instructor => (
                        <div key={instructor._id} className={'card w-96 text-black shadow-2xl'}>
                            <figure><img className='h-[250px] w-full' src={instructor.image} alt="Shoes" /></figure>
                            <div className="card-body relative">
                                <h2 className="card-title text-3xl font-bold">{instructor.name}</h2>
                                <p className='font-bold'>Email : <span className='text-lg text-[#5616c5]'>{instructor.email}</span></p>
                                <p className='font-bold'>Number of Students : <span className='text-lg text-[#5616c5]'>{instructor.num_students}</span></p>
                                <p className='font-bold'>Number of Classes : <span className='text-lg text-[#5616c5]'>{instructor.num_classes}</span></p>
                                <p className='font-bold'>Class is Taken : <span className='text-lg text-[#5616c5]'>{instructor.classes_taken}</span></p>
                                <div className="card-actions">
                                    <button
                                        className={`btn btn-primary w-full hover:rounded-full active:bg-[#F7B919] border-0`}
                                    >See Classes</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AllInstructors;