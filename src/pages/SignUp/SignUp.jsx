import React from 'react';
import { useForm } from "react-hook-form"

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
      console.log(watch("example")) 
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                <label className="label">Name</label>
                <input type="text" {...register("name")} className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" {...register("email")} className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" {...register("password")} className="input" placeholder="Password" />
                
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;