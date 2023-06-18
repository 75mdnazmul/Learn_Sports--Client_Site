import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleCourse from "./SingleCourse";
import Container from "../Shared/Container/Container";

const AllCoursesFromAdd = () => {
    // All Popular Sports Courses information form DataBase
    const [courses, setcourses] = useState([])
    console.log(courses);
    useEffect(() => {
        fetch('http://localhost:5000/AllCoursesFromAdd')
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
    return (
        <Container>
            <div className='mt-40 mb-40'>
                <h2 className='text-[42px] text-center my-12 text-slate-800 font-bold'>All Popular Sports Courses</h2>
                <div className="grid grid-cols-3 gap-5">
                    {courses.map(course => (
                        <SingleCourse key={course._id} course={course}></SingleCourse>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default AllCoursesFromAdd;