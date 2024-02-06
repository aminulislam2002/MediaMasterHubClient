import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navOptions = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/all-tools",
      label: "All Tools",
    },
    {
      path: "/about-us",
      label: "About Us",
    },
    {
      path: "/contact-us",
      label: "Contact Us",
    },
  ];

  const handleUserSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `${user.displayName} Logout Successful`,
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: `${user.displayName} Logout Failed`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div>
      <div className="navbar bg-slate-100 dark:bg-slate-900 fixed top-0 z-[1000]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 className="w-5 h-5"></HiMenuAlt1>
            </div>
            <ul
              tabIndex={0}
              className="flex flex-col gap-3 dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 dark:bg-slate-900 rounded-box w-52"
            >
              {navOptions.map((option, index) => (
                <li key={index} className="uppercase font-semibold text-slate-800 dark:text-slate-50">
                  <Link key={index} to={option.path}>
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button className="btn btn-ghost text-2xl font-bold">MediaMaserHub</button>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex justify-center items-center gap-10 px-1">
            {navOptions.map((option, index) => (
              <li key={index} className="uppercase font-semibold text-slate-800 dark:text-slate-50">
                <Link key={index} to={option.path}>
                  {option.label}
                </Link>
              </li>
            ))}

            {user ? (
              <>
                <button
                  onClick={() => handleUserSignOut()}
                  className="uppercase font-semibold text-slate-800 dark:text-slate-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <li className="uppercase font-semibold text-slate-800 dark:text-slate-50">
                  <Link to="/authentication/login">Login / Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
