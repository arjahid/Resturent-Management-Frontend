import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";




const Login = () => {
  const [disabled, setDisabled] = useState(true);
  
  const captchaRef = useRef(null);
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';

  const {signIn}=useContext(AuthContext)
 
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const hanndleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "User Login Successfully!",
          icon: "success",
          draggable: true
        });
        navigate(from, {replace:true})
      })
      .catch((error) => {
        console.log(error.message);
      });
    form.reset();
  };
  const handleCaptchaValidation = (e) => {
    e.preventDefault();
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
      alert("Captcha matched! You can now click Login.");
    } else {
      setDisabled(true);
      alert("Captcha is not matched");
    }
  };
  return (
    
   <>
    <Helmet>
            <title>Forest || Login</title>
       </Helmet>
    <div className="hero bg-base-200 min-h-screen"> 
      <div>
        <img src="" alt="" />
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold pl-4">Login now!</h1>
        
        </div>
          <div className="card-body">
            <form onSubmit={hanndleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <label className="label">Captch</label>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  className="input"
                  placeholder="Type the captcha above"
                />
                <button
                  onClick={handleCaptchaValidation}
                  className="btn btn-outline btn-xs mt-2"
                >
                  validate
                </button>
              </div>
              <input
              
                disabled={disabled}
                className="btn btn-neutral"
                type="submit"
                value="Login"
              />
            </form>
            <p><small>New Here?<Link to='/signup' className="text-green-600"> create an accoutn</Link></small></p>
          </div>
         <SocialLogin></SocialLogin>
        </div>
      </div>
     
    </div>
   </>
  );
};

export default Login;
