import { BsGoogle } from "react-icons/bs";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogle = () => {
    signGoogle()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center w-full mx-auto px-8">
      <button
        onClick={handleGoogle}
        className="btn btn-outline text-red-500 w-full"
      >
        <BsGoogle></BsGoogle>
        Sign With Google
      </button>
    </div>
  );
};

export default SocialLogin;
