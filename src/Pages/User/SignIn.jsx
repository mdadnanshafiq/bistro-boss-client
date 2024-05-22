import img from "../../assets/others/authentication2.png";
import imgBG from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imgBG})`,
        }}
        className="hero min-h-screen bg-base-200"
      >
        <Helmet>
          <title>Bistro Boss | Sign In</title>
        </Helmet>
        <div
          //   style={{
          //     backgroundImage: `url(${imgBG})`,
          //   }}
          className="hero-content flex-col lg:flex-row shadow-xl p-4"
        >
          <div className="text-center lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm p-6 ">
            <h1 className="text-5xl text-center font-bold">Login!</h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/signup"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Dont Have an Account?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                <label className="input input-bordered h-fit mb-4 py-2">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-xs btn-outline"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className="btn btn-primary bg-[#D1A054B2] hover:bg-[#D1A054B2] border-none text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
