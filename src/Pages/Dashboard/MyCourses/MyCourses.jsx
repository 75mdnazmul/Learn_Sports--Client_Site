import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyCourses = () => {
  const { user } = useAuth();
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allCourses/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCourses(data);
      });
  }, []);
  return (
    <>
      <div>
        <h2 className="my-4 text-2xl font-semibold">
          Totall classess : {myCourses.length}
        </h2>
      </div>
      <hr />
      <div className="border-2 w-1/2">
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
              </tr>
            </thead>
            <tbody>
              {myCourses.map((courses, i) => (
                <tr key={courses._id} className="bg-base-200">
                  <th>{i + 1}</th>
                  <td>
                    <img className="w-12 h-12" src={courses.imageURL} alt="" />
                  </td>
                  <td>{courses.className}</td>
                  <td>{courses.stutus}</td>
                  <td>{""}</td>
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
