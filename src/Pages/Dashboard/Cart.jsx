import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCart from "../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );
  return (
    <div className="w-full mx-auto bg-base-200 min-h-screen">
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subHeading={"My Cart"}
      ></SectionTitle>
      <div>
        <div className="flex justify-around items-center my-6">
          <h2 className="text-3xl">Total Orders: ${cart.length}</h2>
          <h2 className="text-3xl">Total Price: ${totalPrice}</h2>
          <button className="btn btn-accent uppercase">Pay</button>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => {
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
                      <button className="btn btn-ghost btn-xs">
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

export default Cart;
