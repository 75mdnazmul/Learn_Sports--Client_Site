import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import usePageTitleName from "../../Hook/PageTitleName/PageTitleName";

const AddCourses = () => {
  usePageTitleName('Add A Courses | Instructor')
  const { user } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const addCourses = { InstructorName: data.InstructorName, availableSeat: data.availableSeat, courseName: data.courseName, email: data.email, imageURL: data.imageURL, price: parseInt(data.price), stutus: 'pending' };
    fetch("https://learn-sports-server-site-75mdnazmul.vercel.app/addCourse", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCourses),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire(
            'Thank you!',
            'Your Class Added !',
            'success'
          )
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-full px-4 md:px-20">
      <h3 className="text-center text-2xl font-semibold py-4">
        Add Your Class Here
      </h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:grid grid-cols-2 grid-rows-5 gap-4">
            <div>
              <p className="font-semibold py-2">Course Name *</p>
              <input
                {...register("courseName", { required: true })}
                name="courseName"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <p className="font-semibold py-2">Image Link *</p>
              <input
                {...register("imageURL", { required: true })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <p className="font-semibold py-2">Instructor Name *</p>
              <input
                {...register("InstructorName", { required: true })}
                value={user.displayName}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <p className="font-semibold py-2">Email *</p>
              <input
                {...register("email", { required: true })}
                value={user.email}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <p className="font-semibold py-2">Available Seat *</p>
              <input
                {...register("availableSeat", { required: true })}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full" required
              />
            </div>
            <div>
              <p className="font-semibold py-2">Price *</p>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <input
                type="submit"
                value={"Add A Class"}
                className="btn w-1/2 mx-auto my-4 btn-warning"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;
