import React, { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [success, setSuccess] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);

  const from = location.state?.from?.pathname || "/";

  // ---------------------- login with google --------------------------------//
  const handleGoogleLogIn = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedGoogle = result.user;
        console.log(loggedGoogle);

        const saveUser = {
          name: loggedGoogle.displayName,
          email: loggedGoogle.email,
          photo: loggedGoogle.photoURL,
          role: 'student'
        };
        fetch("https://learn-sports-server-site-75mdnazmul.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
            setSuccess("Google Login is successfully completed")
            setLoggedIn(true)
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Sweet Alert
  useEffect(() => {
    if (loggedIn) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login is successfully completed',
        showConfirmButton: false,
        timer: 3000
      })
    }
  }, [loggedIn]);
  return (
    <div className='text-center'>
      <p className='font-bold text-lg text-[#F7B501] text-center'>{success}</p>
      <button onClick={handleGoogleLogIn} className='p-3 text-white text-5xl mx-auto border-0 flex items-center'><FaGoogle /><span className='text-xl'>oogle</span></button>
    </div>
  );
};

export default SocialLogin;
