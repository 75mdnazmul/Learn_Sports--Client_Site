// import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import usePageTitleName from "../../Hook/PageTitleName/PageTitleName";

const AllUsers = () => {
  usePageTitleName('Manage Users | Admin')
  // const [allUsers, setAllUsers] = useState([]);
  let isMakeAdminDisabled = false;
  let isMakeInstructorDisabled = false;

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://learn-sports-server-site-75mdnazmul.vercel.app/users");
    return res.json();
  });
  // useEffect(() => {
  //   fetch("https://learn-sports-server-site-75mdnazmul.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllUsers(data);
  //     });
  // }, []);

  const handleMakeAdmin = (user) => {
    fetch(`https://learn-sports-server-site-75mdnazmul.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: 'admin' })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      isMakeInstructorDisabled = true
  };

  const handleMakeInstructor = (user) => {
    fetch(`https://learn-sports-server-site-75mdnazmul.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ role: 'instructor' })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      isMakeAdminDisabled = true;
  };

  return (
    <>
      <p className="text-black text-2xl font-bold mb-5">Totall Users : {users.length}</p>
      <hr />
      <div className="overflow-x-auto w-3/4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          {users.map((user, i) => (
            <tbody key={i}>
              <tr className="bg-base-200">
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)} disabled={isMakeAdminDisabled} className="btn btn-ghost bg-orange-600">
                    Make Admin
                  </button>
                  )}
                </td>
                <td>
                {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button onClick={() => handleMakeInstructor(user)} disabled={isMakeInstructorDisabled} className="btn btn-ghost bg-orange-600">
                    Make Instructor
                  </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default AllUsers;
