import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    // console.log(item._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div className="w-full mx-auto bg-base-200 min-h-screen">
      <SectionTitle
        heading={"MANAGE ALL ITEMS"}
        subHeading={"Hurry Up!"}
      ></SectionTitle>
      <div>
        <div className="flex justify-start items-center my-6 ml-4">
          <h2 className="text-3xl">Total Items: {menu.length}</h2>
        </div>
        <div className="overflow-x-auto bg-base-100 m-2">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </td>
                    <td>$ {item.price}</td>
                    <th>
                      <Link
                        to={`/dashboard/updateItem/${item._id}`}
                        className="btn btn-outline btn-circle btn-xs text-amber-500"
                      >
                        <FaEdit />
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="btn btn-outline btn-circle btn-xs text-red-500"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
