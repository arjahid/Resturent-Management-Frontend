import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const hanndleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleCaptchaValidation = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("Captcha is not matched");
    }

    console.log(value);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
