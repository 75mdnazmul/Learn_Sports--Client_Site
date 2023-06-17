import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const FeedBack = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;

        const updateFeedback = { feedback: text };
        axiosSecure
            .patch(`/allCourses/${ id }`, updateFeedback)
            .then((response) => {
                if (response.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin FeedBack is updated!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/dashboard/manage-class')
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
  return (
    <>
      <form onSubmit={handleSubmit} className="form-control w-full px-40">
        <label className="label">
          <span className="label-text">Feedback</span>
        </label>
        <textarea
          name="text"
          className="textarea textarea-bordered h-40"
          placeholder="Feedback"
        ></textarea>
        <input        
          type="submit"
          value="Admin FeedBack"
          className="btn w-1/2 btn-primary mt-6"
        />
      </form>
    </>
  );
};

export default FeedBack;
