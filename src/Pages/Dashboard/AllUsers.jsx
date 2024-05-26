import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="w-full mx-auto bg-base-200 min-h-screen">
      <SectionTitle
        heading={"MANAGE ALL USERS"}
        subHeading={"All Users"}
      ></SectionTitle>
      <div>
        <div className="flex justify-start items-center my-6">
          <h2 className="text-3xl p-6 font-bold">
            Total Users: {users.length}
          </h2>
        </div>
        <div className="overflow-x-auto bg-base-100 m-2">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th className="text-center">Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="">{item.name}</div>
                    </td>
                    <td>
                      <div>
                        <div className="">{item.email}</div>
                      </div>
                    </td>
                    <td className="flex justify-center items-center">
                      {item.role === "admin" ? (
                        <GrUserAdmin></GrUserAdmin>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(item)}
                          className="btn btn-outline text-amber-500 "
                        >
                          <FaUsers></FaUsers>
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-outline btn-circle btn-xs text-red-500"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
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

export default AllUsers;
