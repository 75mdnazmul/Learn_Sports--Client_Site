import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import usePageTitleName from "../../Hook/PageTitleName/PageTitleName";

const MyCourses = () => {
  usePageTitleName('My Courses | Instructor')
  const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  const { data: allCourse = [], refetch } = useQuery(['allCourses'], async () => {
    const res = await axiosSecure.get(`/myCourse/${user?.email}`)
    return res.data;
  })
  //  handle Delete
  const handleDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/myCourse/${id}`, {
          method: 'DELETE'
        })
          .then(data => {
            if (data.data.deletedCount) {
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
              )
              refetch()
            }
          })
      }
    })
  }
  console.log(allCourse);
  return (
    <>
      <div>
        <h2 className="text-black text-2xl font-bold mb-5">
          Totall Courses : {allCourse.length}
        </h2>
      </div>
      <hr />
      <div className="border-2 w-2/3">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Stutus</th>
                <th>FeedBack</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allCourse.map((Courses, i) => (
                <tr key={Courses._id} className="bg-base-200">
                  <th>{i + 1}</th>
                  <td>
                    <img className="w-12 h-12" src={Courses.imageURL} alt="" />
                  </td>
                  <td>{Courses.courseName}</td>
                  <td>{Courses?.stutus}</td>
                  <td>{Courses?.feedback}</td>
                  <td><button onClick={() => handleDelete(Courses._id)} className="btn btn-square bg-indigo-200">
                    <FaTrash></FaTrash>
                  </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
