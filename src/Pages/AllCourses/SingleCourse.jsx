import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const [error, setError] = useState("");

    const { _id, name, image, instructor, num_students, available_seats, price } = course;
    const handleSelect = () => {
        const selected = {
            instructor,
            availableSeat: parseInt(available_seats),
            price,
            name,
            image,
            user: user?.email,
        };

        axiosSecure
            .post("/select", selected)
            .then((response) => {
                console.log(response);
                if (response.data.insertedId) {
                    Swal.fire("", "Class Added!", "success");
                }
            })
            .catch((error) => {
                setError(error);
                toast.warn("Allready added !", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 500,
                });
            });
    };
    return (
        <div className={`card w-96 text-black shadow-2xl ${available_seats === 0 ? 'bg-red-300' : ''}`}>
            <figure><img className='h-[250px] w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body relative">
                <h2 className="card-title text-3xl font-bold">{name}</h2>
                <p className='font-bold pt-5'>Instructor : <span className='text-xl text-[#5616c5]'>{instructor}</span></p>
                <p className='font-bold'>Number of Students : <span className='text-lg text-[#5616c5]'>{num_students}</span></p>
                <p className='font-bold'>Available Seats :
                    <span className='text-lg text-[#5616c5]'> {available_seats}  <span className='text-red-500 text-md'>
                        {`${available_seats === 0 ? "( No seats available )" : ''}`}
                    </span>
                    </span>
                </p>
                <p className='absolute top-10 right-5 text-white rounded-xl font-bold py-1 px-2 bg-[#f7b919]'>Course Fee : <span className='text-xl'>{price}</span>$</p>
                <div className="card-actions justify-end">
                    <Link>
                        <button
                            onClick={() => handleSelect(_id)}
                            className={`btn btn-primary hover:rounded-full active:bg-[#F7B919] border-0 ${available_seats === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >Enroll Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;