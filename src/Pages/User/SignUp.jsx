import img from "../../assets/others/authentication2.png";
import imgBG from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imgBG})`,
        }}
        className="hero min-h-screen bg-base-200"
      >
        <div
          //   style={{
          //     backgroundImage: `url(${imgBG})`,
          //   }}
          className="hero-content flex-col lg:flex-row-reverse shadow-xl p-4"
        >
          <div className="text-center lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm p-6 ">
            <h1 className="text-5xl text-center font-bold">Sign Up!</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                    to="/signin"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Already Have an Account?
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#D1A054B2] hover:bg-[#D1A054B2] border-none text-white">
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

export default SignUp;
