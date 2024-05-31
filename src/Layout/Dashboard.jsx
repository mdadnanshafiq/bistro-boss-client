import { CgMenuGridO } from "react-icons/cg";
import { FaBook, FaCalendar, FaList, FaWallet } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

import { IoIosPeople, IoMdHome } from "react-icons/io";
import { IoMailOutline, IoRestaurant } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { BiSolidStar } from "react-icons/bi";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-center">
          {/* Page content here */}
          <div className="flex justify-center items-center w-full mx-auto">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
            {/* Sidebar content here */}
            <div className=" uppercase text-2xl font-bold text-center mb-4">
              Bistro Boss
            </div>
            {isAdmin ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <IoMdHome />
                  Admin Home
                </NavLink>

                <NavLink
                  to="/dashboard/addItem"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <IoRestaurant />
                  Add Items
                </NavLink>
                <NavLink
                  to="/dashboard/manageItems"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <FaList />
                  Manage Items
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <FaBook />
                  Manage Bookings
                </NavLink>
                <NavLink
                  to="/dashboard/users"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <IoIosPeople />
                  All Users
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/dashboard"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <IoMdHome />
                  User Home
                </NavLink>

                <NavLink
                  to="/dashboard"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <FaCalendar />
                  Reservation
                </NavLink>

                <NavLink
                  to="/dashboard/paymentHistory"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <FaWallet />
                  Payment History
                </NavLink>

                <NavLink
                  to="/dashboard/cart"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <IoRestaurant />
                  My Cart ({cart.length})
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <BiSolidStar />
                  Add Review
                </NavLink>

                <NavLink
                  to="/dashboard"
                  className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
                >
                  <FaBook />
                  My Bookings
                </NavLink>
              </>
            )}

            <div className="divider"></div>

            <NavLink
              to="/"
              className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
            >
              <FiHome />
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
            >
              <CgMenuGridO />
              Menu
            </NavLink>
            <NavLink
              to="/order"
              className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
            >
              <MdOutlineShoppingCart />
              Shop
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-lg font-semibold flex justify-start items-center gap-2 uppercase btn btn-ghost"
            >
              <IoMailOutline />
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
