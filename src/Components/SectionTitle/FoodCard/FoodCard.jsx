import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { name, image, price, recipe } = item;
  const navigate = useNavigate();
  const handleAddToCart = (food) => {
    // console.log(food, user);
    if (user && user.email) {
    } else {
      Swal.fire({
        title: "You are no signed in!",
        text: "Please Sign In To Add To The Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign In!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      });
    }
  };

  return (
    <div>
      <div
        className="card w-80 bg-base-100 border mx-auto
      "
      >
        <figure className="relative">
          <img src={image} alt="" />
          <p className="absolute top-3 right-5 bg-black text-white rounded p-2">
            ${price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0, 50)}...</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 mt-4 text-center uppercase border-orange-400 bg-slate-100"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
