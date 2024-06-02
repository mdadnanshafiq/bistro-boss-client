import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FiShoppingCart } from "react-icons/fi";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();

  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error.message));
  };
  const navlinks = (
    <>
      <>
        <Link to="/" className="btn">
          Home
        </Link>
      </>
      <>
        <Link to="/menu" className="btn">
          Our Menu
        </Link>
      </>
      {user ? (
        isAdmin ? (
          <>
            <>
              <Link to="/order" className="btn">
                Order Food
              </Link>
            </>
            <>
              <Link to="/dashboard/adminHome" className="btn">
                Dashboard
              </Link>
            </>
          </>
        ) : (
          <>
            <>
              <Link to="/order" className="btn">
                Order Food
              </Link>
            </>
            <>
              <Link to="/dashboard/userHome" className="btn">
                Dashboard
              </Link>
            </>

            <>
              <Link to="/dashboard/cart">
                <button className="btn">
                  <FiShoppingCart />

                  <div className="badge badge-accent">+{cart.length}</div>
                </button>
              </Link>
            </>
          </>
        )
      ) : (
        <>
          {/* <>
            <Link to="/signin" className="btn">
              Sign In
            </Link>
          </> */}
          <>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </>
        </>
      )}
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-black text-white fixed z-10 bg-opacity-50 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 *:m-2">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown  dropdown-end mr-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost hover:bg-base btn-circle avatar "
                >
                  <div
                    className="w-10 rounded-full "
                    // data-tooltip-id="my-tooltip"
                    // data-tooltip-content={user.displayName}
                    // data-tooltip-place="left"
                  >
                    <img alt="" src={user.photoURL} />
                  </div>
                </div>
              </div>
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="btn">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
