import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const {createUser}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    createUser(data.email, data.password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            alert("User Created Successfully");
        })
        .catch((error) => {
            console.error("Error:", error.message); // Improved error logging
        });
};

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

          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;
