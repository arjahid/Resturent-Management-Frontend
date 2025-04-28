import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate=useNavigate();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log("Form Data:", data); // Log the form data to the console
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                alert("User Created Successfully");
                updateUserProfile(data.name, data.photourl)
                    .then(() => {
                        console.log("User profile updated successfully");
                        reset();
                        Swal.fire({
                            title: "User created successfully!",
                            icon: "success",
                            draggable: true
                          });
                        navigate("/");
                    })
                    .catch((error) => {
                        console.error("Error updating user profile:", error.message);
                    });
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
    };

    // watch input value by passing the name of it

    return (
   <>
   <Helmet>
        <title>Forest || SignUp</title>
   </Helmet>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  {...register("photourl", { required: true })}
                  className="input"
                  placeholder="Enter your photo URL"
                />
                {errors.photourl && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    message:
                      "Password must contain at least one uppercase letter and one special character",
                  },
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            <input type="submit" className="btn btn-neutral mt-4" value="SignUp" />
              
            </form>
            <p>Already Have an accoutnt?<Link to='/login' className="text-green-700" >Login</Link></p>

          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;
