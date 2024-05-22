import img from "../../assets/others/authentication2.png";
import imgBG from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  //   const handleSignUp = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imgBG})`,
        }}
        className="hero min-h-screen bg-base-200"
      >
        <Helmet>
          <title>Bistro Boss | Sign Up</title>
        </Helmet>
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  //   required
                />
                {errors.name && (
                  <span className="text-red-500 pt-2">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  //   required
                />
                {errors.email && (
                  <span className="text-red-500 pt-2">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  //   required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500 pt-2">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 pt-2">Minimum Length 6</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 pt-2">Maximum Length 20</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 pt-2">
                    Password must have an uppercase letter, a lowercase letter
                    and have a number
                  </span>
                )}
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
                <input
                  type="submit"
                  value={"Sign Up"}
                  //   onClick={() => reset()}
                  className="btn btn-primary bg-[#D1A054B2] hover:bg-[#D1A054B2] border-none text-white"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
