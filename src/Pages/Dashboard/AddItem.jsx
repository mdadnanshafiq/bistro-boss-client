import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Saved!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("With Image", res.data);
  };
  return (
    <div className="w-full lg:px-6">
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"What's new?"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              required
            />
          </label>
          <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
            <div className="w-full">
              <div className="label ">
                <span className="label-text">Category</span>
              </div>

              <select
                defaultValue=""
                required
                className="select select-bordered w-full "
                {...register("category", { required: true })}
              >
                <option disabled value="">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                required
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered "
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
              <textarea
                required
                {...register("recipe", { required: true })}
                placeholder="Recipe Details"
                className="input input-bordered p-4 h-52"
              />
            </label>
          </div>
          <div className="py-4">
            <input
              required
              {...register("image", { required: true })}
              type="file"
              className="file-input  rounded-none w-full max-w-xs "
            />
          </div>
          <button className="flex justify-center items-center gap-1 btn rounded-none text-white bg-amber-600 px-6">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
